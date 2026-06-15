import React from 'react';

export default function Bemorlar() {
  const patients = [
    {
      id: 1,
      name: 'Jasmina',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      email: 'lesie.alexander@example.com',
      date: '10/10/2020',
      time: '09:15-09:45am',
      doctor: 'Dr. Jacob Jones',
      reason: 'Mumps Stage II',
    },
    {
      id: 2,
      name: 'Ronald Richards',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      email: 'ronald.richards@example.com',
      date: '10/12/2020',
      time: '12:00-12:45pm',
      doctor: 'Dr. Theresa Webb',
      reason: 'Depression',
    },
    {
      id: 3,
      name: 'Jane Cooper',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      email: 'jane.cooper@example.com',
      date: '10/13/2020',
      time: '01:15-01:45pm',
      doctor: 'Dr. Jacob Jones',
      reason: 'Arthritis',
    },
    {
      id: 4,
      name: 'Robert Fox',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      email: 'robert.fox@gmail.com',
      date: '10/14/2020',
      time: '02:00-02:45pm',
      doctor: 'Dr. Arlene McCoy',
      reason: 'Fracture',
    },
    {
      id: 5,
      name: 'Jenny Wilson',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
      email: 'jenny.wilson@example.com',
      date: '10/15/2020',
      time: '12:00-12:45pm',
      doctor: 'Dr. Esther Howard',
      reason: 'Depression',
    },
  ];

  return (
    <div className="w-[1110px] h-[425px] bg-white rounded-xl ml-[280px] mt-[38px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] font-sans antialiased box-border overflow-hidden">
      <div className="h-[84px] flex items-center pl-6">
        <h2 className="text-xl font-semibold text-[#1e1e1e]">Bemorlar</h2>
      </div>

      <div className="w-full">
        <div className="w-[1110px] h-[56px] flex items-center bg-[#fcfcfc] border-b border-gray-100 text-[13px] font-medium text-[#7d7d7d] px-6">
          <div className="w-[235px]">Ism-sharifi</div>
          <div className="w-[205px]">Email</div>
          <div className="w-[125px]">Sana</div>
          <div className="w-[135px]">Qabul vaqti</div>
          <div className="w-[155px]">Shifokor</div>
          <div className="w-[170px]">Sabab</div>
          <div className="w-[85px]"></div>
        </div>

        <div className="flex flex-col">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="w-[1110px] h-[56px] flex items-center border-b border-gray-50 text-[14px] text-[#4a4a4a] px-6 hover:bg-gray-50/50 transition-colors"
            >
              <div className="w-[235px] flex items-center gap-3">
                <img
                  src={patient.avatar}
                  alt={patient.name}
                  className="w-8 h-8 rounded-full object-cover grayscale-[20%]"
                />
                <span className="font-medium text-[#2d2d2d]">{patient.name}</span>
              </div>
              <div className="w-[205px] text-[#7a7a7a] truncate pr-4">{patient.email}</div>
              <div className="w-[125px] text-[#5a5a5a]">{patient.date}</div>
              <div className="w-[135px] text-[#5a5a5a]">{patient.time}</div>
              <div className="w-[155px] text-[#4a4a4a]">{patient.doctor}</div>
              <div className="w-[170px] text-[#5a5a5a]">{patient.reason}</div>
              <div className="w-[85px] flex items-center justify-end gap-4 text-gray-400">
                <button className="hover:text-blue-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                </button>
                <button className="hover:text-red-500 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-400/80"
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