import React from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function KasallarDetail() {
  return (
    <div className="w-[1110px] ml-[280px] mt-10 h-[681px] rounded-[8px] bg-white border border-[#E5E7EB] overflow-hidden">
      <div className="flex p-6 border-b border-[#E5E7EB]">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
          alt="patient"
          className="w-[140px] h-[160px] object-cover rounded"
        />

        <div className="flex-1 ml-5">
          <div className="flex justify-between items-start">
            <h2 className="text-[36px] font-semibold text-[#222]">
              Kamolova Aziza
            </h2>

            <div className="flex items-center gap-3">
              <button>
                <Pencil size={18} className="text-gray-500" />
              </button>
              <button>
                <Trash2 size={18} className="text-red-500" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-y-5 mt-5 text-[15px]">
            <div>
              <p className="text-[#7A7A7A]">Tashrif sanasi:</p>
              <p className="font-semibold mt-1">26/03/2021</p>
            </div>

            <div>
              <p className="text-[#7A7A7A]">Chiqish sanasi:</p>
              <p className="font-semibold mt-1">26/03/2021</p>
            </div>

            <div>
              <p className="text-[#7A7A7A]">Davolangan bo’lim:</p>
              <p className="font-semibold mt-1">Nevrologiya</p>
            </div>

            <div>
              <p className="text-[#7A7A7A]">Mas’ul shifokor:</p>
              <p className="font-semibold mt-1">Lazizov Odilbek</p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-[#7A7A7A] text-[15px] mb-1">
              Murojaat sababi:
            </p>
            <p className="text-[15px] font-medium leading-6 text-[#222]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-b border-[#E5E7EB]">
        <h3 className="font-semibold text-[18px] mb-6">
          Shaxsiy ma’lumotlar
        </h3>

        <div className="grid grid-cols-3 gap-x-12 gap-y-5">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Tug’ilgan sanasi</span>
              <span className="font-semibold">12/09/1993</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Tug’ilgan hudud</span>
              <span className="font-semibold">Buxoro viloyati</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-[#7A7A7A]">Manzil</span>
              <span className="font-semibold text-right">
                Buxoro viloyati,
                <br />
                A.Temur ko‘chasi 13-uy
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Oilaviy holat</span>
              <span className="font-semibold">Turmushga chiqqan</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Ma’lumoti</span>
              <span className="font-semibold">Oliy ma’lumotli</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Bandlik holati</span>
              <span className="font-semibold">Ishlaydi</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Ish joyi</span>
              <span className="font-semibold">OOO “Honey Honey”</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Telefon raqam</span>
              <span className="font-semibold">+998 99 123 45 67</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">
                Oila a’zolaridan telefon raqam
              </span>
              <span className="font-semibold">+998 99 123 45 67</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <h3 className="font-semibold text-[18px] mb-6">
          Tibbiy ma’lumotlar
        </h3>

        <div className="grid grid-cols-3 gap-x-12 gap-y-5">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Qon guruhi</span>
              <span className="font-semibold">I guruh</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">RH faktor</span>
              <span className="font-semibold">+</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Sug’urta polisi</span>
              <span className="font-semibold">№1231123-AB</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-[#7A7A7A]">Sug’urta firmasi</span>
              <span className="font-semibold text-right">
                MCHJ “Human Save Limited”
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Imtiyoz kategoriyasi</span>
              <span className="font-semibold">Order sohibi</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-[#7A7A7A]">Imtiyoz hujjati</span>
              <span className="font-semibold text-right">
                № 123123-A
                <br />
                Kategoriya A
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Imtiyoz olingan sana</span>
              <span className="font-semibold">12/01/2020</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Invalidlik</span>
              <span className="font-semibold">I guruh</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Vazni</span>
              <span className="font-semibold">55 kg</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Bo’yi</span>
              <span className="font-semibold">179 sm</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#7A7A7A]">Allergik reaksiyalar</span>
              <span className="font-semibold">Ko’p savollarga</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}