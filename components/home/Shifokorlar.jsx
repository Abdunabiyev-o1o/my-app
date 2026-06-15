'use client'; // Next.js da onClick va useRouter ishlashi uchun shart

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Shifokorlar() {
  const router = useRouter();

  const doctors = [
    {
      id: 1,
      name: 'Leslie Alexander',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      email: 'lesie.alexander@example.com',
      specialty: 'Nevrolog',
      department: 'Nevrologiya',
      days: 'Du, Se, Ju',
    },
    {
      id: 2,
      name: 'Ronald Richards',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      email: 'ronald.richards@example.com',
      specialty: 'Ginekolog',
      department: 'Ginekolog',
      days: 'Chor, Pay, Shanba',
    },
    {
      id: 3,
      name: 'Jane Cooper',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      email: 'jane.cooper@example.com',
      specialty: 'Terapevt',
      department: 'Terapeya',
      days: 'Har kuni',
    },
    {
      id: 4,
      name: 'Robert Fox',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      email: 'robert.fox@gmail.com',
      specialty: 'Terapevt',
      department: 'Terapeya',
      days: 'Juma, Shanba, Yak',
    },
    {
      id: 5,
      name: 'Jenny Wilson',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
      email: 'jenny.wilson@example.com',
      specialty: 'Lor',
      department: 'Lor',
      days: 'Dushanba, Juma',
    },
  ];

  // Ko'rish tugmasi bosilganda ishlaydigan funksiya
  const handleViewDetails = (id) => {
    // Shifokor ID-si bo'yicha dinamik sahifaga yo'naltirish
    router.push(`/shifokorlar/${id}`);
  };

  return (
    <div className="w-[1110px] h-[425px] mb-[200px] bg-white rounded-xl ml-[280px] mt-[38px] shadow-[0_6px_24px_rgba(146,161,185,0.12)] font-sans antialiased box-border overflow-hidden">
      <div className="h-[84px] flex items-center pl-6">
        <h2 className="text-[22px] font-semibold text-[#1F2937]">Shifokorlar</h2>
      </div>

      <div className="w-full">
        <div className="w-[1110px] h-[56px] flex items-center bg-[#FCFDFE] border-b border-[#F3F4F6] text-[13px] font-semibold text-[#374151] px-6">
          <div className="w-[235px]">Ism-sharifi</div>
          <div className="w-[225px]">Email</div>
          <div className="w-[155px]">Mutaxassisligi</div>
          <div className="w-[135px]">Bo'lim</div>
          <div className="w-[210px]">Qabul kunlari</div>
          <div className="w-[70px]"></div>
        </div>

        <div className="flex flex-col">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="w-[1110px] h-[56px] flex items-center border-b border-[#F3F4F6] text-[14px] text-[#4B5563] px-6 hover:bg-[#F9FAFB] transition-colors duration-150"
            >
              <div className="w-[235px] flex items-center gap-3">
                <img
                  src={doctor.avatar}
                  alt={doctor.name}
                  className="w-9 h-9 rounded-full object-cover shadow-sm"
                />
                <span className="font-medium text-[#111827]">{doctor.name}</span>
              </div>

              <div className="w-[225px] text-[#6B7280] font-normal truncate pr-4">
                {doctor.email}
              </div>

              <div className="w-[155px] text-[#4B5563] font-normal">
                {doctor.specialty}
              </div>

              <div className="w-[135px] text-[#4B5563] font-normal">
                {doctor.department}
              </div>

              <div className="w-[210px] text-[#4B5563] font-normal">
                {doctor.days}
              </div>

              <div className="w-[70px] flex items-center justify-end gap-[18px]">
                {/* Ko'rish (Ko'z) ikonkali yangi tugma */}
                <button 
                  onClick={() => handleViewDetails(doctor.id)}
                  className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors duration-150"
                  title="Batafsil ko'rish"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>

                {/* Tahrirlash tugmasi */}
                <button className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors duration-150">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                </button>

                {/* O'chirish tugmasi */}
                <button className="text-[#EF4444] opacity-80 hover:opacity-100 transition-opacity duration-150">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}