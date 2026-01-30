import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const payload = await request.json();
  const email = String(payload?.email ?? "");
  const type = String(payload?.type ?? "contact");

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  // Placeholder for CRM integration (HubSpot/Mailchimp).
  // Store payload in a database or forward to a CRM webhook here.
  console.info("Lead received", {
    type,
    email,
    locale: payload?.locale,
    name: payload?.name,
    phone: payload?.phone,
    organization: payload?.organization,
  });

  if (type === "download") {
    return NextResponse.json({
      success: true,
      downloadUrl: "/documents/presentation-hydrocontrol.pdf",
    });
  }

  return NextResponse.json({ success: true });
}
