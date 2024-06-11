// import { NextResponse } from "next/server";
// import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

import { NextResponse } from "next/server";

// const mailerSend = new MailerSend({
//   apiKey: process.env.MAILER_API_KEY || "",
// });

// const sentFrom = new Sender(
//   "cliffordaustin670@gmail.com",
//   "Ebitie's Birthday Trip"
// );

// const recipients = [new Recipient("cliffordaustin2018@gmail.com", "Clifford")];

// export async function POST(request: Request) {
//   const emailParams = new EmailParams()
//     .setFrom(sentFrom)
//     .setTo(recipients)
//     .setReplyTo(sentFrom)
//     .setSubject("This is a Subject")
//     .setHtml("<strong>This is the HTML content</strong>")
//     .setText("This is the text content");

//   try {
//     await mailerSend.email.send(emailParams);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

const Mailjet = require("node-mailjet");
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

export async function POST(request: Request) {
  try {
    const mail = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "cliffordaustin670@gmail.com",
            Name: "Clifford",
          },
          To: [
            {
              Email: "cliffordaustin2018@gmail.com",
              Name: "passenger 1",
            },
          ],
          TemplateID: 6029281,
          TemplateLanguage: true,
          Subject: "Payment Method",
          Variables: {
            email: "",
            paymentOption: "",
          },
        },
      ],
    });

    console.log("mail", mail.body);

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
