"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // Create flowing wave effect
      const colors = isDarkMode
        ? [
            { r: 99, g: 102, b: 241, a: 0.03 }, // Indigo
            { r: 168, g: 85, b: 247, a: 0.025 }, // Purple
            { r: 236, g: 72, b: 153, a: 0.02 }, // Pink
          ]
        : [
            { r: 224, g: 231, b: 255, a: 0.6 }, // Soft blue
            { r: 250, g: 232, b: 255, a: 0.5 }, // Soft purple
            { r: 254, g: 243, b: 199, a: 0.4 }, // Soft yellow
          ];

      for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        const yOffset = i * 200;
        
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 10) {
          const y =
            canvas.height * 0.7 +
            yOffset +
            Math.sin(x * 0.003 + time + i) * 80 +
            Math.sin(x * 0.005 + time * 0.5 + i * 2) * 40;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Add subtle floating particles
      const particleCount = isDarkMode ? 30 : 50;
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time * 0.5 + i * 0.5) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.3 + i * 0.7) * 0.5 + 0.5) * canvas.height;
        const size = isDarkMode ? 1 + Math.sin(time + i) * 0.5 : 2 + Math.sin(time + i) * 1;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode
          ? `rgba(255, 255, 255, ${0.1 + Math.sin(time + i) * 0.05})`
          : `rgba(100, 100, 100, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
