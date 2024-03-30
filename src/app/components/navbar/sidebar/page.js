"use client";

import Image from "next/image";
import sidebarico from "/public/ico/bars-solid.svg";
import Link from "next/link";

const Sidebar = ({ sendDataToParent, data }) => {
  const dataList = [
    { name: "HOME", href: "#home" },
    { name: "SPECS", href: "#specs" },
    { name: "CASE", href: "#case" },
    { name: "PRODUCTS", href: "#products" },
  ];

  const HandlerOpen = () => {
    sendDataToParent(true);
  };
  const HandlerClose = () => {
    sendDataToParent(false);
  };

  return (
    <section className="block md:hidden z-10">
      <div>
        <button onClick={HandlerOpen}>
          <Image src={sidebarico} alt="Sidebar Button" priority width={15} />
        </button>

        <div
          className={`bg-[#0F0F10] w-full text-center fixed left-0 top-0 z-20 flex flex-col gap-5 py-5 ${
            data
              ? "translate-y-0 transition duration-300"
              : "translate-y-[-272px] transition duration-200"
          }`}>
          <button className="text-end pe-7 font-medium" onClick={HandlerClose}>
            X
          </button>
          {dataList.map((item, index) => (
            <div key={index}>
              <ul>
                <li className="hover:text-white duration-150 bg-gradient-to-b from-[#BBC0C2] to-transparent text-transparent bg-clip-text text-xl font-medium">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
