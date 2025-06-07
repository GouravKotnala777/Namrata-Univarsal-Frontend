import {motion} from "motion/react";
import Explosion from "./Explosion";

const colorArray = ["violet", "indigo", "blue", "green", "yellow", "orange", "red", "", "", "violet", "indigo", "blue", "green", "yellow", "orange", "red", "gray", "cyan"];

const Welcome = () => {


    return(
        <section className="grid place-items-center">


            <Explosion maxSize={0.7} initialPosition={{x:100, y:3500}} finalPosition={{x:900, y:3000}} delay={0.2} />
            <Explosion maxSize={1.3} initialPosition={{x:200, y:3500}} finalPosition={{x:1000, y:2900}} delay={0.4} />
            <Explosion maxSize={1} initialPosition={{x:300, y:3500}} finalPosition={{x:1100, y:3000}} delay={0.6} />
           
            <Explosion maxSize={1.3} initialPosition={{x:700, y:3500}} finalPosition={{x:100, y:3000}} delay={0.6} />
            <Explosion maxSize={1} initialPosition={{x:800, y:3500}} finalPosition={{x:200, y:2900}} delay={0.4} />
            <Explosion maxSize={0.7} initialPosition={{x:900, y:3500}} finalPosition={{x:300, y:3000}} delay={0.2} />

            <Explosion maxSize={1} initialPosition={{x:100, y:3500}} finalPosition={{x:900, y:3100}} delay={0.1} />
            <Explosion maxSize={0.7} initialPosition={{x:200, y:3500}} finalPosition={{x:1000, y:3000}} delay={0.5} />
            <Explosion maxSize={1.3} initialPosition={{x:300, y:3500}} finalPosition={{x:1100, y:3100}} delay={0.7} />

            <Explosion maxSize={1.3} initialPosition={{x:700, y:3500}} finalPosition={{x:100, y:3100}} delay={0.7} />
            <Explosion maxSize={0.7} initialPosition={{x:800, y:3500}} finalPosition={{x:200, y:3000}} delay={0.5} />
            <Explosion maxSize={1} initialPosition={{x:900, y:3500}} finalPosition={{x:300, y:3100}} delay={0.1} />

            <Explosion maxSize={0.7} initialPosition={{x:400, y:3500}} finalPosition={{x:600, y:3100}} delay={0.7} />
            <Explosion maxSize={1.3} initialPosition={{x:500, y:3500}} finalPosition={{x:500, y:3000}} delay={0.5} />
            <Explosion maxSize={0.7} initialPosition={{x:600, y:3500}} finalPosition={{x:400, y:3100}} delay={0.1} />



            <h1>
                {
                    "Welcome  to  the  world  of".split("").map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{
                                opacity:0.1
                            }}
                            whileInView={{
                                opacity:1
                            }}
                            transition={{
                                duration:0.3,
                                ease:"easeInOut",
                                delay:0.1*index
                            }}
                            style={{
                                wordSpacing:"-5px",
                            }}
                            className="text-6xl inline-block mb-4 mt-[-30px] font-extrabold"
                        >{word} &nbsp;</motion.span>
                    ))
                }
            </h1>
            <h1>
                {    "Namrata  Universal".split("").map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{
                                opacity:0.1
                            }}
                            whileInView={{
                                opacity:1
                            }}
                            transition={{
                                duration:0.3,
                                ease:"easeInOut",
                                delay:0.1*index,
                            }}
                            style={{
                                color:`${colorArray[index]}`,
                                wordSpacing:"-5px"
                            }}
                            className="text-5xl font-extrabold"
                        >{word} &nbsp;</motion.span>
                    ))
                }
            </h1>

            <motion.p
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="w-full max-w-3xl text-lg md:text-xl mt-12 p-8 md:p-10 rounded-2xl font-medium leading-relaxed tracking-wide
                    bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600
                    bg-[length:200%_200%] bg-clip-text text-transparent"
                >
                Trusted by the world's best organizations, for 12 years and running, it has been delivering smiles to hundreds of IT advisors, developers, users, and business owners. Easy solutions for all difficult IT problems to ensure high availability.
            </motion.p>
            <motion.p
                animate={{
                    background: [
                    "linear-gradient(135deg, #ff8fff, #7b7bff)",
                    "linear-gradient(135deg, #7b7bff, #ff97a8)",
                    "linear-gradient(135deg, #ff97a8, #ff81ff)",
                    "linear-gradient(135deg, #ff8fff, #7b7bff)",
                    ],
                    scale: [1, 1.02, 1],
                    boxShadow: [
                    "0 0 10px #ff8fff55",
                    "0 0 15px #7b7bff88",
                    "0 0 10px #ff97a866",
                    "0 0 10px #ff8fff55"
                    ]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="max-w-3xl text-lg sm:text-xl mx-auto mt-10 p-6 sm:p-10 rounded-3xl text-white font-medium leading-relaxed shadow-lg"
                style={{
                    backgroundClip: "padding-box",
                    backdropFilter: "blur(8px)",
                }}
                >
                    Trusted by the world's best organizations, for 12 years and running,
                    it has been delivering smiles to hundreds of IT advisors, developers, users,
                    and business owners. Easy solutions for all difficult IT problems to ensure high availability.
            </motion.p>

        </section>
    )
};

export default Welcome;