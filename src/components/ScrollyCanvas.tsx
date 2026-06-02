"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 75; // Adjust this based on actual frame count in /public/sequence/

const ScrollyCanvas = ({ children }: { children?: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Map scroll progress (0 to 1) to frame index (0 to FRAME_COUNT - 1)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all images
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        // Construct the filename (e.g., frame_00_delay-0.071s.png)
        const frameNum = i.toString().padStart(2, "0");
        img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;

        img.onload = () => {
          loadedCount++;
          if (loadedCount === FRAME_COUNT) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
            console.error(`Failed to load frame ${i}`);
            loadedCount++; // Still increment to prevent getting stuck if a few frames fail
            if (loadedCount === FRAME_COUNT) {
                setImagesLoaded(true);
            }
        }
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const index = Math.round(frameIndex.get());
      const img = images[Math.min(index, FRAME_COUNT - 1)];

      if (img && img.complete && img.naturalWidth > 0) {
        // Handle object-fit: cover logic
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let drawX = 0;
        let drawY = 0;

        if (canvasAspect > imgAspect) {
          // Canvas is wider than image aspect ratio, fit width, crop height
          drawHeight = canvas.width / imgAspect;
          drawY = (canvas.height - drawHeight) / 2;
        } else {
          // Canvas is taller than image aspect ratio, fit height, crop width
          drawWidth = canvas.height * imgAspect;
          drawX = (canvas.width - drawWidth) / 2;
        }

        // Clear canvas before drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Handle Resize
    const handleResize = () => {
      if (canvasRef.current) {
        // Set actual canvas resolution to window size for sharpness
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Trigger a render immediately after resize
        const index = Math.round(frameIndex.get());
        const img = images[Math.min(index, FRAME_COUNT - 1)];
        if(img && img.complete) {
            const ctx = canvasRef.current.getContext('2d');
            if(ctx) {
                const canvasAspect = canvasRef.current.width / canvasRef.current.height;
                const imgAspect = img.width / img.height;

                let drawWidth = canvasRef.current.width;
                let drawHeight = canvasRef.current.height;
                let drawX = 0;
                let drawY = 0;

                if (canvasAspect > imgAspect) {
                  drawHeight = canvasRef.current.width / imgAspect;
                  drawY = (canvasRef.current.height - drawHeight) / 2;
                } else {
                  drawWidth = canvasRef.current.height * imgAspect;
                  drawX = (canvasRef.current.width - drawWidth) / 2;
                }
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
            }
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup
    render(); // Start loop

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [imagesLoaded, images, frameIndex]);

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full bg-[#121212]" style={{ position: "relative" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-50 bg-[#121212]">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />

        {/* Pass scrollYProgress to children (Overlay) */}
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<any>, { scrollYProgress })
            : child
        )}
      </div>
    </div>
  );

};

export default ScrollyCanvas;
