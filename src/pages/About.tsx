import { Card, CardContent } from "../components/ui/card";
import { Mic2, Radio, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col space-y-16 py-8">
      {/* Header Section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">About <span className="text-primary">Jengka FM</span></h1>
        <p className="text-xl text-muted-foreground">The heart of Pahang's radio broadcasting, bringing communities together through melodies.</p>
      </section>

      {/* History Section */}
      <section className="grid lg:grid-cols-[1fr_1.1fr] gap-12 md:gap-16 items-center">
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] border border-border z-10">
            <img 
              src="/assets/images/about/left-img2.jpg" 
              alt="Radio Studio" 
              className="w-full h-full object-cover"
            />
          </div>
          <motion.img
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            src="/assets/images/about/about-circle.png"
            alt="Vinyl Record"
            className="absolute top-1/2 -translate-y-1/2 -right-16 md:-right-24 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 z-20 drop-shadow-2xl hidden sm:block"
          />
        </div>
        <div className="space-y-6 relative z-10 md:ml-12 lg:ml-20">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold tracking-wide uppercase">Our Story</div>
          <h2 className="text-3xl font-bold text-foreground leading-tight">History of Jengka FM</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A station located in Pahang, Malaysia. It's specifically based in Jengka, which is a city under the district of Maran. 
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Jengka FM started streaming on Facebook Live, which is a type of video streaming, but currently we've moved to the website. It's cloud audio streaming, which means you just press play and listen to it.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The DJ for this radio station is <strong className="text-foreground">Kay Zack Hasbullah</strong> - you may contact him on Facebook to be one of your DJs at your wedding.
          </p>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="grid sm:grid-cols-3 gap-6 pt-8">
        <Card className="bg-card hover:shadow-xl transition-shadow border-border hover:border-primary/50">
          <CardContent className="p-8 text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 shadow-[0_0_15px_rgba(255,0,0,0.2)]">
              <Radio className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Cloud Streaming</h3>
            <p className="text-muted-foreground">Accessible anywhere, anytime directly from your browser without any installations.</p>
          </CardContent>
        </Card>
        <Card className="bg-card hover:shadow-xl transition-shadow border-border hover:border-primary/50">
          <CardContent className="p-8 text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 shadow-[0_0_15px_rgba(255,0,0,0.2)]">
              <Mic2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Expert DJs</h3>
            <p className="text-muted-foreground">Hosted by professional DJs bringing you the best music mixes and entertainment.</p>
          </CardContent>
        </Card>
        <Card className="bg-card hover:shadow-xl transition-shadow border-border hover:border-primary/50">
          <CardContent className="p-8 text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 shadow-[0_0_15px_rgba(255,0,0,0.2)]">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Community</h3>
            <p className="text-muted-foreground">Connecting listeners across Jengka and beyond through a shared love for music.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
