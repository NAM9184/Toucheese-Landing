import Image from "next/image";

function Header() {
  return (
    <header className="w-full p-4 bg-black fixed top-0 z-50 ">
      <h1 className="relative max-w-16 h-10 mr-auto z-50">
        <Image
          src="/cheese.svg"
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
