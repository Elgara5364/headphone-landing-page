"use client";

import Link from "next/link";
import Sidebar from "@/app/components/navbar/sidebar/page";
import Image from "next/image";
import Logo from "/public/img/logo.png";
import { useState } from "react";
import Headphone1 from "/public/img/home.png";

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
      <nav className=" max-w-[1024px] px-5 pt-5 container relative flex justify-between items-top py-3 md:pt-5 md:px-10 mx-auto">
        <div className="z-10 ">
          <Link href="#">
            <Image src={Logo} alt="Logo" width={25} />
          </Link>
        </div>
        <div className="absolute right-9 top-[-13rem] min-[340px]:top-[-17rem] min-[576px]:left-0 min-[576px]:top-[-4rem] ms-10 lg:ms-20 lg:top-[-9rem] ">
          <Image
            src={Headphone1}
            alt="Home"
            width={200}
            className="min-[340px]:w-[250px] lg:w-[300px] pt-7"
          />
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
