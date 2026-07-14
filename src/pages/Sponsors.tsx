import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Sponsors() {
  const sponsors = [
    { id: 1, image: "/assets/images/sponsors/1.png", name: "Sponsor 1" },
    { id: 2, image: "/assets/images/sponsors/2.png", name: "Sponsor 2" },
    { id: 3, image: "/assets/images/sponsors/3.png", name: "Sponsor 3" },
    { id: 4, image: "/assets/images/sponsors/4.png", name: "Sponsor 4" },
    { id: 5, image: "/assets/images/sponsors/5.png", name: "Sponsor 5" },
    { id: 6, image: "/assets/images/sponsors/6.png", name: "Sponsor 6" },
  ];

  return (
    <div className="flex flex-col space-y-16 py-8">
      <section className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Our <span className="text-primary">Lovely Partners</span></h1>
        <p className="text-xl text-muted-foreground">We are grateful for the support of our sponsors who make Jengka FM possible.</p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
        {sponsors.map((sponsor) => (
          <Card key={sponsor.id} className="group overflow-hidden border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,0,0,0.15)] transition-all duration-300 bg-card">
            <CardContent className="p-8 flex items-center justify-center h-40">
              <img 
                src={sponsor.image} 
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 invert group-hover:invert-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/400x200/171717/a3a3a3?text=${sponsor.name}`;
                }}
              />
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-16 bg-primary/10 rounded-3xl p-12 text-center max-w-4xl mx-auto border border-primary/20 shadow-[0_0_30px_rgba(255,0,0,0.1)]">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Become a Sponsor</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join our growing list of partners and reach thousands of listeners across Pahang and globally through our online stream.
        </p>
        <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all bg-primary hover:bg-primary/90 text-primary-foreground">
          Contact Us for Sponsorship
        </Button>
      </section>
    </div>
  );
}
