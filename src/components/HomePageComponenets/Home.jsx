import React from "react";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[70vh] xl:h-[90vh] w-full right-0 flex items-center justify-center border-b-2 ">
      <div className="w-full h-full z-30 ">
        <div className="xl:w-2/3 w-full flex flex-col gap-6 pt-5 z-10 ">
          <h1 className=" text-cherry text-xl font-semibold mt-12">
            online ta'lim
          </h1>

          <p className="text-3xl md:text-5xl leading-[40px] md:leading-[70px] font-semibold uppercase">
            Dasturlashni <br /> oson va qulay <br /> sharoitda o'rganing
          </p>
          <div className=" h-[470px] my-8">
            <div className="my-6">
              <p>
                Hoziroq xarid qiling va{" "}
                <span className="text-plum font-semibold">10%</span> chegirmaga
                ega bo'ling
              </p>
            </div>
            <div className="flex items-center justify-between z-10">
              <button
                onClick={onsubmit}
                className="bg-cherry mt-3 text-white w-[70vw] md:w-[230px] py-4 rounded-md active:text-deep-orange-50"
              >
                Darsni boshlash
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="hidden xl:block absolute bottom-0 right-0 z-0"
        src="header_bg.png"
        alt=""
      />
    </div>
  );
}
