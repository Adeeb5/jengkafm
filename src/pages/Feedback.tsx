import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Feedback() {
  const feedbacks = [
    {
      id: 1,
      name: "Ahmad Faizal",
      role: "Listener",
      content: "Jengka FM always plays the best hits! DJ Kay Zack Hasbullah made my wedding day unforgettable. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      role: "Local Business Owner",
      content: "I love tuning in every morning. The local news and updates are fantastic for our community.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mohd Ridzuan",
      role: "Loyal Fan",
      content: "The audio quality is crystal clear, and the song requests are always handled so well. Keep it up Jengka FM!",
      rating: 4,
    },
    {
      id: 4,
      name: "Nurul Ain",
      role: "Listener",
      content: "My favorite radio station hands down. The DJs are super engaging and always know how to set the mood.",
      rating: 5,
    }
  ];

  return (
    <div className="space-y-16 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Listener <span className="text-primary">Feedback</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Hear what our amazing listeners have to say about Jengka FM!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {feedbacks.map((feedback, index) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-card border border-border p-8 rounded-2xl shadow-md transition-shadow hover:shadow-[0_0_20px_rgba(255,0,0,0.15)] hover:border-primary/50"
          >
            <div className="flex items-center space-x-1 mb-6 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-6 w-6 ${i < feedback.rating ? 'fill-current' : 'text-gray-300 dark:text-gray-700'}`} />
              ))}
            </div>
            <p className="text-lg text-foreground mb-8 italic">"{feedback.content}"</p>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">{feedback.name}</span>
              <span className="text-sm font-medium text-muted-foreground">{feedback.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
