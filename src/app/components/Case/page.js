"use client";

import Image from "next/image";
import CaseImg from "/public/img/case.png";
import MoreInfo from "/public/ico/info-solid.svg";
import { useRef, useState, useEffect } from "react";

const Case = () => {
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
    <section className="pt-16 pb-8 " id="case">
      <div className="mx-5">
        <h1 className="bg-gradient-to-b max-[340px]:text-[56px] from-[#454545] to-[#141414] text-transparent bg-clip-text font-semibold text-[56px] relative ps-3 text-center mb-10">
          Case
        </h1>
        <div
          className={`max-w-[630px] flex flex-col items-center justify-center mx-auto gap-6 sm:flex-row md:80% ${
            state
              ? "duration-1000 opacity-100 "
              : "duration-1000 opacity-0 -translate-y-10 "
          }`}
          ref={myRef}>
          <Image src={CaseImg} alt="Case.jpg" className="max-w-[250px]" />
          <div
            className={`sm:flex-col sm:content-center ${
              state
                ? "duration-1000 opacity-100 "
                : "duration-1000 opacity-0 translate-y-1/2 "
            }`}
            ref={myRef}>
            <p className="max-w-[250px] text-[15px] text-[#BDC0C2] leading-8 mb-10 mx-auto w-3/4 text-center sm:text-start ">
              With a comfortable and adaptable case so that you can store it
              whenever you want, and keep your durability forever.
            </p>
            <button className="flex gap-4 px-5 py-4 bg-[#0A0A0B] hover:bg-[#141515] transition duration-200 rounded-md items-center mx-auto sm:mx-6">
              <Image
                src={MoreInfo}
                alt="Information icon"
                width={7}
                height={15}
                style={{ width: "7px", height: "15px" }}
                className="flex items-center"
              />
              <p className="text-[#F2F2F3]">More Info</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
