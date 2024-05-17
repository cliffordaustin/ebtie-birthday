// pages/api/send-whatsapp.js
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = "ACf63ee1b4d90d0230dd498cc2e66cae8b";
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function POST(request: Request) {
  const { to, message } = await request.json();

  try {
    const response = await client.messages.create({
      body: message,
      from: "whatsapp:+14155238886",
      to: `whatsapp:${to}`,
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
