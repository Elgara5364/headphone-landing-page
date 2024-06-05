"use client";

import Image from "next/image";
import icoBag from "/public/ico/bag-shopping-solid.svg";
import Discount from "/public/img/discount.png";
import { useRef, useState, useEffect } from "react";

const Cta = () => {
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
    <section className="mx-5 pt-16 pb-8 ">
      <div className="container max-w-[650px] bg-[#181A1B] rounded-2xl mx-auto">
        <div className="max-w-[550px] max-[640px]:flex-col flex justify-center items-center mx-auto rounded-2xl py-6 ">
          <div
            className={`w-full sm:w-1/2 text-center sm:text-start pt-10 ${
              state
                ? "duration-1000 opacity-100 "
                : "duration-1000 opacity-0 -translate-x-5"
            }`}
            ref={myRef}>
            <h2 className="text-[#F2F2F3] font-bold text-2xl w-3/4 mb-4 mx-auto">
              Immerse yourself in your music
            </h2>
            <p className=" mb-3 w-3/4 text-gray-100 mx-auto">
              Get it now, up to 50% off.
            </p>
            <button className="relative flex gap-4 px-5 py-4 bg-black hover:bg-[#3b3b3b] transition duration-200 rounded-md mb-10 mx-auto sm:ms-8">
              <Image
                src={icoBag}
                alt="Bag ico"
                width={15}
                height={15}
                style={{ width: "15px", height: "auto" }}
              />
              <p className="text-[#F2F2F3] ">Shop Now</p>
            </button>
          </div>
          <div
            className={`sm:w-1/2 ${
              state
                ? "duration-1000 opacity-100 "
                : "duration-1000 opacity-0 translate-x-5"
            }`}>
            <Image
              src={Discount}
              alt="Discount"
              style={{ width: "100%", height: "auto" }}
              className="px-6 max-w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
