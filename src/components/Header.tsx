import { useState, useEffect } from "react";
import Image from "next/image";

function Header() {
  const [logo, setLogo] = useState("/toucheese_font_logo.svg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLogo("/cheese.svg");
      } else {
        setLogo("/toucheese_font_logo.svg");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full p-4 fixed top-0 z-50">
      <h1 className="relative max-w-10 md:max-w-48 h-10 mr-auto z-50">
        <Image
          src={logo}
          alt="터치즈"
          fill
          className="object-contain"
          quality={75}
        />
      </h1>
    </header>
  );
}

export default Header;
