import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();
    if (!amount) {
      return NextResponse.json(
        { error: "Payment Amount is required" },
        { status: 400 }
      );
    }
    const newPayment = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return NextResponse.json({ client_secret: newPayment.client_secret });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}