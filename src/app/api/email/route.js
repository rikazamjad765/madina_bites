import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const order = await req.json();
    console.log("🔍 Received Order:", order);

    const email = await resend.emails.send({
      from: "Restaurant Orders <onboarding@resend.dev>", // default sender for testing
      to: "rikazamjad@gmail.com", // 👈 replace with restaurant owner email
      subject: "🍽️ New Order Received",
      html: `
        <h2>New Order</h2>
        <p><strong>Name:</strong> ${order.customer.name}</p>
        <p><strong>Phone:</strong> ${order.customer.phone}</p>
        <p><strong>Email:</strong> ${order.customer.email || "N/A"}</p>
        <p><strong>Address:</strong> ${order.customer.address}, ${order.customer.address}</p>
        <p><strong>city:</strong> ${order.customer.city}, ${order.customer.country}</p>
        <p><strong>special instructions:</strong> ${order.customer.instructions}</p>
        <h3>Items:</h3>
        <ul>
          ${order.items
            .map(
              (item) =>
                `<li>${item.quantity} × ${item.size || "Default"} - ${item.name}</li>`
            )
            .join("")}
        </ul>
      `,
    });

    return new Response(JSON.stringify({ success: true, email }), {
      status: 200,
    });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
