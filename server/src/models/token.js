module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define("Token", {
    user_id: DataTypes.INTEGER,
    token_txt: DataTypes.STRING,
    token_type: DataTypes.ENUM("reset-password", "email-confirmation"),
    expiry: DataTypes.DATE
  });
  return Token;
};
