"use client";

import Link from "next/link";
import Sidebar from "@/app/components/navbar/sidebar/page";
import Image from "next/image";
import Logo from "/public/img/logo.png";
import { useState } from "react";

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

  // console.log(open);

  return (
    <header id="header">
      <nav className=" max-w-[1024px] px-5 pt-5 container sticky top-0 flex justify-between items-top py-3 md:pt-5 md:px-10 mx-auto">
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
                <li className="hover:text-white duration-150 bg-gradient-to-b from-[#BBC0C2] to-transparent text-transparent bg-clip-text font-medium">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
