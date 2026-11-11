import React, { useEffect, useRef } from 'react';

export const SPOTLIGHT_R = 260;

interface RevealLayerProps {
  image: string;
  cursorX: number;
  cursorY: number;
}

export const RevealLayer: React.FC<RevealLayerProps> = ({
  image,
  cursorX,
  cursorY,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const revealDivRef = useRef<HTMLDivElement | null>(null);

  // Handle canvas sizing on mount and window resize
  useEffect(() => {
    const updateSize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Update canvas gradient and apply mask directly to DOM style without triggering React setState loops
  useEffect(() => {
    const canvas = canvasRef.current;
    const revealDiv = revealDivRef.current;
    if (!canvas || !revealDiv) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Check if cursor is on or near screen
    if (
      cursorX > -SPOTLIGHT_R &&
      cursorY > -SPOTLIGHT_R &&
      cursorX < canvas.width + SPOTLIGHT_R &&
      cursorY < canvas.height + SPOTLIGHT_R
    ) {
      const gradient = ctx.createRadialGradient(
        cursorX,
        cursorY,
        0,
        cursorX,
        cursorY,
        SPOTLIGHT_R
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.4, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.75)');
      gradient.addColorStop(0.75, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(0.88, 'rgba(255, 255, 255, 0.12)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
      ctx.fill();

      try {
        const dataUrl = canvas.toDataURL('image/png');
        revealDiv.style.webkitMaskImage = `url(${dataUrl})`;
        revealDiv.style.maskImage = `url(${dataUrl})`;
        revealDiv.style.webkitMaskSize = '100% 100%';
        revealDiv.style.maskSize = '100% 100%';
        revealDiv.style.webkitMaskRepeat = 'no-repeat';
        revealDiv.style.maskRepeat = 'no-repeat';
        revealDiv.style.opacity = '1';
      } catch (err) {
        // Fallback for unexpected context restrictions
        const cssGrad = `radial-gradient(circle ${SPOTLIGHT_R}px at ${cursorX}px ${cursorY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.12) 88%, rgba(0,0,0,0) 100%)`;
        revealDiv.style.webkitMaskImage = cssGrad;
        revealDiv.style.maskImage = cssGrad;
        revealDiv.style.opacity = '1';
      }
    } else {
      revealDiv.style.opacity = '0';
      revealDiv.style.webkitMaskImage = 'none';
      revealDiv.style.maskImage = 'none';
    }
  }, [cursorX, cursorY]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ display: 'none' }}
      />
      <div
        ref={revealDivRef}
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none"
        style={{
          backgroundImage: `url("${image}")`,
          opacity: 0,
        }}
      />
    </>
  );
};
