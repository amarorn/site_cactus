"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  role: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10),
  honeypot: z.string().max(0),
});

export async function sendContactForm(data: z.infer<typeof schema>) {
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: "Dados inválidos" };
  }

  if (parsed.data.honeypot) {
    return { success: false, error: "spam" };
  }

  // TODO: integrar com serviço de e-mail (Resend, SendGrid, etc.)
  // Por ora, stub que simula sucesso
  return { success: true };
}
