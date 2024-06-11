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
        text: `*Contact Form*`,
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
      text: { type: "mrkdwn", text: `${body.message}` },
    },
  ];

  const slackMessage = {
    text: "Contact Form",
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
