"use client";

import React, { useState } from "react";

export default function Inputs() {
  const [ismSharif, setIsmSharif] = useState("");
  const [tugilganSana, setTugilganSana] = useState("");
  const [tugilganHudud, setTugilganHudud] = useState("");
  const [manzil, setManzil] = useState("");
  const [oilaviyHolati, setOilaviyHolati] = useState("");
  const [malumoti, setMalumoti] = useState("");
  const [bandlikHolati, setBandlikHolati] = useState("");
  const [ishJoyi, setIshJoyi] = useState("");
  const [telefonRaqam, setTelefonRaqam] = useState("");
  const [oilaTelefonRaqam, setOilaTelefonRaqam] = useState("");

  const [qonGuruhi, setQonGuruhi] = useState("");
  const [rezusFaktor, setRezusFaktor] = useState("");
  const [sugurtaPolisi, setSugurtaPolisi] = useState("");
  const [sugurtaFirmasi, setSugurtaFirmasi] = useState("");
  const [imtiyozKategoriyasi, setImtiyozKategoriyasi] = useState("");
  const [imtiyozHujjati, setImtiyozHujjati] = useState("");
  const [imtiyozAlinganSana, setImtiyozAlinganSana] = useState("");
  const [nogironlik, setNogironlik] = useState("");
  const [allergikReaksiyalar, setAllergikReaksiyalar] = useState("");
  const [vazni, setVazni] = useState("");
  const [boyi, setBoyi] = useState("");

  const [tashrifSanasi, setTashrifSanasi] = useState("");
  const [chiqishSanasi, setChiqishSanasi] = useState("");
  const [davolanganBolim, setDavolanganBolim] = useState("");
  const [masulShifokor, setMasulShifokor] = useState("");
  const [tashrifVazni, setTashrifVazni] = useState("");
  const [tashrifBoyi, setTashrifBoyi] = useState("");

  const [davolanishSanasi, setDavolanishSanasi] = useState("");
  const [kasallikTuri, setKasallikTuri] = useState("");
  const [shifokorIsmSharifi, setShifokorIsmSharifi] = useState("");
  const [davolanganShifoxonaManzili, setDavolanganShifoxonaManzili] = useState("");
  const [diagnoz, setDiagnoz] = useState("");

  const handleReset = () => {
    setIsmSharif(""); setTugilganSana(""); setTugilganHudud(""); setManzil(""); setOilaviyHolati("");
    setMalumoti(""); setBandlikHolati(""); setIshJoyi(""); setTelefonRaqam(""); setOilaTelefonRaqam("");
    setQonGuruhi(""); setRezusFaktor(""); setSugurtaPolisi(""); setSugurtaFirmasi(""); setImtiyozKategoriyasi("");
    setImtiyozHujjati(""); setImtiyozAlinganSana(""); setNogironlik(""); setAllergikReaksiyalar(""); setVazni(""); setBoyi("");
    setTashrifSanasi(""); setChiqishSanasi(""); setDavolanganBolim(""); setMasulShifokor(""); setTashrifVazni(""); setTashrifBoyi("");
    setDavolanishSanasi(""); setKasallikTuri(""); setShifokorIsmSharifi(""); setDavolanganShifoxonaManzili(""); setDiagnoz("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ismSharif, tugilganSana, tugilganHudud, manzil, oilaviyHolati, malumoti, bandlikHolati, ishJoyi, telefonRaqam, oilaTelefonRaqam,
      qonGuruhi, rezusFaktor, sugurtaPolisi, sugurtaFirmasi, imtiyozKategoriyasi, imtiyozHujjati, imtiyozAlinganSana, nogironlik, allergikReaksiyalar, vazni, boyi,
      tashrifSanasi, chiqishSanasi, davolanganBolim, masulShifokor, tashrifVazni, tashrifBoyi,
      davolanishSanasi, kasallikTuri, shifokorIsmSharifi, davolanganShifoxonaManzili, diagnoz
    });
  };

  const cardStyle = {
    width: "642px",
    height: "454px",
    borderWidth: "1px",
    borderColor: "#E5E7EB",
    borderStyle: "solid",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    padding: "32px",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    top: "44px",
    left: "404px",
    marginBottom: "60px",
    fontFamily: "sans-serif"
  };

  const inputStyle = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400 bg-white h-10";

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 min-h-screen pb-24">
      
      <div style={{ ...cardStyle, borderWidth: "2px" }}>
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-800">Yangi shifokor</h2>
          <div className="w-6 h-6 bg-blue-400 rounded-full text-white flex items-center justify-center text-xs font-bold mx-auto mt-2">1</div>
          <p className="text-xs font-semibold text-gray-600 mt-1">Shaxsiy ma'lumotlar</p>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4">
          <input type="text" value={ismSharif} onChange={(e) => setIsmSharif(e.target.value)} placeholder="Ism sharifi" className={inputStyle} />
          <input type="date" value={tugilganSana} onChange={(e) => setTugilganSana(e.target.value)} className={inputStyle} />
          <select value={tugilganHudud} onChange={(e) => setTugilganHudud(e.target.value)} className={inputStyle}>
            <option value="">Tug'ilgan hudud</option>
            <option value="toshkent">Toshkent</option>
            <option value="samarqand">Samarqand</option>
          </select>
          <input type="text" value={manzil} onChange={(e) => setManzil(e.target.value)} placeholder="Manzil" className={inputStyle} />
          <select value={oilaviyHolati} onChange={(e) => setOilaviyHolati(e.target.value)} className={inputStyle}>
            <option value="">Oilaviy holati</option>
            <option value="uylangan">Uylangan/Turmushga chiqqan</option>
            <option value="uylanmagan">Uylanmagan/Turmushga chiqmagan</option>
          </select>
          <select value={malumoti} onChange={(e) => setMalumoti(e.target.value)} className={inputStyle}>
            <option value="">Ma'lumoti</option>
            <option value="oliy">Oliy</option>
            <option value="orta">O'rta maxsus</option>
          </select>
          <select value={bandlikHolati} onChange={(e) => setBandlikHolati(e.target.value)} className={inputStyle}>
            <option value="">Bandlik holati</option>
            <option value="ishlaydi">Ishlaydi</option>
            <option value="ishlamaydi">Ishlamaydi</option>
          </select>
          <input type="text" value={ishJoyi} onChange={(e) => setIshJoyi(e.target.value)} placeholder="Ish joyi" className={inputStyle} />
          <input type="tel" value={telefonRaqam} onChange={(e) => setTelefonRaqam(e.target.value)} placeholder="Telefon raqam" className={inputStyle} />
          <input type="tel" value={oilaTelefonRaqam} onChange={(e) => setOilaTelefonRaqam(e.target.value)} placeholder="Oila a'zolaridan telefon raqam" className={inputStyle} />
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button type="button" onClick={handleReset} className="w-36 bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 text-sm font-medium transition">Bekor qilish</button>
          <button type="button" className="w-36 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-2 text-sm font-medium transition">Keyingi bo'lim</button>
        </div>
      </div>

      <div style={cardStyle}>
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-800">Yangi bemor ro'yxatdan o'tkazish</h2>
          <div className="w-6 h-6 bg-blue-400 rounded-full text-white flex items-center justify-center text-xs font-bold mx-auto mt-2">2</div>
          <p className="text-xs font-semibold text-gray-600 mt-1">Tibbiy ma'lumotlar</p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4">
          <div className="grid grid-cols-2 gap-2">
            <select value={qonGuruhi} onChange={(e) => setQonGuruhi(e.target.value)} className={inputStyle}>
              <option value="">Qon guruhi</option>
              <option value="1">I (O)</option>
              <option value="2">II (A)</option>
            </select>
            <select value={rezusFaktor} onChange={(e) => setRezusFaktor(e.target.value)} className={inputStyle}>
              <option value="">Rhesus faktor</option>
              <option value="musbat">+</option>
              <option value="manfiy">-</option>
            </select>
          </div>
          <input type="text" value={sugurtaPolisi} onChange={(e) => setSugurtaPolisi(e.target.value)} placeholder="Sug'urta polisi" className={inputStyle} />
          <input type="text" value={sugurtaFirmasi} onChange={(e) => setSugurtaFirmasi(e.target.value)} placeholder="Sug'urta firmasi" className={inputStyle} />
          <select value={imtiyozKategoriyasi} onChange={(e) => setImtiyozKategoriyasi(e.target.value)} className={inputStyle}>
            <option value="">Imtiyoz kategoriyasi</option>
          </select>
          <input type="text" value={imtiyozHujjati} onChange={(e) => setImtiyozHujjati(e.target.value)} placeholder="Imtiyoz hujjati" className={inputStyle} />
          <input type="date" value={imtiyozAlinganSana} onChange={(e) => setImtiyozAlinganSana(e.target.value)} className={inputStyle} />
          <select value={nogironlik} onChange={(e) => setNogironlik(e.target.value)} className={inputStyle}>
            <option value="">Invaliddik</option>
          </select>
          <input type="text" value={allergikReaksiyalar} onChange={(e) => setAllergikReaksiyalar(e.target.value)} placeholder="Allergik reaksiyalar" className={inputStyle} />
          <input type="text" value={vazni} onChange={(e) => setVazni(e.target.value)} placeholder="Vazni" className={inputStyle} />
          <input type="text" value={boyi} onChange={(e) => setBoyi(e.target.value)} placeholder="Bo'yi" className={inputStyle} />
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button type="button" onClick={handleReset} className="w-36 bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 text-sm font-medium transition">Bekor qilish</button>
          <button type="button" className="w-36 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-2 text-sm font-medium transition">Keyingi bo'lim</button>
        </div>
      </div>

      <div style={cardStyle}>
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-800">Yangi bemor ro'yxatdan o'tkazish</h2>
          <div className="w-6 h-6 bg-blue-400 rounded-full text-white flex items-center justify-center text-xs font-bold mx-auto mt-2">3</div>
          <p className="text-xs font-semibold text-gray-600 mt-1">Tashrif ma'lumotlari</p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4">
          <input type="date" value={tashrifSanasi} onChange={(e) => setTashrifSanasi(e.target.value)} className={inputStyle} />
          <input type="date" value={chiqishSanasi} onChange={(e) => setChiqishSanasi(e.target.value)} className={inputStyle} />
          <select value={davolanganBolim} onChange={(e) => setDavolanganBolim(e.target.value)} className={inputStyle}>
            <option value="">Davolangan bo'lim</option>
          </select>
          <select value={masulShifokor} onChange={(e) => setMasulShifokor(e.target.value)} className={inputStyle}>
            <option value="">Mas'ul shifokor</option>
          </select>
          <input type="text" value={tashrifVazni} onChange={(e) => setTashrifVazni(e.target.value)} placeholder="Vazni" className={inputStyle} />
          <input type="text" value={tashrifBoyi} onChange={(e) => setTashrifBoyi(e.target.value)} placeholder="Bo'yi" className={inputStyle} />
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button type="button" onClick={handleReset} className="w-36 bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 text-sm font-medium transition">Bekor qilish</button>
          <button type="button" className="w-36 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-2 text-sm font-medium transition">Keyingi bo'lim</button>
        </div>
      </div>

      <div style={cardStyle}>
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-800">Yangi bemor ro'yxatdan o'tkazish</h2>
          <div className="w-6 h-6 bg-blue-400 rounded-full text-white flex items-center justify-center text-xs font-bold mx-auto mt-2">4</div>
          <p className="text-xs font-semibold text-gray-600 mt-1">Kasallik tarixi</p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4">
          <input type="date" value={davolanishSanasi} onChange={(e) => setDavolanishSanasi(e.target.value)} className={inputStyle} />
          <select value={kasallikTuri} onChange={(e) => setKasallikTuri(e.target.value)} className={inputStyle}>
            <option value="">Kasallik turi</option>
          </select>
          <input type="text" value={shifokorIsmSharifi} onChange={(e) => setShifokorIsmSharifi(e.target.value)} placeholder="Shifokor ism-sharifi" className={inputStyle} />
          <input type="text" value={davolanganShifoxonaManzili} onChange={(e) => setDavolanganShifoxonaManzili(e.target.value)} placeholder="Davolangan shifoxona manzili" className={inputStyle} />
          <div className="col-span-2">
            <textarea value={diagnoz} onChange={(e) => setDiagnoz(e.target.value)} placeholder="Diagnoz" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400 bg-white h-20 resize-none"></textarea>
          </div>
        </div>

        <div className="border-t border-gray-100 my-2"></div>

        <div className="flex justify-center gap-4">
          <button type="button" onClick={handleReset} className="w-36 bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 text-sm font-medium transition">Bekor qilish</button>
          <button type="submit" className="w-36 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-2 text-sm font-medium transition">Yakunlash</button>
        </div>
      </div>

    </form>
  );
}