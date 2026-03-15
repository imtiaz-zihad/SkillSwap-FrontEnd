"use client";
import { motion } from "framer-motion";
import { Star, Video, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CoinBadge } from "@/components/ui/CoinBadge";
import Link from "next/link";

const instructors = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    specialty: "React & TypeScript",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 60,
    isOnline: true,
  },
  {
    id: "2",
    name: "Marcus Johnson",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    specialty: "Python & Data Science",
    rating: 4.8,
    reviews: 89,
    hourlyRate: 55,
    isOnline: true,
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    specialty: "UI/UX Design",
    rating: 4.9,
    reviews: 156,
    hourlyRate: 50,
    isOnline: false,
  },
  {
    id: "4",
    name: "James Kim",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    specialty: "DevOps & Cloud",
    rating: 4.7,
    reviews: 72,
    hourlyRate: 65,
    isOnline: true,
  },
];
const TopInstructors = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Top <span className="text-gradient">Instructors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from verified experts with proven track records. Each
            instructor is rated by real users.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <div className="relative mb-4">
                <Avatar className="w-20 h-20 mx-auto">
                  <AvatarImage src={instructor.avatar} alt={instructor.name} />
                  <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {instructor.isOnline && (
                  <div className="absolute bottom-0 right-1/2 translate-x-6 w-4 h-4 bg-success rounded-full border-2 border-card" />
                )}
              </div>

              <div className="text-center mb-4">
                <h3 className="font-semibold mb-1">{instructor.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {instructor.specialty}
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-coin fill-coin" />
                  <span className="font-medium">{instructor.rating}</span>
                  <span className="text-muted-foreground">
                    ({instructor.reviews})
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{instructor.hourlyRate} coins/min</span>
                </div>
                <CoinBadge amount={instructor.hourlyRate} size="sm" />
              </div>

              <Button variant="outline" className="w-full" size="sm">
                <Video className="w-4 h-4 mr-2" />
                Book Session
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link href="/instructors">
            <Button variant="ghost" size="lg">
              View All Instructors
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default TopInstructors;
