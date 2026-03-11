"use client";
import { useEffect, useRef } from "react";

export default function InteractiveNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = 0;
    let height = 0;
    let animationId: number;
    const mouse = { x: -9999, y: -9999 };
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      // ✅ Usar el tamaño real del documento, no viewport height
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.scale(dpr, dpr);
    }

    resizeCanvas();

    const particleCount = window.innerWidth < 768 ? 40 : 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      });
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    // ✅ Touch support para móvil
    function handleTouchMove(e: TouchEvent) {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }

    function handleTouchEnd() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    function draw() {
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#d0d4d976";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(55,102,169,${1 - dist / 120})`;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = "#38bff8a5";
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(draw);
    }

    draw();

    // ✅ Debounce para evitar múltiples resizes rápidos en iOS
    let resizeTimer: ReturnType<typeof setTimeout>;
    function debouncedResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, 100);
    }

    window.addEventListener("resize", debouncedResize);
    window.addEventListener("orientationchange", () => {
      setTimeout(resizeCanvas, 300); // iOS necesita delay tras orientationchange
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", debouncedResize);
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimer);
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-bg" />;
}
