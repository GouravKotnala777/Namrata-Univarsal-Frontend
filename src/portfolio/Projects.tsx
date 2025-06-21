import { useScroll, useTransform } from "motion/react";
import Client1 from "/client-1.webp";
import { useEffect, useRef, useState } from "react";
import {motion} from "motion/react";
import { BsGithub } from "react-icons/bs";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const path1 = `
    M-10 ${79*0}L11.5 ${89.7*0}
    
    C23 ${100.3*0} 46 ${121.7*0} 69 ${128.2*0}
    C92 ${134.7*0} 115 ${126.3*0} 138.2 ${139.8*0}
    C161.3 ${153.3*0} 184.7 ${188.7*0} 207.8 ${196.2*0}
    C231 ${203.7*0} 254 ${183.3*0} 277 ${165.5*0}
    C300 ${147.7*0} 323 ${132.3*0} 346 ${119.2*0}
    C369 ${106*0} 392 ${95*0} 415.2 ${109.2*0}
    C438.3 ${123.3*0} 461.7 ${162.7*0} 484.8 ${166.8*0}
    C508 ${171*0} 531 ${140*0} 554 ${120.3*0}
    C577 ${100.7*0} 600 ${92.3*0} 623 ${111.3*0}
    C646 ${130.3*0} 669 ${176.7*0} 692.2 ${196.8*0}
    C715.3 ${217*0} 738.7 ${211*0} 761.8 ${187.5*0}
    C785 ${164*0} 808 ${123*0} 831 ${104.8*0}
    C854 ${86.7*0} 877 ${91.3*0} 888.5 ${93.7*0}
    L900 ${96*0}
    L900 ${0*0}
    L888.5 ${0*0}
    C877 0 854 0 831 0
    C808 0 785 0 761.8 0
    C738.7 0 715.3 0 692.2 0
    C669 0 646 0 623 0
    C600 0 577 0 554 0
    C531 0 508 0 484.8 0
    C461.7 0 438.3 0 415.2 0
    C392 0 369 0 346 0
    C323 0 300 0 277 0
    C254 0 231 0 207.8 0
    C184.7 0 161.3 0 138.2 0
    C115 0 92 0 69 0
    C46 0 23 0 11.5 0
    L-10 -10Z
    `;

const path2 = `
    M-10 ${79*3}L11.5 ${89.7*3}
    
    C23 ${100.3*3} 46 ${121.7*3} 69 ${128.2*3}
    C92 ${134.7*3} 115 ${126.3*3} 138.2 ${139.8*3}
    C161.3 ${153.3*3} 184.7 ${188.7*3} 207.8 ${196.2*3}
    C231 ${203.7*3} 254 ${183.3*3} 277 ${165.5*3}
    C300 ${147.7*3} 323 ${132.3*3} 346 ${119.2*3}
    C369 ${106*3} 392 ${95*3} 415.2 ${109.2*3}
    C438.3 ${123.3*3} 461.7 ${162.7*3} 484.8 ${166.8*3}
    C508 ${171*3} 531 ${140*3} 554 ${120.3*3}
    C577 ${100.7*3} 600 ${92.3*3} 623 ${111.3*3}
    C646 ${130.3*3} 669 ${176.7*3} 692.2 ${196.8*3}
    C715.3 ${217*3} 738.7 ${211*3} 761.8 ${187.5*3}
    C785 ${164*3} 808 ${123*3} 831 ${104.8*3}
    C854 ${86.7*3} 877 ${91.3*3} 888.5 ${93.7*3}
    L900 ${96*3}
    L900 ${0*3}
    L900 ${0*3}
    C900 0 900 0 900 0
    C808 0 785 0 761.8 0
    C738.7 0 715.3 0 692.2 0
    C669 0 646 0 623 0
    C600 0 577 0 554 0
    C531 0 508 0 484.8 0
    C461.7 0 438.3 0 415.2 0
    C392 0 369 0 346 0
    C323 0 300 0 277 0
    C254 0 231 0 207.8 0
    C184.7 0 161.3 0 138.2 0
    C115 0 92 0 69 0
    C46 0 23 0 11.5 0
    L-10 -10Z
    `;

const path3 = `
    M-10 ${200*3}L11.5 ${200*3}
    
    C23 ${200*3} 46 ${200*3} 69 ${200*3}
    C92 ${200*3} 115 ${200*3} 138.2 ${200*3}
    C161.3 ${200*3} 184.7 ${200*3} 207.8 ${200*3}
    C231 ${200*3} 254 ${200*3} 277 ${200*3}
    C300 ${200*3} 323 ${200*3} 346 ${200*3}
    C369 ${200*3} 392 ${200*3} 415.2 ${200*3}
    C438.3 ${200*3} 461.7 ${200*3} 484.8 ${200*3}
    C508 ${200*3} 531 ${200*3} 554 ${200*3}
    C577 ${200*3} 600 ${200*3} 623 ${200*3}
    C646 ${200*3} 669 ${200*3} 692.2 ${200*3}
    C715.3 ${200*3} 738.7 ${200*3} 761.8 ${200*3}
    C785 ${200*3} 808 ${200*3} 831 ${200*3}
    C900 ${200*3} 900 ${200*3} 900 ${200*3}
    L900 ${200*3}
    L900 ${200*3}
    L900 ${200*3}
    C900 0 900 0 900 0
    C808 0 785 0 761.8 0
    C738.7 0 715.3 0 692.2 0
    C669 0 646 0 623 0
    C600 0 577 0 554 0
    C531 0 508 0 484.8 0
    C461.7 0 438.3 0 415.2 0
    C392 0 369 0 346 0
    C323 0 300 0 277 0
    C254 0 231 0 207.8 0
    C184.7 0 161.3 0 138.2 0
    C115 0 92 0 69 0
    C46 0 23 0 11.5 0
    L-10 -10Z
    `;




const Projects = () => {
    const sectionRef = useRef(null);
    const [isFixed, setIsFixed] = useState<boolean>(false);
    const {scrollYProgress} = useScroll({
        target:sectionRef,
        offset:["start start", "end end"]
    });

    const project1OuterX = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"]);
    const project1RotateY = useTransform(scrollYProgress, [0, 0.1, 0.2], ["75deg", "0deg", "-20deg"]);
    const project1Origin = useTransform(scrollYProgress, [0, 0.1, 0.2], ["50%", "50%", "-50%"]);
    const project1Scale = useTransform(scrollYProgress, [0, 0.19, 0.2], [0.5, 1.8, 3]);
    const project1Opacity = useTransform(scrollYProgress, [0, 0.01, 0.19, 0.2], [0, 1, 1, 0]);
    const project1OuterPerspective = useTransform(scrollYProgress, [0, 0.1, 0.2], ["300px", "300px", "200px"]);
    const project1Shadow = useTransform(scrollYProgress, [0.19, 0.2], ["1px 1px 5px 5px white", "50px 50px 50px 1px pink"]);
    //const project1OuterDisplay = useTransform(scrollYProgress, [0, 0.01, 0.19, 0.2], ["none", "block", "block", "none"]);
    const project1DetailsOrigin = useTransform(scrollYProgress, [0, 0.17, 0.2], ["50%", "50%", "150%"]);
    const project1DetailsScale = useTransform(scrollYProgress, [0, 0.17, 0.2], [0.5, 1, 1.5]);
    const project1DetailsOpacity = useTransform(scrollYProgress, [0, 0.12, 0.176, 0.2], [0, 1, 1, 0]);
    const project1DetailsPath = useTransform(scrollYProgress, [0.08, 0.13, 0.145], [path1, path2, path3]);
    

    const project2OuterX = useTransform(scrollYProgress, [0.2, 0.4], ["0%", "-100%"]);
    const project2RotateY = useTransform(scrollYProgress, [0.2, 0.3, 0.4], ["-75deg", "0deg", "20deg"]);
    const project2Origin = useTransform(scrollYProgress, [0.2, 0.3, 0.4], ["50%", "50%", "150%"]);
    const project2Scale = useTransform(scrollYProgress, [0.2, 0.39, 0.4], [0.5, 1.8, 3]);
    const project2Opacity = useTransform(scrollYProgress, [0.2, 0.21, 0.39, 0.4], [0, 1, 1, 0]);
    const project2OuterPerspective = useTransform(scrollYProgress, [0.2, 0.3, 0.4], ["300px", "300px", "200px"]);
    const project2Shadow = useTransform(scrollYProgress, [0.39, 0.4], ["0px 0px 5px 5px white", "-50px 50px 50px 1px pink"]);
    //const project2OuterDisplay = useTransform(scrollYProgress, [0.2, 0.21, 0.39, 0.4], ["none", "block", "block", "none"]);
    const project2DetailsOrigin = useTransform(scrollYProgress, [0.2, 0.37, 0.4], ["50%", "50%", "-50%"]);
    const project2DetailsScale = useTransform(scrollYProgress, [0.2, 0.39, 0.4], [0.5, 1, 1.5]);
    const project2DetailsOpacity = useTransform(scrollYProgress, [0.2, 0.32, 0.39, 0.4], [0, 1, 1, 0]);
    const project2DetailsPath = useTransform(scrollYProgress, [0.28, 0.33, 0.345], [path1, path2, path3]);
    

    const project3OuterX = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "100%"]);
    const project3RotateY = useTransform(scrollYProgress, [0.4, 0.58, 0.6], ["75deg", "0deg", "-20deg"]);
    const project3Origin = useTransform(scrollYProgress, [0.4, 0.5, 0.6], ["50%", "50%", "-50%"]);
    const project3Scale = useTransform(scrollYProgress, [0.4, 0.59, 0.6], [0.5, 1.8, 3]);
    const project3Opacity = useTransform(scrollYProgress, [0.4, 0.42, 0.58, 0.6], [0, 1, 1, 0]);
    const project3OuterPerspective = useTransform(scrollYProgress, [0.4, 0.5, 0.6], ["300px", "300px", "200px"]);
    const project3Shadow = useTransform(scrollYProgress, [0.58, 0.6], ["1px 1px 5px 5px white", "50px 50px 50px 1px pink"]);
    //const project3OuterDisplay = useTransform(scrollYProgress, [0.4, 0.42, 0.58, 0.6], ["none", "block", "block", "none"]);
    const project3DetailsOrigin = useTransform(scrollYProgress, [0.4, 0.57, 0.6], ["50%", "50%", "150%"]);
    const project3DetailsScale = useTransform(scrollYProgress, [0.4, 0.59, 0.6], [0.5, 1, 1.5]);
    const project3DetailsOpacity = useTransform(scrollYProgress, [0.4, 0.52, 0.59, 0.6], [0, 1, 1, 0]);
    const project3DetailsPath = useTransform(scrollYProgress, [0.48, 0.53, 0.545], [path1, path2, path3]);
    

    const project4OuterX = useTransform(scrollYProgress, [0.6, 0.8], ["0%", "-100%"]);
    const project4RotateY = useTransform(scrollYProgress, [0.6, 0.78, 0.8], ["-75deg", "0deg", "20deg"]);
    const project4Origin = useTransform(scrollYProgress, [0.6, 0.7, 0.8], ["50%", "50%", "150%"]);
    const project4Scale = useTransform(scrollYProgress, [0.6, 0.79, 0.8], [0.5, 1.8, 3]);
    const project4Opacity = useTransform(scrollYProgress, [0.6, 0.62, 0.78, 0.8], [0, 1, 1, 0]);
    const project4OuterPerspective = useTransform(scrollYProgress, [0.6, 0.7, 0.8], ["300px", "300px", "200px"]);
    const project4Shadow = useTransform(scrollYProgress, [0.78, 0.8], ["0px 0px 5px 5px white", "-50px 50px 50px 1px pink"]);
    //const project4OuterDisplay = useTransform(scrollYProgress, [0.6, 0.62, 0.78, 0.8], ["none", "block", "block", "none"]);
    const project4DetailsOrigin = useTransform(scrollYProgress, [0.6, 0.77, 0.8], ["50%", "50%", "-50%"]);
    const project4DetailsScale = useTransform(scrollYProgress, [0.6, 0.79, 0.8], [0.5, 1, 1.5]);
    const project4DetailsOpacity = useTransform(scrollYProgress, [0.6, 0.72, 0.79, 0.8], [0, 1, 1, 0]);
    const project4DetailsPath = useTransform(scrollYProgress, [0.68, 0.73, 0.745], [path1, path2, path3]);


    const project5OuterX = useTransform(scrollYProgress, [0.8, 1], ["0%", "100%"]);
    const project5RotateY = useTransform(scrollYProgress, [0.8, 0.98, 1], ["75deg", "0deg", "-20deg"]);
    const project5Origin = useTransform(scrollYProgress, [0.8, 0.9, 1], ["50%", "50%", "-50%"]);
    const project5Scale = useTransform(scrollYProgress, [0.8, 0.98, 1], [0.5, 1.8, 3]);
    const project5Opacity = useTransform(scrollYProgress, [0.8, 0.82, 0.98, 1], [0, 1, 1, 0]);
    const project5OuterPerspective = useTransform(scrollYProgress, [0.8, 0.9, 1], ["300px", "300px", "200px"]);
    const project5Shadow = useTransform(scrollYProgress, [0.98, 1], ["0px 0px 5px 5px white", "-50px 50px 50px 1px pink"]);
    //const project5OuterDisplay = useTransform(scrollYProgress, [0.8, 0.82, 0.98, 1], ["none", "block", "block", "none"]);
    const project5DetailsOrigin = useTransform(scrollYProgress, [0.8, 0.97, 1], ["50%", "50%", "150%"]);
    const project5DetailsScale = useTransform(scrollYProgress, [0.8, 0.99, 1], [0.5, 1, 1.5]);
    const project5DetailsOpacity = useTransform(scrollYProgress, [0.8, 0.92, 0.99, 1], [0, 1, 1, 0]);
    const project5DetailsPath = useTransform(scrollYProgress, [0.88, 0.93, 0.945], [path1, path2, path3]);


    
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
        <section
            ref={sectionRef}
            className="border-3 border-pink-500 h-[3000vh]"
        >
            <motion.div
                style={{
                    position:isFixed?"fixed":"sticky"
                }}
                className="border-3 border-green-500 w-full h-screen top-0 left-0"
            >
                
                {/*  projects thumbnail  */}
                <motion.div
                    initial={{
                        perspective:"0px"
                    }}
                    style={{
                        perspective:project1OuterPerspective,
                        x:project1OuterX,
                        //display:project1OuterDisplay
                    }}
                    //transition={{
                    //    duration:2.5,
                    //    repeat:Infinity
                    //}}
                    className="h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <motion.img src={Client1} alt={Client1}
                        initial={{
                            rotateY:"0deg",
                            scale:0.5,
                            opacity:1
                        }}
                        style={{
                            rotateY:project1RotateY,
                            scale:project1Scale,
                            opacity:project1Opacity,
                            boxShadow:project1Shadow,
                            transformOrigin:project1Origin
                        }}
                        //transition={{
                        //    duration:2.5,
                        //    repeat:Infinity
                        //}}
                        //className="origin-left"
                    />
                </motion.div>
                <motion.div
                    initial={{
                        perspective:"0px"
                    }}
                    style={{
                        perspective:project2OuterPerspective,
                        x:project2OuterX,
                        //display:project2OuterDisplay
                    }}
                    //transition={{
                    //    duration:2.5,
                    //    repeat:Infinity
                    //}}
                    className="h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <motion.img src={Client1} alt={Client1}
                        initial={{
                            rotateY:"0deg",
                            scale:0.5,
                            opacity:1
                        }}
                        style={{
                            rotateY:project2RotateY,
                            scale:project2Scale,
                            opacity:project2Opacity,
                            boxShadow:project2Shadow,
                            transformOrigin:project2Origin
                        }}
                        //transition={{
                        //    duration:2.5,
                        //    repeat:Infinity
                        //}}
                        //className="origin-right h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                    />
                </motion.div>
                <motion.div
                    initial={{
                        perspective:"0px"
                    }}
                    style={{
                        perspective:project3OuterPerspective,
                        x:project3OuterX,
                        //display:project3OuterDisplay
                    }}
                    //transition={{
                    //    duration:2.5,
                    //    repeat:Infinity
                    //}}
                    className="h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <motion.img src={Client1} alt={Client1}
                        initial={{
                            rotateY:"0deg",
                            scale:0.5,
                            opacity:1
                        }}
                        style={{
                            rotateY:project3RotateY,
                            scale:project3Scale,
                            opacity:project3Opacity,
                            boxShadow:project3Shadow,
                            transformOrigin:project3Origin
                        }}
                        //transition={{
                        //    duration:2.5,
                        //    repeat:Infinity
                        //}}
                        //className="origin-right h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                    />
                </motion.div>
                <motion.div
                    initial={{
                        perspective:"0px"
                    }}
                    style={{
                        perspective:project4OuterPerspective,
                        x:project4OuterX,
                        //display:project4OuterDisplay
                    }}
                    //transition={{
                    //    duration:2.5,
                    //    repeat:Infinity
                    //}}
                    className="h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <motion.img src={Client1} alt={Client1}
                        initial={{
                            rotateY:"0deg",
                            scale:0.5,
                            opacity:1
                        }}
                        style={{
                            rotateY:project4RotateY,
                            scale:project4Scale,
                            opacity:project4Opacity,
                            boxShadow:project4Shadow,
                            transformOrigin:project4Origin
                        }}
                        //transition={{
                        //    duration:2.5,
                        //    repeat:Infinity
                        //}}
                        //className="origin-right h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                    />
                </motion.div>
                <motion.div
                    initial={{
                        perspective:"0px"
                    }}
                    style={{
                        perspective:project5OuterPerspective,
                        x:project5OuterX,
                        //display:project5OuterDisplay
                    }}
                    //transition={{
                    //    duration:2.5,
                    //    repeat:Infinity
                    //}}
                    className="h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <motion.img src={Client1} alt={Client1}
                        initial={{
                            rotateY:"0deg",
                            scale:0.5,
                            opacity:1
                        }}
                        style={{
                            rotateY:project5RotateY,
                            scale:project5Scale,
                            opacity:project5Opacity,
                            boxShadow:project5Shadow,
                            transformOrigin:project5Origin
                        }}
                        //transition={{
                        //    duration:2.5,
                        //    repeat:Infinity
                        //}}
                        //className="origin-right h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                    />
                </motion.div>


                {/*  projects details  */}
                <motion.div
                    style={{
                        perspective:project1OuterPerspective,
                        x:"-100%",
                        //display:project1OuterDisplay,
                        opacity:project1DetailsOpacity,
                        scale:project1DetailsScale,
                        transformOrigin:project1DetailsOrigin
                    }}
                    className="h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-[0px_0px_8px_2px_rgba(0,0,0,1)_inset]"
                >
                    <svg className="z-[-1] h-full w-full absolute top-0 left-0" id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <motion.path
                            d={project1DetailsPath}
                            fill="#eeeeee" stroke-linecap="round" stroke-linejoin="miter"
                        >
                        </motion.path>
                    </svg>
                    <div className="p-2 z-41 text-[#1e0041]">
                        <h4 className="text-xl font-bold">Ecommerce Application</h4>
                        <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                        <div className="flex justify-end gap-10 mt-10 px-10">
                            <a className="text-2xl" href="/github"><BsGithub /></a>
                            <a className="text-2xl" href="/github"><LuSquareArrowOutUpRight /></a>
                            {/*<a href="/github"><HiOutlineArrowTopRightOnSquare /></a>*/}
                        </div>
                    </div>
                    
                </motion.div>

                <motion.div
                    style={{
                        perspective:project2OuterPerspective,
                        x:"100%",
                        //display:project2OuterDisplay,
                        opacity:project2DetailsOpacity,
                        scale:project2DetailsScale,
                        transformOrigin:project2DetailsOrigin
                    }}
                    className="h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-[0px_0px_8px_2px_rgba(0,0,0,1)_inset]"
                >
                    <svg className="z-[-1] h-full w-full absolute top-0 left-0" id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <motion.path
                            d={project2DetailsPath}
                            fill="#eeeeee" stroke-linecap="round" stroke-linejoin="miter"
                        >
                        </motion.path>
                    </svg>
                    <div className="p-2 z-41 text-[#1e0041]">
                        <h4 className="text-xl font-bold">Uber Clone</h4>
                        <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                        <div className="flex justify-end gap-10 mt-10 px-10">
                            <a className="text-2xl" href="/github"><BsGithub /></a>
                            <a className="text-2xl" href="/github"><LuSquareArrowOutUpRight /></a>
                            {/*<a href="/github"><HiOutlineArrowTopRightOnSquare /></a>*/}
                        </div>
                    </div>
                    
                </motion.div>
                <motion.div
                    style={{
                        perspective:project3OuterPerspective,
                        x:"-100%",
                        //display:project3OuterDisplay,
                        opacity:project3DetailsOpacity,
                        scale:project3DetailsScale,
                        transformOrigin:project3DetailsOrigin
                    }}
                    className="h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-[0px_0px_8px_2px_rgba(0,0,0,1)_inset]"
                >
                    <svg className="z-[-1] h-full w-full absolute top-0 left-0" id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <motion.path
                            d={project3DetailsPath}
                            fill="#eeeeee" stroke-linecap="round" stroke-linejoin="miter"
                        >
                        </motion.path>
                    </svg>
                    <div className="p-2 z-41 text-[#1e0041]">
                        <h4 className="text-xl font-bold">Uber Clone</h4>
                        <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                        <div className="flex justify-end gap-10 mt-10 px-10">
                            <a className="text-2xl" href="/github"><BsGithub /></a>
                            <a className="text-2xl" href="/github"><LuSquareArrowOutUpRight /></a>
                            {/*<a href="/github"><HiOutlineArrowTopRightOnSquare /></a>*/}
                        </div>
                    </div>
                    
                </motion.div>
                <motion.div
                    style={{
                        perspective:project4OuterPerspective,
                        x:"100%",
                        //display:project4OuterDisplay,
                        opacity:project4DetailsOpacity,
                        scale:project4DetailsScale,
                        transformOrigin:project4DetailsOrigin
                    }}
                    className="h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-[0px_0px_8px_2px_rgba(0,0,0,1)_inset]"
                >
                    <svg className="z-[-1] h-full w-full absolute top-0 left-0" id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <motion.path
                            d={project4DetailsPath}
                            fill="#eeeeee" stroke-linecap="round" stroke-linejoin="miter"
                        >
                        </motion.path>
                    </svg>
                    <div className="p-2 z-41 text-[#1e0041]">
                        <h4 className="text-xl font-bold">Uber Clone</h4>
                        <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                        <div className="flex justify-end gap-10 mt-10 px-10">
                            <a className="text-2xl" href="/github"><BsGithub /></a>
                            <a className="text-2xl" href="/github"><LuSquareArrowOutUpRight /></a>
                            {/*<a href="/github"><HiOutlineArrowTopRightOnSquare /></a>*/}
                        </div>
                    </div>
                    
                </motion.div>
                <motion.div
                    style={{
                        perspective:project5OuterPerspective,
                        x:"-100%",
                        //display:project5OuterDisplay,
                        opacity:project5DetailsOpacity,
                        scale:project5DetailsScale,
                        transformOrigin:project5DetailsOrigin
                    }}
                    className="h-[200px] w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-[0px_0px_8px_2px_rgba(0,0,0,1)_inset]"
                >
                    <svg className="z-[-1] h-full w-full absolute top-0 left-0" id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <motion.path
                            d={project5DetailsPath}
                            fill="#eeeeee" stroke-linecap="round" stroke-linejoin="miter"
                        >
                        </motion.path>
                    </svg>
                    <div className="p-2 z-41 text-[#1e0041]">
                        <h4 className="text-xl font-bold">Uber Clone</h4>
                        <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                        <div className="flex justify-end gap-10 mt-10 px-10">
                            <a className="text-2xl" href="/github"><BsGithub /></a>
                            <a className="text-2xl" href="/github"><LuSquareArrowOutUpRight /></a>
                            {/*<a href="/github"><HiOutlineArrowTopRightOnSquare /></a>*/}
                        </div>
                    </div>
                    
                </motion.div>




            </motion.div>
        </section>
    )
}

export default Projects;