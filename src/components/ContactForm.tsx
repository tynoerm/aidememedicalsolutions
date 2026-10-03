"use client";

import { useState, FormEvent } from "react";

type FormState = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  organizationType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  organizationType: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<FormState>
  >({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState) {
    const next: Partial<FormState> = {};

    if (!values.name.trim()) {
      next.name = "Please enter your name.";
    }

    if (!values.organization.trim()) {
      next.organization = "Please enter your organisation.";
    }

    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }

    if (!values.organizationType) {
      next.organizationType = "Please select your organisation type.";
    }

    return next;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const next = validate(form);

    setErrors(next);

    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  }

  return (
    <section id="contact" className="bg-ink-900 py-24">
      <div className="container-x">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
              Get Started
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Let's build a smarter healthcare ecosystem
            </h2>

            <p className="mt-4 max-w-md text-white/70">
              Talk to Aidme Medical Solutions about connecting your
              healthcare organisation to our integrated digital platform.
            </p>

            <ul className="mt-10 space-y-4 text-sm text-white/70">

              <li className="flex gap-3">
                <span className="text-brand-400">●</span>
                Healthcare provider management
              </li>

              <li className="flex gap-3">
                <span className="text-brand-400">●</span>
                Medical aid funder administration
              </li>

              <li className="flex gap-3">
                <span className="text-brand-400">●</span>
                Patient self-service and communication
              </li>

              <li className="flex gap-3">
                <span className="text-brand-400">●</span>
                Claims, debt and revenue monitoring
              </li>

            </ul>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-sm text-white/50">
                Call / WhatsApp
              </p>

              <p className="mt-1 text-lg font-semibold text-white">
                +263 78 738 9519
              </p>

              <p className="mt-4 text-sm text-white/50">
                Email
              </p>

              <p className="mt-1 text-sm text-white">
                kingtrevor333@gmail.com
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-2xl bg-white p-8 shadow-2xl">

            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-2xl">
                  ✓
                </div>

                <h3 className="mt-4 text-lg font-semibold text-ink-900">
                  Thanks — your enquiry has been received
                </h3>

                <p className="mt-2 max-w-xs text-sm text-ink-700/70">
                  Our team will review your enquiry and get in touch with you.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-brand-600 hover:underline"
                >
                  Submit another enquiry
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >

                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium text-ink-900">
                    Full name
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-ink-900/15 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="Your full name"
                  />

                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* ORGANISATION */}
                <div>
                  <label className="block text-sm font-medium text-ink-900">
                    Organisation
                  </label>

                  <input
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-ink-900/15 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="Organisation name"
                  />

                  {errors.organization && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.organization}
                    </p>
                  )}
                </div>

                {/* TYPE */}
                <div>
                  <label className="block text-sm font-medium text-ink-900">
                    Organisation type
                  </label>

                  <select
                    name="organizationType"
                    value={form.organizationType}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-ink-900/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                  >
                    <option value="">
                      Select organisation type
                    </option>

                    <option value="hospital">
                      Hospital
                    </option>

                    <option value="clinic">
                      Clinic
                    </option>

                    <option value="pharmacy">
                      Pharmacy
                    </option>

                    <option value="laboratory">
                      Diagnostic Laboratory
                    </option>

                    <option value="medical-aid">
                      Medical Aid / Health Insurance
                    </option>

                    <option value="corporate-health">
                      Corporate Health Scheme
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>

                  {errors.organizationType && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.organizationType}
                    </p>
                  )}
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="block text-sm font-medium text-ink-900">
                      Email
                    </label>

                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-lg border border-ink-900/15 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                      placeholder="you@organisation.com"
                    />

                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink-900">
                      Phone / WhatsApp
                    </label>

                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-lg border border-ink-900/15 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                      placeholder="+263..."
                    />
                  </div>

                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-medium text-ink-900">
                    How can Aidme help?
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1.5 w-full rounded-lg border border-ink-900/15 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    placeholder="Tell us about your healthcare administration needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Request a Demo
                </button>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}