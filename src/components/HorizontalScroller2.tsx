import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useScrollActivity from "../hooks/useScrollActivity";

const services = [
  {heading:"Business Portal Development", para:"At Namrata Universal, we offer mobile-compliant Business Portal Development services leveraging a plethora of frameworks including Drupal, WordPress, Magento, AngularJS and much more."},
  {heading:"Mobile Application Development", para:"We have designed and developed Android apps in categories, and productivity, shopping, social messaging, gaming and entertainment, news and publishing and so on."},
  {heading:"Website Development", para:"We create websites that appeal to your sense of style, with intuitive layouts and navigation. We also ensure that your website is a search engine friendly so that it attracts customers and sales."},
  {heading:"Digital Marketing", para:"Digital marketing connect customers using internet and many types of digital platform such as: Search Engines, Websites, Social Media Marketing, Email Marketing, Mobile apps, Text messaging and Online promoting."},
  {heading:"Custom Software", para:"Custom software development is the process of designing, creating, deploying and maintaining software for a specific set of users, functions. We offer quality and valuable price in our software and services without sacrificing quality."},
  {heading:"Graphic Designing", para:"Graphic design is the most common way of making visual content. The specialty of visual communicate is fundamental, especially for brands looking to connect with their target audience, and graphic design is the perfect solution."},
  {heading:"App Design", para:"Our experts cover an entire cycle of mobile app development, including business analysis, UX/UI design and development of your mobile application From ideation to final polish, our UX/UI design process."},
  {heading:"SEO", para:"SEO stands for search engine optimization. Namrata Universal Provides best Search engine optimization services. SEO is the most common way of doing whatever it takes to help a site or piece of content position higher on Google."},
]

const HorizontalScroller2 = () => {
  const sectionRef = useRef(null);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const {isScrolling} = useScrollActivity();


  // Smooth out the scroll animation using spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  // Adjust the distance based on number of items (each item = 100vw)
  const x = useTransform(smoothProgress, [0.43, 1], [1290, -5550]); // -100vw * (numItems - 1)
  //const y = useTransform(scrollYProgress, [0.8, 1], [1180, 1340]); // -100vw * (numItems - 1)
  const clipPath = useTransform(smoothProgress, [0.38, 0.5], ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"]);
  const opacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);
  //const yParent = useTransform(scrollYProgress, [0.7, 0.75], [100, 400]);

  const yServices0 = useTransform(smoothProgress, [0, 0.3], [390*1, 0]); // -100vw * (numItems - 1)
  const yServices1 = useTransform(smoothProgress, [0.01, 0.31], [390*2, 0]); // -100vw * (numItems - 1)
  const yServices2 = useTransform(smoothProgress, [0.02, 0.32], [390*3, 0]); // -100vw * (numItems - 1)
  const yServices3 = useTransform(smoothProgress, [0.03, 0.33], [390*4, 0]); // -100vw * (numItems - 1)
  const yServices4 = useTransform(smoothProgress, [0.04, 0.34], [390*5, 0]); // -100vw * (numItems - 1)
  const yServices5 = useTransform(smoothProgress, [0.05, 0.35], [390*6, 0]); // -100vw * (numItems - 1)
  const yServices6 = useTransform(smoothProgress, [0.06, 0.36], [390*7, 0]); // -100vw * (numItems - 1)
  const yServices7 = useTransform(smoothProgress, [0.07, 0.37], [390*8, 0]); // -100vw * (numItems - 1)

  const yServices = [
    yServices0, yServices1, yServices2, yServices3, yServices4, yServices5, yServices6, yServices7
  ];


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
    <motion.section
      ref={sectionRef}
      style={{
        opacity,
        //y:yParent
      }}
      className="border-4 border-green-500 h-[900vh] relative overflow-hidden"
    >
      <motion.div
        className="border-4 border-blue-500 top-0 h-screen flex items-center"
        style={{
            position:isFixed?"fixed":"sticky"
        }}
        >
        <motion.span
          style={{
            //opacity:isFixed?1:0
          }}
          animate={{
            color:["#ff0000", "#ff2222", "#ff4040", "#ff6363", "#ff8585", "#ffa7a7", "#ffc5c5", "#ffdfdf", "#ffdfdf", "#ffc5c5", "#ffa7a7", "#ff8585", "#ff6363", "#ff4040", "#ff2222", "#ff0000"],
          }}
          transition={{
            duration:1,
            repeat:Infinity,
            repeatType:"loop"
          }}
          className="absolute top-10 text-2xl text-red-300 w-screen text-center"
          >
            {
              "Nationwide Service, Local Expertise Offer The Latest Software And Solutions To Our Customers!".split(" ").map((w, i) => (
                <motion.span
                  animate={{
                    y:[0, -10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  }}
                  style={{
                    display:"inline-block"
                  }}
                  transition={{
                    duration:4,
                    delay:(0.1*i),
                    repeat:Infinity
                  }}
                  className="tracking-wide"
                >{w}&nbsp;</motion.span>
              ))
            }
        </motion.span>

        <motion.div
          className="absolute text-gray-100 text-[16.6rem] font-bold"
        >
          {
            "SERVICES".split("").map((w, index) => (
              <motion.div
                style={{
                  display:"inline-block",
                  y:yServices[index],
                  opacity:isFixed?1:0
                }}
              >{w}</motion.div>
            ))
          }
          
        </motion.div>

        <motion.div
          style={{ clipPath }}
          className="absolute text-[16.6rem] font-bold bg-linear-to-r from-red-400 to-yellow-400"
        >
          SERVICES
        </motion.div>

        <motion.div
          style={{ x }}
          className="flex gap-20"
        >
          {services.map((item, i) => (
            <motion.div
              className={`w-100 h-70 text-6xl font-bold relative`}
            >
              <motion.div
                className="bg-white p-10 h-full font-light leading-loose absolute rounded-2xl"
              >
                <h3 className="text-xl font-bold">{item.heading}</h3>
                <p
                  className="text-lg"
                >{item.para}
                </p>
              </motion.div>


              <motion.div
                key={i}
                style={{
                  backgroundImage:`url(/service${i+1}.webp)`,
                  //scale
                }}
                whileHover={{
                  opacity:0,
                  scale:0.8,
                  backgroundColor:"white",
                  backgroundImage:"none"
                }}
                animate={{
                  scale:isScrolling?0.9:1
                }}
                className={`w-100 h-70 text-6xl font-bold rounded-2xl absolute cursor-pointer`}
              >
              </motion.div>


            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default HorizontalScroller2;
