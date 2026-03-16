import { NextRequest } from "next/server";

export const runtime = "nodejs";

const LEAD_WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL;

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; phone?: string; message?: string; source?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const source = typeof body.source === "string" ? body.source : "chat_widget";

  if (!email && !phone) {
    return new Response(
      JSON.stringify({ error: "At least one of email or phone is required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const payload = {
    name: name || undefined,
    email: email || undefined,
    phone: phone || undefined,
    message: message || undefined,
    source,
    timestamp: new Date().toISOString(),
  };

  if (LEAD_WEBHOOK_URL) {
    try {
      const res = await fetch(LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return new Response(
          JSON.stringify({ error: "Webhook failed", status: res.status }),
          { status: 502, headers: { "Content-Type": "application/json" } }
        );
      }
    } catch {
      return new Response(
        JSON.stringify({ error: "Webhook request failed" }),
        { status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
