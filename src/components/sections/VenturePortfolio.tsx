
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Plane, Megaphone, Zap, BrainCircuit, Mail, PenTool, Briefcase } from 'lucide-react';
import Link from "next/link";
import type { SVGProps } from "react";

const ventures = [
  {
    logo: (props: SVGProps<SVGSVGElement>) => <Plane {...props} />,
    name: "Tourio",
    description: "The operating system for travel and tour operators in Nepal.",
    status: "Live",
    link: "/tourio",
  },
  {
    logo: (props: SVGProps<SVGSVGElement>) => <Megaphone {...props} />,
    name: "Neup Marketing",
    description: "A modern marketing agency for the new generation of brands.",
    status: "Live",
    link: "/marketing",
  },
  {
    logo: (props: SVGProps<SVGSVGElement>) => <Mail {...props} />,
    name: "Neup Mail",
    description: "A privacy-focused email service that respects its users.",
    status: "Beta",
    link: "/mail",
  },
  {
    logo: (props: SVGProps<SVGSVGElement>) => <PenTool {...props} />,
    name: "Neup Design",
    description: "A product and brand design studio for ambitious companies.",
    status: "Live",
    link: "/design",
  },
  {
    logo: (props: SVGProps<SVGSVGElement>) => <Briefcase {...props} />,
    name: "Neup Jobs",
    description: "A talent gateway for builders to join the Neup ecosystem.",
    status: "Live",
    link: "/jobs",
  },
  {
    logo: (props: SVGProps<SVGSVGElement>) => <Zap {...props} />,
    name: "Katalyst",
    description: "AI-powered tools to accelerate digital content creation.",
    status: "Building",
    link: "#",
  },
  {
    logo: (props: SVGProps<SVGSVGElement>) => <BrainCircuit {...props} />,
    name: "Project Synapse",
    description: "Connecting disparate digital systems into a cohesive ecosystem.",
    status: "Alpha",
    link: "#",
  },
];

const statusStyles: { [key: string]: string } = {
  Live: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  Building: "bg-chart-4/20 text-chart-4 border-chart-4/30",
  Beta: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Alpha: "bg-yellow-400/20 text-yellow-500 border-yellow-400/30",
};

export function VenturePortfolio() {
  return (
    <section id="ventures" className="py-20 lg:py-32 bg-card">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Ventures</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We build, operate, and scale a portfolio of companies designed to solve real-world problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture) => (
            <Link href={venture.link} key={venture.name} className="group block">
              <Card className="h-full flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                       <div className="p-3 rounded-lg bg-primary/10">
                        <venture.logo className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-headline text-xl">{venture.name}</CardTitle>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:rotate-45" />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="flex-grow mb-4">{venture.description}</CardDescription>
                  <Badge variant="outline" className={`${statusStyles[venture.status]} font-medium`}>
                    {venture.status}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
