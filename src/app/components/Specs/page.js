"use client";

import Image from "next/image";
import Bluetooth from "/public/ico/bluetooth-b.svg";
import Battery from "/public/ico/battery-full-solid.svg";
import Fast from "/public/ico/bolt-solid.svg";
import Mic from "/public/ico/microphone-solid.svg";
import Headphone from "/public/img/specs.png";
import { useEffect, useRef, useState } from "react";

const Specs = () => {
  const data = [
    {
      img: Bluetooth,
      title: "Connection",
      desc: "Bluetooth v5.2",
    },
    {
      img: Battery,
      title: "Battery",
      desc: "Duration 40h",
    },
    {
      img: Fast,
      title: "Load",
      desc: "Fast Charge 4.2-AAC",
    },
    {
      img: Mic,
      title: "Microphone",
      desc: "Support Apple Siri and Google",
    },
  ];

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
    // console.log(state);
    observer.observe(myRef.current);
  }, [state]);

  //*Use DOM
  // useEffect(() => {
  //   const observer = new IntersectionObserver((changeColor) => {
  //     changeColor.forEach((entry) => {
  //       const intersecting = entry.isIntersecting;
  //       entry.target.classList.add(
  //         "opacity-100",
  //         "duration-1000",
  //         intersecting
  //       );
  //       if (entry.isIntersecting) observer.unobserve(entry.target); // this line to unobserver target
  //     });
  //   });
  //   observer.observe(document.getElementById("specs"));
  // });

  return (
    <section className="pt-16 pb-8 mx-auto" id="specs">
      <div className="container mx-auto">
        <h1 className="bg-gradient-to-b max-[340px]:text-[56px] from-[#454545] to-[#141414] text-transparent bg-clip-text font-semibold text-[56px] relative ps-3 text-center mb-10">
          Specs
        </h1>
        <div
          className="flex justify-center max-w-[628px] mx-5 lg:mx-auto "
          ref={myRef}>
          <div
            className={`flex flex-col mx-auto gap-6 ${
              state
                ? "duration-1000 opacity-100"
                : "opacity-0 duration-1000 -translate-x-5"
            }`}>
            {data.map((data, index) => (
              <div
                key={index}
                className={` flex flex-col gap-1 ${
                  index == 0 || index == 3 ? "ms-5" : ""
                }`}>
                <Image src={data.img} width={15} alt={data.title} />
                <h3 className="text-[15px] font-medium text-[#F2F2F3]">
                  {data.title}
                </h3>
                <p className="text-xs text-[##BCBFC4">{data.desc}</p>
              </div>
            ))}
          </div>
          <div
            className={`flex items-center ${
              state
                ? "duration-1000 opacity-100"
                : "opacity-0 duration-1000 translate-x-5"
            }`}>
            <Image src={Headphone} alt="Specs" width={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
