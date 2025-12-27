import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Briefcase, BarChart, Settings, Rocket } from "lucide-react";
import Link from "next/link";
import { NeupLogo } from "@/components/NeupLogo";

const capabilities = [
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Search & Demand Capture",
    description: "SEO, local search, content systems, and search intent mapping that bring buyers, not just visitors.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: "Performance Marketing",
    description: "Ads built around funnels, not boosted posts. Every click tracked. Every rupee accountable.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Brand & Positioning",
    description: "Messaging, identity, and digital presence designed to increase perceived value and trust.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-primary" />,
    title: "Conversion & Funnel Optimization",
    description: "Landing pages, flows, and user journeys engineered to convert attention into action.",
  },
  {
    icon: <Settings className="h-6 w-6 text-primary" />,
    title: "Marketing Systems & Automation",
    description: "CRM setup, tracking, reporting, analytics, and scalable workflows that grow with the business.",
  },
];

const differentiators = [
  "We think like founders, not freelancers",
  "We build systems, not one-off campaigns",
  "We optimize for revenue, not likes",
  "We scale what works, kill what doesn’t",
];

const whoFor = [
    "Companies ready to grow, not experiment blindly",
    "Founders who value long-term brand equity",
    "Businesses that want systems, not dependency",
    "Teams that care about data, clarity, and results"
];

const engagementSteps = [
    { name: "Growth Diagnosis", description: "We analyze your current position" },
    { name: "Strategy & System Design", description: "Clear roadmap, no fluff" },
    { name: "Execution & Optimization", description: "Build, test, scale" },
    { name: "Measurement & Iteration", description: "Decisions backed by data" },
];

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 lg:py-40 text-center bg-card">
          <div className="container">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Marketing Built for Scale, Not Vanity
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-xl">
              Neup.Marketing designs growth systems that turn traffic into revenue, brands into assets, and marketing into a predictable engine.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="mailto:growth@neup.group">Start a Growth Conversation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#capabilities">See How We Build Growth</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Credibility Strip */}
        <section className="py-8 bg-background border-y">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-4 text-center text-sm text-muted-foreground">
                <p>Trusted by in-house ventures and partner brands under Neup Group.</p>
                <p>Built by operators, not theorists. Executed with performance in mind.</p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 md:py-28">
            <div className="container text-center max-w-4xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    What We Actually Do
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Most marketing fails because it’s fragmented. We don’t run campaigns — we build growth infrastructure.
                </p>
                <p className="mt-4 text-lg">
                    Neup.Marketing operates as a strategic growth unit, combining brand, performance, systems, and execution into one aligned engine.
                </p>
            </div>
        </section>

        {/* Core Capabilities */}
        <section id="capabilities" className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Core Capabilities</h2>
              <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                We apply a system-level framework to build a robust marketing foundation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <Card key={capability.title} className="bg-background">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {capability.icon}
                    <CardTitle className="font-headline text-lg">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why We Are Different */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Neup.Marketing Is Different</h2>
                        <p className="text-xl font-medium text-primary">
                            We market our own products first.
                        </p>
                        <p className="text-muted-foreground">
                            That means every strategy we deploy is battle-tested in real ventures. Marketing is not creativity alone. It’s engineering + psychology + execution.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {differentiators.map((text) => (
                            <div key={text} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0" />
                                <p className="text-lg font-medium">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center">
                     <h2 className="font-headline text-3xl md:text-4xl font-bold">Who This Is For</h2>
                     <p className="mt-4 text-muted-foreground">Neup.Marketing works best with businesses ready for systematic growth.</p>
                </div>
                <div className="mt-10 grid sm:grid-cols-2 gap-6">
                    {whoFor.map((item) => (
                        <Card key={item} className="p-6 flex items-start gap-4">
                            <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                            <p className="font-medium">{item}</p>
                        </Card>
                    ))}
                </div>
                <div className="mt-10 text-center p-6 bg-background rounded-lg">
                    <p className="font-bold text-lg">If you want “cheap marketing,” this isn’t it.</p>
                    <p className="text-lg text-primary font-semibold">If you want marketing that compounds, you’re in the right place.</p>
                </div>
            </div>
        </section>

        {/* How We Engage */}
        <section className="py-20 md:py-28">
            <div className="container max-w-5xl mx-auto">
                <div className="text-center mb-12">
                     <h2 className="font-headline text-3xl md:text-4xl font-bold">How We Engage</h2>
                     <p className="mt-4 text-muted-foreground">Our process is simple, serious, and built on clarity.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-x-6 gap-y-8">
                    {engagementSteps.map((step, index) => (
                        <div key={step.name} className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{index + 1}</div>
                                {index < engagementSteps.length - 1 && <div className="w-px h-16 bg-border mt-2"></div>}
                            </div>
                            <div>
                                <h3 className="font-semibold">{step.name}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="mt-10 text-center">
                    <p className="text-lg font-medium">No retainers without direction. No campaigns without purpose.</p>
                </div>
            </div>
        </section>
        
        {/* Part of Neup Group */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <div className="space-y-4">
                        <NeupLogo className="h-12 w-12 text-primary"/>
                        <h2 className="font-headline text-3xl font-bold">Part of Neup Group</h2>
                        <p className="text-muted-foreground">Neup.Marketing is a venture under Neup Group Private Limited, aligned with a long-term ecosystem of products, platforms, and digital infrastructure.</p>
                        <p className="font-semibold">This gives us: Cross-venture insights, an in-house product mindset, and long-term thinking over short-term billing.</p>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://picsum.photos/seed/neup-marketing/500/400" alt="Neup Group Ecosystem" className="rounded-lg shadow-xl" data-ai-hint="digital ecosystem" />
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 text-center">
          <div className="container max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Ready to build marketing that actually grows your business?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Start a conversation with Neup.Marketing and let’s turn your marketing into a growth asset.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="mailto:growth@neup.group">Start a Growth Conversation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
