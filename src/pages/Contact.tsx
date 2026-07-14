import { useState, FormEvent } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    // Construct WhatsApp message
    const waText = `*New Contact Message*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(waText);
    const phoneNumber = "60136339144";
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <div className="flex flex-col space-y-16 py-8">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Get In <span className="text-primary">Touch</span></h1>
        <p className="text-xl text-muted-foreground">Have a question, feedback, or want to become a sponsor? We'd love to hear from you.</p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        {/* Contact Info */}
        <div className="h-full">
          <Card className="bg-card border border-border shadow-[0_0_20px_rgba(255,0,0,0.1)] rounded-2xl overflow-hidden h-full">
            <CardContent className="p-8 space-y-8">
              <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Our Location</h3>
                  <p className="text-muted-foreground mt-1">Jengka, Maran District<br />Pahang, Malaysia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Phone Number</h3>
                  <p className="text-muted-foreground mt-1">+60 13-633 9144</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Email Address</h3>
                  <p className="text-muted-foreground mt-1">info@jengkafm.com.my</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="bg-card shadow-[0_0_20px_rgba(255,0,0,0.1)] rounded-2xl border border-border h-full">
          <CardContent className="p-8 h-full">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="name">Your Name</label>
                <Input id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required maxLength={50} pattern="[a-zA-Z\s\-']+" title="Only letters, spaces, hyphens, and apostrophes are allowed" className="bg-background/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="email">Email Address</label>
                <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required maxLength={100} className="bg-background/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="subject">Subject</label>
                <Input id="subject" placeholder="How can we help you?" value={formData.subject} onChange={handleChange} required maxLength={100} className="bg-background/50 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={1000}
                  className="flex min-h-[120px] w-full rounded-md border border-border bg-background/50 px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 text-foreground" 
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full h-12 text-lg group bg-primary hover:bg-primary/90 text-primary-foreground">
                Send via WhatsApp
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
