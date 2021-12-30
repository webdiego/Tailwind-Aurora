import React, { useState } from "react";
import Select from "../components/Select";
import IndexPage from "../components/IndexPage";
import Image from "next/image";
import GitHub from "../public/GithubIcon.png";

export default function Home() {
  const [changeColor, setChangeColor] = useState(false);

  const [c1, setC1] = useState("bg-blue-600");
  const [c2, setC2] = useState("bg-purple-900");
  const [c3, setC3] = useState("bg-rose-800");
  const [c4, setC4] = useState("bg-sky-800");
  const [c5, setC5] = useState("bg-blue-900");

  return (
    <>
      <IndexPage />
      <div className="w-full h-full ">
        <div id="container" className="w-screen h-screen bg-black ">
          <div className="w-full h-full relative  blur-3xl overflow-hidden ">
            <div
              className={`h-[90%] w-[90%] left-[-20%] top-[-10%] absolute ${c1} animate-right z-[1]`}
            />
            <div
              className={`h-[70%] w-[70%] right-[-20%] top-[-20%] absolute ${c2} animate-left z-[2]`}
            />

            <div
              className={`h-[50%] w-[70%] left-[-10%] bottom-[-10%] absolute ${c3} z-[8] animate-top`}
            />
            <div
              className={`h-[20%] w-[0%] right-[20%] bottom-[20%] ${c4} absolute animate-left z-[4]`}
            />
            <div
              className={`h-[50%] w-[20%] right-[20%] bottom-[20%]  ${c5} absolute animate-right z-[6]`}
            />
          </div>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-[200] ml-6">
            <h1 className="text-white font-black text-4xl md:text-6xl">Tailwind Aurora</h1>
            <div className="flex items-center">
              <button
                onClick={() => setChangeColor(!changeColor)}
                className="text-black font-black text-lg md:text-xl  text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 to-blue-200"
              >
                Change color
              </button>
              <a
                href="https://github.com/webdiego/Tailwind-Aurora"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex ml-2">
                  <Image src={GitHub} width="20" height="20" alt="github" />
                </div>
              </a>
            </div>

            {changeColor && (
              <>
                <div className="flex space-x-2 mt-2">
                  <div className={`rounded-full h-4 w-4 border-2 border-white ${c1}`} />
                  <div className={`rounded-full h-4 w-4 border-2 border-white ${c2}`} />
                  <div className={`rounded-full h-4 w-4 border-2 border-white ${c3}`} />
                  <div className={`rounded-full h-4 w-4 border-2 border-white ${c4}`} />
                  <div className={`rounded-full h-4 w-4 border-2 border-white ${c4}`} />
                </div>
                <div className="mt-4">
                  <Select label="Color 1" defaultValue={c1} set={(value) => setC1(value)} />
                  <Select label="Color 2" defaultValue={c2} set={(value) => setC2(value)} />
                  <Select label="Color 3" defaultValue={c3} set={(value) => setC3(value)} />
                  <Select label="Color 4" defaultValue={c4} set={(value) => setC4(value)} />
                  <Select label="Color 5" defaultValue={c5} set={(value) => setC5(value)} />
                </div>
                <button
                  onClick={() => setChangeColor(!changeColor)}
                  className="mt-3 self-center items-center px-4 py-1 border  text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Done
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
