import React from 'react'

export default function Linked() {
  return (
    <div>
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
    </div>
  )
}
