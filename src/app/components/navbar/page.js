"use client";

import Link from "next/link";
import Sidebar from "@/app/components/navbar/sidebar/page";
import Image from "next/image";
import Logo from "/public/img/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const data = [
    { name: "Home", href: "#home" },
    { name: "Specs", href: "#specs" },
    { name: "Case", href: "#case" },
    { name: "Products", href: "#products" },
  ];

  //Data
  const [open, setOpen] = useState(false);

  //Fungsi utk menangani data dari child component
  const handlerSidebar = (data) => {
    setOpen(data);
  };

  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  // console.log(open);

  return (
    <header id="header">
      <nav
        className={`${
          header ? "fixed bg-black w-full" : " relative bg-transparent "
        } px-5 pt-5 flex justify-between py-3 md:pt-5 md:px-10 lg:px-24 xl:px-60 z-50 `}>
        <div className="z-10 ">
          <Link href="#">
            <Image src={Logo} alt="Logo" width={25} />
          </Link>
        </div>
        <Sidebar sendDataToParent={handlerSidebar} data={open} />
        <div className="hidden md:flex gap-14 relative ">
          {data.map((item, index) => (
            <div key={index}>
              <ul>
                <li className="hover:text-white duration-150 bg-gradient-to-b from-[#BBC0C2] to-transparent text-transparent bg-clip-text font-bold focus:text-red-300">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </nav>
      <button
        className={`${
          header
            ? "fixed bottom-0 right-0 p-5 duration-150 transition"
            : "hidden transition duration-150"
        }`}>
        <Link href="#home">back to top</Link>
      </button>
    </header>
  );
};

export default Navbar;
