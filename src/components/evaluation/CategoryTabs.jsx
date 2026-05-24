/**
 * CategoryTabs.jsx — Evaluation component
 * Scrollable tab bar. Di mobile hanya tampil icon + label pendek.
 * Checkmark muncul saat kategori selesai.
 */
export default function CategoryTabs({ categories, currentStep, isCategoryDone, onTabClick }) {
  return (
    <div className="flex gap-1.5 mb-5 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
      {categories.map((cat, i) => {
        const isDone   = isCategoryDone(cat.id);
        const isActive = i === currentStep;

        return (
          <button
            key={cat.id}
            onClick={() => onTabClick(i)}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
              isActive
                ? 'bg-green-600 text-white shadow-sm'
                : isDone
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            <span className="text-sm leading-none">{cat.icon}</span>
            <span className="hidden sm:inline">{cat.label}</span>
            {isDone && !isActive && (
              <span className="text-green-600 sm:text-green-700 font-bold">✓</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
