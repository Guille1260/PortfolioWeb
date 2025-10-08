import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorDot = useRef(null);
  const cursorAura = useRef(null);
  const cursorOutline = useRef(null);
  const cursorWave = useRef(null);

  useEffect(() => {
    if ("ontouchstart" in window || window.innerWidth < 1204) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;
    let auraX = mouseX;
    let auraY = mouseY;
    let rafId = null;

    const DOT = 8;
    const AURA = 34;
    const OUTLINE = 50;
    const WAVE = 80;

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const update = () => {
      outlineX = lerp(outlineX, mouseX, 0.12);
      outlineY = lerp(outlineY, mouseY, 0.12);
      auraX = lerp(auraX, mouseX, 0.22);
      auraY = lerp(auraY, mouseY, 0.22);

      if (cursorDot.current)
        cursorDot.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      if (cursorAura.current)
        cursorAura.current.style.transform = `translate3d(${auraX}px, ${auraY}px, 0)`;
      if (cursorOutline.current)
        cursorOutline.current.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;

      rafId = requestAnimationFrame(update);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    const handleClick = (e) => {
      if (!cursorWave.current) return;
      const clone = cursorWave.current.cloneNode(true);
      clone.classList.add("wave--clone");
      clone.style.position = "fixed"; // 🔑 hace que funcione en toda la pantalla
      clone.style.left = `${e.clientX - WAVE / 2}px`;
      clone.style.top = `${e.clientY - WAVE / 2}px`;
      document.body.appendChild(clone);
      clone.addEventListener("animationend", () => clone.remove());
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="cursor-outline" ref={cursorOutline}></div>
      <div className="cursor-aura" ref={cursorAura}></div>
      <div className="cursor-dot" ref={cursorDot}></div>
      <div className="wave" ref={cursorWave}>
        <div className="shape circle big"></div>
        <div className="shape circle small"></div>
      </div>
    </>
  );
};

export default Cursor;
