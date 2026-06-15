import React from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function XodimlarDetail() {
  return (
    <div className="w-[1110px] mx-auto mt-10 space-y-6 antialiased">
      <div className="rounded-[8px] bg-white border border-[#E5E7EB] p-6 shadow-sm">
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
            alt="doctor"
            className="w-[170px] h-[170px] object-cover rounded-[4px]"
          />

          <div className="flex-1 ml-6">
            <div className="flex justify-between items-start">
              <h2 className="text-[28px] font-bold text-[#111827]">
                Ozodov Navro’z
              </h2>

              <div className="flex items-center gap-3">
                <button className="hover:bg-gray-100 p-1.5 rounded transition">
                  <Pencil size={18} className="text-gray-400" />
                </button>
                <button className="hover:bg-red-50 p-1.5 rounded transition">
                  <Trash2 size={18} className="text-red-500" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-12 mt-4 text-[15px] max-w-[700px]">
              <div className="flex justify-between items-center">
                <span className="text-[#6B7280]">Mutaxassisligi</span>
                <span className="font-semibold text-[#111827] w-[180px]">Nevrolog</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B7280]">Ishga kirgan sana</span>
                <span className="font-semibold text-[#111827] w-[180px]">26/03/2021</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B7280]">Ishlayotgan bo'lim</span>
                <span className="font-semibold text-[#111827] w-[180px]">Nevrologiya</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B7280]">Ish grafigi</span>
                <span className="font-semibold text-[#111827] w-[180px]">To'liq</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#6B7280]">Ish staji</span>
                <span className="font-semibold text-[#111827] w-[180px]">12 yil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#F3F4F6]">
          <h3 className="font-bold text-[16px] text-[#111827] mb-4">
            Shaxsiy ma’lumotlar
          </h3>

          <div className="grid grid-cols-3 gap-x-16 gap-y-4 text-[14px]">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Tug’ilgan sanasi</span>
                <span className="font-semibold text-[#111827]">12/09/1993</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Tug’ilgan hudud</span>
                <span className="font-semibold text-[#111827]">Buxoro viloyati</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span className="text-[#6B7280] shrink-0">Manzil</span>
                <span className="font-semibold text-[#111827] text-right">
                  Buxoro viloyati, A.Temur ko’chasi 13-uy
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Oilaviy holat</span>
                <span className="font-semibold text-[#111827]">Turmushga chiqqan</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Ma’lumoti</span>
                <span className="font-semibold text-[#111827]">Oliy ma’lumotli</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Telefon raqam</span>
                <span className="font-semibold text-[#111827]">+998 99 123 45 67</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span className="text-[#6B7280]">Oila a’zolaridan telefon raqam</span>
                <span className="font-semibold text-[#111827]">+998 99 123 45 67</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[8px] bg-white border border-[#E5E7EB] overflow-hidden shadow-sm">
        <div className="flex justify-between items-center p-5 border-b border-[#E5E7EB]">
          <h3 className="font-bold text-[18px] text-[#111827]">
            Mehnat faoliyati
          </h3>
          <button className="flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white text-[13px] font-medium px-4 py-2 rounded-[6px] transition">
            <Plus size={16} />
            Yangi ish faoliyat tarixi
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[14px]">
            <thead>
              <tr className="text-[#6B7280] font-medium border-b border-[#E5E7EB]">
                <th className="py-3 px-6 font-medium">Muassasa nomi</th>
                <th className="py-3 px-6 font-medium">Ish faoliyat muddati</th>
                <th className="py-3 px-6 font-medium">Lavozimi</th>
                <th className="py-3 px-6 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3F4F6] text-[#111827]">
              <tr className="hover:bg-gray-50/50 transition">
                <td className="py-4 px-6">AKFA MedLine</td>
                <td className="py-4 px-6 text-[#4B5563]">12/03/2008 - 15/05/2014</td>
                <td className="py-4 px-6 font-medium text-[#4B5563]">Nevrolog</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button className="text-gray-400 hover:text-gray-600 transition">
                      <Pencil size={16} />
                    </button>
                    <button className="text-red-500 hover:text-red-700 transition">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition">
                <td className="py-4 px-6">7-son Toshkent sh. klinikasi</td>
                <td className="py-4 px-6 text-[#4B5563]">12/03/2014 - 15/05/2018</td>
                <td className="py-4 px-6 font-medium text-[#4B5563]">Bosh shifokor</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button className="text-gray-400 hover:text-gray-600 transition">
                      <Pencil size={16} />
                    </button>
                    <button className="text-red-500 hover:text-red-700 transition">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition">
                <td className="py-4 px-6">AKFA MedLine</td>
                <td className="py-4 px-6 text-[#4B5563]">12/03/2018 - </td>
                <td className="py-4 px-6 font-medium text-[#4B5563]">Nevrolog</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button className="text-gray-400 hover:text-gray-600 transition">
                      <Pencil size={16} />
                    </button>
                    <button className="text-red-500 hover:text-red-700 transition">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}