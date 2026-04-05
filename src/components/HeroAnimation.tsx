import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo-nxtquik.jpg";

const HeroAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; delay: number; color: string }[] = [];
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    for (let i = 0; i < 80; i++) {
      const colors = [
        "rgba(99,133,255,0.6)",
        "rgba(139,92,246,0.5)",
        "rgba(34,211,238,0.4)",
        "rgba(99,133,255,0.3)",
      ];
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, w, h);

      const orbs = [
        { x: w * 0.2, y: h * 0.3, r: 120, color: "rgba(99,133,255,0.04)" },
        { x: w * 0.8, y: h * 0.6, r: 100, color: "rgba(139,92,246,0.03)" },
        { x: w * 0.5, y: h * 0.5, r: 160, color: "rgba(34,211,238,0.025)" },
      ];

      orbs.forEach((orb, i) => {
        const ox = orb.x + Math.sin(time + i) * 30;
        const oy = orb.y + Math.cos(time + i * 1.3) * 20;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      particles.forEach((p, i) => {
        p.x += p.vx + Math.sin(time + p.delay) * 0.2;
        p.y += p.vy + Math.cos(time + p.delay) * 0.2;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,133,255,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Glow behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-primary/8 blur-[100px] rounded-full animate-pulse" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-accent/5 blur-[80px] rounded-full animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-nxtquik-cyan/5 blur-[80px] rounded-full animate-float" style={{ animationDelay: "3s" }} />

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo */}
        <div className={`mx-auto mb-6 transition-all duration-700 ${revealed ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
          <img
            src={logo}
            alt="NxtQuik Logo"
            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl mx-auto shadow-lg shadow-primary/20"
            onLoad={() => setLogoLoaded(true)}
          />
        </div>

        {/* NxtQuik slides in from right like a car — fast whoosh */}
        <div className="mb-4 overflow-hidden">
          <h1
            className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight transition-all duration-700 ease-out ${
              revealed
                ? "opacity-100 translate-x-0 blur-0"
                : "opacity-0 translate-x-[120%] blur-sm"
            }`}
            style={{
              transitionDelay: "600ms",
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--nxtquik-cyan)))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: revealed ? "drop-shadow(0 0 30px hsl(var(--primary) / 0.3))" : "none",
            }}
          >
            NxtQuik
          </h1>
        </div>

        {/* Speed trail effect */}
        <div className={`flex justify-center gap-1 mb-2 transition-all duration-500 ${revealed ? "opacity-60" : "opacity-0"}`} style={{ transitionDelay: "700ms" }}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-[2px] rounded-full"
              style={{
                width: `${60 - i * 10}px`,
                background: `linear-gradient(90deg, transparent, hsl(var(--primary) / ${0.5 - i * 0.1}))`,
                animationDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>

        {/* Glowing line */}
        <div className={`mx-auto mb-6 h-px transition-all duration-1000 delay-1000 ${
          revealed ? "w-48 opacity-100" : "w-0 opacity-0"
        }`} style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--nxtquik-cyan)), transparent)" }} />

        {/* Tagline */}
        <p className={`text-xl md:text-2xl font-medium max-w-2xl mx-auto transition-all duration-700 delay-[1200ms] ${
          revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`} style={{
          background: "linear-gradient(90deg, hsl(var(--foreground)), hsl(var(--muted-foreground)))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Think Digital. Think NxtQuik.
        </p>
      </div>
    </div>
  );
};

export default HeroAnimation;
