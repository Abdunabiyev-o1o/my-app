import React from "react";

export default function HeroDetail() {
  return (
    <div>
      <div className="mt-8 ml-[280px] grid grid-cols-4 gap-[5px]">
        <div className="group w-[255px] h-[88px] bg-white rounded-xl px-8 flex items-center gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <img src="/card.png" alt="" className="w-8 h-8" />

          <div>
            <h3 className="text-[18px] font-semibold text-[#1F2937]">
              Hodimlar
            </h3>

            <p className="text-[32px] font-medium text-[#4F7DF3] leading-none mt-1">
              213
            </p>
          </div>
        </div>

        <div className="group w-[255px] h-[88px] bg-white rounded-xl px-8 flex items-center gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <img src="/card.png" alt="" className="w-8 h-8" />

          <div>
            <h3 className="text-[18px] font-semibold text-[#1F2937]">
              Bemorlar
            </h3>

            <p className="text-[32px] font-medium text-[#4F7DF3] leading-none mt-1">
              104
            </p>
          </div>
        </div>

        <div className="group w-[255px] h-[88px] bg-white rounded-xl px-8 flex items-center gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <img src="/card.png" alt="" className="w-8 h-8" />

          <div>
            <h3 className="text-[18px] font-semibold text-[#1F2937]">
              Xonalar
            </h3>

            <p className="text-[32px] font-medium text-[#4F7DF3] leading-none mt-1">
              24
            </p>
          </div>
        </div>

        <div className="group w-[255px] h-[88px] bg-white rounded-xl px-8 flex items-center gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <img src="/card.png" alt="" className="w-8 h-8" />

          <div>
            <h3 className="text-[18px] font-semibold text-[#1F2937]">
              Byudjet
            </h3>

            <p className="text-[32px] font-medium text-[#4F7DF3] leading-none mt-1">
              $ 12,174
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
