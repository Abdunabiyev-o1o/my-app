'use client'; 

import BemorlarTable from "@/components/bemorlar/BemorlarTabla";
import HeroCard from "@/components/home/Hero";
import React from "react";


export default function Page() {
  return (
    <div>
       <HeroCard />
       <BemorlarTable />
    </div>
  );
}