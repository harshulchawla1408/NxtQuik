import { motion } from "framer-motion";
import logo from "@/assets/logo-nxtquik.jpg";

const HeroAnimation = () => {
  const word = "NxtQuik".split("");
  const particles = Array.from({ length: 60 });

  return (
    <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Glow behind content - project native animations */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[300px] md:w-[600px] h-[200px] md:h-[300px] bg-primary/8 blur-[100px] rounded-full animate-pulse" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-[150px] md:w-[200px] h-[150px] md:h-[200px] bg-accent/5 blur-[80px] rounded-full animate-float pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[180px] md:w-[250px] h-[180px] md:h-[250px] bg-nxtquik-cyan/5 blur-[80px] rounded-full animate-float pointer-events-none z-0" style={{ animationDelay: "3s" }} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 -mt-4 md:-mt-8">
        
        {/* Logo Container */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 flex flex-col items-center justify-center pointer-events-none">
          
          {/* Particle Implosion / Explosion */}
          {particles.map((_, i) => {
            const angle = (i / particles.length) * Math.PI * 2;
            const radius = 200 + Math.random() * 300;
            const startX = Math.cos(angle) * (radius + 200);
            const startY = Math.sin(angle) * (radius + 200);
            const endX = Math.cos(angle) * (radius + 400);
            const endY = Math.sin(angle) * (radius + 400);

            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"
                initial={{ x: startX, y: startY, scale: 0, opacity: 0 }}
                animate={{
                  x: [startX, 0, endX],
                  y: [startY, 0, endY],
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2.5,
                  times: [0, 0.4, 1], // Pull in fast, explode out.
                  ease: "easeInOut"
                }}
              />
            );
          })}

          {/* Actual Logo Appears from the converging particles */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0, filter: "blur(20px)" }}
            animate={{
              scale: [0, 1.1, 1],
              opacity: [0, 1, 1],
              filter: ["blur(20px)", "blur(0px)", "blur(0px)"]
            }}
            transition={{
              duration: 2,
              delay: 0.8,
              times: [0, 0.5, 1],
              ease: "easeOut"
            }}
          >
            <div className="relative">
              <img src={logo} alt="NxtQuik" className="w-20 h-20 md:w-28 md:h-28 rounded-2xl shadow-[0_0_50px_hsl(var(--primary)/0.6)] border border-primary/30" />
            </div>
          </motion.div>
        </div>

        {/* Word Text animation: Car Light trail sweeping over letters */}
        <div className="relative flex justify-center w-full max-w-4xl py-6 pointer-events-none">
           {/* Trail Sweep Backing Blur */}
           <motion.div
             className="absolute top-1/2 -translate-y-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent z-20"
             style={{ filter: "blur(6px)" }}
             initial={{ left: "-20%", opacity: 0 }}
             animate={{
               left: ["-20%", "120%"],
               opacity: [0, 1, 1, 0]
             }}
             transition={{
               duration: 1.5,
               delay: 1.5,
               times: [0, 0.1, 0.9, 1],
               ease: "easeInOut"
             }}
           />
           {/* Trail Sweep Core Light */}
           <motion.div
             className="absolute top-1/2 -translate-y-1/2 w-20 h-0.5 bg-white z-30"
             style={{ boxShadow: "0 0 30px 10px rgba(34, 211, 238, 0.8)" }}
             initial={{ left: "-20%", opacity: 0 }}
             animate={{
               left: ["-20%", "120%"],
               opacity: [0, 1, 1, 0]
             }}
             transition={{
               duration: 1.5,
               delay: 1.5,
               times: [0, 0.1, 0.9, 1],
               ease: "easeInOut"
             }}
           />

           <div className="flex justify-center gap-1 md:gap-2 text-[4rem] min-[400px]:text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter">
             {word.map((letter, i) => {
               // Calculate exact timing for each letter to light up as trail passes
               const letterDelay = 1.6 + (1.2 * (i / word.length));
               
               return (
                 <motion.div
                   key={i}
                   className="relative inline-block"
                   initial={{ opacity: 0, scale: 0.6, filter: "blur(15px)" }}
                   animate={{
                     opacity: [0, 1, 1],
                     scale: [0.6, 1.15, 1],
                     filter: ["blur(15px)", "blur(0px)", "blur(0px)"],
                   }}
                   transition={{
                     duration: 1.2,
                     delay: letterDelay,
                     times: [0, 0.5, 1],
                     ease: "easeOut"
                   }}
                 >
                   <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground relative z-10 leading-none">
                     {letter}
                   </span>
                   
                   {/* Extreme White Overlay Flash on hit */}
                   <motion.span 
                     className="absolute inset-0 text-white z-20 leading-none"
                     initial={{ opacity: 0, filter: "blur(0px)" }}
                     animate={{ 
                       opacity: [0, 1, 0], 
                       filter: ["blur(0px)", "blur(4px)", "blur(0px)"] 
                     }}
                     transition={{
                        duration: 0.6,
                        delay: letterDelay,
                     }}
                   >
                     {letter}
                   </motion.span>
                 </motion.div>
               );
             })}
           </div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 3.2,
            ease: "easeOut"
          }}
          className="mt-6 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 text-xl md:text-3xl font-medium text-muted-foreground tracking-wide text-center"
        >
          <span>Think Digital</span>
          <span className="hidden sm:inline-block text-primary mx-4">&bull;</span>
          <span>Think NxtQuik</span>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAnimation;
