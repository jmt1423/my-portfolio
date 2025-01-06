import * as motion from "motion/react-client";
import { useMotionValue, useTransform, useSpring } from "framer-motion";
import type { MouseEventHandler } from "react";

export default function ProjectsCardReact() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]); // Y-axis affects X rotation
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (event: any) => {
    const rect = event.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    console.log(rotateX);
  };
  const handleMouseLeave = () => {
    y.set(0);
    x.set(0);
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 1.1,
        scale: { type: "spring", visualDuration: 0.4 },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX as any,
        rotateY: rotateY as any,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
        }}
        className="w-96 h-80 backdrop-blur-lg shadow-black shadow-lg bg-gray-800/20 border-2 rounded-2xl border-pink-900 flex justify-center flex-row"
      >
        <p className="mt-5">My Projects</p>
      </div>
    </motion.div>
  );
}
