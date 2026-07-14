import { Card, CardContent } from "../components/ui/card";
import { Mic2, Radio, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col space-y-16 py-8">
      {/* Header Section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Mengenai <span className="text-primary">Jengka FM</span></h1>
        <p className="text-xl text-muted-foreground">Nadi penyiaran radio Pahang, menyatukan komuniti melalui melodi.</p>
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
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold tracking-wide uppercase">Kisah Kami</div>
          <h2 className="text-3xl font-bold text-foreground leading-tight">Sejarah Jengka FM</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sebuah stesen yang terletak di Pahang, Malaysia. Ia berpusat secara khusus di Jengka, iaitu sebuah bandar di bawah daerah Maran. 
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Jengka FM bermula dengan penstriman di Facebook Live, iaitu sejenis penstriman video, tetapi kini kami telah berpindah ke laman web. Ia adalah penstriman audio awan, yang bermaksud anda hanya perlu menekan butang main dan terus mendengarnya.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            DJ untuk stesen radio ini ialah <strong className="text-foreground">Kay Zack Hasbullah</strong> - anda boleh menghubunginya di Facebook untuk menjemput beliau sebagai salah seorang DJ di majlis perkahwinan anda.
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
            <h3 className="text-xl font-bold text-foreground">Penstriman Awan</h3>
            <p className="text-muted-foreground">Boleh diakses di mana-mana sahaja, pada bila-bila masa terus dari pelayar anda tanpa sebarang pemasangan.</p>
          </CardContent>
        </Card>
        <Card className="bg-card hover:shadow-xl transition-shadow border-border hover:border-primary/50">
          <CardContent className="p-8 text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 shadow-[0_0_15px_rgba(255,0,0,0.2)]">
              <Mic2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground">DJ Pakar</h3>
            <p className="text-muted-foreground">Dihoskan oleh DJ profesional yang membawakan anda campuran muzik dan hiburan terbaik.</p>
          </CardContent>
        </Card>
        <Card className="bg-card hover:shadow-xl transition-shadow border-border hover:border-primary/50">
          <CardContent className="p-8 text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 shadow-[0_0_15px_rgba(255,0,0,0.2)]">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Komuniti</h3>
            <p className="text-muted-foreground">Menghubungkan pendengar di seluruh Jengka dan seterusnya melalui minat yang sama terhadap muzik.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
