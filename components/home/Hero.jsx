export default function HeroCard() {
  return (
    <section className="max-w-[1184px] mx-auto pt-7 pl-[36px]">
      <div className="flex items-center justify-between">
        <div className="w-[350px] h-10 bg-white rounded-full px-5 flex items-center gap-3 shadow-sm">
          <img src="/search.svg" alt="" className="w-4 h-4" />
          <input
            type="text"
            placeholder="Qidiruv"
            className="w-full bg-transparent outline-none text-sm placeholder:text-[#9CA3AF]"
          />
        </div>

        <div className="flex items-center gap-5">
          <div className="relative cursor-pointer">
            <img src="/notification.svg" alt="" className="w-6 h-6" />

            <div className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full bg-[#FF5A5F] text-white text-[10px] flex items-center justify-center font-medium">
              9
            </div>
          </div>

          <img
            src="/man.jpg"
            alt=""
            className="w-11 h-11 rounded-full object-cover shadow-md cursor-pointer"
          />
        </div>
      </div>

      
    </section>
  );
}