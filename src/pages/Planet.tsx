import data from '../data.json';
import { useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';

export default function Planet({ menu }: { menu: boolean }) {
  const planet = useParams();

  const filtredData = useMemo(() => {
    return data.find((d) => d.name.toLowerCase() === planet.planet?.toLowerCase());
  }, [planet]);



  const [bar, setBar] = useState({
    overview: true,
    structure: false,
    surface: false,
  });

  const footer = [
    { name: 'ROTATION TIME', content: filtredData?.rotation?.toUpperCase() },
    { name: 'REVOLUTION TIME', content: filtredData?.revolution?.toUpperCase() },
    { name: 'RADIUS', content: filtredData?.radius?.toUpperCase() },
    { name: 'AVERAGE TEMP.', content: filtredData?.temperature?.toUpperCase() },
  ];

  if (menu) return null;

  return (
    <main className="flex flex-col justify-center items-center align-middle min-w-screen gap-[95px]">
      <section className="flex gap-[43px] w-full pl-[26px] md:hidden">
  {/* OVERVIEW */}
  <div
    className="flex flex-col gap-4 self-center"
    onClick={() => setBar({ overview: true, structure: false, surface: false })}
  >
    <span className="text-white uppercase">OVERVIEW</span>
    <div
      className="h-[4px] w-[80px]"
      style={bar.overview ? { background: filtredData?.color } : {}}
    ></div>
  </div>

  {/* STRUCTURE */}
  <div
    className="flex flex-col gap-4 self-center"
    onClick={() => setBar({ overview: false, structure: true, surface: false })}
  >
    <span className="text-white uppercase">STRUCTURE</span>
    <div
      className="h-[4px] w-[80px]"
      style={bar.structure ? { background: filtredData?.color } : {}}
    ></div>
  </div>

  {/* SURFACE */}
  <div
    className="flex flex-col gap-4 self-center"
    onClick={() => setBar({ overview: false, structure: false, surface: true })}
  >
    <span className="text-white uppercase">SURFACE</span>
    <div
      className="h-[4px] w-[80px]"
      style={bar.surface ? { background: filtredData?.color } : {}}
    ></div>
  </div>
</section>


      <div className="flex flex-col items-center justify-center">
        <div className='flex flex-col lg:flex-row lg:gap-[300px] items-center justify-center'>
        <img
          className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] md:mt-[112px] mb-[98px] lg:w-[300px] lg:h-[300px] self-center"
          src={
            bar.overview
              ? filtredData?.images.planet
              : bar.structure
              ? filtredData?.images.internal
              : bar.surface
              ? filtredData?.images.geology
              : undefined
          }
          alt=""
        />
    
        <div className="flex flex-row gap-[70px] justify-center items-center lg:flex-col">
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-white text-[40px] lg:text-[80px]">{filtredData?.name.toUpperCase()}</h2>

            <p className="text-white text-[11px] leading-[22px] w-[327px] mt-[16px] lg:w-[350px] lg:text-[15px]">
              {bar.overview
                ? filtredData?.overview.content
                : bar.structure
                ? filtredData?.structure.content
                : filtredData?.geology.content}
            </p>

            <span className="text-white mt-[32px] opacity-50">
              Source :{' '}
              <a href={
                bar.overview
                  ? filtredData?.overview.source
                  : bar.structure
                  ? filtredData?.structure.source
                  : filtredData?.geology.source
              }>Wikipedia</a>
            </span>
          </div>

          <div className="hidden md:flex flex-col gap-4">
            <div
              className="uppercase items-center text-white flex gap-4 text-[12px] leading-[25px] w-[281px] lg:w-[360px] lg:h-[50px] pl-[26px]"
              onClick={() => setBar({ overview: true, structure: false, surface: false })}
              style={bar.overview ? { background: filtredData?.color } : {}}
            >
              <span>01</span>
              <span>OVERVIEW</span>
            </div>

            <div
              onClick={() => setBar({ overview: false, structure: true, surface: false })}
              style={bar.structure ? { background: filtredData?.color } : {}}
              className="uppercase items-center text-white flex gap-4 text-[12px] leading-[25px] w-[281px] lg:w-[360px] lg:h-[50px] pl-[26px]"
            >
              <span>02</span>
              <span>Internal Structure</span>
            </div>

            <div
              onClick={() => setBar({ overview: false, structure: false, surface: true })}
              style={bar.surface ? { background: filtredData?.color } : {}}
              className="uppercase items-center text-white flex gap-4 text-[12px] leading-[25px] w-[281px] lg:w-[360px] lg:h-[50px] pl-[26px]"
            >
              <span>03</span>
              <span>Surface Geology</span>
            </div>
          </div>
        </div>

        </div>

        <section
          id="footer"
          className="flex flex-col gap-[8px] mt-[28px] md:mb-[20px] mb-[47px] md:flex-row lg:gap-[30px]"
        >
          {footer.map((item) => (
            <div
              key={item.name}
              className="pl-[24px] pr-[24px] flex justify-between items-center
               md:items-start md:flex-col md:justify-center 
               md:gap-1 md:w-[164px] md:h-[88px] w-[327px]
                h-[48px] border-[#fff]/20 border-[1px] lg:w-[255px] lg:h-[128px]"
            >
              <span className="text-white opacity-50 text-[8px]">{item.name}</span>
              <span className="text-white text-[15px] font-[Antonio]">{item.content}</span>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
