import Image from "next/image";
import bagIco from "/public/ico/bag-shopping-solid.svg";
import BlackHeadphone from "/public/img/product1.png";
import RedBlackHeadphone from "/public/img/product2.png";
import NightBlackHeadphone from "/public/img/product3.png";
import BlueHeadphone from "/public/img/product4.png";
import TwiligthGrayHeadphone from "/public/img/product5.png";

const Products = () => {
  const dataProducts = [
    {
      img: BlackHeadphone,
      name: "Black",
      price: "249",
    },
    {
      img: RedBlackHeadphone,
      name: "Red Black",
      price: "249",
    },
    {
      img: NightBlackHeadphone,
      name: "Night Black",
      price: "249",
    },
    {
      img: BlueHeadphone,
      name: "Blue",
      price: "249",
    },
    {
      img: TwiligthGrayHeadphone,
      name: "Twilight Gray",
      price: "249",
    },
  ];

  return (
    <section className="pt-16 pb-8">
      <div className="container mx-auto">
        <h1 className="bg-gradient-to-b max-[340px]:text-[40px] from-[#454545] to-[#141414] text-transparent bg-clip-text font-bold text-[56px] relative ps-3 text-center mb-10 ">
          Choose Your Style
        </h1>
        <div className="pt-12 flex flex-wrap gap-24 min-[400px]:gap-10 justify-center">
          {dataProducts.map((data, index) => (
            <div key={index}>
              <ul className="bg-[#181A1B] p-3 w-[150px] mx-auto rounded-xl sm:mb-10">
                <li className="relative ">
                  <Image
                    src={data.img}
                    alt={data.name}
                    width={85}
                    className="absolute top-[-60%] left-[15%] "
                  />
                  <div className="size-16"></div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-[13px]">{data.name}</h4>
                      <p className="text-[12px] text-[#BDC0C2]">
                        ${data.price}
                      </p>
                    </div>
                    <button className="p-2 rounded-md bg-black size-8">
                      <Image
                        src={bagIco}
                        alt="Add to Cart"
                        width={12}
                        className="mx-auto"
                      />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
