"use client"
import { motion } from "framer-motion";
import { Coins, CreditCard, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    coins: 50,
    price: 5,
    popular: false,
  },
  {
    coins: 120,
    price: 10,
    popular: true,
    bonus: 20,
  },
  {
    coins: 300,
    price: 20,
    popular: false,
    bonus: 60,
  },
];


const CoinPricing = () =>{
    return (
        <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coin/20 border border-coin/30 mb-6">
            <Coins className="w-4 h-4 text-coin" />
            <span className="text-sm font-medium text-coin-foreground">Simple Pricing</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Buy Coins, Learn <span className="text-gradient">Anything</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Use coins to post issues and reward instructors. No subscriptions, no hidden fees. 
            Buy what you need, use it anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.coins}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card border rounded-2xl p-6 text-center card-hover ${
                pkg.popular 
                  ? "border-primary shadow-glow" 
                  : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-coin-gradient mx-auto mb-4 flex items-center justify-center shadow-coin">
                  <Coins className="w-8 h-8 text-coin-foreground" />
                </div>
                <div className="text-3xl font-bold mb-1">
                  {pkg.coins} <span className="text-lg font-normal text-muted-foreground">coins</span>
                </div>
                {pkg.bonus && (
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-medium">
                    <Zap className="w-3 h-3" />
                    +{pkg.bonus} bonus coins
                  </div>
                )}
              </div>

              <div className="text-4xl font-bold mb-6">
                ${pkg.price}
              </div>

              <Button 
                className={`w-full ${pkg.popular ? "" : "variant-outline"}`}
                variant={pkg.popular ? "default" : "outline"}
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Buy Now
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
          <p className="text-sm text-muted-foreground">
            All payments are secure and encrypted. Coins never expire.
          </p>
        </motion.div>
      </div>
    </section>
    )
}

export default CoinPricing;