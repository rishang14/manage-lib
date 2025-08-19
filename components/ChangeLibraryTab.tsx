"use client"
 import {useRouter, useSearchParams} from "next/navigation"  
 import {Clock,Settings} from "lucide-react"

 type TabNavigationProps={
    activeTab:string, 
    libraryId:string
 }
 
export default function TablibNavigation({ activeTab, libraryId }: TabNavigationProps) {
  const router =useRouter() ;
  const searchParams = useSearchParams();

  const navigationItems = [
    { id: "shifts", label: "Shifts", icon: Clock },
    { id: "manage", label: "Manage", icon: Settings },
  ];

  const handleTabChange = (tabId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tabId);
    router.push(`/library/${libraryId}?${params.toString()}`);
  };

  return (
    <nav className="bg-white border-b dark:bg-neutral-950 border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex space-x-6">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`flex items-center gap-2 px-3 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === item.id
                  ? "border-blue-600 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}