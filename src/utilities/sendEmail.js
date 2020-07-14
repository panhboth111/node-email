const nodemailer = require("nodemailer");

module.exports = (message) => {
  return new Promise(async (resolve, reject) => {
    //creating a transporter for sending email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 2525,
      auth: {
        user: "shelbytom119@gmail.com",
        pass: "cambodia168",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    //use the transporter to send the content passed as argument
    transporter.sendMail(message, (err, info) => {
      return resolve(err ? err : info);
    });
  });
};
