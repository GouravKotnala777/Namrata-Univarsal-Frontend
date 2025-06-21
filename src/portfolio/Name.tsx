import {motion, useScroll, useTransform} from "motion/react";
import { useEffect, useRef, useState } from "react";

const PROFESSION = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];


const Name = () => {
    const sectionRef = useRef(null);
    const [isFixed, setIsFixed] = useState<boolean>(false);
    const {scrollYProgress} = useScroll({
        target:sectionRef,
        offset:["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0.73, 0.85], ["0%", "-100%"]);
    const opacity = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);
    const kotnalaColor = useTransform(scrollYProgress, [0.5, 0.55], ["#ffffff", "transparent"]);
    const professionDisplay = useTransform(scrollYProgress, [0.5, 0.55], ["flex", "none"]);
    const oOuterScale = useTransform(scrollYProgress, [0.3, 0.5], [1, 25]);
    const oInnerScale = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.7], [1, 0.5, 1.5, 32]);
    const oOuterDisplay = useTransform(scrollYProgress, [0.7, 0.72], ["block", "none"]);
    const oInnerDisplay = useTransform(scrollYProgress, [0.7, 0.72], ["block", "none"]);



    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            if (v > 0 && v < 1) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        });
    }, [scrollYProgress]);
    

    return(
        <motion.section
            ref={sectionRef}
            className="name_section h-[500vh] scrollable_cont border-3 border-green-400">
            <motion.div
                style={{
                    position:isFixed?"fixed":"sticky",
                    y,
                    opacity
                }}
                className="border-3 w-full h-screen border-green-400"
            >
                <div className="hi text-white text-center mt-20 text-2xl">
                Hi
                <motion.span
                    animate={{rotateZ:["0deg", "0deg", "0deg", "0deg", "20deg", "0deg", "-20deg", "20deg", "0deg", "-20deg", "0deg", "0deg", "0deg", "0deg"]}}
                    transition={{
                    duration:2,
                    repeat:Infinity,
                    ease:"easeInOut"
                    }}
                    className="origin-bottom-right text-4xl inline-block w-min"
                >👋🏻</motion.span>
                , I am
                </div>

                <motion.div
                    className="name w-full mt-5"
                >
                <div
                    className="flex gap-5 mx-10"
                >
                    {
                    ["G","O","U","R","A","V"].map((w, index) => (
                        <motion.div
                        initial={{
                            opacity:0,
                            x:"100%",
                            y:"100%",
                            skewX:0
                        }}
                        animate={{
                            opacity:1,
                            x:["100%", "0%", "0%"],
                            y:["100%", "0%", "0%"],
                            skewX:[0, 20, 0]
                        }}
                        transition={{
                            duration:0.3,
                            delay:(0.1*index)+1,
                            ease:"easeIn"
                        }}
                        className="text-9xl text-white font-bold"
                        >{w}</motion.div>
                    ))
                    }
                </div>
                <div
                    className="flex gap-5 justify-end mx-10"
                >
                {
                    ["K","O","T","N","A","L","A"].map((w, index) => (
                        <motion.div
                        initial={{
                            opacity:0,
                            x:"100%",
                            y:"100%",
                            skewX:0
                        }}
                        animate={{
                            opacity:1,
                            x:["100%", "0%", "0%"],
                            y:["100%", "0%", "0%"],
                            skewX:[0, 20, 0]
                        }}
                        style={{
                            color:kotnalaColor
                            //color:""
                        }}
                        transition={{
                            duration:0.3,
                            delay:(0.1*index)+1,
                            ease:"easeIn"
                        }}
                        className="text-9xl text-white font-bold relative"
                        >
                            {w}
                            {
                                index === 1 &&
                                <>
                                    <motion.div
                                        style={
                                            index===1 ?
                                            {
                                                scale:oOuterScale,
                                                display:oOuterDisplay
                                            }
                                            :
                                            {}
                                        }
                                        className="outer_circle bg-white w-23 h-23 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full">
                                    </motion.div>
                                    <motion.div
                                        style={
                                            index===1 ?
                                            {
                                                scale:oInnerScale,
                                                display:oInnerDisplay
                                            }
                                            :
                                            {}
                                        }
                                        className="inner_circle bg-[#1e0041] w-12 h-12 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full">
                                    </motion.div>
                                </>
                            }
                        </motion.div>
                    ))
                }
                </div>

                </motion.div>

                <motion.div
                    style={{
                        display:professionDisplay
                    }}
                    className="profession flex text-white text-3xl mt-10"
                >
                <h2 className="w-full text-right">I have experties in &nbsp;</h2>
                <h2 className="relative w-full">
                    {
                    PROFESSION.map((l, index) => (
                        <motion.div
                        initial={{
                            display:"none"
                        }}
                        animate={{
                            display:["block","block","block","block","block","none","none","none","none","none","none","none","none","none","none"]
                        }}
                        transition={{
                            duration:15,
                            delay:5*(index-2),
                            repeat:Infinity,
                            ease:"easeInOut"
                        }}
                        >
                        {
                            l.split("").map((w, i) => (
                            <motion.div
                                initial={{
                                opacity:0
                                }}
                                animate={{
                                opacity:[0,0,1,0,0]
                                }}
                                transition={{
                                duration:5,
                                delay:0.1*(i),
                                repeat:Infinity
                                }}
                                className="w-min inline bg-linear-to-br from-yellow-400 to-pink-400 bg-clip-text text-transparent font-bold"
                            >{w}</motion.div>
                            ))
                        }
                        </motion.div>
                    ))
                    }
                </h2>
                </motion.div>
            </motion.div>
        </motion.section>
    )
};

export default Name;