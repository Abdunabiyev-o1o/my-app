"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-white border-r shadow-lg border-[#E5E7EB] z-50">
      <div className="h-full flex flex-col px-5">
        <div className="h-20 flex items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-9 h-8" />

            <h1 className="text-[24px] font-semibold text-[#3B82F6]">
              Healthcare
            </h1>
          </div>
        </div>

        <p className="text-[12px] uppercase text-[#A1A1AA] tracking-wider mb-4">
          Medicine
        </p>

        <nav className="flex flex-col gap-1">
          <Link
            href="/"
            className={`h-11 flex items-center gap-3 rounded-lg px-3 transition-all ${
              pathname === "/"
                ? "bg-[#F4F7FF] text-[#3B82F6] font-medium"
                : "text-[#52525B] hover:bg-[#F7F7F7]"
            }`}
          >
            <img src="/home.png" alt="" className="w-4 h-4" />
            <span className="text-sm">Bosh sahifa</span>
          </Link>

          <Link
            href="/palatalar"
            className={`h-11 flex items-center gap-3 rounded-lg px-3 transition-all ${
              pathname === "/palatalar"
                ? "bg-[#F4F7FF] text-[#3B82F6] font-medium"
                : "text-[#52525B] hover:bg-[#F7F7F7]"
            }`}
          >
            <img src="/home.png" alt="" className="w-4 h-4" />
            <span className="text-sm">Palatalar</span>
          </Link>

          <Link
            href="/shifokorlar"
            className={`h-11 flex items-center gap-3 rounded-lg px-3 transition-all ${
              pathname === "/shifokorlar"
                ? "bg-[#F4F7FF] text-[#3B82F6] font-medium"
                : "text-[#52525B] hover:bg-[#F7F7F7]"
            }`}
          >
            <img src="/home.png" alt="" className="w-4 h-4" />
            <span className="text-sm">Shifokorlar</span>
          </Link>

          <Link
            href="/bolimlar"
            className={`h-11 flex items-center gap-3 rounded-lg px-3 transition-all ${
              pathname === "/bolimlar"
                ? "bg-[#F4F7FF] text-[#3B82F6] font-medium"
                : "text-[#52525B] hover:bg-[#F7F7F7]"
            }`}
          >
            <img src="/home.png" alt="" className="w-4 h-4" />
            <span className="text-sm">Bo'limlar</span>
          </Link>

          <Link
            href="/bemorlar"
            className={`h-11 flex items-center gap-3 rounded-lg px-3 transition-all ${
              pathname === "/bemorlar"
                ? "bg-[#F4F7FF] text-[#3B82F6] font-medium"
                : "text-[#52525B] hover:bg-[#F7F7F7]"
            }`}
          >
            <img src="/home.png" alt="" className="w-4 h-4" />
            <span className="text-sm">Bemorlar</span>
          </Link>
        </nav>

        <div className="mt-[56px] border-t border-[#E5E7EB] pt-5">
          <button className="h-11 w-full flex items-center gap-3 rounded-lg px-3 text-[#52525B] hover:bg-[#F7F7F7] transition-all">
            <img src="/home.png" alt="" className="w-4 h-4" />
            <span className="text-sm">Tizimdan chiqish</span>
          </button>
        </div>
      </div>
    </aside>
  );
}