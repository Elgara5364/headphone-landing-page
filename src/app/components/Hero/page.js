"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import icoBag from "/public/ico/bag-shopping-solid.svg";
import Headphone1 from "/public/img/home.png";

const Hero = () => {
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
      { threshold: 0.7 }
    );

    observer.observe(myRef.current);
  }, [state]);

  return (
    <section
      className="z-20 px-5 min-[575px]:flex min-[575px]:justify-center pt-16 pb-8"
      id="home">
      <div
        className={`absolute right-9 top-[-13rem] min-[340px]:top-[-17rem] min-[576px]:left-0 min-[576px]:top-[-4rem] min-[700px]:left-10 lg:left-20 xl:left-52 ms-10 lg:ms-20 lg:top-[-9rem] ${
          state
            ? "duration-1000 opacity-100"
            : "duration-1000 opacity-0 -translate-y-5"
        } `}>
        <Image
          src={Headphone1}
          alt="Home"
          width={200}
          className="min-[340px]:w-[250px] lg:w-[300px] pt-7"
        />
      </div>
      <div className="w-[484px]"></div>
      <div
        className={`min-[575px]:w-[484px] ${
          state
            ? "opacity-100 duration-1000"
            : "opacity-0 duration-1000 translate-y-5"
        }`}
        ref={myRef}>
        <div className="">
          <h1 className="bg-gradient-to-b max-[340px]:text-[56px] from-[#cfcfcf] to-[#141414] text-transparent bg-clip-text font-semibold text-[80px] relative ps-3">
            On ear
          </h1>
          <h2 className=" relative font-semibold top-[-2rem] text-[40px] text-gray-200">
            Beats 3
          </h2>
        </div>
        <div className="relative mb-10">
          <h3 className="text-xl font-medium mb-4 text-[#F2F2F3]">Overview</h3>
          <p className="text-[15px] text-[#BDC0C2] leading-8 mb-10 mx-auto min-[576px]:pe-1">
            Enjoy award-winning Beats sound with wireless listening freedom and
            a sleek, streamlined design with comfortable padded earphones,
            delivering first-rate playback.
          </p>
          <button className="relative flex gap-4 px-5 py-4 bg-[#1b1b1e] hover:bg-[#141515] transition duration-200 rounded-md">
            <Image
              src={icoBag}
              alt="Bag"
              width={15}
              style={{ width: "15px", height: "auto" }}
            />
            <p className="text-white">Add to Bag</p>
            <p className="text-gray-100">$299</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
