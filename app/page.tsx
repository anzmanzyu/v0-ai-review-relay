import { Navbar } from "@/components/lp/navbar"
import { Hero } from "@/components/lp/hero"
import { ProblemSection } from "@/components/lp/problem-section"
import { HowItWorks } from "@/components/lp/how-it-works"
import { AIRoles } from "@/components/lp/ai-roles"
import { OutputExample } from "@/components/lp/output-example"
import { UseCases } from "@/components/lp/use-cases"
import { CTASection } from "@/components/lp/cta-section"
import { Footer } from "@/components/lp/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <AIRoles />
        <OutputExample />
        <UseCases />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
