import { useState } from 'react';
import { X } from 'lucide-react';
import LandPlotsCard from './LandPlotsCard';
import ApartmentsCard from './ApartmentsCard';

export default function ProjectDetails() {
  return (
    <section id="project-details" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          تفاصيل المشروع
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <LandPlotsCard />
          <ApartmentsCard />
        </div>
      </div>
    </section>
  );
}
