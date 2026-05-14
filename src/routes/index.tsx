import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Camera, FileBarChart2, Wheat, Cpu, ShieldCheck, Activity, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import heroImg from "@/assets/hero.png";
import gemmaImg from "@/assets/gemma.webp";
import avatar from "@/assets/bourgelat-avatar.png";
import s1 from "@/assets/step-1-open.jpg";
import s2 from "@/assets/step-2-modes.jpg";
import s3 from "@/assets/step-3-upload.jpg";
import s4 from "@/assets/step-4-report.jpg";
import s5 from "@/assets/step-5-feed.jpg";
import s6 from "@/assets/step-6-ration.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const STEPS = [
  { img: s1, title: "Open Bourgelat", caption: "Launch the assistant. A calm, focused interface greets you — no clutter, ready to listen." },
  { img: s2, title: "Choose your mode", caption: "Single Animal for one cow at a time, or Herd Scan for a walkthrough assessment." },
  { img: s3, title: "Upload a video of the cattle", caption: "Send a short clip with the animal ID. Bourgelat scores body condition in seconds." },
  { img: s4, title: "Share or download the report", caption: "Get a triage report — fever risk, BCS, clinical observations, treatment guidance." },
  { img: s5, title: "Get a custom feed ration", caption: "Tell Bourgelat what feeds you have on hand. It formulates a balanced ration for your animal." },
  { img: s6, title: "Download the feed ration", caption: "A daily ration with amounts and costs — ready to print, share, or take to the field." },
];

function Fog() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="fog-blob fog-1 animate-drift" style={{ width: 520, height: 520, top: -120, left: -120 }} />
      <div className="fog-blob fog-2 animate-drift-slow" style={{ width: 600, height: 600, top: 200, right: -180 }} />
      <div className="fog-blob fog-3 animate-drift" style={{ width: 480, height: 480, top: 700, left: "30%" }} />
      <div className="fog-blob fog-4 animate-drift-slow" style={{ width: 420, height: 420, top: 1200, left: -100 }} />
      <div className="fog-blob fog-1 animate-drift" style={{ width: 500, height: 500, top: 1700, right: -120, opacity: 0.5 }} />
      <div className="fog-blob fog-2 animate-drift-slow" style={{ width: 460, height: 460, top: 2300, left: "40%", opacity: 0.5 }} />
      <div className="fog-blob fog-3 animate-drift" style={{ width: 520, height: 520, top: 3000, right: -150 }} />
    </div>
  );
}

function Nav() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <img src={avatar} alt="Bourgelat" className="h-9 w-9 rounded-full ring-1 ring-primary/40" />
          <span className="font-display text-xl tracking-tight">Bourgelat</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#capabilities" className="hover:text-foreground transition">Capabilities</a>
          <a href="#infra" className="hover:text-foreground transition">Infrastructure</a>
          <a href="#demo" className="hover:text-foreground transition">Demo</a>
        </nav>
        <a
          href="#demo"
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
        >
          See it in action <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pt-16">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
            <Sparkles className="h-3.5 w-3.5" /> AI Veterinary Intelligence
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-gradient">Bourgelat</span>
            <span className="block text-foreground/90">an AI vet for every cattle herd.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Bourgelat assists cattle breeders with routine health checks from a short video,
            flags disease at inception, and formulates feed rations for maintenance,
            rehabilitation and fattening — all from a phone in the field.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Watch the demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-3 text-sm font-medium text-foreground/90 transition hover:bg-card"
            >
              How it works
            </a>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
            Currently optimized for cattle · Decision support only
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40">
            <img src={heroImg} alt="Portrait of Claude Bourgelat rendered in green pixels on a black canvas" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    { icon: Camera, title: "Visual diagnosis", body: "Send a short video. Bourgelat scores body condition and surfaces visible symptoms." },
    { icon: ShieldCheck, title: "Early disease flagging", body: "Catches disease at inception so breeders can act before it spreads through the herd." },
    { icon: Wheat, title: "Custom feed rations", body: "Formulates daily rations from feeds you actually have — for maintenance, rehab or fattening." },
    { icon: Activity, title: "Field-ready triage", body: "Triage reports with fever risk, BCS, observations and clear treatment guidance." },
  ];
  return (
    <section id="capabilities" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-primary/80">What it does</p>
        <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">A pocket veterinarian for cattle breeders.</h2>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Infrastructure() {
  return (
    <section id="infra" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="order-2 overflow-hidden rounded-3xl border border-border bg-black lg:order-1">
          <img src={gemmaImg} alt="Android Developers and Gemma 4 — the on-device AI infrastructure powering Bourgelat" className="w-full" />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-xs uppercase tracking-[0.22em] text-primary/80 inline-flex items-center gap-2">
            <Cpu className="h-3.5 w-3.5" /> AI Infrastructure
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
            Built on <span className="text-gradient">Gemma 4</span>, optimized for Android.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Bourgelat runs on Google's open Gemma 4 model, deployed on-device through the Android
            developer stack. That means low-latency vision and reasoning in the field — even when
            connectivity is patchy — with the privacy of a model that doesn't leave the phone.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" /> Multimodal: video, image and text in a single context.</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" /> On-device inference for privacy and offline operation.</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" /> Fine-tuned on cattle pathology and ration formulation data.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px]">
      <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-primary/30 via-transparent to-transparent blur-3xl" aria-hidden />
      <div className="relative rounded-[2.6rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        <div className="relative overflow-hidden rounded-[2rem] bg-black">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
          {children}
        </div>
      </div>
    </div>
  );
}

function Demo() {
  const [i, setI] = useState(0);
  const total = STEPS.length;

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % total), 4500);
    return () => clearInterval(t);
  }, [total]);

  const prev = () => setI((p) => (p - 1 + total) % total);
  const next = () => setI((p) => (p + 1) % total);

  return (
    <section id="demo" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-primary/80">Live demo</p>
        <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
          From a video in the pasture to a feed ration on your phone.
        </h2>
        <p className="mt-4 text-muted-foreground">Six steps. Less than a minute.</p>
      </div>

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-[auto_1fr]">
        <PhoneFrame>
          <div className="relative aspect-[9/19.5] w-full">
            {STEPS.map((s, idx) => (
              <img
                key={s.img}
                src={s.img}
                alt={s.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </PhoneFrame>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-primary/80">
            Step {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
          <h3 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">{STEPS[i].title}</h3>
          <p className="mt-4 max-w-lg text-muted-foreground">{STEPS[i].caption}</p>

          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous step"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/40 text-foreground transition hover:bg-card"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next step"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary transition hover:bg-primary/25"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="ml-3 flex flex-1 items-center gap-2">
              {STEPS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to step ${idx + 1}`}
                  className={`h-1.5 flex-1 rounded-full transition ${idx === i ? "bg-primary" : "bg-white/10 hover:bg-white/20"}`}
                />
              ))}
            </div>
          </div>

          <ol className="mt-10 grid gap-2 text-sm">
            {STEPS.map((s, idx) => (
              <li key={s.title}>
                <button
                  onClick={() => setI(idx)}
                  className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
                    idx === i
                      ? "border-primary/40 bg-primary/10 text-foreground"
                      : "border-border bg-card/30 text-muted-foreground hover:bg-card/60"
                  }`}
                >
                  <span className="font-mono text-xs text-primary/80">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="font-medium">{s.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const stats = [
    { v: "<60s", l: "From video to triage report" },
    { v: "On-device", l: "Runs offline in the field" },
    { v: "3 modes", l: "Maintenance · Rehab · Fattening" },
  ];
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
      <div className="glass relative overflow-hidden rounded-3xl p-10 md:p-14">
        <div className="grid gap-10 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl text-gradient">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <img src={avatar} alt="" className="h-7 w-7 rounded-full" />
          <span>Bourgelat — AI Veterinary Intelligence for Cattle.</span>
        </div>
        <p className="text-xs">Decision support only. Always consult a licensed veterinarian.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Fog />
      <Nav />
      <Hero />
      <Capabilities />
      <Infrastructure />
      <Demo />
      <Outcomes />
      <Footer />
    </main>
  );
}
