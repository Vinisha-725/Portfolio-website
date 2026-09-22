"use client";

import { useEffect, useRef, useState } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    
    return () => observer.disconnect();
  }, []);

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

    // Animated gradient blobs
    const blobs = isDarkMode
      ? [
          { x: 0.2, y: 0.3, radius: 0, maxRadius: 600, color: "#1e1b4b", speed: 0.002, phase: 0 },
          { x: 0.8, y: 0.2, radius: 0, maxRadius: 500, color: "#1e3a5f", speed: 0.003, phase: 2 },
          { x: 0.5, y: 0.8, radius: 0, maxRadius: 550, color: "#2d1b3d", speed: 0.0025, phase: 4 },
          { x: 0.3, y: 0.6, radius: 0, maxRadius: 450, color: "#0f2e3a", speed: 0.0015, phase: 1 },
          { x: 0.7, y: 0.5, radius: 0, maxRadius: 480, color: "#1a2f3d", speed: 0.0022, phase: 3 },
        ]
      : [
          { x: 0.2, y: 0.3, radius: 0, maxRadius: 600, color: "#6366f1", speed: 0.002, phase: 0 },
          { x: 0.8, y: 0.2, radius: 0, maxRadius: 500, color: "#8b5cf6", speed: 0.003, phase: 2 },
          { x: 0.5, y: 0.8, radius: 0, maxRadius: 550, color: "#ec4899", speed: 0.0025, phase: 4 },
          { x: 0.3, y: 0.6, radius: 0, maxRadius: 450, color: "#06b6d4", speed: 0.0015, phase: 1 },
          { x: 0.7, y: 0.5, radius: 0, maxRadius: 480, color: "#f59e0b", speed: 0.0022, phase: 3 },
        ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Base gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      if (isDarkMode) {
        bgGradient.addColorStop(0, "#030305");
        bgGradient.addColorStop(0.5, "#0a0a0f");
        bgGradient.addColorStop(1, "#030305");
      } else {
        bgGradient.addColorStop(0, "#1a1a2e");
        bgGradient.addColorStop(0.5, "#16213e");
        bgGradient.addColorStop(1, "#1a1a2e");
      }
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate and draw blobs
      blobs.forEach((blob, index) => {
        // Update position with smooth movement
        blob.x = 0.5 + Math.sin(time * blob.speed + blob.phase) * 0.3;
        blob.y = 0.5 + Math.cos(time * blob.speed * 0.8 + blob.phase) * 0.3;
        
        // Pulsing radius
        blob.radius = blob.maxRadius * (0.8 + Math.sin(time * 0.5 + blob.phase) * 0.2);

        const x = blob.x * canvas.width;
        const y = blob.y * canvas.height;

        // Create radial gradient for blob
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, blob.radius);
        
        if (isDarkMode) {
          gradient.addColorStop(0, blob.color + "40");
          gradient.addColorStop(0.5, blob.color + "20");
          gradient.addColorStop(1, blob.color + "00");
        } else {
          gradient.addColorStop(0, blob.color + "50");
          gradient.addColorStop(0.5, blob.color + "25");
          gradient.addColorStop(1, blob.color + "00");
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add floating geometric shapes
      const shapeCount = 15;
      for (let i = 0; i < shapeCount; i++) {
        const angle = (i / shapeCount) * Math.PI * 2 + time * 0.2;
        const radiusX = canvas.width * 0.35 + Math.sin(time * 0.3 + i) * 50;
        const radiusY = canvas.height * 0.35 + Math.cos(time * 0.3 + i) * 50;
        
        const x = canvas.width / 2 + Math.cos(angle) * radiusX;
        const y = canvas.height / 2 + Math.sin(angle) * radiusY;
        const size = 3 + Math.sin(time + i * 0.5) * 2;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode
          ? `rgba(100, 100, 120, ${0.12 + Math.sin(time + i) * 0.06})`
          : `rgba(255, 255, 255, ${0.18 + Math.sin(time + i) * 0.1})`;
        ctx.fill();
      }

      // Add connecting lines between nearby particles
      ctx.strokeStyle = isDarkMode
        ? "rgba(100, 100, 120, 0.04)"
        : "rgba(255, 255, 255, 0.06)";
      ctx.lineWidth = 1;

      for (let i = 0; i < shapeCount; i++) {
        const angle1 = (i / shapeCount) * Math.PI * 2 + time * 0.2;
        const x1 = canvas.width / 2 + Math.cos(angle1) * (canvas.width * 0.35 + Math.sin(time * 0.3 + i) * 50);
        const y1 = canvas.height / 2 + Math.sin(angle1) * (canvas.height * 0.35 + Math.cos(time * 0.3 + i) * 50);

        for (let j = i + 1; j < shapeCount; j++) {
          const angle2 = (j / shapeCount) * Math.PI * 2 + time * 0.2;
          const x2 = canvas.width / 2 + Math.cos(angle2) * (canvas.width * 0.35 + Math.sin(time * 0.3 + j) * 50);
          const y2 = canvas.height / 2 + Math.sin(angle2) * (canvas.height * 0.35 + Math.cos(time * 0.3 + j) * 50);

          const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
