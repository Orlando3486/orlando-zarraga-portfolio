// "use client";

// import { useEffect, useRef } from "react";

// export default function InteractiveNetwork() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;

//     let width = 0;
//     let height = 0;

//     function resizeCanvas() {
//       width = canvas.width = document.documentElement.clientWidth;
//       height = canvas.height = document.documentElement.clientHeight;
//     }

//     resizeCanvas();

//     const mouse = { x: width / 2, y: height / 2 };

//     const particleCount = window.innerWidth < 768 ? 40 : 80;

//     const particles = Array.from({ length: particleCount }).map(() => ({
//       x: Math.random() * width,
//       y: Math.random() * height,
//       vx: (Math.random() - 0.5) * 0.6,
//       vy: (Math.random() - 0.5) * 0.6,
//     }));

//     window.addEventListener("mousemove", (e) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     });

//     function draw() {
//       ctx.fillStyle = "#020617bc";
//       ctx.fillRect(0, 0, width, height);

//       particles.forEach((p) => {
//         p.x += p.vx;
//         p.y += p.vy;

//         if (p.x < 0 || p.x > width) p.vx *= -1;
//         if (p.y < 0 || p.y > height) p.vy *= -1;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
//         ctx.fillStyle = "#d0d4d976";
//         ctx.fill();
//       });

//       // conexiones
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < 120) {
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.strokeStyle = `rgba(55, 102, 169, ${1 - dist / 120})`;
//             ctx.stroke();
//           }
//         }
//       }

//       // interacción mouse
//       particles.forEach((p) => {
//         const dx = p.x - mouse.x;
//         const dy = p.y - mouse.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);

//         if (dist < 140) {
//           ctx.beginPath();
//           ctx.moveTo(p.x, p.y);
//           ctx.lineTo(mouse.x, mouse.y);
//           ctx.strokeStyle = "#38bff8a5";
//           ctx.stroke();
//         }
//       });

//       requestAnimationFrame(draw);
//     }

//     draw();

//     window.addEventListener("resize", resizeCanvas);
//     window.addEventListener("orientationchange", resizeCanvas);
//   }, []);

//   return <canvas ref={canvasRef} className="interactive-bg" />;
// }

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

    const mouse = { x: 0, y: 0 };

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
    }[] = [];

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;

      width = document.documentElement.clientWidth;
      height = document.documentElement.clientHeight;

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

    window.addEventListener("mousemove", handleMouseMove);

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

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("orientationchange", resizeCanvas);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("orientationchange", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-bg" />;
}
