import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { NeupLogo } from "@/components/NeupLogo";

const leadership = [
  {
    name: "Kishor Kc",
    role: "Founder & CEO",
    imageUrl: "https://picsum.photos/seed/kishor/200/200",
    initials: "KK",
    bio: "Visionary leader with a passion for building scalable digital ecosystems from Nepal.",
  },
];

const teams = [
  {
    name: "Management",
    members: [
      {
        name: "Jane Doe",
        role: "Chief Operating Officer",
        imageUrl: "https://picsum.photos/seed/jane/200/200",
        initials: "JD",
      },
      {
        name: "John Smith",
        role: "Chief Technology Officer",
        imageUrl: "https://picsum.photos/seed/john/200/200",
        initials: "JS",
      },
      {
        name: "Emily White",
        role: "Head of Product",
        imageUrl: "https://picsum.photos/seed/emily/200/200",
        initials: "EW",
      },
    ],
  },
  {
    name: "Product & Engineering",
    members: [
      {
        name: "Michael Brown",
        role: "Senior Software Engineer",
        imageUrl: "https://picsum.photos/seed/michael/200/200",
        initials: "MB",
      },
      {
        name: "Sarah Green",
        role: "Backend Developer",
        imageUrl: "https://picsum.photos/seed/sarah/200/200",
        initials: "SG",
      },
      {
        name: "David Black",
        role: "Frontend Developer",
        imageUrl: "https://picsum.photos/seed/david/200/200",
        initials: "DB",
      },
      {
        name: "Laura Blue",
        role: "QA Engineer",
        imageUrl: "https://picsum.photos/seed/laura/200/200",
        initials: "LB",
      },
    ],
  },
  {
    name: "Design",
    members: [
      {
        name: "Chris Yellow",
        role: "Lead Product Designer",
        imageUrl: "https://picsum.photos/seed/chris/200/200",
        initials: "CY",
      },
      {
        name: "Amanda Purple",
        role: "UI/UX Designer",
        imageUrl: "https://picsum.photos/seed/amanda/200/200",
        initials: "AP",
      },
    ],
  },
  {
    name: "Marketing & Growth",
    members: [
      {
        name: "Olivia Red",
        role: "Growth Marketer",
        imageUrl: "https://picsum.photos/seed/olivia/200/200",
        initials: "OR",
      },
      {
        name: "Peter Orange",
        role: "Content Strategist",
        imageUrl: "https://picsum.photos/seed/peter/200/200",
        initials: "PO",
      },
    ],
  },
];

export default function TeamsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container text-center">
            <NeupLogo className="h-16 w-16 mx-auto text-primary" />
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-6">
              The People Building Neup Group
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
              We are a collective of thinkers, builders, and strategists united by a mission to build Nepal's digital future.
            </p>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 md:py-28">
            <div className="container max-w-4xl">
                <div className="text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Leadership</h2>
                    <p className="max-w-2xl mx-auto mt-2 text-muted-foreground">
                        Guiding the vision and strategy of Neup Group.
                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    {leadership.map((member) => (
                    <div key={member.name} className="flex flex-col items-center text-center max-w-sm">
                        <Avatar className="h-32 w-32 border-4 border-primary">
                            <AvatarImage src={member.imageUrl} alt={member.name} />
                            <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-2xl font-bold mt-6">{member.name}</h3>
                        <p className="text-primary font-semibold">{member.role}</p>
                        <p className="mt-2 text-muted-foreground">{member.bio}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Teams Sections */}
        {teams.map((team) => (
          <section key={team.name} className="py-20 md:py-28 bg-card last:pb-28">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">{team.name}</h2>
                <p className="max-w-2xl mx-auto mt-2 text-muted-foreground">
                  The talented individuals driving our {team.name.toLowerCase()} efforts.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
                {team.members.map((member) => (
                    <div key={member.name} className="flex flex-col items-center text-center">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={member.imageUrl} alt={member.name} />
                            <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <h4 className="font-semibold mt-4">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
