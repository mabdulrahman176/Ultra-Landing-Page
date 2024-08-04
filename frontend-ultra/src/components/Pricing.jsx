import React from 'react'
import { FaHandFist } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import { TbMilitaryAward } from "react-icons/tb";
import { Link } from 'react-router-dom';

const arr = [
    {
        id: 1,
        icon: <FaHandFist />,
        title: "Starter Pack",
        price: "$ 99.99",
        time: "per month",
        newUsers: "100 New Users",
        budget: "$10,000 Budget",
        text: "Retargeting analytics",
        btn: "Choose Plan"

    },
    {
        id: 2,
        icon: <TbMilitaryAward />,
        title: "Gold Rush",
        price: "$ 299.99",
        time: "per month",
        newUsers: "1000 New Users",
        budget: "$10,000 Budget",
        text: "Lead Gen Analytics",
        btn: "Choose Plan"

    },
    {
        id: 3,
        icon: <IoDiamond />,
        title: "Diamond Kings",
        price: "$ 999.99",
        time: "per month",
        newUsers: "Ultimated New Users",
        budget: "Ultimated Budget",
        text: "24/7 Support",
        btn: "Choose Plan"

    }

]

function Pricing() {
    return (
        <div className="bg-gray-100 h-auto  py-20">
            <div className="max-w-6xl  mx-auto  sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {arr.map(item => (
                        <div key={item.id} className="bg-[#242424] leading-relaxed text-center shadow-md rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300">
                            <div className="p-6  flex md:flex-col flex-col items-center ">
                                <div className="text-5xl   text-[#a9b3c1] mb-4">{item.icon}</div>
                                <h3 className="text-3xl  font-semibold text-[#a9b3c1]">{item.title}</h3>
                                <p className="text-2xl  font-bold text-[#a9b3c1] mt-2">
                                    {item.price}
                                </p>
                                <p><span className="text-lg  font-normal text-[#a9b3c1]">{item.time}</span></p>
                                <p className="text-xl pt-4 text-gray-600 mt-4">{item.newUsers}</p>
                                <p className="text-xl text-gray-600 mt-2">{item.budget}</p>
                                <p className="text-xl text-gray-600 mt-2">{item.text}</p>
                                <Link to='/rounting' className="mt-16 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                                    {item.btn}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pricing