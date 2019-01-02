import { randomBytes } from "crypto";
import moment from "moment";
import { Token } from "../../models";

/**
 * Send canned emails for users e.g. Password Resets, Email Confirmations, ...etc.
 */
export default class CannedMailer {
  constructor(opts) {
    this.mailer = opts.mailer;
  }

  /**
   * Send confirmation email for specific user
   * @param {User} user
   * @returns {Promise}
   */
  sendEmailConfirmation = user =>
    this.sendTokenEmail(user, "email-confirmation");

  /**
   * Send reset password email for specific user
   * @param {User} user
   * @returns {Promise}
   */
  sendResetPassword = user => this.sendTokenEmail(user, "reset-password");

  /**
   * Helper method to build the token canned emails
   * @param {User} user
   * @param {string} tokenType
   * @returns {Promise}
   */
  async sendTokenEmail(user, tokenType) {
    const { id, email } = user.get({ plain: true });

    // create new token that's available for only 24 hours
    const token = await Token.create({
      user_id: id,
      token_type: tokenType,
      token_txt: randomBytes(64).toString("hex"),
      expiry: moment()
        .add(1, "days")
        .toDate()
    });

    // send generated token to the user email
    return this.mailer.to(email).send(tokenType, {
      targetUrl: `${process.env.APP_URL}/auth/${tokenType}/user/${id}/token/${
        token.token_txt
      }`
    });
  }
}
