"use client";

import { useState } from "react";
import { SubmitButton } from "@/components/primitives/Button";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SITE } from "@/content/site";

const FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", required: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "org", label: "Organisation", type: "text", autoComplete: "organization", required: false },
] as const;

const inputCls =
  "w-full rounded-[6px] border border-hairline bg-surface px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-3 transition-colors duration-150 hover:border-hairline-bright focus:border-hairline-bright";

type State = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setMessage("");

    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setState("sent");
    } catch (err) {
      setState("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (state === "sent") {
    return (
      <div
        role="status"
        className="rounded-[10px] border border-hairline bg-surface p-8"
      >
        <MonoLabel as="p" className="mb-4 flex items-center gap-2.5">
          <span className="size-[5px] rounded-full bg-accent" />
          Received
        </MonoLabel>
        <p className="t-body max-w-[46ch]">
          Thank you. We read everything that comes through here and reply to what
          we can take on, usually within a few days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7" noValidate={false}>
      {FIELDS.map((f) => (
        <div key={f.name}>
          <label htmlFor={f.name} className="t-mono-label mb-2.5 block">
            {f.label}
            {!f.required ? (
              <span className="ml-2 text-ink-3 lowercase">optional</span>
            ) : null}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type}
            autoComplete={f.autoComplete}
            required={f.required}
            disabled={state === "sending"}
            className={inputCls}
          />
        </div>
      ))}

      <div>
        <label htmlFor="brief" className="t-mono-label mb-2.5 block">
          What are you building?
        </label>
        <textarea
          id="brief"
          name="brief"
          rows={6}
          required
          disabled={state === "sending"}
          placeholder="The problem, the industry, and what happens today without software."
          className={`${inputCls} resize-y leading-relaxed`}
        />
      </div>

      {/* Honeypot — hidden from people, catches naive bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="company-website">Leave this empty</label>
        <input id="company-website" name="company-website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <SubmitButton disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send"}
        </SubmitButton>
        <MonoLabel className="normal-case">
          or{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-ink-2 underline underline-offset-2 transition-colors hover:text-ink"
          >
            {SITE.email}
          </a>
        </MonoLabel>
      </div>

      {state === "error" ? (
        <p role="alert" className="t-mono text-accent">
          {message} You can also email {SITE.email} directly.
        </p>
      ) : null}
    </form>
  );
}
