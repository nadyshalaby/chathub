import Email from "email-templates";
import path from "path";

const email = new Email({
  views: {
    root: path.join(__dirname, "../../emails"),
    options: {
      extension: "ejs" // Custom template engine for emails
    }
  }
});

export default () => email;
