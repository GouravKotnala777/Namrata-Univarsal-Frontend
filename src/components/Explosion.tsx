import {motion, useAnimation} from "motion/react";
import { useEffect } from "react";

interface ExplosionPropTypes{
    maxSize:0.1|0.2|0.3|0.4|0.|0.6|0.7|0.8|0.9|1|1.1|1.2|1.3|14|1.5|1.6|1.7|1.8|1.9|2;
    //duration:0.1|0.2|0.3|0.4|0.|0.6|0.7|0.8|0.9|1|1.1|1.2|1.3|14|1.5|1.6|1.7|1.8|1.9|2;
    initialPosition:{x:number; y:number;}
    finalPosition:{x:number; y:number;}
    delay?:number;
}

const Explosion = ({maxSize, initialPosition, finalPosition, delay}:ExplosionPropTypes) => {

    const controls = useAnimation();

    useEffect(() => {
        const runAnimation = async() => {
            while (true) {
                await controls.start({
                    opacity:1,
                    scale:0.03,
                    left:initialPosition.x,
                    top:initialPosition.y,
                    transition:{
                        duration:0.3,
                        delay:delay?delay:0
                    }
                });
    
                await controls.start({
                    left:finalPosition.x,
                    top:finalPosition.y,
                    transition:{
                        duration:1,
                        ease:"linear"
                    }
                });
    
                await controls.start({
                    scale:maxSize,
                    opacity:[0, 0.5, 1, 1, 1, 0.5, 0],
                    transition:{
                        duration:0.7
                    }
                });

                await controls.start({
                    opacity:0,
                    scale:0.08,
                    left:initialPosition.x,
                    top:initialPosition.y,
                    transition:{
                        duration:0.1
                    }
                });
            }
        }

        runAnimation();

    }, [controls]);

    return(
        <motion.div
            initial={{
                opacity:1,
                scale:0.08,
                left:initialPosition.x,
                top:initialPosition.y
            }}
            animate={controls}
            className="fire-works absolute w-35 h-35 grid place-items-center rounded-full bg-red-500">
            <div className="w-25 h-25 grid place-items-center rounded-full bg-orange-500">
                <div className="w-17 h-17 grid place-items-center rounded-full bg-orange-300">
                    <div className="w-10 h-10 grid place-items-center rounded-full bg-orange-100">
                        <div className="w-5 h-5 rounded-full bg-white">

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Explosion;