import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ScrollAboutUs = () => {
  const aboutUsRef = useRef<HTMLHeadingElement|null>(null);
  const [isFixed, setIsFixed] = useState<boolean>(false);


  // Get scroll progress for the specific section
  const { scrollYProgress } = useScroll({
    target: aboutUsRef,
    offset: ["start start", "end end"],
  });

  // Animate values based on scroll position
  const scale = useTransform(scrollYProgress, [0.18, 0.68], [10, 0.5]);
  const scaleXLine = useTransform(scrollYProgress, [0.55, 0.66], [0, 19.5]);
  const opacity = useTransform(scrollYProgress, [0.18, 0.68], [0, 1]);
  const y = useTransform(scrollYProgress, [0.9, 1], ["0%", "-100%"]);
  const opacityParent = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  
  // Timer animation
  const opacityTimer = useTransform(scrollYProgress, [0.18, 0.68, 0.69], [0, 1, 0]);
  const animatedValue = useTransform(scrollYProgress, [0.18, 0.68], [6, 0]);
  const springValue = useSpring(animatedValue, { stiffness: 100, damping: 20 });
  const [displayNumber, setDisplayNumber] = useState(0);

  // About us paragraph
  const scaleYParagraph = useTransform(scrollYProgress, [0.67, 0.788], [0, 600]);
  //const yParagraph = useTransform(scrollYProgress, [0.67, 0.78, 0.96], [0, -300, -900]);
//  const displayY = useTransform(scrollYProgress, [0.48, 0.53], [-100, 100]);



  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
        setDisplayNumber(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            if (v > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        });
  }, [scrollYProgress]);


  return (
    <section ref={aboutUsRef} className="border-4 border-red-500 h-[500vh] bg-gray-100 flex items-center justify-center overflow-x-hidden">
      <motion.div
        style={{
          position:isFixed?"fixed":"sticky",
          y,
          opacity:opacityParent
        }}
        className="border-4 border-violet-500 top-0 left-0 w-full h-full">
        
        
        
        <motion.h1
            style={{ scale, opacity }}
            className="text-5xl font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >About Us
        </motion.h1>


        <motion.div
            style={{
                opacity:opacityTimer
            }}
            className="border-2 w-30 h-30 absolute left-10 top-10 text-6xl rounded-full grid place-items-center"
        ><span className="border-1 rounded-full w-27 h-27 grid place-items-center">{displayNumber}</span>
        </motion.div>


        <motion.div
          style={{
            scaleX:scaleXLine,
            originX:"left"
          }}
          className="w-10 absolute top-[50%] left-[20%] translate-x-[-50%] translate-y-[-50%]"
        ></motion.div>


        <motion.div
            style={{
                height:scaleYParagraph,
            }}
            className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] grid place-items-center overflow-hidden bg-[url('background1.png')]"
        >
            <motion.h1
                className="w-200 text-2xl relative bg-linear-to-r from-blue-300 to-purple-300 rounded-2xl"
            >
              <motion.div
                animate={{
                  top:["-2%", "-2%", "92%", "92%", "-2%"],
                  left:["-1%", "98%", "98%", "-1%", "-1%"],
                  boxShadow:[
                    "10px 10px 10px 12px #ffb1ff",
                  ]
                }}
                transition={{
                  duration:12,
                  repeat:Infinity,
                  ease:"linear"
                }}
                className="border-2 z-[-1] border-white w-1 h-1 rounded-full bg-white absolute top-0 left-0"
              ></motion.div>
              <motion.div
                animate={{
                  top:["92%", "92%", "-2%", "-2%", "92%"],
                  left:["98%", "-1%", "-1%", "98%", "98%"],
                  boxShadow:[
                    "10px 10px 10px 12px #ffb1ff",
                  ]
                }}
                transition={{
                  duration:12,
                  repeat:Infinity,
                  ease:"linear"
                }}
                className="border-2 z-[-1] border-white w-1 h-1 rounded-full bg-white absolute top-0 left-0"
              ></motion.div>
              <p className="p-10">
                At Namrata Universal We Deliver With Focus On Quality, Integrity And Long Term Relation. We have experienced professionals who understand that IT services is changing, and are true partners who care about your success.
              </p>

            </motion.h1>

        </motion.div>


      </motion.div>



    </section>
  );
};

export default ScrollAboutUs;
