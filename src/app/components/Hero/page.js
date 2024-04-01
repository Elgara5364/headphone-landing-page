import Image from "next/image";
import icoBag from "/public/ico/bag-shopping-solid.svg";

const Hero = () => {
  return (
    <section className="z-20 px-5 min-[575px]:flex min-[575px]:justify-center pt-16 pb-8">
      <div className="w-[484px]"></div>
      <div className="min-[575px]:w-[484px] ">
        <div className="">
          <h1 className="bg-gradient-to-b max-[340px]:text-[56px] from-[#454545] to-[#141414] text-transparent bg-clip-text font-semibold text-[80px] relative ps-3">
            On ear
          </h1>
          <h2 className=" relative font-semibold top-[-2rem] text-[40px]">
            Beats 3
          </h2>
        </div>
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4">Overview</h3>
          <p className="text-[15px] text-[#BDC0C2] leading-8 mb-10 mx-auto min-[576px]:pe-1">
            Enjoy award-winning Beats sound with wireless listening freedom and
            a sleek, streamlined design with comfortable padded earphones,
            delivering first-rate playback.
          </p>
          <button className="relative flex gap-4 px-5 py-4 bg-[#0A0A0B] hover:bg-[#141515] transition duration-200 rounded-md">
            <Image src={icoBag} width={15} height={15} />
            <p>Add to Bag</p>
            <p>$299</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
