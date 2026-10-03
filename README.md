# Meridian RCM — AR Follow-Up Marketing Site

An original Next.js (App Router + TypeScript + Tailwind CSS) marketing site
for a medical billing / accounts-receivable follow-up service, built in the
same general spirit as an AR follow-up service page: hero, services grid,
process steps, results/stats, testimonials, and a validated lead-capture
contact form.

> Note: This is an original design and original copy for a fictional
> company ("Meridian RCM"), inspired by the general concept of an AR
> follow-up service page. It intentionally does not reuse any text, images,
> or branding from any specific company's website.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `src/app/layout.tsx` — root layout + metadata
- `src/app/page.tsx` — assembles the page from components
- `src/components/Navbar.tsx` — sticky nav with mobile menu
- `src/components/Hero.tsx` — hero section with AR aging snapshot widget
- `src/components/Services.tsx` — services grid
- `src/components/Process.tsx` — 4-step follow-up process
- `src/components/Results.tsx` — stats band
- `src/components/Testimonials.tsx` — client feedback cards (illustrative)
- `src/components/ContactForm.tsx` — client-side validated lead form
- `src/components/Footer.tsx` — footer

## Customizing

- Colors/theme: `tailwind.config.ts` (`brand` and `ink` palettes)
- Copy: edit the arrays at the top of each component file
- Form submission: `ContactForm.tsx` currently just validates and shows a
  success state client-side — wire `handleSubmit` up to an API route or
  email service to actually send the lead.
