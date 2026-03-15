import { useState } from 'react';
import { Layout, MapPin, Construction, CalendarCheck } from 'lucide-react';
import ArchitectureTab from './ArchitectureTab';
import StatusTab from './StatusTab';
import ProgressTab from './ProgressTab';
import BookingTab from './BookingTab';

const tabs = [
  { id: 'architecture', label: 'تصميم العمارة', icon: Layout },
  { id: 'status', label: 'وضعية الشقق', icon: MapPin },
  { id: 'progress', label: 'تقدم الأشغال', icon: Construction },
  { id: 'booking', label: 'حجز شقة', icon: CalendarCheck },
];

export default function ApartmentSystem() {
  const [activeTab, setActiveTab] = useState('architecture');

  const renderContent = () => {
    switch (activeTab) {
      case 'architecture':
        return <ArchitectureTab />;
      case 'status':
        return <StatusTab />;
      case 'progress':
        return <ProgressTab />;
      case 'booking':
        return <BookingTab />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full space-y-8 animate-fadeIn">
      {/* Tabs Menu */}
      <div className="flex flex-wrap justify-center gap-4 border-b border-gray-200 pb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon size={20} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 min-h-[600px]">
        {renderContent()}
      </div>
    </div>
  );
}
