
import { Card, CardContent } from "@/components/ui/card";
import { Mountain } from "lucide-react";

const clients = [
  {
    name: "Happy Mountain Nepal",
    services: "Neup.Marketing, Neup.Site",
    icon: <Mountain className="h-10 w-10 text-primary" />,
  },
  // You can add more clients here
];

export function OurClients() {
  return (
    <section id="clients" className="py-20 lg:py-32 bg-card">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Clients</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We are proud to partner with ambitious brands and help them grow.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {clients.map((client) => (
            <Card key={client.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {client.icon}
                </div>
                <div>
                  <p className="text-xl font-bold">{client.name}</p>
                  <p className="text-muted-foreground">Services: {client.services}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
