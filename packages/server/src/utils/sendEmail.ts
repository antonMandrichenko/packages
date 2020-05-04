import * as nodemailer from "nodemailer";

export const sendEmail = async (recipient: string, url: string) => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass 
    },
  });

  const info = await transporter.sendMail({
    from: '"Anton 👻" <lost@example.com>',
    to: recipient,
    subject: "Confirm email ✔",
    html: `<html>
    <body>
    <p>Testing SparkPost - the world's most awesomest email service!</p>
    <a href="${url}">confirm email</a>
    </body>
    </html>`,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
