import ourStoryPhoto from "/about-story.webp";
import {motion} from "motion/react";

const OurStory = () => {

    return(
        <section>
            <div>
                <div className="flex justify-between items-center px-10">
                    <div>
                        <div>
                            {
                                "Our Story".split(" ").map((w, index) => (
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
                                        className="text-9xl font-bold"
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
                        >Namrata Group has been serving clients in diverse fields for over 14 years through Namrata Health Care Pvt. Ltd, Namrata Wellness, Namrata Store, Sylister Health Care Pvt. Ltd and Jingle Holiday Bazar Pvt. Ltd. Our objective is to take the business of our customers forward through our products and services. The Namrata Universal is the complete IT Solution Company and we welcome you to the world of Namrata Universal.</motion.p>
                    </div>
                    <div>
                        <motion.img src={ourStoryPhoto} alt={ourStoryPhoto}
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
                </div>
            </div>
        </section>
    )
}

export default OurStory;