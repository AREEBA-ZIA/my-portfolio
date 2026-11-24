import Image from "next/image";
import Hero from "./components/Hero";
import Tilt from "./components/Tilt";
import { journey, links, projects, skillGroups } from "./data";

const nav = ["About", "Skills", "Journey", "Projects", "Certificate", "Contact"];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{children}</h2>
  );
}

const outlineBtn =
  "rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:border-ice hover:text-ice";

export default function Home() {
  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-bold">
            Areeba Zia
          </a>
          <ul className="hidden gap-6 text-sm text-muted sm:flex">
            {nav.map((n) => (
              <li key={n}>
                <a href={`#${n.toLowerCase()}`} className="transition hover:text-ice">
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Hero />

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <Heading>I like turning designs into working products.</Heading>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          I started with HTML, CSS and JavaScript in 2023, moved into remote client work in 2024,
          and now build full-stack apps with React, Next.js and TypeScript. Alongside that, I am
          studying Artificial Intelligence at UMT and taking an AI/ML course at Arfa Karim
          Technology Park.
        </p>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <Heading>Skills</Heading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <Tilt key={g.title}>
              <div className="lift p-7">
                <h3 className="font-display text-2xl font-bold">{g.title}</h3>
                <p className="mt-1 text-sm text-muted">{g.note}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      <section id="journey" className="mx-auto max-w-3xl px-6 py-24">
        <Heading>Journey</Heading>
        <ol className="timeline mt-10 space-y-10">
          {journey.map((j) => (
            <li key={j.title} className="relative pl-10">
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-ice bg-ink" />
              <p className="text-sm font-semibold text-ice">{j.when}</p>
              <h3 className="mt-1 font-display text-xl font-bold">{j.title}</h3>
              <p className="mt-1 text-muted">{j.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <Heading>Projects</Heading>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Tilt key={p.name} max={8}>
              <article className="lift flex h-full flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  <span className="shrink-0 rounded-full bg-rose/15 px-3 py-1 text-xs font-semibold text-rose">
                    {p.status}
                  </span>
                </div>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{p.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2 text-sm text-ice">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-md bg-ice/10 px-2.5 py-1">
                      {t}
                    </li>
                  ))}
                </ul>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 text-sm font-semibold text-ice hover:underline"
                  >
                    View on GitHub
                  </a>
                )}
              </article>
            </Tilt>
          ))}
        </div>
      </section>

      <section id="certificate" className="mx-auto max-w-4xl px-6 py-24">
        <Heading>Certificate</Heading>
        <p className="mt-4 text-muted">Web Development Course, Rumi Institute, 2023.</p>
        <div className="mt-10">
          <Tilt max={6}>
            <Image
              src="/certificate.png"
              alt="Certificate of Appreciation awarded to Areeba Zia by Rumi Institute for completing a web development course"
              width={1600}
              height={1067}
              className="h-auto w-full rounded-[10px]"
            />
          </Tilt>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Heading>Let’s build something together.</Heading>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Open to remote and freelance work. My inbox is always open.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {links.email && (
            <a
              href={`mailto:${links.email}`}
              className="rounded-xl bg-iris px-6 py-3 font-semibold text-white transition hover:brightness-110"
            >
              Send an email
            </a>
          )}
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={outlineBtn}>
              LinkedIn
            </a>
          )}
          <a href={links.github} target="_blank" rel="noreferrer" className={outlineBtn}>
            GitHub
          </a>
          {links.fiverr && (
            <a href={links.fiverr} target="_blank" rel="noreferrer" className={outlineBtn}>
              Fiverr
            </a>
          )}
          {links.upwork && (
            <a href={links.upwork} target="_blank" rel="noreferrer" className={outlineBtn}>
              Upwork
            </a>
          )}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Areeba Zia
      </footer>
    </main>
  );
}