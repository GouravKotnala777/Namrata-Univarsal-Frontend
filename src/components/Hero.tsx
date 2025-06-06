import {motion} from "motion/react";
import heroImg from "../../public/hero-Dv8sjFKx.png"

const Hero = () => {

    return(
        <section className="flex justify-between items-center px-20">
            {/*<div className="border-4 fixed top-0 left-0 z-10 w-full h-full"></div>*/}
            <div className="left-part w-100">
                <h4 className="font-medium text-orange-600 text-xl">100% Satisfaction Guarantee</h4>
                <h1 className="font-medium text-7xl my-8">
                    With Focus On&nbsp;
                    <motion.div
                        animate={{
                            color: ["#ff4b69", "#ff9c66", "#3e98ff", "#00ffcc", "#ff4b69"],
                            textShadow: [
                            "0 0 10px #ff4b69",
                            "0 0 10px #ff9c66",
                            "0 0 10px #3e98ff",
                            "0 0 10px #00ffcc",
                            "0 0 10px #ff4b69",
                            ],
                            scale:[1,1,1,1.1,0.9,1,1,1]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="rounded-lg text-6xl font-bold inline-block"
                        >
                        Quality
                    </motion.div>
                </h1>
                <p className="text-gray-500">We have experienced professionals who understand that IT services is changing, and are true partners who care about your success.</p>
            </div>
            <div className="right-part w-140">
                <img src={heroImg} alt={heroImg} />
            </div>
        </section>
    )
}

export default Hero;