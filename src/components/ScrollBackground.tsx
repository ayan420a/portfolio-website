"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 75;

/**
 * Fixed full-screen canvas background that plays through video frames
 * as the user scrolls the entire page. Sits behind all content with a
 * dark overlay for readability.
 */
const ScrollBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Track global page scroll
  const { scrollYProgress } = useScroll();
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload all frames
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) setImagesLoaded(true);
      };
      img.onerror = () => {
        console.error(`Failed to load frame ${i}`);
        loadedCount++;
        if (loadedCount === FRAME_COUNT) setImagesLoaded(true);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Render loop — draws current frame based on scroll position
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const drawFrame = (img: HTMLImageElement) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = img.width / img.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let drawX = 0;
      let drawY = 0;

      if (canvasAspect > imgAspect) {
        drawHeight = canvas.width / imgAspect;
        drawY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgAspect;
        drawX = (canvas.width - drawWidth) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    const render = () => {
      const index = Math.round(frameIndex.get());
      const img = images[Math.min(Math.max(index, 0), FRAME_COUNT - 1)];
      drawFrame(img);
      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [imagesLoaded, images, frameIndex]);

  return (
    <div className="fixed inset-0 z-0">
      {/* Loading spinner */}
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-[#050505]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-3 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            <span className="text-xs text-white/30 tracking-[0.3em] uppercase">
              Loading frames...
            </span>
          </div>
        </div>
      )}

      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Dark overlay so text remains readable — gradient: lighter at top, darker as you scroll into content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 pointer-events-none" />
    </div>
  );
};

export default ScrollBackground;
