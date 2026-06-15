"use client";
import React from "react";
import Link from "next/link";


export default function BemorlarTable() {
  return (
    <div className="relative">
      <div className="text-[40px] font-semibold ml-[280px] mt-9 mb-0">
        <h1>
          Bemorlar
        </h1>
      </div>
      <div
        className="absolute bg-white border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between p-6 font-sans select-none"
        style={{
          width: "1110px",
          height: "692px",
          top: "174px",
          left: "292px",
          borderRadius: "8px",
        }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[13px] font-semibold text-[#1F2937] border-b border-[#F3F4F6]">
                <th className="pb-4 pt-1 pl-2 w-[22%]">Ism-sharif</th>
                <th className="pb-4 pt-1 w-[24%]">Email</th>
                <th className="pb-4 pt-1 w-[12%]">Sana</th>
                <th className="pb-4 pt-1 w-[15%]">Qabul vaqti</th>
                <th className="pb-4 pt-1 w-[15%]">Shifokor</th>
                <th className="pb-4 pt-1 w-[12%]">Sabab</th>
                <th className="pb-4 pt-1 pr-2 text-right"></th>
              </tr>
            </thead>
            <tbody>
              <Link href="/details" legacyBehavior>
                <tr className="text-[13px] text-[#4B5563] border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                  <td className="py-[11px] pl-2 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
                      alt="Ronald Richards"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <span className="font-medium text-[#1F2937]">
                      Ronald Richards
                    </span>
                  </td>

                  <td className="py-[11px] break-all pr-2">
                    ronald.richards@example.com
                  </td>

                  <td className="py-[11px] text-[#6B7280]">10/12/2020</td>
                  <td className="py-[11px] text-[#6B7280]">12:00-12:45pm</td>
                  <td className="py-[11px] text-[#4B5563]">Dr. Theresa Webb</td>
                  <td className="py-[11px] text-[#4B5563]">Depression</td>

                  <td className="py-[11px] pr-2">
                    <div className="flex items-center justify-end gap-2.5">
                      <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                        ...
                      </button>

                      <button className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                        ...
                      </button>
                    </div>
                  </td>
                </tr>
              </Link>
              <Link href="/details" legacyBehavior>
                <tr className="text-[13px] text-[#4B5563] border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                  <td className="py-[11px] pl-2 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
                      alt="Ronald Richards"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <span className="font-medium text-[#1F2937]">
                      Ronald Richards
                    </span>
                  </td>

                  <td className="py-[11px] break-all pr-2">
                    ronald.richards@example.com
                  </td>

                  <td className="py-[11px] text-[#6B7280]">10/12/2020</td>
                  <td className="py-[11px] text-[#6B7280]">12:00-12:45pm</td>
                  <td className="py-[11px] text-[#4B5563]">Dr. Theresa Webb</td>
                  <td className="py-[11px] text-[#4B5563]">Depression</td>

                  <td className="py-[11px] pr-2">
                    <div className="flex items-center justify-end gap-2.5">
                      <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                        ...
                      </button>

                      <button className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                        ...
                      </button>
                    </div>
                  </td>
                </tr>
              </Link>
              <Link href="/details" legacyBehavior>
                <tr className="text-[13px] text-[#4B5563] border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                  <td className="py-[11px] pl-2 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
                      alt="Ronald Richards"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <span className="font-medium text-[#1F2937]">
                      Ronald Richards
                    </span>
                  </td>

                  <td className="py-[11px] break-all pr-2">
                    ronald.richards@example.com
                  </td>

                  <td className="py-[11px] text-[#6B7280]">10/12/2020</td>
                  <td className="py-[11px] text-[#6B7280]">12:00-12:45pm</td>
                  <td className="py-[11px] text-[#4B5563]">Dr. Theresa Webb</td>
                  <td className="py-[11px] text-[#4B5563]">Depression</td>

                  <td className="py-[11px] pr-2">
                    <div className="flex items-center justify-end gap-2.5">
                      <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                        ...
                      </button>

                      <button className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                        ...
                      </button>
                    </div>
                  </td>
                </tr>
              </Link>
              <Link href="/details" legacyBehavior>
                <tr className="text-[13px] text-[#4B5563] border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                  <td className="py-[11px] pl-2 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
                      alt="Ronald Richards"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <span className="font-medium text-[#1F2937]">
                      Ronald Richards
                    </span>
                  </td>

                  <td className="py-[11px] break-all pr-2">
                    ronald.richards@example.com
                  </td>

                  <td className="py-[11px] text-[#6B7280]">10/12/2020</td>
                  <td className="py-[11px] text-[#6B7280]">12:00-12:45pm</td>
                  <td className="py-[11px] text-[#4B5563]">Dr. Theresa Webb</td>
                  <td className="py-[11px] text-[#4B5563]">Depression</td>

                  <td className="py-[11px] pr-2">
                    <div className="flex items-center justify-end gap-2.5">
                      <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                        ...
                      </button>

                      <button className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                        ...
                      </button>
                    </div>
                  </td>
                </tr>
              </Link>
              <Link href="/details" legacyBehavior>
                <tr className="text-[13px] text-[#4B5563] border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                  <td className="py-[11px] pl-2 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
                      alt="Ronald Richards"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <span className="font-medium text-[#1F2937]">
                      Ronald Richards
                    </span>
                  </td>

                  <td className="py-[11px] break-all pr-2">
                    ronald.richards@example.com
                  </td>

                  <td className="py-[11px] text-[#6B7280]">10/12/2020</td>
                  <td className="py-[11px] text-[#6B7280]">12:00-12:45pm</td>
                  <td className="py-[11px] text-[#4B5563]">Dr. Theresa Webb</td>
                  <td className="py-[11px] text-[#4B5563]">Depression</td>

                  <td className="py-[11px] pr-2">
                    <div className="flex items-center justify-end gap-2.5">
                      <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                        ...
                      </button>

                      <button className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                        ...
                      </button>
                    </div>
                  </td>
                </tr>
              </Link>
              <Link href="/details" legacyBehavior>
                <tr className="text-[13px] text-[#4B5563] border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                  <td className="py-[11px] pl-2 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
                      alt="Ronald Richards"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <span className="font-medium text-[#1F2937]">
                      Ronald Richards
                    </span>
                  </td>

                  <td className="py-[11px] break-all pr-2">
                    ronald.richards@example.com
                  </td>

                  <td className="py-[11px] text-[#6B7280]">10/12/2020</td>
                  <td className="py-[11px] text-[#6B7280]">12:00-12:45pm</td>
                  <td className="py-[11px] text-[#4B5563]">Dr. Theresa Webb</td>
                  <td className="py-[11px] text-[#4B5563]">Depression</td>

                  <td className="py-[11px] pr-2">
                    <div className="flex items-center justify-end gap-2.5">
                      <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                        ...
                      </button>

                      <button className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                        ...
                      </button>
                    </div>
                  </td>
                </tr>
              </Link>
              <Link href="/details" legacyBehavior>
                <tr className="text-[13px] text-[#4B5563] border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                  <td className="py-[11px] pl-2 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
                      alt="Ronald Richards"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <span className="font-medium text-[#1F2937]">
                      Ronald Richards
                    </span>
                  </td>

                  <td className="py-[11px] break-all pr-2">
                    ronald.richards@example.com
                  </td>

                  <td className="py-[11px] text-[#6B7280]">10/12/2020</td>
                  <td className="py-[11px] text-[#6B7280]">12:00-12:45pm</td>
                  <td className="py-[11px] text-[#4B5563]">Dr. Theresa Webb</td>
                  <td className="py-[11px] text-[#4B5563]">Depression</td>

                  <td className="py-[11px] pr-2">
                    <div className="flex items-center justify-end gap-2.5">
                      <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                        ...
                      </button>

                      <button className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                        ...
                      </button>
                    </div>
                  </td>
                </tr>
              </Link>
              <Link href="/details" legacyBehavior>
                <tr className="text-[13px] text-[#4B5563] border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                  <td className="py-[11px] pl-2 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
                      alt="Ronald Richards"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <span className="font-medium text-[#1F2937]">
                      Ronald Richards
                    </span>
                  </td>

                  <td className="py-[11px] break-all pr-2">
                    ronald.richards@example.com
                  </td>

                  <td className="py-[11px] text-[#6B7280]">10/12/2020</td>
                  <td className="py-[11px] text-[#6B7280]">12:00-12:45pm</td>
                  <td className="py-[11px] text-[#4B5563]">Dr. Theresa Webb</td>
                  <td className="py-[11px] text-[#4B5563]">Depression</td>

                  <td className="py-[11px] pr-2">
                    <div className="flex items-center justify-end gap-2.5">
                      <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                        ...
                      </button>

                      <button className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                        ...
                      </button>
                    </div>
                  </td>
                </tr>
              </Link>
              <Link href="/details" legacyBehavior>
                <tr className="text-[13px] text-[#4B5563] border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                  <td className="py-[11px] pl-2 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
                      alt="Ronald Richards"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <span className="font-medium text-[#1F2937]">
                      Ronald Richards
                    </span>
                  </td>

                  <td className="py-[11px] break-all pr-2">
                    ronald.richards@example.com
                  </td>

                  <td className="py-[11px] text-[#6B7280]">10/12/2020</td>
                  <td className="py-[11px] text-[#6B7280]">12:00-12:45pm</td>
                  <td className="py-[11px] text-[#4B5563]">Dr. Theresa Webb</td>
                  <td className="py-[11px] text-[#4B5563]">Depression</td>

                  <td className="py-[11px] pr-2">
                    <div className="flex items-center justify-end gap-2.5">
                      <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                        ...
                      </button>

                      <button className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                        ...
                      </button>
                    </div>
                  </td>
                </tr>
              </Link>
              <Link href="/details" legacyBehavior>
                <tr className="text-[13px] text-[#4B5563] border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                  <td className="py-[11px] pl-2 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
                      alt="Ronald Richards"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <span className="font-medium text-[#1F2937]">
                      Ronald Richards
                    </span>
                  </td>

                  <td className="py-[11px] break-all pr-2">
                    ronald.richards@example.com
                  </td>

                  <td className="py-[11px] text-[#6B7280]">10/12/2020</td>
                  <td className="py-[11px] text-[#6B7280]">12:00-12:45pm</td>
                  <td className="py-[11px] text-[#4B5563]">Dr. Theresa Webb</td>
                  <td className="py-[11px] text-[#4B5563]">Depression</td>

                  <td className="py-[11px] pr-2">
                    <div className="flex items-center justify-end gap-2.5">
                      <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                        ...
                      </button>

                      <button className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                        ...
                      </button>
                    </div>
                  </td>
                </tr>
              </Link>
              <Link href="/details" legacyBehavior>
                <tr className="text-[13px] text-[#4B5563] border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                  <td className="py-[11px] pl-2 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
                      alt="Ronald Richards"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <span className="font-medium text-[#1F2937]">
                      Ronald Richards
                    </span>
                  </td>

                  <td className="py-[11px] break-all pr-2">
                    ronald.richards@example.com
                  </td>

                  <td className="py-[11px] text-[#6B7280]">10/12/2020</td>
                  <td className="py-[11px] text-[#6B7280]">12:00-12:45pm</td>
                  <td className="py-[11px] text-[#4B5563]">Dr. Theresa Webb</td>
                  <td className="py-[11px] text-[#4B5563]">Depression</td>

                  <td className="py-[11px] pr-2">
                    <div className="flex items-center justify-end gap-2.5">
                      <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                        ...
                      </button>

                      <button className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                        ...
                      </button>
                    </div>
                  </td>
                </tr>
              </Link>
              <Link href="/details" legacyBehavior>
                <tr className="text-[13px] text-[#4B5563] border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                  <td className="py-[11px] pl-2 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
                      alt="Ronald Richards"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <span className="font-medium text-[#1F2937]">
                      Ronald Richards
                    </span>
                  </td>

                  <td className="py-[11px] break-all pr-2">
                    ronald.richards@example.com
                  </td>

                  <td className="py-[11px] text-[#6B7280]">10/12/2020</td>
                  <td className="py-[11px] text-[#6B7280]">12:00-12:45pm</td>
                  <td className="py-[11px] text-[#4B5563]">Dr. Theresa Webb</td>
                  <td className="py-[11px] text-[#4B5563]">Depression</td>

                  <td className="py-[11px] pr-2">
                    <div className="flex items-center justify-end gap-2.5">
                      <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                        ...
                      </button>

                      <button className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                        ...
                      </button>
                    </div>
                  </td>
                </tr>
              </Link>
              <Link href="/details" legacyBehavior>
                <tr className="text-[13px] text-[#4B5563] border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                  <td className="py-[11px] pl-2 flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
                      alt="Ronald Richards"
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                    <span className="font-medium text-[#1F2937]">
                      Ronald Richards
                    </span>
                  </td>

                  <td className="py-[11px] break-all pr-2">
                    ronald.richards@example.com
                  </td>

                  <td className="py-[11px] text-[#6B7280]">10/12/2020</td>
                  <td className="py-[11px] text-[#6B7280]">12:00-12:45pm</td>
                  <td className="py-[11px] text-[#4B5563]">Dr. Theresa Webb</td>
                  <td className="py-[11px] text-[#4B5563]">Depression</td>

                  <td className="py-[11px] pr-2">
                    <div className="flex items-center justify-end gap-2.5">
                      <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>

                      <button className="text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
                        ...
                      </button>

                      <button className="text-[#EF4444] hover:text-[#DC2626] transition-colors">
                        ...
                      </button>
                    </div>
                  </td>
                </tr>
              </Link>

            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-1.5 pl-2 pt-2">
          <button className="w-[28px] h-[28px] flex items-center justify-center rounded border border-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="w-[28px] h-[28px] flex items-center justify-center rounded text-[13px] bg-[#2563EB] text-white font-medium">
            1
          </button>
          <button className="w-[28px] h-[28px] flex items-center justify-center rounded text-[13px] border border-[#E5E7EB] text-[#4B5563] hover:bg-gray-50 transition-colors">
            2
          </button>
          <button className="w-[28px] h-[28px] flex items-center justify-center rounded text-[13px] border border-[#E5E7EB] text-[#4B5563] hover:bg-gray-50 transition-colors">
            3
          </button>
          <button className="w-[28px] h-[28px] flex items-center justify-center rounded border border-[#E5E7EB] text-[#4B5563] hover:bg-gray-50 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <Link href="/kasallar" passHref legacyBehavior>
        <button
          className="absolute w-[56px] h-[56px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer z-50"
          style={{
            top: "794px",
            left: "1346px",
            borderRadius: "50%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}
