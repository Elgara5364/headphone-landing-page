"use client";

import Link from "next/link";
import Sidebar from "@/app/navbar/sidebar/page";
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
      <nav className="container flex justify-between items-center py-5 md:pt-8 px-5 lg:justify-around mx-auto">
        <div>
          <Link href="#">
            <Image src={Logo} alt="Logo" width={40} />
          </Link>
        </div>
        <Sidebar sendDataToParent={handlerSidebar} data={open} />
        <div className="hidden md:flex gap-14">
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
