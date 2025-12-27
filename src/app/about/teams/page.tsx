
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Kishor Neupane",
    role: "Founder & CEO",
    imageUrl: "https://neupgroup.com/assets/members/neupkishor.png",
    initials: "KN",
  },
  {
    name: "Bhawani Khanal",
    role: "Marketing Head",
    imageUrl: "https://neupgroup.com/assets/members/khanalcwani.png",
    initials: "BK",
  },
  {
    name: "Sandesh Shrestha",
    role: "Development Head",
    imageUrl: "https://neupgroup.com/assets/members/sandeshshrestha.png",
    initials: "SS",
  },
  {
    name: "Aakash Pun Magar",
    role: "Cybersecurity Head",
    imageUrl: "https://neupgroup.com/assets/members/aakashpun.png",
    initials: "AP",
  },
];

export default function TeamsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-4xl">
              Meet Our Team
            </h1>
            <p className="max-w-2xl mt-4 text-muted-foreground md:text-xl">
              Our team is dedicated to making your experience unforgettable. Get to know the people behind Neup Group.
            </p>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="py-20 md:py-28">
            <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                    <div key={member.name} className="flex flex-col items-start text-left">
                        <img 
                            src={member.imageUrl} 
                            alt={member.name} 
                            className="w-full aspect-square object-cover rounded-lg"
                        />
                        <h3 className="font-bold text-xl mt-4">{member.name}</h3>
                        <p className="text-primary font-semibold">{member.role}</p>
                    </div>
                ))}
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}
