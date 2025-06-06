import {motion, useScroll, useSpring, useTransform} from "motion/react";
import client1 from "/client-1.webp";
import client2 from "/client-2.webp";
import client3 from "/client-3.webp";
import client4 from "/client-4.webp";
import client5 from "/client-5.webp";
import client6 from "/client-6.webp";
import client7 from "/client-7.webp";
import client8 from "/client-8.webp";
import client9 from "/client-9.webp";
import client10 from "/client-10.webp";

import client11 from "/client-11.webp";
import client12 from "/client-12.webp";
import client13 from "/client-13.webp";
import client14 from "/client-14.webp";
import client15 from "/client-15.webp";
import client16 from "/client-16.webp";
import client17 from "/client-17.webp";
import client18 from "/client-18.webp";
import client19 from "/client-19.webp";
import client20 from "/client-20.webp";
import { BsHeartFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const imgArray1 = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
const imgArray2 = [client11, client12, client13, client14, client15, client16, client17, client18, client19, client20];
const clientDetailsArray = [
    "Excellent customer support",
    "Very professional team",
    "Truly exceeded our expectations",
    "Will definitely recommend them",
    "Quick response and delivery",
    "Top-notch quality work",
    "Highly skilled developers",
    "Great attention to detail",
    "They understood our needs well",
    "Smooth and easy process",
    "Amazing design sense",
    "Always ready to help",
    "Delivered exactly what we asked for",
    "Superb technical knowledge",
    "They guided us at every step",
    "Value for money",
    "Very creative solutions",
    "They fixed all our issues",
    "The website is fast and modern",
    "We’re really impressed"
];

const OurClients = () => {
    const [hoveringClientDetail, setHoveringClientDetail] = useState<number>(0);
    const [positionValue, setPositionValue] = useState<"sticky"|"fixed">("sticky");
    //const positionValue = useMotionValue<"fixed"|"absolute">("fixed");
    const sectionRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target:sectionRef,
        offset:["start start", "end end"]
    });

    // Smooth out the scroll animation using spring
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    });

    const x1 = useTransform(smoothProgress, [0, 1], ["-70%", "30%"])
    const x2 = useTransform(smoothProgress, [0, 1], ["10%", "-70%"])
    const y = useTransform(smoothProgress, [0.8, 1], ["0px", "-590px"])
    const opacity = useTransform(smoothProgress, [0.8, 1], [1, 0])


    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            if (v > 0) {
                setPositionValue("fixed");
            } else {
                setPositionValue("sticky");
            }
        });
    }, [scrollYProgress]);


    return(
        <motion.section
            ref={sectionRef}
            style={{
                overflowX:positionValue === "fixed"?"visible":"hidden",
                opacity
            }}
            className="h-[300vh] bg-[#11003a]"
        >
            <motion.div
                style={{
                    position:positionValue,
                    top:positionValue === "fixed" ? "0px" : "6720px",
                    left:0,
                    y
                }}
                className="w-screen h-full pt-20"
            >
                <motion.div
                    style={{
                        x:x1
                    }}
                    className="w-max flex overflow-x-visible mb-[-30px]"
                >
                    {
                        imgArray1.map((img, index) => (
                            <motion.img key={index} src={img} alt={img}
                                whileHover={{
                                    scale:1.1
                                }}
                                onMouseOver={() => setHoveringClientDetail(index)}
                                className="h-40 rounded-2xl p-10 ml-10 bg-white"
                            />
                        ))
                    }
                </motion.div>
                <div
                    className="w-40 h-40 rounded-full z-10 bg-red-400 grid place-items-center sticky ml-[50rem] mb-[-30px]">
                    <motion.div
                        animate={{
                            scale:[1.2, 1.2, 1.2, 1.6, 1.2, 1, 1.2, 1.2, 1.2, ]
                        }}
                        transition={{
                            duration:1,
                            repeat:Infinity,
                            ease:"easeInOut"
                        }}
                    >
                        <motion.p
                            style={{
                                opacity:clientDetailsArray[hoveringClientDetail]?1:0
                            }}
                            className="w-10 text-xs text-white"
                        >{clientDetailsArray[hoveringClientDetail]}</motion.p>
                        <BsHeartFill
                            style={{
                                scale:2.2,
                                opacity:clientDetailsArray[hoveringClientDetail]?0:1
                            }}                    
                            className="text-white"
                        />
                    </motion.div>
                </div>
                <motion.div
                    style={{
                        x:x2
                    }}
                    className="w-max flex overflow-x-visible">
                    {
                        imgArray2.map((img, index) => (
                            <motion.img key={index} src={img} alt={img}
                                whileHover={{
                                    scale:1.1
                                }}
                                onMouseOver={() => setHoveringClientDetail(index+10)}
                                className="h-40 rounded-2xl p-10 ml-10 bg-white"
                            />
                        ))
                    }
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default OurClients;