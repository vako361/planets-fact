import { Link } from "react-router-dom";
import type { MyComponentProps, planetType } from "../db";


export default function Header({ menu, setMenu }: MyComponentProps) {
  const nav: planetType[] = [
    { name: "Mercury", color: "#DEF4FC" },
    { name: "Venus", color: "#F7CC7F" },
    { name: "Earth", color: "#545BFE" },
    { name: "Mars", color: "#FF6A45" },
    { name: "Jupiter", color: "#ECAD7A" },
    { name: "Saturn", color: "#FCCB6B" },
    { name: "Uranus", color: "#65F0D5" },
    { name: "Neptune", color: "#497EFA" },
  ];
 
  
  return (
    <header className="flex flex-col justify-center min-w-screen pt-[16px] relative">
   
   <div className="ml-[14px] lg:flex md:flex-col lg:flex-row lg:gap-[594px] lg:ml-8 lg:items-center">

      <div className="flex justify-center gap-[196px]">
        <h1 className="text-white text-[28px]">THE PLANETS</h1>
        <img
          onClick={() => setMenu(!menu)}
          src="/assets/icon-hamburger.svg"
          className="h-[17px] w-[24px] mt-3 opacity-25 md:hidden"
          alt="menu icon"
        />
      </div>

      {/* Desktop nav */}
      <section className="hidden md:flex items-center justify-center gap-[33px] mt-[39px] font-[700] mb-[27px] opacity-80 font-[Spartan] leading-[25px] tracking-[1px] text-[11px] uppercase">
        {nav.map((item) => (
          <Link key={item.name} to={`/${item.name}`} className="text-white">
            {item.name}
          </Link>
        ))}
      </section>

   </div>

      {/* Horizontal line */}
      <div className="w-full h-[1px] bg-white opacity-20 mt-[25px]"></div>

      {/* Mobile menu */}
      {menu && (
        <div className="pl-[24px] mt-[44px] absolute top-[60px] bg-[#070724] z-10">
          {nav.map((item) => (
            <div key={item.name}>
              <nav
                onClick={() => setMenu(false)}
                className="flex items-center justify-between w-[327px] mb-4"
              >
                <div className="flex items-center gap-[25px]">
                  <div
                    className="rounded-full w-[20px] h-[20px]"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <Link to={`/${item.name}`} className="text-white text-base">
                    {item.name}
                  </Link>
                </div>
                <img
                  src="/assets/path-3.svg"
                  alt="arrow icon"
                  className="w-[4px] h-[8px]"
                />
              </nav>
              <div className="w-[337px] h-[1px] bg-white opacity-10 mb-[20px]"></div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
