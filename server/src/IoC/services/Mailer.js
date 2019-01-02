import { createTransport } from "nodemailer";

const { smtp, meta } = require("../../config/mail");

export default class Mailer {
  fromName = meta.fromName;

  fromEmail = meta.fromEmail;

  subj = meta.subject;

  receivers = [];

  content = "";

  testConnection() {
    return new Promise((resolve, reject) => {
      this.trans.verify((err, success) => {
        if (err) reject(err);
        else resolve(success);
      });
    });
  }

  constructor(opts) {
    this.email = opts.email;
    this.setTransport(createTransport(smtp));
  }

  setTransport(trans) {
    this.trans = trans;
  }

  from(name, email) {
    this.fromName = name;
    this.fromEmail = email;
    return this;
  }

  to(receivers) {
    this.receivers = Array.isArray(receivers) ? receivers : [receivers];
    return this;
  }

  subject(subj) {
    this.subj = subj;
    return this;
  }

  async send(...args) {
    this.content = await this.email.renderAll(...args);
    return new Promise((resolve, reject) => {
      this.trans.sendMail(this.buildMailOptions(), (err, info) => {
        if (err) reject(err);
        else resolve(info);
      });
    });
  }

  buildMailOptions = () => ({
    from: `"${this.fromName}" <${this.fromEmail}>`, // sender address
    to: this.receivers.join(), // list of receivers
    subject: this.content.subject || this.subj, // Subject line
    text: this.content.text, // plain text body
    html: this.content.html // html body
  });
}
