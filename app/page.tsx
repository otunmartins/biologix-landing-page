import { DemoSection, HowItWorks, Platform, ResearchStrip, WhyItMatters } from '@/components/landing-sections'
import { Header, Hero } from '@/components/hero'

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <ResearchStrip />
      <HowItWorks />
      <WhyItMatters />
      <Platform />
      <DemoSection />
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p><span className="font-serif text-lg font-semibold text-foreground">Biologix</span> · © Algonix AI Ltd., United Kingdom</p>
          <p>Discovery in progress · results are exploratory and not clinical claims</p>
        </div>
      </footer>
    </main>
  )
}
