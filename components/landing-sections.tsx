import { ContactForm } from '@/components/contact-form'

const workflow = [
  ['01', 'Resolve the target', 'Point Biologix at any protein biologic by name or PDB id. The platform fetches the structure and sets up screening — the same workflow runs unchanged across targets.'],
  ['02', 'Mine & propose', 'It reads the relevant literature, then generates candidate polymer excipients as validated repeat-unit structures ready for simulation.'],
  ['03', 'Screen with physics', 'Each candidate is packed around the target and energy-minimized with OpenMM and Packmol, scoring how strongly the polymer interacts with the biologic.'],
  ['04', 'Close the loop', 'Agent-backed retrosynthesis traces each promising candidate to purchasable precursors, while ADMET and regulatory rules screen for safety and compliance.'],
  ['05', 'Human checkpoint', 'Every iteration pauses for review. You see the ranked candidates, their routes and their flags, then steer where the next round goes.'],
]

const platform = [
  ['Biologic-agnostic', 'Run the same loop on insulin, an antibody, an enzyme or a peptide — resolved from a name or PDB identifier.'],
  ['Physics-grounded screening', 'Interaction energies from OpenMM and Packmol, not guesswork, rank how a polymer shell binds the target.'],
  ['Agent-backed retrosynthesis', 'Candidate routes are traced to purchasable building blocks through a four-tier precursor registry.'],
  ['Safety & compliance', 'Monomer ADMET plus FDA / EMA / GRAS excipient rules screen candidates before they reach you.'],
  ['Human-in-the-loop', 'A mandatory checkpoint each iteration keeps a scientist in control of every decision.'],
  ['Full provenance', 'Every candidate, route and check is logged with its source, so results are auditable end to end.'],
]

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="flex max-w-3xl flex-col gap-5">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground">{eyebrow}</p>
      <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">{title}</h2>
      {intro && <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">{intro}</p>}
    </div>
  )
}

export function ResearchStrip() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid gap-4 border-y border-border py-8 text-sm text-muted-foreground sm:grid-cols-2 md:grid-cols-4 md:gap-8 md:py-10 md:text-base">
        <p className="uppercase tracking-wider">Built on peer-reviewed research</p>
        <p>Physics-grounded · OpenMM & Packmol</p>
        <p>Agent-backed retrosynthesis</p>
        <p>Human-in-the-loop checkpoints</p>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading eyebrow="How it works" title="One discovery loop, run start to finish." intro="Each iteration moves from literature to candidate polymers to simulation, then closes synthesis feasibility and safety before a human reviews the results and steers the next round." />
      <div className="mt-14 border-t border-border md:mt-20">
        {workflow.map(([number, title, copy]) => (
          <article key={number} className="grid gap-3 border-b border-border py-8 md:grid-cols-[72px_1fr_1.6fr] md:gap-10 md:py-10">
            <p className="font-serif text-3xl text-accent-foreground md:text-4xl">{number}</p>
            <h3 className="text-xl font-semibold text-foreground md:text-2xl">{title}</h3>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function WhyItMatters() {
  return (
    <section id="why-it-matters" className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:gap-20 md:py-28">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Why it matters</p>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight md:text-6xl">The cold chain limits who biologics can reach.</h2>
          <p className="max-w-xl text-lg leading-relaxed text-background/75 md:text-xl">Many biologics must stay refrigerated from factory to patient. That dependence puts them out of reach in settings without reliable cold storage.</p>
        </div>
        <div className="flex flex-col gap-8 text-lg leading-relaxed text-background/80 md:pt-10 md:text-xl">
          <p>A thermally protective matrix polymer could change that calculus — but the space of possible excipients is vast, and whether a candidate can actually be synthesized is rarely checked at discovery time.</p>
          <p>Biologix runs discovery and synthesis feasibility together, with regulatory and safety screening built into every iteration — so the candidates that surface are ones a human can meaningfully act on.</p>
        </div>
      </div>
    </section>
  )
}

export function Platform() {
  return (
    <section id="platform" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading eyebrow="The platform" title="What Biologix brings to the loop." />
      <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {platform.map(([title, copy]) => (
          <article key={title} className="flex min-h-64 flex-col gap-6 rounded-3xl border border-border bg-card p-7 sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent" aria-hidden="true"><span className="size-4 rounded-sm bg-accent-foreground" /></span>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-card-foreground md:text-2xl">{title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function DemoSection() {
  return (
    <section id="demo" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-28">
      <div className="flex flex-col gap-6 md:pt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground">Request a demo</p>
        <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">See Biologix on your target.</h2>
        <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">Tell us about the biologic you&apos;re formulating and what you&apos;d like to explore. We&apos;ll be in touch to arrange a walkthrough.</p>
      </div>
      <ContactForm />
    </section>
  )
}
