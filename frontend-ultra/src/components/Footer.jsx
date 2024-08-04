import React from 'react';
import { GrCubes } from "react-icons/gr";
import { FaGithub, FaInstagram,FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {

  const links = [
    {
      title: "About Us",
      items: ["How it works", "Testimonials", "Careers", "Investors", "Terms of Service"]
    },
    {
      title: "Contact Us",
      items: ["Contact", "Support", "Destinations", "Sponsorships"]
    },
    {
      title: "Videos",
      items: ["Submit Video", "Ambassadors", "Agency", "Influencer"]
    },
    {
      title: "Social Med",
      items: ["Instagram", "Facebook", "Youtube", "Twitter"]
    }
  ];
    return (
        <footer className="bg-[#101522] w-full py-16">
            <div className="text-center px-4">
                <h1 className="text-white text-2xl font-bold">Join our exclusive membership to receive the latest news and trends</h1>
                <h2 className="text-white text-lg font-normal pt-4">You can unsubscribe at any time</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-5">
                    <input type="email" name="email" className="p-3 font-normal border-none outline-none rounded-md mb-4 md:mb-0" placeholder="Your Email" />
                    <Link to='/rounting' className="text-lg text-white rounded-md py-3 px-5 border-none outline-none cursor-pointer bg-[#4B59F7]">Subscribe</Link>
                </div>
            </div>

            <div className="bg-[#101522] text-white p-10">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
        {links.map((linkGroup, index) => (
          <ul key={index}>
            <h1 className="font-bold text-xl mb-4">{linkGroup.title}</h1>
            {linkGroup.items.map((item, idx) => (
              <li key={idx} className="mb-2 hover:text-blue-400 cursor-pointer">{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-10 md:px-20">
                <div className="flex items-center space-x-2">
                    <GrCubes className="text-white text-5xl" />
                    <h1 className="text-white text-2xl">ULTRA</h1>
                </div>
                <p className="text-white text-center">ULTRA © 2024 by Team Code Thinkers</p>
                <div className="flex gap-5 text-white text-2xl">
                 <a href="https://github.com/mabdulrahman176" target='_blank'>   <FaGithub className="cursor-pointer" /></a>
                 <a href="https://www.instagram.com/chabdulrahmangill?igsh=dG9tcW03d29kMW4x" target='_blank'><FaInstagram className="cursor-pointer" /></a>
                 <a href="https://www.facebook.com/ch.abdulrahmangill?mibextid=ZbWKwL" target='_blank'><FaFacebookSquare
                 className="cursor-pointer" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;