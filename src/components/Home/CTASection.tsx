"use client";
import { motion } from "framer-motion";
import { ArrowRight, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const roles = [
  {
    icon: Users,
    title: "Join as a User",
    description:
      "Get help from experts. Post issues, book sessions, and learn new skills from verified instructors.",
    features: [
      "Post unlimited issues",
      "Choose your instructor",
      "Pay only for time used",
      "Leave reviews",
    ],
    cta: "Start Learning",
    href: "/register?role=user",
    color: "user",
  },
  {
    icon: GraduationCap,
    title: "Become an Instructor",
    description:
      "Share your expertise and earn coins. Help others while building your reputation as an expert.",
    features: [
      "Earn coins per issue",
      "Flexible schedule",
      "Build your profile",
      "Grow your reputation",
    ],
    cta: "Start Teaching",
    href: "/register?role=instructor",
    color: "instructor",
  },
];

const CTASection = () => {
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
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you want to learn or teach, SkillSwap has a place for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card border rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                role.color === "user"
                  ? "border-user/30 hover:shadow-[0_20px_40px_-10px_hsl(var(--user)/0.35)]"
                  : "border-instructor/30 hover:shadow-[0_20px_40px_-10px_hsl(var(--instructor)/0.35)]"
              }`}
            >
              {/* Background glow */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl ${
                  role.color === "user" ? "bg-user/10" : "bg-instructor/10"
                }`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center ${
                  role.color === "user" ? "bg-user/10" : "bg-instructor/10"
                }`}
              >
                <role.icon
                  className={`w-7 h-7 ${
                    role.color === "user" ? "text-user" : "text-instructor"
                  }`}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{role.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6">{role.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {role.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        role.color === "user" ? "bg-user" : "bg-instructor"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                className={`w-full group ${
                  role.color === "user"
                    ? "bg-user hover:bg-user/90"
                    : "bg-instructor hover:bg-instructor/90"
                }`}
              >
                <Link href={role.href}>
                  {role.cta}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;