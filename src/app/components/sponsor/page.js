import Image from "next/image";
import Apple from "/public/img/sponsor1.png";
import Spotify from "/public/img/sponsor2.png";
import Amazon from "/public/img/sponsor3.png";
import Youtube from "/public/img/sponsor4.png";

const Sponsor = () => {
  return (
    <section className="pt-16 pb-8 lg:w-[968px] mx-auto">
      <div className="container  lg:mx-auto">
        <div className="grid grid-cols-4 mx-5 gap-y-16 place-items-center max-[600px]:grid-cols-auto-fill-120 ">
          <Image
            src={Apple}
            width={90}
            style={{ objectFit: "contain" }}
            alt="Sponsor1"
          />
          <Image
            src={Amazon}
            width={90}
            style={{ objectFit: "contain" }}
            alt="Sponsor2"
          />
          <Image
            src={Spotify}
            width={90}
            style={{ objectFit: "contain" }}
            alt="Sponsor3"
          />
          <Image
            src={Youtube}
            width={90}
            style={{ objectFit: "contain" }}
            alt="Sponsor4"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
