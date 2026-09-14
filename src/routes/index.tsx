import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Code2,
  Menu,
  Network,
  Presentation,
  Search,
  Share2,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EXCHANGE — Build Your Skill Reputation" },
      {
        name: "description",
        content: "Exchange knowledge across campus, build verified skills, and create a professional identity backed by real contribution.",
      },
      { property: "og:title", content: "EXCHANGE — Build Your Skill Reputation" },
      { property: "og:description", content: "A living skill network where university students learn, contribute, and build trusted career evidence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const navItems = [
  { label: "Skill Universe", href: "#universe" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Skill Passport", href: "#passport" },
  { label: "Network", href: "#network" },
];

const skillNodes = [
  { label: "Business", className: "left-[3%] top-[20%]" },
  { label: "Technology", className: "right-[1%] top-[19%]" },
  { label: "Design", className: "left-[2%] bottom-[19%]" },
  { label: "Communication", className: "right-[-5%] bottom-[19%]" },
  { label: "Research", className: "left-1/2 top-[2%] -translate-x-1/2" },
];

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-glass-border bg-background/70 backdrop-blur-2xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center px-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="EXCHANGE home">
            <BrandMark />
            <span className="font-display text-base font-bold">EXCHANGE</span>
          </a>
          <nav className="ml-auto hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>
            ))}
          </nav>
          <Button asChild size="sm" className="ml-8 hidden rounded-full lg:inline-flex">
            <Link to="/auth">Enter EXCHANGE <ArrowRight className="size-4" /></Link>
          </Button>
          <Button variant="ghost" size="icon" className="ml-auto lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-glass-border bg-background/95 px-5 py-4 backdrop-blur-2xl lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-glass-surface hover:text-foreground">{item.label}</a>)}
              <Button asChild className="mt-3 rounded-full"><Link to="/auth">Enter EXCHANGE</Link></Button>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section id="universe" className="aurora-field relative min-h-[860px] overflow-hidden border-b border-glass-border pt-18">
          <div className="neural-grid absolute inset-0 opacity-50" />
          <div className="mx-auto grid min-h-[calc(860px-4.5rem)] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div className="relative z-10 animate-exchange-rise">
              <p className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase text-signal">
                <span className="size-1.5 rounded-full bg-signal shadow-signal" /> Living Skill Universe · UI Pilot
              </p>
              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.96] sm:text-6xl lg:text-7xl">
                Your Skills.<br />Your Reputation.<br /><span className="text-aurora">Your Future.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                Exchange knowledge with students across faculties, build verified skills, and create your professional identity.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full shadow-signal"><Link to="/auth">Start Exchange <ArrowRight className="size-4" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-glass-border bg-glass-surface backdrop-blur-xl"><Link to="/auth">Explore Network <Search className="size-4" /></Link></Button>
              </div>
              <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-glass-border py-5">
                <HeroStat value="30+" label="Student identities" />
                <HeroStat value="15" label="Active skills" />
                <HeroStat value="156" label="Verified exchanges" />
              </div>
            </div>

            <SkillUniverse />
          </div>
          <div className="relative mx-auto -mt-14 grid max-w-5xl gap-px overflow-hidden rounded-t-lg border border-b-0 border-glass-border bg-glass-border sm:grid-cols-3">
            <Signal icon={<BadgeCheck />} label="Verified evidence" value="Peer-backed" />
            <Signal icon={<Network />} label="Cross-faculty" value="10 faculties" />
            <Signal icon={<Sparkles />} label="Skill reputation" value="Always evolving" />
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-18 border-b border-glass-border py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading eyebrow="One living system" title="Knowledge becomes momentum." text="Every exchange creates learning, contribution, and career evidence—three signals connected in one professional identity." />
            <div className="mt-16 grid gap-4 lg:grid-cols-3">
              <GlassStep number="01" icon={<Search />} title="Discover a peer" text="Find trusted students by skill relevance, faculty context, availability, and reputation." />
              <GlassStep number="02" icon={<Presentation />} title="Exchange knowledge" text="Teach to earn Credits. Learn to turn access into practical, demonstrated ability." />
              <GlassStep number="03" icon={<BadgeCheck />} title="Build your proof" text="Completed sessions, assessment, and peer ratings become verified career evidence." />
            </div>
          </div>
        </section>

        <section id="passport" className="scroll-mt-18 border-b border-glass-border bg-deep-surface py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <div>
              <p className="text-[11px] font-semibold uppercase text-signal">Skill Passport</p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">Your ability, made visible.</h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">A living professional identity built from what you learned, what you shared, and the people who can verify it.</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <PassportPoint icon={<BadgeCheck />} text="Verified skills" />
                <PassportPoint icon={<Presentation />} text="Teaching contribution" />
                <PassportPoint icon={<BookOpenCheck />} text="Learning history" />
                <PassportPoint icon={<Share2 />} text="Shareable evidence" />
              </div>
            </div>
            <IdentityPassport />
          </div>
        </section>

        <section id="network" className="scroll-mt-18 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
            <p className="text-[11px] font-semibold uppercase text-signal">Across campus</p>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-6xl">What you know can unlock what someone else needs.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">The strongest student network is not built on followers. It is built on useful exchanges and credible contribution.</p>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {["FEB", "Fasilkom", "FIB", "Psikologi", "FISIP", "FH", "FT", "FMIPA", "FK", "Vokasi"].map((faculty) => <span key={faculty} className="rounded-full border border-glass-border bg-glass-surface px-4 py-2 text-xs text-muted-foreground backdrop-blur-xl">{faculty}</span>)}
            </div>
            <Button asChild size="lg" className="mt-12 rounded-full"><Link to="/auth">Create your skill identity <ArrowRight className="size-4" /></Link></Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-glass-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 text-foreground"><BrandMark /><span className="font-display font-bold">EXCHANGE</span></div>
          <p>Knowledge belongs in motion.</p><p>Universitas Indonesia pilot</p>
        </div>
      </footer>
    </div>
  );
}

function BrandMark() { return <span className="relative grid size-9 place-items-center"><span className="absolute inset-1 rotate-45 border border-signal" /><span className="absolute inset-1 -rotate-12 border border-aurora-purple opacity-60" /><span className="relative font-display text-xs font-bold">E</span></span>; }

function SkillUniverse() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px] animate-exchange-rise [animation-delay:120ms]">
      <div className="absolute inset-[14%] rounded-full border border-glass-border bg-glass-surface shadow-universe backdrop-blur-3xl animate-orbit-slow">
        <div className="absolute inset-[9%] rounded-full border border-glass-border" />
        <div className="absolute inset-[22%] rotate-45 rounded-[22%] border border-signal/40 bg-crystal shadow-crystal animate-float-slow" />
        <div className="absolute inset-[34%] grid place-items-center rounded-full border border-signal/50 bg-glass-strong text-center shadow-signal backdrop-blur-2xl">
          <div><Network className="mx-auto size-7 text-signal" /><p className="mt-2 font-display text-sm font-bold">EXCHANGE</p><p className="mt-1 text-[9px] uppercase text-muted-foreground">Skill identity</p></div>
        </div>
        <svg aria-hidden className="absolute inset-0 size-full text-signal/30" viewBox="0 0 100 100">
          <path d="M50 50 L19 31 M50 50 L81 31 M50 50 L18 72 M50 50 L82 72 M50 50 L50 9" fill="none" stroke="currentColor" strokeWidth=".35" strokeDasharray="2 2" />
        </svg>
      </div>
      {skillNodes.map((node, index) => <div key={node.label} className={`absolute ${node.className} animate-float-node`} style={{ animationDelay: `${index * -0.8}s` }}><span className="flex items-center gap-2 rounded-full border border-glass-border bg-glass-strong px-3 py-2 text-[11px] font-semibold shadow-glass backdrop-blur-xl"><span className="size-1.5 rounded-full bg-signal shadow-signal" />{node.label}</span></div>)}
      <div className="absolute bottom-[2%] left-1/2 w-[72%] -translate-x-1/2 rounded-lg border border-glass-border bg-glass-strong p-4 shadow-glass backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4"><div><p className="text-[10px] uppercase text-muted-foreground">Network signal</p><p className="mt-1 text-sm font-semibold">Your identity strengthens with every exchange</p></div><span className="font-display text-2xl font-bold text-signal">+12</span></div>
      </div>
    </div>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) { return <div className="border-r border-glass-border px-3 first:pl-0 last:border-r-0"><p className="font-display text-xl font-bold">{value}</p><p className="mt-1 text-[10px] uppercase text-muted-foreground">{label}</p></div>; }
function Signal({ icon, label, value }: { icon: ReactNode; label: string; value: string }) { return <div className="flex items-center gap-3 bg-glass-strong px-5 py-4 backdrop-blur-2xl"><span className="text-signal [&>svg]:size-4">{icon}</span><div><p className="text-[10px] uppercase text-muted-foreground">{label}</p><p className="mt-1 text-sm font-semibold">{value}</p></div></div>; }
function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <div className="grid gap-6 lg:grid-cols-[0.6fr_1.2fr_1fr] lg:items-end"><p className="text-[11px] font-semibold uppercase text-signal">{eyebrow}</p><h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h2><p className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end">{text}</p></div>; }
function GlassStep({ number, icon, title, text }: { number: string; icon: ReactNode; title: string; text: string }) { return <article className="group min-h-72 rounded-lg border border-glass-border bg-glass-surface p-7 shadow-glass backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-signal/40"><div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-md border border-glass-border bg-glass-strong text-signal [&>svg]:size-5">{icon}</span><span className="font-display text-4xl font-bold text-glass-border">{number}</span></div><h3 className="mt-16 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>; }
function PassportPoint({ icon, text }: { icon: ReactNode; text: string }) { return <div className="flex items-center gap-3 text-sm"><span className="grid size-9 place-items-center rounded-md border border-glass-border bg-glass-surface text-signal [&>svg]:size-4">{icon}</span>{text}</div>; }
function IdentityPassport() { return <div className="relative mx-auto w-full max-w-2xl"><div className="absolute -inset-5 rounded-full bg-aurora-haze blur-3xl" /><div className="relative overflow-hidden rounded-lg border border-glass-border bg-glass-strong p-6 shadow-universe backdrop-blur-3xl sm:p-8"><div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between"><div className="flex items-center gap-4"><span className="grid size-14 place-items-center rounded-lg border border-glass-border bg-glass-surface font-display text-lg font-bold text-signal">RM</span><div><p className="flex items-center gap-2 font-display text-xl font-bold">Raka Mahendra <BadgeCheck className="size-4 text-signal" /></p><p className="mt-1 text-xs text-muted-foreground">FEB · Management · Year 3</p></div></div><div className="text-left sm:text-right"><p className="text-[10px] uppercase text-muted-foreground">Skill Score</p><p className="font-display text-4xl font-bold text-aurora">780</p></div></div><div className="mt-8 grid grid-cols-3 gap-px border-y border-glass-border bg-glass-border py-px"><PassportMetric value="4" label="Verified skills" /><PassportMetric value="15" label="Students helped" /><PassportMetric value="31" label="Exchanges" /></div><div className="mt-7"><div className="flex items-center justify-between"><p className="text-[10px] font-semibold uppercase text-muted-foreground">Professional evidence</p><span className="text-[10px] font-semibold text-signal">IDENTITY VERIFIED</span></div><div className="mt-4 space-y-3"><PassportSkill label="Excel Analytics" value="92" /><PassportSkill label="Business Case Framework" value="84" /><PassportSkill label="Public Speaking" value="76" /></div></div></div></div>; }
function PassportMetric({ value, label }: { value: string; label: string }) { return <div className="bg-glass-strong p-4 text-center"><p className="font-display text-lg font-bold">{value}</p><p className="mt-1 text-[9px] uppercase text-muted-foreground">{label}</p></div>; }
function PassportSkill({ label, value }: { label: string; value: string }) { return <div><div className="mb-2 flex justify-between text-xs"><span>{label}</span><span className="text-signal">{value}/100</span></div><div className="h-1 overflow-hidden rounded-full bg-glass-surface"><div className="h-full rounded-full bg-aurora-line animate-passport-fill" style={{ width: `${value}%` }} /></div></div>; }