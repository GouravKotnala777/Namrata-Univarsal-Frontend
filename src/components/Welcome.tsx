import {motion} from "motion/react";

const colorArray = ["violet", "indigo", "blue", "green", "yellow", "orange", "red", "", "", "violet", "indigo", "blue", "green", "yellow", "orange", "red", "gray", "cyan"];

const Welcome = () => {


    return(
        <section className="border-2 grid place-items-center">
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
                                wordSpacing:"-5px"
                            }}
                            viewport={{once:true}}
                            className="text-5xl font-extrabold"
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
                            viewport={{once:true}}
                            className="text-5xl font-extrabold"
                        >{word} &nbsp;</motion.span>
                    ))
                }
            </h1>
            <motion.p
                animate={{
                    background:[
                        "linear-gradient(to right bottom, #ff8fff, #7b7bff)",
                        "linear-gradient(to right bottom, #7b7bff, #ff97a8)",
                        "linear-gradient(to right bottom, #ff97a8, #ff81ff)",
                        "linear-gradient(to right bottom, #ff81ff, #8b7eff)",
                        "linear-gradient(to right bottom, #8b7eff, #ff8fff)",
                        "linear-gradient(to right bottom, #8b7eff, #ff8fff)",
                        "linear-gradient(to right bottom, #ff81ff, #8b7eff)",
                        "linear-gradient(to right bottom, #7b7bff, #ff97a8)",
                        "linear-gradient(to right bottom, #ff97a8, #ff81ff)",
                        "linear-gradient(to right bottom, #ff8fff, #7b7bff)",
                    ]
                }}
                transition={{
                    duration:3,
                    repeat:Infinity
                }}
                className="w-200 text-xl mt-10 p-10 rounded-2xl"
            >
                Trusted by the world's best organizations, for 12 years and running, it has been delivering smiles to hundreds of IT advisors, developers, users, and business owners. Easy solutions for all difficult IT problems to ensure high availability. <br/>
            </motion.p>
            <motion.p
                animate={{
                    background:[
                        "linear-gradient(to right bottom, #d8ff7e, #ffe375)",
                        "linear-gradient(to right bottom, #ffe375, #ff7575)",
                        "linear-gradient(to right bottom, #ff7575, #ffa375)",
                        "linear-gradient(to right bottom, #ffa375, #d8ff7e)",
                        "linear-gradient(to right bottom, #ffa375, #d8ff7e)",
                        "linear-gradient(to right bottom, #ff7575, #ffa375)",
                        "linear-gradient(to right bottom, #ffe375, #ff7575)",
                        "linear-gradient(to right bottom, #d8ff7e, #ffe375)",
                    ]
                }}
                transition={{
                    duration:3,
                    repeat:Infinity
                }}
                className="w-200 text-xl mt-10 p-10 rounded-2xl"
            >
                Our biggest strength is our Global Reach. Our ability to cater to any business segments & needs. Our experience enables us create unique products. High volume of our work makes us provide value added services with wallet friendly charges. Strong ground support and extensive network keeps us always a step a head. We are always on Toes and this attitude has given us a strong presence in Indian Subcontinent.
            </motion.p>

        </section>
    )
};

export default Welcome;