import ourGoalPhoto from "/about-goal.webp";
import {motion} from "motion/react";

const OurGoal = () => {

    return(
        <section>
            <div>
                <div className="flex justify-between items-center px-10">
                    <div>
                        <motion.img src={ourGoalPhoto} alt={ourGoalPhoto}
                            initial={{
                                opacity:0,
                                scale:0
                            }}
                            whileInView={{
                                opacity:1,
                                scale:1
                            }}
                            transition={{
                                duration:0.3,
                                delay:0.5
                            }}
                            className="w-150"
                        />
                    </div>
                    <div>
                        <div>
                            {
                                "Our Goal".split(" ").map((w, index) => (
                                    <motion.h1
                                        initial={{
                                            y:50,
                                            opacity:0
                                        }}
                                        whileInView={{
                                            y:0,
                                            opacity:1
                                        }}
                                        transition={{
                                            delay:0.3*index
                                        }}
                                        className="text-9xl font-bold text-gray-700"
                                    >{w}</motion.h1>
                                ))
                            }
                        </div>
                        <motion.p
                            initial={{
                                y:50,
                                opacity:0
                            }}
                            whileInView={{
                                y:0,
                                opacity:1
                            }}
                            transition={{
                                delay:0.3
                            }}
                            className="max-w-120 leading-loose tracking-wide text-justify mt-4"
                        >Improve Efficiency And Provide Better Experience By Our IT Solutions!
                        Trusted by the world's best organizations, for 11 years and running, it has been delivering smiles to hundreds of IT advisors, developers, users, and business owners. Easy solutions for all difficult IT problems to ensure high availability.
                        Like Specific, Measureable, Achievable, Realistic, Time-bound.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurGoal;