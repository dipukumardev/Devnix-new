import { NextResponse } from "next/server";

export const runtime = "nodejs";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, service, message } = body as Record<string, unknown>;
  const nameStr = str(name);
  const emailStr = str(email);
  const messageStr = str(message);
  const serviceStr = str(service);

  if (!nameStr || !emailStr || !messageStr) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();

  if (!accessKey) {
    if (process.env.NODE_ENV === "development") {
      console.info(
        "[api/contact] WEB3FORMS_ACCESS_KEY missing — simulating success. Get a free key at https://web3forms.com and add to .env.local"
      );
      console.info("[api/contact] submission:", {
        name: nameStr,
        email: emailStr,
        service: serviceStr || "(none)",
        message: messageStr.slice(0, 200),
      });
      return NextResponse.json({
        success: true,
        simulated: true,
        hint: "Add WEB3FORMS_ACCESS_KEY to .env.local (free at web3forms.com).",
      });
    }

    return NextResponse.json(
      {
        error:
          "Contact form is not configured. Set WEB3FORMS_ACCESS_KEY on the server.",
        code: "WEB3FORMS_NOT_CONFIGURED",
      },
      { status: 503 }
    );
  }

  const lines = [
    `Name: ${nameStr}`,
    `Email: ${emailStr}`,
    `Service: ${serviceStr || "Not specified"}`,
    "",
    "Message:",
    messageStr,
  ];

  try {
    const res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Devnix contact: ${nameStr}`,
        name: nameStr,
        email: emailStr,
        message: lines.join("\n"),
        service: serviceStr || "Not specified",
      }),
    });

    const data = (await res.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
    };

    if (!res.ok || data.success === false) {
      const msg =
        typeof data.message === "string"
          ? data.message
          : `Web3Forms error (${res.status})`;
      console.error("[api/contact] Web3Forms:", msg, data);
      return NextResponse.json(
        {
          error: "Could not send message. Check WEB3FORMS_ACCESS_KEY.",
          details:
            process.env.NODE_ENV === "development" ? msg : undefined,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/contact] fetch error:", error);
    const msg = error instanceof Error ? error.message : "Network error";
    return NextResponse.json(
      {
        error: "Could not reach email service. Try again later.",
        details: process.env.NODE_ENV === "development" ? msg : undefined,
      },
      { status: 502 }
    );
  }
}
