import { animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";

interface CounterAnimationPropTypes{
    Icon:IconType;
    title:string;
    finalValue:number;
}

const CounterAnimation = ({Icon, title, finalValue}:CounterAnimationPropTypes) => {
    const [count, setCount] = useState<number>(0);
    const counterDivRef = useRef<HTMLDivElement|null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);


    useEffect(() => {
        const counterDiv = counterDivRef.current;
        const observer = new IntersectionObserver(([entery]) => {
            setIsVisible(entery.isIntersecting);
        }, {threshold:0.5});

        if (counterDiv) {
            observer.observe(counterDiv);
        }

        return() => {
            if (counterDiv) {
                observer.unobserve(counterDiv);
            }
        }
    }, []);

    useEffect(() => {
        if(!isVisible) return;

        const controls = animate(0, finalValue, {
            duration:1.4,
            ease:"easeInOut",
            onUpdate(value){
                setCount(Math.floor(value))
            }
        });

        return() => controls.stop();
    }, [isVisible]);

    return(
        <div
            ref={counterDivRef}
            className="font-bold flex flex-col gap-2 items-center w-max"
        >
            <div className="text-7xl text-gray-500"><Icon/></div>
            <div className="text-6xl font-extrabold">{count}</div>
            <div className="text-xl text-gray-500">{title}</div>
        </div>
    )
}

export default CounterAnimation;