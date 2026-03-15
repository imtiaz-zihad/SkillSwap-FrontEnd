"use client"

import { motion } from "framer-motion";
import { MessageSquare, Search, Video, Coins, Star } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Post Your Issue",
    description: "Describe your problem or skill you want to learn. Be specific about what you need help with.",
    color: "primary",
  },
  {
    icon: Search,
    title: "Find an Instructor",
    description: "Browse expert instructors, check their ratings, and choose the perfect match for your needs.",
    color: "instructor",
  },
  {
    icon: Video,
    title: "Join Video Call",
    description: "Connect with your instructor in a live video session. Share your screen and get hands-on help.",
    color: "success",
  },
  {
    icon: Coins,
    title: "Fixed Pricing",
    description: "Set a fixed coin price when posting your issue. No surprises — transparent and budget-friendly.",
    color: "coin",
  },
  {
    icon: Star,
    title: "Leave a Review",
    description: "Rate your experience and help others find great instructors. Build the community together.",
    color: "warning",
  },
];
const WorkStep=()=>{
return(
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">SkillSwap</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get help from experts in just a few simple steps. Our platform makes 
            it easy to connect, learn, and grow.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-6 text-center card-hover h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                      step.color === "primary"
                        ? "bg-primary/10"
                        : step.color === "instructor"
                        ? "bg-instructor/10"
                        : step.color === "success"
                        ? "bg-success/10"
                        : step.color === "coin"
                        ? "bg-coin/20"
                        : "bg-warning/10"
                    }`}
                  >
                    <step.icon
                      className={`w-7 h-7 ${
                        step.color === "primary"
                          ? "text-primary"
                          : step.color === "instructor"
                          ? "text-instructor"
                          : step.color === "success"
                          ? "text-success"
                          : step.color === "coin"
                          ? "text-coin"
                          : "text-warning"
                      }`}
                    />
                  </div>

                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
)
}
export default WorkStep;