"use client"
import Link from "next/link"
import { motion } from "framer-motion";
import { ArrowRight, Coins, Video, Star, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () =>{
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-150 h-150 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-coin/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Micro Skills, Major Impact</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Learn Any Skill
              <br />
              <span className="text-gradient">One Call Away</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Connect with expert instructors for live video sessions. Post your problem, 
              find the right mentor, and master new skills — all powered by our fair coin system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild className="group">
                <Link href="/register">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works">
                  See How It Works
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-2xl font-bold text-gradient">5K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient">200+</div>
                <div className="text-sm text-muted-foreground">Expert Instructors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient">5K+</div>
                <div className="text-sm text-muted-foreground">Issues Solved</div>
              </div>
            </div>
          </motion.div>

          {/* Right content - Feature cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Feature card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-lg card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Live Video Calls</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time 1-on-1 sessions with screen sharing
                </p>
              </motion.div>

              {/* Feature card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-lg card-hover mt-8"
              >
                <div className="w-12 h-12 rounded-xl bg-coin/20 flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6 text-coin" />
                </div>
                <h3 className="font-semibold mb-2">Fair Coin System</h3>
                <p className="text-sm text-muted-foreground">
                  Fixed pricing — pay upfront per issue
                </p>
              </motion.div>

              {/* Feature card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-lg card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Verified Reviews</h3>
                <p className="text-sm text-muted-foreground">
                  Rate instructors and build trust in the community
                </p>
              </motion.div>

              {/* Feature card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-lg card-hover mt-8"
              >
                <div className="w-12 h-12 rounded-xl bg-instructor/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-instructor" />
                </div>
                <h3 className="font-semibold mb-2">Expert Instructors</h3>
                <p className="text-sm text-muted-foreground">
                  Vetted professionals across 100+ skill categories
                </p>
              </motion.div>
            </div>

            {/* Floating coin animation */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 right-8 w-16 h-16 rounded-full bg-coin-gradient shadow-coin flex items-center justify-center"
            >
              <Coins className="w-8 h-8 text-coin-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    )
}

export default Hero;