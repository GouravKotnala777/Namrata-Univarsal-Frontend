import { IoPeople, IoPerson } from "react-icons/io5";
import CounterAnimation from "./CounterAnimaton";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";

const States = () => {

    return(
        <div className="flex justify-around py-6 bg-yellow-300">
            <CounterAnimation Icon={IoPerson} title="OurStaffs" finalValue={56} />
            <CounterAnimation Icon={IoPeople} title="Our Clints" finalValue={5200} />
            <CounterAnimation Icon={AiOutlineFileDone} title="Completed Projects" finalValue={3811} />
            <div
                className="font-bold flex flex-col gap-2 items-center w-max"
            >
                <div className="text-7xl text-gray-500"><MdSupportAgent/></div>
                <div className="text-6xl font-extrabold">24*7</div>
                <div className="text-xl text-gray-500">Support</div>
            </div>
        </div>
    )
}

export default States;