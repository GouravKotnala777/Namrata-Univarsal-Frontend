import { useEffect, useRef, useState } from "react";
import staff1 from "/staff1.webp";
import staff2 from "/staff2.webp";
import staff3 from "/staff3.webp";
import { useScroll, useSpring, useTransform } from "motion/react";
import {motion} from "motion/react";

const Owner = () => {
    const section2Ref = useRef(null);
    const [isFixed, setIsFixed] = useState<boolean>(false);
    const [animatingStaffImg, setAnimatingStaffImg] = useState<"staff1"|"staff2"|"staff3">("staff1");

    const { scrollYProgress } = useScroll({
        target: section2Ref,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    });

    const opacity = useTransform(smoothProgress, [0.01, 0.9, 1], [1, 1, 0]);
    const scale = useTransform(smoothProgress, [0.01, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], [1, 2, 1, 2, 2, 1, 2, 2, 1, 1]);
    const rotateX = useTransform(smoothProgress, [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], [0, 180, 180, 180, 0, 0, 0]);
    const rotateY = useTransform(smoothProgress, [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], [0, 180, 180, 180, 360, 360, 360]);
    const rotateZ = useTransform(smoothProgress, [0.3, 0.4], [0, 180]);
    const y = useTransform(smoothProgress, [0, 0.1], [450, 0]);
    const clipPath = useTransform(smoothProgress, [0.1, 0.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 100%)", "inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 100%)"]);
    //const staff1Opacity = useTransform(smoothProgress, [0.33, 0.45], [1, 0]);
    
    //const staff1Display = useTransform(smoothProgress, [0.2, 0.4], ["", 1]);
    //const staff2Display = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);
    //const staff3Display = useTransform(smoothProgress, [0.6, 0.8], [0, 1]);
    


    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            if (v > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        });
    }, [scrollYProgress]);
    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            if (v > 0 && v <= 0.35) {
                setAnimatingStaffImg("staff1");
            }
            else if (v > 0.35 && v <= 0.65) {
                setAnimatingStaffImg("staff2");
            }
            else if (v > 0.65 && v <= 1) {
                setAnimatingStaffImg("staff3");
            }
        });
    }, [scrollYProgress]);

    return(
        <section ref={section2Ref}
            className="h-[2000vh]"
        >
            <motion.div
                style={{
                    position:isFixed?"fixed":"sticky",
                    opacity
                }}
                className="top-0 left-0 w-full h-screen grid place-items-center"
            >
                <motion.div className="grid place-items-center">
                    <motion.img src={staff1} alt={staff1}
                        style={{
                            ...(animatingStaffImg === "staff1" && {
                                scale,
                                rotateX,
                                rotateY,
                                display:"block",
                                y,
                                //opacity:staff1Opacity
                            }),
                        }}
                        className="h-[250px] w-[200px] hidden"
                    />
                    <motion.img src={staff2} alt={staff2}
                        style={{
                            ...(animatingStaffImg === "staff2" && {
                                scale,
                                rotateX,
                                rotateY,
                                rotateZ,
                                display:"block"
                                //y,
                                //opacity:staff1Opacity
                            }),
                        }}
                        className="h-[250px] w-[200px] hidden"
                    />
                    <motion.img src={staff3} alt={staff3}
                        style={{
                            ...(animatingStaffImg === "staff3" && {
                                scale,
                                rotateX,
                                rotateY,
                                display:"block",
                                //y,
                                //opacity:staff1Opacity
                            }),
                        }}
                        className="h-[250px] w-[200px] hidden"
                    />


                    <motion.h1
                        style={{
                            clipPath
                        }}
                        className="flex absolute top-[80%] tanslate-x-[-50%] translate-y-[-50%] text-yellow-400 text-6xl font-bold">
                        {
                            (animatingStaffImg === "staff1"?
                                "CO-FOUNDER"
                                :
                                animatingStaffImg === "staff2"?
                                    "CEO & FOUNDER"
                                    :
                                    "CO-FOUNDER")
                        }
                    </motion.h1>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default Owner;