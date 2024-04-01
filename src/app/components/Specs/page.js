import Image from "next/image";
import Bluetooth from "/public/ico/bluetooth-b.svg";
import Battery from "/public/ico/battery-full-solid.svg";
import Fast from "/public/ico/bolt-solid.svg";
import Mic from "/public/ico/microphone-solid.svg";
import Headphone from "/public/img/specs.png";

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

  return (
    <section className="pt-16 pb-8 mx-auto">
      <div className="container mx-auto">
        <h1 className="bg-gradient-to-b max-[340px]:text-[56px] from-[#454545] to-[#141414] text-transparent bg-clip-text font-semibold text-[56px] relative ps-3 text-center mb-10">
          Specs
        </h1>
        <div className="flex justify-center max-w-[628px] mx-5 lg:mx-auto">
          <div className="flex flex-col mx-auto gap-6">
            {data.map((data, index) => (
              <div
                key={index}
                className={` flex flex-col gap-1 ${
                  index == 0 || index == 3 ? "ms-5" : ""
                }`}>
                <Image src={data.img} width={15} alt={data.title} />
                <h3 className="text-[15px] font-medium">{data.title}</h3>
                <p className="text-xs text-[##BCBFC4">{data.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <Image src={Headphone} alt="Specs" width={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
