import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const slackWebhook =
    "https://hooks.slack.com/services/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";
  const slackMessageBlock = [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Payment Info*`,
      },
    },

    {
      type: "divider",
    },

    {
      type: "section",
      text: { type: "mrkdwn", text: `${body.name}` },
    },

    {
      type: "section",
      text: { type: "mrkdwn", text: `${body.email}` },
    },

    {
      type: "divider",
    },

    {
      type: "section",
      text: { type: "mrkdwn", text: `Payment Method: ${body.paymentMethod}` },
    },
  ];

  const slackMessage = {
    text: "Payment Info",
    blocks: slackMessageBlock,
  };

  await fetch(slackWebhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(slackMessage),
  });

  return NextResponse.json({ success: true });
}
