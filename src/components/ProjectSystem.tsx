import { useState } from 'react';
import { Layout, MapPin, Construction, CalendarCheck } from 'lucide-react';
import ArchitectureTab from './ArchitectureTab';
import StatusTab from './StatusTab';
import ProgressTab from './ProgressTab';
import BookingTab from './BookingTab';

interface ProjectSystemProps {
  type: 'apartments' | 'land';
}

export default function ProjectSystem({ type }: ProjectSystemProps) {
  const [activeTab, setActiveTab] = useState('architecture');

  const tabs = [
    { 
      id: 'architecture', 
      label: type === 'apartments' ? 'تصميم العمارة' : 'تصميم التجزئة', 
      icon: Layout,
      show: true 
    },
    { 
      id: 'status', 
      label: 'وضعية البقع', 
      icon: MapPin,
      show: true 
    },
    { 
      id: 'progress', 
      label: 'تقدم الأشغال', 
      icon: Construction,
      show: true 
    },
    { 
      id: 'booking', 
      label: type === 'apartments' ? 'حجز شقة' : 'حجز بقعة', 
      icon: CalendarCheck,
      show: true 
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'architecture':
        return <ArchitectureTab type={type} />;
      case 'status':
        return <StatusTab title="وضعية البقع" />;
      case 'progress':
        return type === 'land' ? (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
            <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 border border-blue-500/20">
              <Construction size={48} />
            </div>
            <h3 className="text-4xl font-black text-white">قريباً</h3>
            <p className="text-blue-100/60 text-lg">نحن نعمل على تجهيز هذا القسم، ترقبوا التحديث القادم.</p>
          </div>
        ) : <ProgressTab />;
      case 'booking':
        return type === 'land' ? (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
            <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 border border-blue-500/20">
              <CalendarCheck size={48} />
            </div>
            <h3 className="text-4xl font-black text-white">قريباً</h3>
            <p className="text-blue-100/60 text-lg">نحن نعمل على تجهيز هذا القسم، ترقبوا التحديث القادم.</p>
          </div>
        ) : <BookingTab type={type} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full space-y-8 animate-fadeIn">
      {/* Tabs Menu */}
      <div className="flex flex-wrap justify-center gap-4 border-b border-white/10 pb-6">
        {tabs.filter(t => t.show).map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-500 backdrop-blur-md border ${
                activeTab === tab.id
                  ? 'bg-blue-600/90 text-white shadow-[0_8px_32px_rgba(37,99,235,0.4)] border-blue-500/50 scale-105'
                  : 'bg-white/5 text-blue-100/70 hover:bg-white/10 border-white/10 hover:text-white'
              }`}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="bg-slate-900/40 backdrop-blur-3xl rounded-[3rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10 min-h-[600px] relative overflow-hidden">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
