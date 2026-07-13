"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const web3FormsEndpoint = "https://api.web3forms.com/submit";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", accessKey);

    setStatus("submitting");

    try {
      const response = await fetch(web3FormsEndpoint, {
        method: "POST",
        body: formData
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error("Web3Forms submission failed.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="card-surface p-7"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold">Name</span>
          <input
            className="mt-2 w-full rounded-2xl border-gray-200 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-accent-500 focus:ring-accent-500 dark:border-white/10 dark:bg-white/[0.06]"
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Email</span>
          <input
            className="mt-2 w-full rounded-2xl border-gray-200 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-accent-500 focus:ring-accent-500 dark:border-white/10 dark:bg-white/[0.06]"
            name="email"
            placeholder="Your email address"
            required
            type="email"
          />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-semibold">Subject</span>
        <input
          className="mt-2 w-full rounded-2xl border-gray-200 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-accent-500 focus:ring-accent-500 dark:border-white/10 dark:bg-white/[0.06]"
          name="subject"
          placeholder="Interview opportunity"
          required
          type="text"
        />
      </label>
      <label className="mt-5 block">
        <span className="text-sm font-semibold">Message</span>
        <textarea
          className="mt-2 min-h-36 w-full rounded-2xl border-gray-200 bg-white/80 px-4 py-3 text-sm shadow-sm focus:border-accent-500 focus:ring-accent-500 dark:border-white/10 dark:bg-white/[0.06]"
          name="message"
          placeholder="Tell me about the role or project."
          required
        />
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="text-sm text-gray-500 dark:text-gray-400">
          {status === "success" ? "Message sent successfully. Thank you for reaching out." : ""}
          {status === "error" ? "Something went wrong. Please try again or email me directly." : ""}
        </p>
        <button
          className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-400"
          disabled={status === "submitting"}
          type="submit"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
