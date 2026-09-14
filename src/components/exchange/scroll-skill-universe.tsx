import {
  ArrowDown,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Code2,
  Coins,
  Network,
  Presentation,
  Search,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

const journey = [
  {
    number: "01",
    short: "Discover",
    eyebrow: "Discover a peer",
    title: "Hidden skills, made visible.",
    text: "Find trusted students across faculties by skill relevance, goals, availability, and reputation—not popularity.",
    signal: "Campus network online",
  },
  {
    number: "02",
    short: "Exchange",
    eyebrow: "Exchange knowledge",
    title: "Knowledge moves. Value grows.",
    text: "Teach what you know. Learn what you need. Credits recognize contribution and keep knowledge moving across campus.",
    signal: "Contribution recorded",
  },
  {
    number: "03",
    short: "Validate",
    eyebrow: "Build your reputation",
    title: "Every exchange becomes evidence.",
    text: "Sessions, assessments, and peer trust form a living Skill Passport—professional proof built through real contribution.",
    signal: "Identity verified",
  },
  {
    number: "04",
    short: "Unlock",
    eyebrow: "Unlock opportunities",
    title: "Your proof finds its next move.",
    text: "Turn verified skills into relevant career opportunities, matched by demonstrated ability rather than a static résumé.",
    signal: "Opportunity matched",
  },
] as const;

export function ScrollSkillUniverse() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.step);
        if (Number.isFinite(index)) setActiveStep(index);
      },
      { rootMargin: "-28% 0px -38% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );

    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="scroll-mt-18 overflow-clip border-b border-glass-border bg-deep-surface">
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 sm:pt-32 lg:px-10">
        <div className="neural-grid pointer-events-none absolute inset-0 opacity-25 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
        <div className="relative max-w-3xl">
          <p className="text-[11px] font-semibold uppercase text-signal">Scroll through the skill universe</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-6xl">
            One exchange can change<br className="hidden sm:block" /> the shape of your future.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            Watch knowledge move from discovery to verified career value inside one living professional network.
          </p>
        </div>

        <div className="relative mt-16 lg:grid lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="relative z-10">
            {journey.map((step, index) => (
              <article
                key={step.number}
                ref={(node) => { stepRefs.current[index] = node; }}
                data-step={index}
                className="flex min-h-[62vh] flex-col justify-center border-t border-glass-border py-14 first:border-t-0 lg:min-h-[88vh] lg:py-24"
              >
                <div className={`transition-all duration-700 ${activeStep === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-40"}`}>
                  <div className="flex items-center gap-4">
                    <span className="font-num text-sm font-semibold text-signal">{step.number}</span>
                    <span className="h-px w-10 bg-signal/50" />
                    <p className="text-[11px] font-semibold uppercase text-muted-foreground">{step.eyebrow}</p>
                  </div>
                  <h3 className="mt-7 max-w-md font-display text-3xl font-bold leading-tight sm:text-4xl">{step.title}</h3>
                  <p className="mt-5 max-w-md text-base leading-8 text-muted-foreground">{step.text}</p>
                  <div className="mt-8 flex items-center gap-3 text-xs font-semibold text-signal">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-50" />
                      <span className="relative inline-flex size-2 rounded-full bg-signal" />
                    </span>
                    {step.signal}
                  </div>
                </div>

                <div className="mt-10 lg:hidden">
                  <UniverseStage activeStep={index} compact />
                </div>
              </article>
            ))}
          </div>

          <div className="sticky top-24 hidden h-[calc(100vh-7rem)] items-center lg:flex">
            <UniverseStage activeStep={activeStep} />
          </div>
        </div>
      </div>
    </section>
  );
}

function UniverseStage({ activeStep, compact = false }: { activeStep: number; compact?: boolean }) {
  return (
    <div className={`story-stage relative w-full overflow-hidden border border-glass-border bg-glass-surface shadow-universe backdrop-blur-3xl ${compact ? "h-[430px] rounded-lg" : "aspect-[1.04] max-h-[720px] rounded-lg"}`}>
      <div className="neural-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-glass-border bg-glass-strong/70 px-5 py-4 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase text-muted-foreground">
          <span className="size-1.5 rounded-full bg-signal shadow-signal" /> Live ecosystem
        </div>
        <span className="font-num text-[10px] text-signal">0{activeStep + 1} / 04</span>
      </div>

      <div className="absolute inset-x-5 bottom-5 z-30 flex items-center justify-between rounded-md border border-glass-border bg-glass-strong/85 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-full border border-signal/30 bg-signal/10 text-signal"><Sparkles className="size-3.5" /></span>
          <div><p className="text-[9px] uppercase text-muted-foreground">Current stage</p><p className="mt-0.5 text-xs font-semibold">{journey[activeStep].short}</p></div>
        </div>
        <div className="flex gap-1.5" aria-hidden>
          {journey.map((step, index) => <span key={step.number} className={`h-1 rounded-full transition-all duration-500 ${activeStep === index ? "w-7 bg-signal" : "w-2 bg-glass-border"}`} />)}
        </div>
      </div>

      <SceneFrame visible={activeStep === 0}><DiscoverScene compact={compact} /></SceneFrame>
      <SceneFrame visible={activeStep === 1}><ExchangeScene compact={compact} /></SceneFrame>
      <SceneFrame visible={activeStep === 2}><PassportScene compact={compact} /></SceneFrame>
      <SceneFrame visible={activeStep === 3}><OpportunityScene compact={compact} /></SceneFrame>
    </div>
  );
}

function SceneFrame({ visible, children }: { visible: boolean; children: ReactNode }) {
  return (
    <div
      aria-hidden={!visible}
      className={`absolute inset-0 transition-all duration-700 ease-out ${visible ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-5 scale-[0.97] opacity-0"}`}
    >
      {children}
    </div>
  );
}

const identities = [
  { initials: "NA", name: "Nadia", faculty: "FEB UI", skill: "Financial Modeling", position: "left-[5%] top-[25%]" },
  { initials: "RK", name: "Raka", faculty: "Fasilkom UI", skill: "Python Basic", position: "right-[4%] top-[23%]" },
  { initials: "AL", name: "Alya", faculty: "FIB UI", skill: "UX Writing", position: "left-[4%] bottom-[25%]" },
  { initials: "DI", name: "Dimas", faculty: "FT UI", skill: "Product CAD", position: "right-[4%] bottom-[25%]" },
];

function DiscoverScene({ compact }: { compact: boolean }) {
  return (
    <div className="absolute inset-0 pt-16">
      <ParticleField />
      <svg className="absolute inset-[13%] size-[74%] text-signal/40" viewBox="0 0 100 100">
        <g fill="none" stroke="currentColor" strokeWidth=".35" strokeDasharray="2 2" className="story-connections">
          <path pathLength="1" d="M50 50 L12 25" /><path pathLength="1" d="M50 50 L88 24" /><path pathLength="1" d="M50 50 L12 78" /><path pathLength="1" d="M50 50 L88 78" />
        </g>
      </svg>
      <div className="absolute left-1/2 top-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-signal/40 bg-glass-strong shadow-crystal backdrop-blur-2xl sm:size-40">
        <div className="absolute inset-3 animate-orbit-slow rounded-full border border-dashed border-signal/30" />
        <div className="absolute inset-7 rotate-45 rounded-[28%] border border-aurora-purple/40 bg-crystal" />
        <div className="relative text-center"><Network className="mx-auto size-6 text-signal" /><p className="mt-2 font-display text-xs font-bold">EXCHANGE</p><p className="mt-1 text-[8px] uppercase text-muted-foreground">Campus core</p></div>
      </div>
      {identities.map((identity, index) => (
        <div key={identity.name} className={`absolute ${identity.position} story-node ${compact && index > 1 ? "hidden sm:block" : ""}`} style={{ animationDelay: `${index * 120}ms` }}>
          <IdentityChip {...identity} />
        </div>
      ))}
      <span className="absolute left-[44%] top-[21%] rounded-full border border-glass-border bg-glass-strong px-2 py-1 text-[9px] text-muted-foreground">Psikologi</span>
      <span className="absolute bottom-[20%] left-[43%] rounded-full border border-glass-border bg-glass-strong px-2 py-1 text-[9px] text-muted-foreground">FISIP</span>
    </div>
  );
}

function IdentityChip({ initials, name, faculty, skill }: (typeof identities)[number]) {
  return (
    <div className="w-36 rounded-md border border-glass-border bg-glass-strong/90 p-2.5 shadow-glass backdrop-blur-xl sm:w-44 sm:p-3">
      <div className="flex items-center gap-2.5"><span className="grid size-8 place-items-center rounded-full border border-signal/30 bg-signal/10 font-num text-[10px] font-bold text-signal">{initials}</span><div><p className="text-xs font-semibold">{name}</p><p className="text-[9px] text-muted-foreground">{faculty}</p></div></div>
      <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-glass-border pt-2"><span className="truncate text-[9px] text-muted-foreground">{skill}</span><BadgeCheck className="size-3 shrink-0 text-signal" /></div>
    </div>
  );
}

function ExchangeScene({ compact }: { compact: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pt-10">
      <ParticleField />
      <div className="relative flex w-[88%] items-center justify-between">
        <KnowledgePerson initials="RK" faculty="Fasilkom" skill="Python" icon={<Code2 />} />
        <div className="relative mx-2 h-36 min-w-16 flex-1 sm:mx-5">
          <svg className="absolute inset-0 size-full text-signal/50" viewBox="0 0 200 100" preserveAspectRatio="none"><path d="M0 50 C55 5 145 95 200 50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" /></svg>
          <span className="story-knowledge-particle absolute left-0 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-signal/50 bg-glass-strong text-signal shadow-signal"><Code2 className="size-4" /></span>
          <span className="story-credit-particle absolute left-1/2 top-[72%] -translate-x-1/2 rounded-full border border-accent/35 bg-accent-soft px-2 py-1 font-num text-[9px] font-semibold text-accent">+10 Credits</span>
        </div>
        <KnowledgePerson initials="NA" faculty="FEB" skill="Business Analysis" icon={<Presentation />} />
      </div>
      <div className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-signal/40 bg-glass-strong shadow-crystal backdrop-blur-2xl sm:size-28">
        <Coins className="size-5 text-signal" /><span className="absolute -bottom-7 whitespace-nowrap text-[9px] font-semibold uppercase text-muted-foreground">Knowledge shared</span>
      </div>
      {!compact && <p className="absolute bottom-[20%] left-1/2 -translate-x-1/2 text-center text-xs text-muted-foreground">Contribution creates access—not currency.</p>}
    </div>
  );
}

function KnowledgePerson({ initials, faculty, skill, icon }: { initials: string; faculty: string; skill: string; icon: ReactNode }) {
  return (
    <div className="relative z-10 w-28 rounded-md border border-glass-border bg-glass-strong/90 p-3 text-center shadow-glass backdrop-blur-xl sm:w-36 sm:p-4">
      <span className="mx-auto grid size-10 place-items-center rounded-full border border-signal/30 bg-signal/10 font-num text-xs font-bold text-signal">{initials}</span>
      <p className="mt-2 text-[9px] text-muted-foreground">{faculty}</p>
      <div className="mt-3 flex items-center justify-center gap-1.5 border-t border-glass-border pt-3 text-[9px] font-semibold text-foreground"><span className="text-signal [&>svg]:size-3">{icon}</span>{skill}</div>
    </div>
  );
}

function PassportScene({ compact }: { compact: boolean }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (compact) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setTilt({ x: ((event.clientY - rect.top) / rect.height - 0.5) * -8, y: ((event.clientX - rect.left) / rect.width - 0.5) * 8 });
  };

  return (
    <div className="absolute inset-0 grid place-items-center px-5 pt-10" onMouseMove={handleMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
      <ParticleField />
      <div className="story-passport relative w-full max-w-md overflow-hidden rounded-lg border border-signal/30 bg-glass-strong/90 p-5 shadow-crystal backdrop-blur-3xl transition-transform duration-200 sm:p-6" style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
        <div className="absolute inset-0 bg-crystal opacity-60" />
        <div className="relative">
          <div className="flex items-start justify-between"><div><p className="text-[9px] font-semibold uppercase text-signal">EXCHANGE Skill Passport</p><h4 className="mt-3 font-sans text-lg font-bold">RAKA PRATAMA</h4><p className="mt-1 text-[10px] text-muted-foreground">FEB UI · VERIFIED IDENTITY</p></div><BadgeCheck className="size-6 text-signal" /></div>
          <div className="mt-5 flex items-end justify-between border-y border-glass-border py-4"><div><p className="text-[9px] uppercase text-muted-foreground">Skill Score</p><p className="font-num mt-1 text-4xl font-bold">842</p></div><div className="text-right"><p className="text-[9px] uppercase text-muted-foreground">Network standing</p><p className="font-num mt-1 text-sm font-semibold text-signal">TOP 8%</p></div></div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <PassportList title="Verified skills" items={["Excel Analytics", "Business Case", "Presentation Design"]} />
            <PassportList title="Evidence" items={["Completed sessions", "Teaching contribution", "Assessment passed", "Peer reputation"]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PassportList({ title, items }: { title: string; items: string[] }) {
  return <div><p className="mb-2 text-[9px] font-semibold uppercase text-muted-foreground">{title}</p><div className="space-y-1.5">{items.map((item) => <p key={item} className="flex items-center gap-2 text-[9px]"><Check className="size-3 text-signal" />{item}</p>)}</div></div>;
}

function OpportunityScene({ compact }: { compact: boolean }) {
  return (
    <div className="absolute inset-0 grid place-items-center px-5 pt-12">
      <ParticleField />
      <div className="relative flex w-full max-w-lg flex-col items-center">
        <div className="z-10 flex w-[82%] items-center justify-between rounded-md border border-signal/25 bg-glass-strong/90 p-3 shadow-glass backdrop-blur-xl sm:p-4">
          <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-signal/10 font-num text-[10px] font-bold text-signal">RP</span><div><p className="text-xs font-semibold">Raka Pratama</p><p className="text-[9px] text-muted-foreground">Verified Skill Passport</p></div></div><span className="font-num text-sm font-bold text-signal">842</span>
        </div>
        <div className="relative h-20 w-px bg-aurora-line"><span className="story-opportunity-pulse absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-signal shadow-signal" /></div>
        <div className="relative z-10 w-full max-w-md rounded-lg border border-glass-border bg-glass-strong/95 p-5 shadow-crystal backdrop-blur-3xl sm:p-6">
          <div className="flex items-start justify-between"><div className="flex gap-3"><span className="grid size-10 place-items-center rounded-md border border-glass-border bg-glass-surface text-signal"><BriefcaseBusiness className="size-4" /></span><div><p className="text-sm font-semibold">Business Analyst Internship</p><p className="mt-1 text-[9px] text-muted-foreground">Priority opportunity · Jakarta</p></div></div><div className="text-right"><p className="font-num text-2xl font-bold text-signal">94%</p><p className="text-[8px] uppercase text-muted-foreground">Match</p></div></div>
          <div className="mt-5 border-t border-glass-border pt-4"><p className="mb-3 text-[9px] font-semibold uppercase text-muted-foreground">Matched because</p><div className={`grid gap-2 ${compact ? "" : "sm:grid-cols-3"}`}><MatchReason text="Verified Excel" /><MatchReason text="Business Analysis" /><MatchReason text="Teaching reputation" /></div></div>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-full border border-signal/25 bg-signal/10 px-3 py-1.5 text-[9px] font-semibold text-signal"><Search className="size-3" /> Opportunity matching active</div>
      </div>
    </div>
  );
}

function MatchReason({ text }: { text: string }) {
  return <div className="flex items-center gap-1.5 rounded-md border border-glass-border bg-glass-surface px-2 py-2 text-[8px]"><Check className="size-2.5 shrink-0 text-signal" />{text}</div>;
}

function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {[12, 24, 37, 51, 64, 76, 88].map((left, index) => <span key={left} className="story-particle absolute size-1 rounded-full bg-signal/70 shadow-signal" style={{ left: `${left}%`, top: `${18 + (index % 4) * 17}%`, animationDelay: `${index * -0.7}s` }} />)}
    </div>
  );
}