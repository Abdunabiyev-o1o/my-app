import React from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

import Link from "next/link";

export default function KasallikTarixi() {
  const data = [
    {
      sana: "12/03/2021",
      turi: "Nevrologik",
      diagnoz: "Kuchli nevrologik bosim tufayli (ayol kishi tomonidan)",
      shifokor: "L.Panda",
    },
    {
      sana: "12/03/2021",
      turi: "Nevrologik",
      diagnoz: "Kuchli nevrologik bosim tufayli (ayol kishi tomonidan)",
      shifokor: "L.Panda",
    },
    {
      sana: "12/03/2021",
      turi: "Nevrologik",
      diagnoz: "Kuchli nevrologik bosim tufayli (ayol kishi tomonidan)",
      shifokor: "L.Panda",
    },
    {
      sana: "12/03/2021",
      turi: "Nevrologik",
      diagnoz: "Kuchli nevrologik bosim tufayli (ayol kishi tomonidan)",
      shifokor: "L.Panda",
    },
    {
      sana: "12/03/2021",
      turi: "Nevrologik",
      diagnoz: "Kuchli nevrologik bosim tufayli (ayol kishi tomonidan)",
      shifokor: "L.Panda",
    },
  ];

  return (
    <div className="ml-[280px] mb-[100px] mt-[75px] w-[1110px] h-[425px] bg-white rounded-[8px] overflow-hidden border border-[#E5E7EB]">
      <div className="flex items-center justify-between px-6 py-6">
        <h2 className="text-[20px] font-semibold text-[#2D2D2D]">
          Kasallik tarixi
        </h2>

        <Link href="/kasallar">
          <button className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-[13px] px-4 py-2 rounded-[10px] transition-all cursor-pointer">
            <Plus size={16} strokeWidth={2.5} />
            Yangi kasallik tarixi
          </button>
        </Link>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-[#E5E7EB]">
            <th className="text-left font-semibold text-[16px] text-[#2D2D2D] px-6 py-5 w-[240px]">
              Davolanish sanasi
            </th>
            <th className="text-left font-semibold text-[16px] text-[#2D2D2D] w-[260px]">
              Kasallik turi
            </th>
            <th className="text-left font-semibold text-[16px] text-[#2D2D2D] w-[450px]">
              Diagnoz
            </th>
            <th className="text-left font-semibold text-[16px] text-[#2D2D2D] w-[120px]">
              Shifokor
            </th>
            <th className="w-[80px]"></th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b border-[#E5E7EB] last:border-none h-[58px]"
            >
              <td className="px-6 text-[15px] text-[#5C5C5C]">{item.sana}</td>

              <td className="text-[15px] text-[#5C5C5C]">{item.turi}</td>

              <td className="text-[15px] text-[#5C5C5C]">{item.diagnoz}</td>

              <td className="text-[15px] text-[#5C5C5C]">{item.shifokor}</td>

              <td>
                <div className="flex items-center justify-center gap-4">
                  <button>
                    <Pencil
                      size={17}
                      className="text-[#9CA3AF] hover:text-[#6B7280]"
                    />
                  </button>

                  <button>
                    <Trash2
                      size={17}
                      className="text-[#FF5A52] hover:text-[#EF4444]"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
