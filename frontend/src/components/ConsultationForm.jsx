import { useState } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { SERVICE_OPTIONS, TIMELINE_OPTIONS, BOROUGHS } from "@/data/content";
import { ArrowRight, Loader2 } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/mqeoolvz";

const inputClass =
  "w-full bg-transparent border-b border-[#262626] rounded-none px-0 py-4 text-[#F2F0E6] placeholder:text-[#737373] focus:border-[#C5A059] focus:outline-none transition-colors font-sans";
const labelClass =
  "text-xs uppercase tracking-[0.2em] text-[#A3A095] mb-2 font-sans block";

export const ConsultationForm = ({ defaultBorough = "" }) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    borough: defaultBorough,
    service: "",
    timeline: "",
    message: "",
  });

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please provide your name and email.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: `New consultation enquiry — ${form.name}`,
          _replyto: form.email,
          email: form.email,
          ...form,
          serviceLabel:
            SERVICE_OPTIONS.find((s) => s.value === form.service)?.label || "",
          timelineLabel:
            TIMELINE_OPTIONS.find((t) => t.value === form.timeline)?.label ||
            "",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        toast.success("Thank you. We'll be in touch within one business day.");
        setForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          borough: defaultBorough,
          service: "",
          timeline: "",
          message: "",
        });
      } else {
        const j = await res.json().catch(() => ({}));
        toast.error(
          j?.errors?.[0]?.message ||
            "Something went wrong. Please email us directly."
        );
      }
    } catch {
      toast.error("Network error. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="bg-[#141414] border border-[#C5A059]/30 p-12 text-center"
        data-testid="consultation-success"
      >
        <p className="text-overline mb-4">Received</p>
        <h3 className="font-serif text-3xl md:text-4xl text-[#F2F0E6] mb-4 tracking-tight">
          Thank you.
        </h3>
        <p className="font-sans text-[#A3A095] leading-relaxed max-w-md mx-auto">
          Your enquiry has been received. A member of the Medici team will be in
          touch within one business day to arrange your complimentary
          consultation.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-[#C5A059] font-sans text-xs uppercase tracking-[0.2em] underline underline-offset-4 hover:text-[#A88B4B] transition-colors"
          data-testid="consultation-submit-another"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
      data-testid="consultation-form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            className={inputClass}
            data-testid="form-name-input"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="your@email.com"
            className={inputClass}
            data-testid="form-email-input"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+44 ..."
            className={inputClass}
            data-testid="form-phone-input"
          />
        </div>
        <div>
          <label htmlFor="borough" className={labelClass}>
            Area
          </label>
          <Select
            value={form.borough}
            onValueChange={(v) => update("borough", v)}
          >
            <SelectTrigger
              id="borough"
              className="bg-transparent border-0 border-b border-[#262626] rounded-none px-0 py-4 h-auto text-[#F2F0E6] focus:border-[#C5A059] focus:ring-0 font-sans"
              data-testid="form-borough-select"
            >
              <SelectValue placeholder="Select an area" />
            </SelectTrigger>
            <SelectContent className="bg-[#141414] border border-[#262626] text-[#F2F0E6]">
              {BOROUGHS.map((b) => (
                <SelectItem
                  key={b.slug}
                  value={b.name}
                  className="focus:bg-[#C5A059]/10 focus:text-[#C5A059]"
                >
                  {b.name}, {b.region}
                </SelectItem>
              ))}
              <SelectItem
                value="Other"
                className="focus:bg-[#C5A059]/10 focus:text-[#C5A059]"
              >
                Other (please specify in message)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="address" className={labelClass}>
          Property Address
        </label>
        <input
          id="address"
          type="text"
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
          placeholder="Full address of the property needing renovation"
          className={inputClass}
          data-testid="form-address-input"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="service" className={labelClass}>
            Type of Renovation
          </label>
          <Select
            value={form.service}
            onValueChange={(v) => update("service", v)}
          >
            <SelectTrigger
              id="service"
              className="bg-transparent border-0 border-b border-[#262626] rounded-none px-0 py-4 h-auto text-[#F2F0E6] focus:border-[#C5A059] focus:ring-0 font-sans"
              data-testid="form-service-select"
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-[#141414] border border-[#262626] text-[#F2F0E6]">
              {SERVICE_OPTIONS.map((s) => (
                <SelectItem
                  key={s.value}
                  value={s.value}
                  className="focus:bg-[#C5A059]/10 focus:text-[#C5A059]"
                >
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline
          </label>
          <Select
            value={form.timeline}
            onValueChange={(v) => update("timeline", v)}
          >
            <SelectTrigger
              id="timeline"
              className="bg-transparent border-0 border-b border-[#262626] rounded-none px-0 py-4 h-auto text-[#F2F0E6] focus:border-[#C5A059] focus:ring-0 font-sans"
              data-testid="form-timeline-select"
            >
              <SelectValue placeholder="Select a timeline" />
            </SelectTrigger>
            <SelectContent className="bg-[#141414] border border-[#262626] text-[#F2F0E6]">
              {TIMELINE_OPTIONS.map((t) => (
                <SelectItem
                  key={t.value}
                  value={t.value}
                  className="focus:bg-[#C5A059]/10 focus:text-[#C5A059]"
                >
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell Us About the Property
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Property type, current condition, goals, budget range..."
          className={`${inputClass} resize-none`}
          data-testid="form-message-input"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center justify-center bg-[#C5A059] text-[#0C0C0C] hover:bg-[#A88B4B] px-10 py-5 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed rounded-sm"
        data-testid="form-submit-button"
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="mr-3 animate-spin" />
            Sending
          </>
        ) : (
          <>
            Request Consultation
            <ArrowRight
              size={16}
              className="ml-3 transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      <p className="text-xs text-[#737373] font-sans">
        By submitting this form you agree to be contacted by Medici Living
        regarding your enquiry. We respect your privacy.
      </p>
    </form>
  );
};
