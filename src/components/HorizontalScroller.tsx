import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const HorizontalScroller = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Adjust the distance based on number of items (each item = 100vw)
  const x = useTransform(scrollYProgress, [0, 1], [1260, -3800]); // -100vw * (numItems - 1)
  const y = useTransform(scrollYProgress, [0, 1], [0, 2340]); // -100vw * (numItems - 1)
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1]); // -100vw * (numItems - 1)
  const clipPath = useTransform(scrollYProgress, [0, 0.15], ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"]);

  return (
    <section
      ref={sectionRef}
      className="h-[400vh] relative overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center">
        <motion.div
          style={{ y }}
          className="absolute text-gray-100 text-[16.6rem] font-bold"
        >
          SERVICES
        </motion.div>
        <motion.div
          style={{ y, clipPath }}
          className="absolute text-[16.6rem] font-bold bg-linear-to-r from-red-400 to-yellow-400"
        >
          SERVICES
        </motion.div>
        <motion.div
          style={{ x, y }}
          className="flex gap-20"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
            <motion.div
              key={i}
              style={{
                backgroundImage:`url(/service${item}.webp)`,
                scale
              }}
              className={`w-100 h-70 text-6xl font-bold rounded-2xl`}
            >
              {/*{item}*/}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroller;
