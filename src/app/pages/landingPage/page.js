import Image from "next/image";
import Logo from "/public/img/logo.png";
import Link from "next/link";

const LandingPage = () => {
  return (
    <header>
      <nav className="container">
        <Link href="#">
          <Image src={Logo} />
        </Link>
      </nav>
    </header>
  );
};

export default LandingPage;
