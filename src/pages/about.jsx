import React from "react"
import { NavBar } from "../componets"

const about = () => {
    return (
        <div className="w-full h-full">
            <NavBar />
            <div className="flex justify-center items-center md:h-[347px] lg:h-[594px]">
                <div className="flex flex-col items-center justify-center gap-6 md:w-[516px] lg:w-[842px]">
                    <h1 className="text-text font-bold md:text-[44px] md:leading-[54px] lg:text-5xl md:tracking-[-0.04rem] lg:leading-[58px]">
                        About Us
                    </h1>
                    <p className=" md:text-base md:leading-[24px] lg:text-2xl text-para lg:leading-9 lg:tracking-[0.01rem] text-center md:w-[519px] lg:w-[743px]">
                        We are a group of{" "}
                        <span className="text-zinc-800 font-semibold italic">
                            {" "}
                            “Passionate healthcare”{" "}
                        </span>
                        and technology professionals{" "}
                        <span className="text-zinc-800 font-semibold italic">
                            {" "}
                            “Committed to building software solutions”
                        </span>{" "}
                        in the Pharma InfoTech space. We focus our work on
                        increasing{" "}
                        <span className="text-zinc-800 font-semibold italic">
                            {" "}
                            ”Patient safety”
                        </span>{" "}
                        and efficiency in pharmacy.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default about
