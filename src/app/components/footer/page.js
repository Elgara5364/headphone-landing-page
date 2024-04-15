"use client";

import Image from "next/image";
import Logo from "/public/img/logo.png";
import Link from "next/link";
import Send from "/public/ico/paper-plane-solid.svg";
import fbIco from "/public/ico/facebook-f.svg";
import igIco from "/public/ico/instagram.svg";
import twitterIco from "/public/ico/twitter.svg";
import { useRef, useState, useEffect } from "react";

const Footer = () => {
  const myRef = useRef(null);
  const [state, setState] = useState(false);

  //* use State
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setState(entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(myRef.current);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(myRef.current);
  }, [state]);

  return (
    <footer
      className={`px-5 pt-5 mb-20 py-3 md:pt-5 md:px-10 lg:px-24 xl:px-60 mx-auto ${
        state
          ? "duration-1000 opacity-100 "
          : "duration-1000 opacity-0 translate-y-5"
      }`}>
      <div
        className=" w-full grid grid-cols-1 gap-6 min-[500px]:grid-cols-2 md:grid-cols-[minmax(40px,_100px)_minmax(100px,_200px)_minmax(100px,_200px)_minmax(200px,_auto)] md:justify-between md:content-center "
        ref={myRef}>
        <div>
          <Link href="#">
            <Image src={Logo} alt="Logo" width={25} />
          </Link>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-[18px]">Products</h3>
          <ul className="flex flex-col gap-1">
            <li className="text-[15px]] text-[#BDC0C2]">
              <Link href={"#home"}>Headphones</Link>
            </li>
            <li className="text-[15px]] text-[#BDC0C2]">
              <Link href={"#home"}>Earphones</Link>
            </li>
            <li className="text-[15px]] text-[#BDC0C2]">
              <Link href={"#home"}>Earbuds</Link>
            </li>
            <li className="text-[15px]] text-[#BDC0C2]">
              <Link href={"#home"}>Accesories</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-[18px]">Support</h3>
          <ul className="flex flex-col gap-1">
            <li className="text-[15px]] text-[#BDC0C2]">
              <Link href={"#home"}>Product Help</Link>
            </li>
            <li className="text-[15px]] text-[#BDC0C2]">
              <Link href={"#home"}>Register</Link>
            </li>
            <li className="text-[15px]] text-[#BDC0C2]">
              <Link href={"#home"}>Updates</Link>
            </li>
            <li className="text-[15px]] text-[#BDC0C2]">
              <Link href={"#home"}>Provides</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <form className="bg-[#181A1B] flex justify-between rounded-md p-3">
            <input
              type="text"
              className="w-1/2 bg-inherit"
              placeholder="Email"></input>
            <div className="flex gap-4">
              <Image
                src={Send}
                alt="Send"
                width={15}
                style={{ width: "15px", height: "auto" }}
              />
              <button className="p-3 bg-black rounded-lg">Subscribe</button>
            </div>
          </form>
          <div className="flex gap-5">
            <button className="bg-[#181A1B] p-3 rounded-lg">
              <Image
                priority
                src={fbIco}
                alt="FB"
                width={10}
                style={{ width: "10px", height: "auto" }}
              />
            </button>
            <button className="bg-[#181A1B] p-3 rounded-lg">
              <Image
                priority
                src={igIco}
                alt="IG"
                width={15}
                style={{ width: "15px", height: "auto" }}
              />
            </button>
            <button className="bg-[#181A1B] p-3 rounded-lg">
              <Image
                priority
                src={twitterIco}
                alt="Twitter"
                width={15}
                style={{ width: "15px", height: "auto" }}
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
