"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

export default function Prompts() {
  const [ismSharif, setIsmSharif] = useState("");
  const [tugilganSana, setTugilganSana] = useState("");
  const [tugilganHudud, setTugilganHudud] = useState("");
  const [manzil, setManzil] = useState("");
  const [oilaviyHolati, setOilaviyHolati] = useState("");
  const [malumoti, setMalumoti] = useState("");
  const [telefonRaqam, setTelefonRaqam] = useState("");
  const [oilaTelefonRaqam, setOilaTelefonRaqam] = useState("");

  const [mutaxassisligi, setMutaxassisligi] = useState("");
  const [faoliyatBolimi, setFaoliyatBolimi] = useState("");
  const [ishStaji, setIshStaji] = useState("");
  const [ishGrafigi, setIshGrafigi] = useState("");
  const [haftaKunidagiGrafegi, setHaftaKunidagiGrafegi] = useState("");
  const [ishgaKirganSanasi, setIshgaKirganSanasi] = useState("");

  const [ishBoshlaganSanasi, setIshBoshlaganSanasi] = useState("");
  const [ishniTugatganSanasi, setIshniTugatganSanasi] = useState("");
  const [lavozimi, setLavozimi] = useState("");
  const [ishlaganShifoxonaManzili, setIshlaganShifoxonaManzili] = useState("");
  const [qoshimchaMalumotlar, setQoshimchaMalumotlar] = useState("");

  const handleReset = () => {
    setIsmSharif(""); setTugilganSana(""); setTugilganHudud(""); setManzil(""); 
    setOilaviyHolati(""); setMalumoti(""); setTelefonRaqam(""); setOilaTelefonRaqam("");
    setMutaxassisligi(""); setFaoliyatBolimi(""); setIshStaji(""); setIshGrafigi(""); 
    setHaftaKunidagiGrafegi(""); setIshgaKirganSanasi("");
    setIshBoshlaganSanasi(""); setIshniTugatganSanasi(""); setLavozimi(""); 
    setIshlaganShifoxonaManzili(""); setQoshimchaMalumotlar("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ismSharif, tugilganSana, tugilganHudud, manzil, oilaviyHolati, malumoti, telefonRaqam, oilaTelefonRaqam,
      mutaxassisligi, faoliyatBolimi, ishStaji, ishGrafigi, haftaKunidagiGrafegi, ishgaKirganSanasi,
      ishBoshlaganSanasi, ishniTugatganSanasi, lavozimi, ishlaganShifoxonaManzili, qoshimchaMalumotlar
    });
  };

  const inputStyle = "w-full border border-gray-200 rounded-[6px] px-3 py-2 text-[13px] text-gray-500 outline-none focus:border-blue-400 bg-white h-[38px] placeholder-gray-300 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 min-h-screen py-16 flex flex-col items-center gap-12 antialiased">
      
      <div className="w-[600px] bg-white border border-[#E5E7EB] rounded-[8px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
        <div className="text-center mb-6">
          <h2 className="text-[18px] font-bold text-[#111827]">Yangi shifokorni ro'yxatdan o'tkazish</h2>
          <div className="w-[26px] h-[26px] bg-[#38BDF8] rounded-full text-white flex items-center justify-center text-xs font-bold mx-auto mt-3">1</div>
          <p className="text-[13px] font-semibold text-[#374151] mt-1.5">Shaxsiy ma'lumotlar</p>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
          <input type="text" value={ismSharif} onChange={(e) => setIsmSharif(e.target.value)} placeholder="Ism sharifi" className={inputStyle} />
          <input type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => !e.target.value && (e.target.type = "text")} value={tugilganSana} onChange={(e) => setTugilganSana(e.target.value)} placeholder="Tug'ilgan sana" className={inputStyle} />
          
          <select value={tugilganHudud} onChange={(e) => setTugilganHudud(e.target.value)} className={inputStyle}>
            <option value="">Tug'ilgan hudud</option>
            <option value="toshkent">Toshkent viloyati</option>
            <option value="buxoro">Buxoro viloyati</option>
            <option value="samarqand">Samarqand viloyati</option>
          </select>
          
          <input type="text" value={manzil} onChange={(e) => setManzil(e.target.value)} placeholder="Manzil" className={inputStyle} />
          
          <select value={oilaviyHolati} onChange={(e) => setOilaviyHolati(e.target.value)} className={inputStyle}>
            <option value="">Oilaviy holati</option>
            <option value="uylangan">Uylangan / Turmushga chiqqan</option>
            <option value="uylanmagan">Uylanmagan / Turmushga chiqmagan</option>
          </select>
          
          <select value={malumoti} onChange={(e) => setMalumoti(e.target.value)} className={inputStyle}>
            <option value="">Ma'lumoti</option>
            <option value="oliy">Oliy ma'lumotli</option>
            <option value="orta">O'rta maxsus</option>
          </select>
          
          <input type="tel" value={telefonRaqam} onChange={(e) => setTelefonRaqam(e.target.value)} placeholder="Telefon raqam" className={inputStyle} />
          <input type="tel" value={oilaTelefonRaqam} onChange={(e) => setOilaTelefonRaqam(e.target.value)} placeholder="Oila a'zolaridan telefon raqam" className={inputStyle} />
        </div>

        <div className="flex justify-center gap-3 mt-8">
          <button type="button" onClick={handleReset} className="w-[124px] bg-[#EF4444] hover:bg-red-600 text-white rounded-[6px] py-2 text-[13px] font-medium transition">Bekor qilish</button>
          <button type="button" className="w-[124px] bg-[#10B981] hover:bg-emerald-600 text-white rounded-[6px] py-2 text-[13px] font-medium transition">Keyingi bo'lim</button>
        </div>
      </div>

      <div className="w-[600px] bg-white border border-[#E5E7EB] rounded-[8px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
        <div className="text-center mb-6">
          <h2 className="text-[18px] font-bold text-[#111827]">Yangi shifokorni ro'yxatdan o'tkazish</h2>
          <div className="w-[26px] h-[26px] bg-[#38BDF8] rounded-full text-white flex items-center justify-center text-xs font-bold mx-auto mt-3">2</div>
          <p className="text-[13px] font-semibold text-[#374151] mt-1.5">Mutaxassislik ma'lumotlar</p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
          <select value={mutaxassisligi} onChange={(e) => setMutaxassisligi(e.target.value)} className={inputStyle}>
            <option value="">Mutaxassisligi</option>
            <option value="nevrolog">Nevrolog</option>
            <option value="kardiolog">Kardiolog</option>
          </select>
          
          <select value={faoliyatBolimi} onChange={(e) => setFaoliyatBolimi(e.target.value)} className={inputStyle}>
            <option value="">Faoliyat bo'limi</option>
            <option value="nevrologiya">Nevrologiya</option>
            <option value="terapiya">Terapiya</option>
          </select>
          
          <input type="text" value={ishStaji} onChange={(e) => setIshStaji(e.target.value)} placeholder="Ish staji" className={inputStyle} />
          
          <select value={ishGrafigi} onChange={(e) => setIshGrafigi(e.target.value)} className={inputStyle}>
            <option value="">Ish grafigi</option>
            <option value="toliq">To'liq stavka</option>
            <option value="yarim">Yarim stavka</option>
          </select>
          
          <input type="text" value={haftaKunidagiGrafegi} onChange={(e) => setHaftaKunidagiGrafegi(e.target.value)} placeholder="Hafta kundagi grafigi" className={inputStyle} />
          <input type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => !e.target.value && (e.target.type = "text")} value={ishgaKirganSanasi} onChange={(e) => setIshgaKirganSanasi(e.target.value)} placeholder="Ishga kirgan sanasi" className={inputStyle} />
        </div>

        <div className="flex justify-center gap-3 mt-8">
          <button type="button" onClick={handleReset} className="w-[124px] bg-[#EF4444] hover:bg-red-600 text-white rounded-[6px] py-2 text-[13px] font-medium transition">Bekor qilish</button>
          <button type="button" className="w-[124px] bg-[#10B981] hover:bg-emerald-600 text-white rounded-[6px] py-2 text-[13px] font-medium transition">Keyingi bo'lim</button>
        </div>
      </div>

      <div className="w-[600px] bg-white border border-[#E5E7EB] rounded-[8px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
        <div className="text-center mb-6">
          <h2 className="text-[18px] font-bold text-[#111827]">Yangi shifokorni ro'yxatdan o'tkazish</h2>
          <div className="w-[26px] h-[26px] bg-[#38BDF8] rounded-full text-white flex items-center justify-center text-xs font-bold mx-auto mt-3">3</div>
          <p className="text-[13px] font-semibold text-[#374151] mt-1.5">Ish faoliyat tarixi</p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
          <input type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => !e.target.value && (e.target.type = "text")} value={ishBoshlaganSanasi} onChange={(e) => setIshBoshlaganSanasi(e.target.value)} placeholder="Ish boshlagan sanasi" className={inputStyle} />
          <input type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => !e.target.value && (e.target.type = "text")} value={ishniTugatganSanasi} onChange={(e) => setIshniTugatganSanasi(e.target.value)} placeholder="Ishni tugatgan sanasi" className={inputStyle} />
          
          <select value={lavozimi} onChange={(e) => setLavozimi(e.target.value)} className={inputStyle}>
            <option value="">Lavozimi</option>
            <option value="shifokor">Shifokor</option>
            <option value="bosh_shifokor">Bosh shifokor</option>
          </select>
          
          <input type="text" value={ishlaganShifoxonaManzili} onChange={(e) => setIshlaganShifoxonaManzili(e.target.value)} placeholder="Ishlagan shifoxona manzili" className={inputStyle} />
          
          <div className="col-span-2">
            <textarea value={qoshimchaMalumotlar} onChange={(e) => setQoshimchaMalumotlar(e.target.value)} placeholder="Qo'shimcha ma'lumotlar" className="w-full border border-gray-200 rounded-[6px] px-3 py-2 text-[13px] text-gray-500 outline-none focus:border-blue-400 bg-white h-[90px] resize-none placeholder-gray-300 transition-colors"></textarea>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button type="button" className="w-7 h-7 bg-[#38BDF8] hover:bg-blue-400 text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
            <Plus size={16} />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <button type="button" onClick={handleReset} className="w-[124px] bg-[#EF4444] hover:bg-red-600 text-white rounded-[6px] py-2 text-[13px] font-medium transition">Bekor qilish</button>
          <button type="submit" className="w-[124px] bg-[#10B981] hover:bg-emerald-600 text-white rounded-[6px] py-2 text-[13px] font-medium transition">Yakunlash</button>
        </div>
      </div>

    </form>
  );
}