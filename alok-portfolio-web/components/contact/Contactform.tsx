"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

import contactService from "@/services/contact.service";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await contactService.sendMessage(data);
      toast.success("Message sent — I'll get back to you soon.");
      reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40">
      {/* terminal chrome */}
      <div className="flex items-center gap-1.5 border-b border-slate-800 bg-slate-950/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 font-mono text-[11px] text-slate-500">
          POST /api/contactmessages
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-slate-500">
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Jane Doe"
              className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30"
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-slate-500">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="jane@company.com"
              className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30"
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-slate-500">
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            placeholder="Let's work together"
            className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30"
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-slate-500">
            Message
          </label>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full resize-none rounded-lg border border-slate-800 bg-slate-950/60 px-3.5 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30"
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors duration-300 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send message"}
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
