import Link from 'next/link'
import { ArrowDownRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

function OrbitalGraphic() {
  const nodes = [
    'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
    'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
    'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
    'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
  ]

  return (
    <div className="relative mx-auto aspect-square w-[78%] max-w-lg" aria-hidden="true">
      <div className="absolute inset-0 rounded-full border-2 border-accent-foreground/65" />
      <div className="absolute inset-[15%] rounded-full border-2 border-accent-foreground/55" />
      <div className="absolute inset-[30%] rounded-full border-2 border-accent-foreground/40" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-accent-foreground/40" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-accent-foreground/40" />
      <div className="absolute inset-[38%] rounded-full bg-accent-foreground" />
      {nodes.map((position) => <span key={position} className={`absolute ${position} size-7 rounded-full bg-primary md:size-9`} />)}
      <span className="absolute left-[11%] top-[12%] size-5 rounded-full bg-primary/65" />
      <span className="absolute right-[10%] top-[13%] size-5 rounded-full bg-primary/65" />
      <span className="absolute bottom-[10%] left-[11%] size-5 rounded-full bg-primary/65" />
      <span className="absolute bottom-[11%] right-[10%] size-5 rounded-full bg-primary/65" />
    </div>
  )
}

export function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 md:py-8">
      <Link href="#top" className="flex items-baseline gap-3 text-foreground" aria-label="Biologix home">
        <span className="font-serif text-2xl font-bold">Biologix</span>
        <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:inline">by Algonix AI</span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex" aria-label="Main navigation">
        <Link href="#how-it-works" className="transition-colors hover:text-foreground">How it works</Link>
        <Link href="#why-it-matters" className="transition-colors hover:text-foreground">Why it matters</Link>
        <Link href="#platform" className="transition-colors hover:text-foreground">Platform</Link>
      </nav>
      <Button nativeButton={false} render={<Link href="#demo" />} className="h-10 rounded-full px-5">Request a demo</Button>
    </header>
  )
}

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-7xl gap-16 px-5 pb-20 pt-14 sm:px-8 md:min-h-[720px] md:grid-cols-[1.12fr_0.88fr] md:items-center md:pb-24 md:pt-16">
      <div className="flex flex-col items-start gap-8">
        <p className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-sm">
          <span className="mr-3 inline-block size-2 rounded-full bg-primary" />
          Agentic discovery for biologic formulation
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">Discovering the polymers that keep biologics stable.</h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">Biologix is an agentic platform that explores polymer excipients for protein biologics — pairing physics-grounded screening with agent-backed retrosynthesis and regulatory checks, keeping a human in the loop at every step.</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button nativeButton={false} render={<Link href="#demo" />} size="lg" className="h-12 rounded-full px-7 text-base">Request a demo</Button>
          <Button nativeButton={false} render={<Link href="#how-it-works" />} variant="link" size="lg" className="h-12 px-0 text-base">See how it works <ArrowDownRight data-icon="inline-end" /></Button>
        </div>
      </div>
      <OrbitalGraphic />
    </section>
  )
}
