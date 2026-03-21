import {
  Building2,
  Store,
  ShoppingCart,
  ShoppingBag,
  BookOpen,
  Hospital,
  GraduationCap,
  Server,
  Factory,
  Hotel,
  Landmark,
  Building,
  Warehouse,
  CircleParking,
} from "lucide-react";

const facilities = [
  { name: "빌딩", icon: Building2 },
  { name: "상가", icon: Store },
  { name: "마트", icon: ShoppingCart },
  { name: "백화점", icon: ShoppingBag },
  { name: "도서관", icon: BookOpen },
  { name: "병원", icon: Hospital },
  { name: "학교", icon: GraduationCap },
  { name: "데이터센터", icon: Server },
  { name: "공장", icon: Factory },
  { name: "호텔", icon: Hotel },
  { name: "관공서", icon: Landmark },
  { name: "아파트 단지", icon: Building },
  { name: "물류센터", icon: Warehouse },
  { name: "주차장", icon: CircleParking },
];

export function ApplicableFacilities() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <div className="text-center mb-12">
          <p className="text-sm text-blue-600 tracking-[0.2em] uppercase mb-3">
            Applicable Facilities
          </p>
          <h2 className="text-3xl lg:text-4xl text-slate-900 mb-4">
            인버터 적용 가능 시설
          </h2>
          <div className="w-12 h-[2px] bg-blue-600 mx-auto mb-5"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            냉각탑·공조기·펌프·배기팬 등 모터가 사용되는 모든 설비에 인버터를 적용하여 에너지를 절감합니다
          </p>
        </div>

        {/* 시설 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {facilities.map((facility) => {
            const IconComponent = facility.icon;
            return (
              <div
                key={facility.name}
                className="group flex flex-col items-center justify-center gap-3 py-6 lg:py-8 px-3 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors duration-300">
                  <IconComponent className="h-6 w-6 lg:h-8 lg:w-8 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <span className="text-sm lg:text-base text-slate-600 group-hover:text-slate-900 transition-colors">
                  {facility.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* 하단 안내 */}
        <p className="text-center text-xs text-slate-400 mt-10">
          위 시설 외에도 모터 구동 장비가 있는 모든 현장에 인버터 적용이 가능합니다
        </p>
      </div>
    </section>
  );
}