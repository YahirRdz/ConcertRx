import React from "react"
import { Listicon, minus, plus } from "../assets/Icon"
import { NavBar } from "../componets"

const pricing = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full md:h-[455px] lg:h-[572px] bg-bg flex justify-center ">
                <div className="flex flex-col items-center gap-4 p-0 md:mt-[118px] lg:mt-[200px]">
                    <h1 className="font-bold md:text-[44px] md:leading-[53px] md:tracking-[-0.04rem] lg:text-5xl lg:tracking-[-0.2rem] text-text">
                        Plans & Pricing
                    </h1>
                    <p className="lg:text-lg font-normal lg:leading-7  lg:tracking-tight lg:w-[534px] md:text-base md:leading-[24px] md:tracking-[-0.01rem] md:w-[516px]">
                        We’re working on a suit of tools to make managing
                        complex systems easier, for everyone. We can’t wait to
                        hear what you think
                    </p>
                </div>
            </div>
            <div className="lg:h-[556px] flex flex-col px-[80px] md:items-center justify-center">
                <div className="flex md:gap-[40px] lg:gap-8 md:flex-col lg:flex-row md:w-[384px] lg:w-[1280px] md:h-[1100px] lg:h-[400px]">
                    {/* car1 */}
                    <div className="flex gap-8 lg:h-[516px] md:h-[466px] md:w-[384px] lg:w-[405px] relative md:bottom-[156px]">
                        <div className="lg:h-[516px] w-[405px] bg-bgCard border border-solid border-borCard rounded-md flex flex-col md:gap-[32px] lg:gap-[37px] items-start md:p-6 lg:p-10">
                            <div className="flex flex-col md:gap-[20px] lg:gap-[17px]">
                                <div className="flex flex-col md:gap-4 lg:gap-6">
                                    <div className="flex flex-col items-start gap-2">
                                        <h3 className="lg:text-2xl md:text-base md:leading-4 font-bold lg:leading-6 text-text p-0 lg:w-[98px] lg:h-[24px]">
                                            Standard
                                        </h3>
                                        <p className="md:text-xs md:leading-3 lg:font-medium lg:leading-6 text-zinc-700 lg:w-[129px]">
                                            Hit the Ground Running
                                        </p>
                                    </div>
                                    <h2 className=" lg:text-5xl md:text-[32px] md:leading-[48px] text-start font-bold lg:h-[48px] lg:leading-[48px]">
                                        $29.95
                                        <span className=" md:text-base lg:text-xl font-bold leading-[48px]">
                                            / month
                                        </span>
                                    </h2>
                                </div>
                                <div className="flex flex-col items-start lg:w-[231px] lg:h-[216px]">
                                    <ul className="flex flex-col items-start gap-6 mt-[3px]">
                                        <li className="md:text-base md:leading-4 lg:text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            Unlimited boards
                                        </li>
                                        <li className="md:text-base md:leading-4 lg:text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            Free SENDER ID
                                        </li>
                                        <li className="md:text-base md:leading-4 lg:text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            IP address login
                                        </li>
                                        <li className="md:text-base md:leading-4 lg:text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            Buy SMS credits for $0.1 /credit
                                        </li>
                                        <li className="md:text-base md:leading-4 lg:text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            GST included in pricing
                                        </li>
                                        <li className="md:text-base md:leading-4 lg:text-sm font-normal leading-4 text-zinc-800 flex gap-4">
                                            <img src={Listicon} alt="" />
                                            Credits do not expire
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="flex justify-center items-center md:w-[336px] md:h-[40px] md:py-3 md:px-4 lg:w-[317px] lg:h-[40px] lg:px-4 lg:py-3 bg-primary rounded-[20px] ">
                                <p className="text-sm font-medium leading-4 text-white">
                                    Get Started
                                </p>
                            </button>
                        </div>
                    </div>
                    {/* car2 */}
                    <div className="flex gap-8 lg:h-[516px] md:h-[340px] md:w-[384px] lg:w-[405px] relative md:bottom-[156px]">
                        <div className="lg:h-[516px] w-[405px] bg-bgCard border border-solid border-borCard rounded-md flex flex-col md:gap-[32px] md:p-6 lg:gap-[37px] items-start lg:p-10">
                            <div className="flex flex-col md:gap-[22px] lg:gap-[17px]">
                                <div className="flex flex-col md:gap-4 lg:gap-6">
                                    <div className="flex flex-col items-start gap-2">
                                        <h3 className="lg:text-2xl md:text-base md:leading-4 leading-6 text-text font-bold text-start lg:w-[98px] lg:h-[24px]">
                                            Pro
                                        </h3>
                                        <p className="md:text-xs md:leading-3 lg:text-xs lg:font-medium lg:leading-6 text-zinc-700 lg:w-[129px]">
                                            Power up your business
                                        </p>
                                    </div>
                                    <h2 className="md:text-[32px] md:text-start  md:leading-[48px] lg:text-5xl font-bold h-[48px] lg:leading-[48px]">
                                        $39.95
                                        <span className="md:text-base text-xl font-bold leading-[48px]">
                                            / month
                                        </span>
                                    </h2>
                                </div>
                                <div className="flex flex-col items-start lg:w-[231px] lg:h-[216px]">
                                    <ul className="flex flex-col items-start gap-6 mt-[3px]">
                                        <li
                                            className="md:text-base md:leading-4 
                                        lg:text-sm font-normal leading-4 text-zinc-800 flex gap-4"
                                        >
                                            <img src={Listicon} alt="" />
                                            Everything in Standard
                                        </li>
                                        <li
                                            className="md:text-base md:leading-4 
                                        lg:text-sm font-normal leading-4 text-zinc-800 flex gap-4"
                                        >
                                            <img src={Listicon} alt="" />
                                            Two way messaging
                                        </li>
                                        <li
                                            className="md:text-base md:leading-4 
                                        lg:text-sm font-normal leading-4 text-zinc-800 flex gap-4"
                                        >
                                            <img src={Listicon} alt="" />
                                            One chatbot
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="flex justify-center items-center md:w-[336px] md:h-[40px] md:py-3 md:px-4   lg:w-[317px] lg:h-[40px] lg:px-4 lg:py-3 bg-transparent border border-solid border-zinc-300 rounded-[20px] ">
                                <p className="text-sm font-medium leading-4 text-zinc-500">
                                    Coming Soon
                                </p>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-8 lg:h-[516px] md:h-[340px] md:w-[384px] lg:w-[405px] relative md:bottom-[156px]">
                        <div className="lg:h-[516px] w-[405px] bg-bgCard border border-solid border-borCard rounded-md flex flex-col md:gap-[32px] md:p-6 lg:gap-[37px] items-start lg:p-10">
                            <div className="flex flex-col md:gap-[22px] lg:gap-[17px]">
                                <div className="flex flex-col md:gap-4 lg:gap-6">
                                    <div className="flex flex-col items-start gap-2">
                                        <h3 className="lg:text-2xl md:text-base md:leading-4 leading-6 text-text font-bold text-start lg:w-[98px] lg:h-[24px]">
                                            Pro
                                        </h3>
                                        <p className="md:text-xs md:leading-3 lg:text-xs lg:font-medium lg:leading-6 text-zinc-700 lg:w-[129px]">
                                            Power up your business
                                        </p>
                                    </div>
                                    <h2 className="md:text-[32px] md:text-start  md:leading-[48px] lg:text-5xl font-bold h-[48px] lg:leading-[48px]">
                                        $39.95
                                        <span className="md:text-base text-xl font-bold leading-[48px]">
                                            / month
                                        </span>
                                    </h2>
                                </div>
                                <div className="flex flex-col items-start lg:w-[231px] lg:h-[216px]">
                                    <ul className="flex flex-col items-start gap-6 mt-[3px]">
                                        <li
                                            className="md:text-base md:leading-4 
                                        lg:text-sm font-normal leading-4 text-zinc-800 flex gap-4"
                                        >
                                            <img src={Listicon} alt="" />
                                            Everything in Standard
                                        </li>
                                        <li
                                            className="md:text-base md:leading-4 
                                        lg:text-sm font-normal leading-4 text-zinc-800 flex gap-4"
                                        >
                                            <img src={Listicon} alt="" />
                                            Two way messaging
                                        </li>
                                        <li
                                            className="md:text-base md:leading-4 
                                        lg:text-sm font-normal leading-4 text-zinc-800 flex gap-4"
                                        >
                                            <img src={Listicon} alt="" />
                                            One chatbot
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="flex justify-center items-center md:w-[336px] md:h-[40px] md:py-3 md:px-4   lg:w-[317px] lg:h-[40px] lg:px-4 lg:py-3 bg-transparent border border-solid border-zinc-300 rounded-[20px] ">
                                <p className="text-sm font-medium leading-4 text-zinc-500">
                                    Coming Soon
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-3 p-6 lg:w-[1280px] md:w-[516px] lg:h-[146px] bg-zinc-50">
                    <h5 className="font-bold text-lg">Note:</h5>
                    <ul className="flex flex-col items-start list-inside list-decimal">
                        <li className="text-sm font-normal leading-5 text-zinc-600">
                            Pricing is subject to change.
                        </li>
                        <li className="text-sm font-normal leading-5 text-zinc-600">
                            Transactions are processed in Australian Dollars
                            (AUD).
                        </li>
                        <li className="text-sm font-normal leading-5 text-zinc-600">
                            We use Stripe to process your payment. It's the same
                            payment provider used by products such as Twitter,
                            Pinterest, and Lyft. We do not handle your credit
                            card information directly.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lg:h-[889px] md:h-[761px] md:py-[64px] md:px-[114px] lg:py-[125px] lg:px-[80px] flex flex-col md:gap-8 lg:gap-16">
                <div className="w-full flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h1 className="md:text-3xl md:leading-9 md:tracking-[-0.04rem] lg:text-5xl font-bold lg:leading-[58px] lg:w-[768px] lg:tracking-tighter">
                            Frequently asked questions
                        </h1>
                        <p className="md:text-base md:leading-4 md:tracking-[-0.01rem] lg:text-lg text-zinc-600 leading-[18px] text-center tracking-[0.01rem]">
                            Everything you need to know about the product and
                            billing.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:px-[32px] lg:h-[489px]">
                    <div className="flex flex-col items-start gap-8">
                        {/* cards */}
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col items-start md:gap-[36px] lg:gap-[40px]">
                                <div className="flex w-full justify-between md:w-[516px] lg:w-[768px]">
                                    <div className="flex flex-col items-start gap-2">
                                        <h6 className="text-lg leading-[18px] font-medium text-text">
                                            Is there a free trial available?
                                        </h6>
                                        <p className="text-base text-zinc-600 font-normal text-start leading-6 md:w-[468px] lg:w-[720px]">
                                            Yes, you can try us for free for 30
                                            days. If you want, we’ll provide you
                                            with a free, personalized 30-minute
                                            onboarding call to get you up and
                                            running as soon as possible.
                                        </p>
                                    </div>
                                    <button>
                                        <img
                                            src={minus}
                                            alt=""
                                            className="w-[24px] h-[24px]"
                                        />
                                    </button>
                                </div>
                                <div className="flex w-full lg:h-[51px] justify-between md:h-[53px] md:w-[516px] lg:w-[768px]">
                                    <div className="flex flex-col items-start md:justify-center gap-2 justify-between">
                                        <h6 className="text-lg leading-[18px] font-medium text-text">
                                            What is your cancellation policy?
                                        </h6>
                                        <p className=" hidden text-base lg:h-[48px] lg:w-[720px] text-zinc-600 font-normal text-start leading-6">
                                            Yes, you can try us for free for 30
                                            days. If you want, we’ll provide you
                                            with a free, personalized 30-minute
                                            onboarding call to get you up and
                                            running as soon as possible.
                                        </p>
                                    </div>
                                    <button>
                                        <img
                                            src={plus}
                                            alt=""
                                            className="w-[24px] h-[24px]"
                                        />
                                    </button>
                                </div>
                                <div className="flex w-full lg:h-[51px] justify-between md:h-[53px] md:w-[516px] lg:w-[768px]">
                                    <div className="flex flex-col items-start md:justify-center gap-2 justify-between">
                                        <h6 className="text-lg leading-[18px] font-medium text-text">
                                            Can I change my plan later?
                                        </h6>
                                        <p className=" hidden text-base lg:h-[48px] lg:w-[720px] text-zinc-600 font-normal text-start leading-6">
                                            Yes, you can try us for free for 30
                                            days. If you want, we’ll provide you
                                            with a free, personalized 30-minute
                                            onboarding call to get you up and
                                            running as soon as possible.
                                        </p>
                                    </div>
                                    <button>
                                        <img
                                            src={plus}
                                            alt=""
                                            className="w-[24px] h-[24px]"
                                        />
                                    </button>
                                </div>
                                <div className="flex w-full lg:h-[51px] justify-between md:h-[53px] md:w-[516px] lg:w-[768px]">
                                    <div className="flex flex-col items-start md:justify-center gap-2 justify-between">
                                        <h6 className="text-lg leading-[18px] font-medium text-text">
                                            Can other info be added to an
                                            invoice?
                                        </h6>
                                        <p className=" hidden text-base lg:h-[48px] lg:w-[720px] text-zinc-600 font-normal text-start leading-6">
                                            Yes, you can try us for free for 30
                                            days. If you want, we’ll provide you
                                            with a free, personalized 30-minute
                                            onboarding call to get you up and
                                            running as soon as possible.
                                        </p>
                                    </div>
                                    <button>
                                        <img
                                            src={plus}
                                            alt=""
                                            className="w-[24px] h-[24px]"
                                        />
                                    </button>
                                </div>
                                <div className="flex w-full lg:h-[51px] justify-between md:h-[53px] md:w-[516px] lg:w-[768px]">
                                    <div className="flex flex-col items-start md:justify-center gap-2 justify-between">
                                        <h6 className="text-lg leading-[18px] font-medium text-text">
                                            How does billing work?
                                        </h6>
                                        <p className=" hidden text-base lg:h-[48px] lg:w-[720px] text-zinc-600 font-normal text-start leading-6">
                                            Yes, you can try us for free for 30
                                            days. If you want, we’ll provide you
                                            with a free, personalized 30-minute
                                            onboarding call to get you up and
                                            running as soon as possible.
                                        </p>
                                    </div>
                                    <button>
                                        <img
                                            src={plus}
                                            alt=""
                                            className="w-[24px] h-[24px]"
                                        />
                                    </button>
                                </div>
                                <div className="flex w-full lg:h-[51px] justify-between md:h-[53px] md:w-[516px] lg:w-[768px]">
                                    <div className="flex flex-col items-start md:justify-center gap-2 justify-between">
                                        <h6 className="text-lg leading-[18px] font-medium text-text">
                                            How do I change my account email?
                                        </h6>
                                        <p className=" hidden text-base lg:h-[48px] lg:w-[720px] text-zinc-600 font-normal text-start leading-6">
                                            Yes, you can try us for free for 30
                                            days. If you want, we’ll provide you
                                            with a free, personalized 30-minute
                                            onboarding call to get you up and
                                            running as soon as possible.
                                        </p>
                                    </div>
                                    <button>
                                        <img
                                            src={plus}
                                            alt=""
                                            className="w-[24px] h-[24px]"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pricing

// Pricing is subject to change.
// Transactions are processed in Australian Dollars (AUD).
// We use Stripe to process your payment. It's the same payment provider used by products such as Twitter, Pinterest, and Lyft. We do not handle your credit card information directly.
