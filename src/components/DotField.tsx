import React, { useRef, useEffect } from 'react';

const DotField = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let logicalWidth = window.innerWidth;
    let logicalHeight = window.innerHeight;
    
    // Configurações visuais
    const spacing = 25;
    const baseDotRadius = 1.5;
    const cursorRadius = 200;

    interface Dot {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      currentRadius: number;
    }

    let dots: Dot[] = [];

    const initDots = () => {
      dots = [];
      const columns = Math.ceil(logicalWidth / spacing);
      const rows = Math.ceil(logicalHeight / spacing);
      
      for (let i = 0; i <= columns; i++) {
        for (let j = 0; j <= rows; j++) {
          dots.push({
            baseX: i * spacing,
            baseY: j * spacing,
            x: i * spacing,
            y: j * spacing,
            currentRadius: baseDotRadius
          });
        }
      }
    };

    // Rastreio do rato
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Ajustar o canvas ao tamanho do ecrã e densidade de pixels
    const resizeCanvas = () => {
      logicalWidth = window.innerWidth;
      logicalHeight = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;
      ctx.scale(dpr, dpr);
      initDots();
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Loop de animação
    const draw = () => {
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      dots.forEach(dot => {
        let dxMouse = mouse.x - dot.baseX;
        let dyMouse = mouse.y - dot.baseY;
        let distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        let targetX = dot.baseX;
        let targetY = dot.baseY;
        let targetRadius = baseDotRadius;
        let targetOpacity = 0.4;

        if (distMouse < cursorRadius) {
          let force = (cursorRadius - distMouse) / cursorRadius;
          
          // Empurra para fora para criar relevo (valor positivo)
          let pushMouse = Math.sin(force * Math.PI) * 20;
          let angle = Math.atan2(dyMouse, dxMouse);
          targetX -= Math.cos(angle) * pushMouse;
          targetY -= Math.sin(angle) * pushMouse;

          // Aumenta o ponto para dar sensação de destaque
          targetRadius = baseDotRadius + (force * 1.8);
          targetOpacity = 0.4 + (force * 0.6);
        }

        // Interpolação suave (lerp) para movimento fluido
        dot.x += (targetX - dot.x) * 0.15;
        dot.y += (targetY - dot.y) * 0.15;
        dot.currentRadius += (targetRadius - dot.currentRadius) * 0.15;

        // Cor preta com opacidade dinâmica
        ctx.fillStyle = `rgba(0, 0, 0, ${targetOpacity})`;

        // Desenhar o ponto
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(0.1, dot.currentRadius), 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Limpeza ao desmontar
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  );
});

export default DotField;