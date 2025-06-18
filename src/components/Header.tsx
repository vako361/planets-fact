import { Link } from "react-router-dom";
import type { planetType } from "../db";
import { useState } from "react";
export default function Header() {
  const nav: planetType[] = [
    { name: "Mercury", color: "#DEF4FC" },
    { name: "Venus", color: "#F7CC7F" },
    { name: "Earth", color: "#545BFE" },
    { name: "Mars", color: "#FF6A45" },
    { name: "Jupiter", color: "#ECAD7A" },
    { name: "Saturn", color: "#FCCB6B" },
    { name: "Uranus", color: "#65F0D5" },
    { name: "Neptune", color: "#497EFA" }
  ];
  const [menu, setMenu] = useState<boolean>(false)
console.log(menu)
  return (
    <header className="flex flex-col justify-center min-w-screen pt-[16px] ">

      <div className="flex justify-center gap-[196px]">
       <h1 className="text-white text-[28px]">THE PLANETS</h1>
       <img onClick={() => setMenu(!menu)} src="/assets/icon-hamburger.svg" className="h-[17px] w-[24px] mt-3 opacity-25" alt="menu icon" />
      </div>

      <div className="w-full h-[1px] bg-white opacity-20 mt-[25px]"></div>
   
{ menu && <div className="pl-[24px] mt-[44px]">
  {nav.map((item) => (
    <div key={item.name}> 
    <nav onClick={() => setMenu(!menu)}  className="flex items-center justify-between w-[327px] mb-4">

      <div className="flex items-center gap-[25px]">
        <div
          className="rounded-full w-[20px] h-[20px]"
          style={{ backgroundColor: item.color }}
        ></div>
        <Link to={item.name} className="text-white text-base">
          {item.name}
        </Link>
      </div>

      <div>
        <img src="/assets/path-3.svg" alt=""  className="w-[4px] h-[8px]" />
      </div>
 
    </nav>
         <div className="w-[337px] h-[1px] bg-white opacity-10 mb-[20px]"></div>
    </div>
  ))}
</div>}

    </header>
  );
}
