import data from '../data.json'
import { useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import type { MyComponentProps } from '../db'


export default function Planet({menu} : {menu:boolean}){ 
    let  planet  = useParams()
    const filteredData = useMemo(
        () => data.find((data) => data.name === planet.planet),
        [planet]
    )
      const barObj: any = [
        { name:"OVERVIEW", color:filteredData?.color},
        { name:"STRUCTURE", color:filteredData?.color},
        { name:"SURFACE ", color:filteredData?.color},
      ]
     const [bar, setBar] = useState<{overview: boolean; structure: boolean, surface: boolean,}>({
      overview: true,
      structure: false,
      surface: false,}
     ) 
     const footer =[
        {name:"ROTATION TIME" , content: filteredData?.rotation.toUpperCase(),},
        {name:"REVOLUTION TIME" , content: filteredData?.revolution.toUpperCase(),},
        {name:"RADIUS" , content: filteredData?.rotation.toUpperCase(),},
        {name:"AVERAGE TEMP." , content: filteredData?.temperature.toUpperCase(),},
     ] 
console.log(bar)
   if (!menu) {
  return (
    <main className="flex flex-col justify-center items-center align-middle min-w-screen gap-[95px] ">
      <section className="flex gap-[43px] w-full pl-[26px] md:hidden">
        {barObj.map((item: any) => (
          <div key={item.nam} className="flex flex-col gap-4 self-center ">
            <span className="text-white">{item.name}</span>
            <div
              className="h-[4px] w-[80px]"
              style={{ background: item.color }}
            ></div>
          </div>
        ))}
      </section>
    
      <div className="flex flex-col items-center justify-center">
    
          

        <img
          className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] md:mt-[112px] mb-[98px]"
          src={ bar.overview
    ? filteredData?.images.planet
    : bar.structure
    ? filteredData?.images.internal
    : bar.surface
    ? filteredData?.images.geology
    : undefined}
          alt=""
        />
        <div className='flex flex-row gap-[70px] justify-center items-center'> 

          <div className='flex flex-col gap-[15px]'>

        <h2 className="text-white text-[40px]">
          {filteredData?.name.toUpperCase()}
      
        </h2>
        <p className="text-white text-[11px] leading-[22px] w-[327px] mt-[16px]">
        {bar.overview ? filteredData?.overview.content : filteredData?.structure.content}
        </p>
        <span className="text-white mt-[32px] opacity-50">
          Source :{" "}
          <a href={filteredData?.overview.source}>Wikipedia</a>
        </span>
        </div>
   
      <div className='hidden md:flex flex-col gap-4'>
       <div className='uppercase text-white flex gap-4 text-[12px] leading-[25px] w-[281px] pl-[26px]' onClick={() =>
      setBar({ overview: true, structure: false, surface: false })
    } style={bar.overview ? { background: filteredData?.color } : {}}>
        <span>01</span> 
       <span >OVERVIEW</span>
       </div>
       <div onClick={() =>
      setBar({ overview: false, structure: true, surface: false })
         }  
       style={bar.structure ? { background: filteredData?.color } : {}} className='pl-[26px] uppercase text-white flex gap-4 text-[12px] leading-[25px]'>
        <span>02</span>
         <span >Internal Structure</span>
       </div>
       <div onClick={() =>
      setBar({ overview: false, structure: false, surface: true })
    }  style={bar.surface? { background: filteredData?.color } : {}}  className='pl-[26px] uppercase text-white flex gap-4 text-[12px] leading-[25px]'>
        <span>03</span>
        <span>Surface Geology</span>
        </div>
      </div>

        </div>

        <section
          id="footer"
          className="flex flex-col gap-[8px] mt-[28px] md:mb-[20px] mb-[47px] md:flex-row "
        >
          {footer.map((item) => (
            <div
              key={item.name}
              className="pl-[24px] pr-[24px] flex justify-between items-center md:items-start md:flex-col md:justify-center md:gap-1 md:w-[164px] md:h-[88px] w-[327px] h-[48px] border-[#fff]/20 border-[1px]"
            >
              <span className="text-white opacity-50 text-[8px]">
                {item.name}
              </span>
              <span className="text-white text-[15px] font-[Antonio]">
                {item.content}
              </span>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
} else {
  return null;
}
}
