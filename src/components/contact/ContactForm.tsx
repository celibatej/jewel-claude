"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Accessible contact form.
 *
 * 🔧 BACKEND: By default this opens the visitor's email client (mailto) so it
 *    works with zero setup. To collect submissions automatically, replace the
 *    handleSubmit body with a POST to a form service such as Formspree, Resend,
 *    or your own /api route, and set NEXT_PUBLIC_FORM_ENDPOINT.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    // No backend configured → fall back to the user's email client.
    if (!endpoint) {
      const subject = encodeURIComponent(`Website enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
      return;
    }

    try {
      setStatus("submitting");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-3xl border border-border bg-card p-8">
        <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
        <h3 className="text-lg font-semibold tracking-tight">Thank you</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Your message is on its way. I will get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="h-11 rounded-xl border border-border bg-background px-4 text-sm transition-colors focus-visible:border-accent"
            placeholder="Your name"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-11 rounded-xl border border-border bg-background px-4 text-sm transition-colors focus-visible:border-accent"
            placeholder="you@company.com"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus-visible:border-accent"
            placeholder="Tell me a little about the role or project…"
          />
        </div>

        {status === "error" && (
          <p role="alert" className="text-sm text-red-500">
            Something went wrong. Please email me directly at {siteConfig.email}.
          </p>
        )}

        <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? (
            <>
              <Loader2 className="h-[18px] w-[18px] animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-[18px] w-[18px]" aria-hidden="true" />
              Send message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
