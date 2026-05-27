/**
 * CategoryTabs.jsx — Evaluation component
 * Scrollable tab bar dengan smooth active state transition.
 * Di mobile hanya tampil icon; di desktop tampil icon + label.
 * Checkmark muncul saat kategori selesai.
 */
export default function CategoryTabs({ categories, currentStep, isCategoryDone, onTabClick }) {
  return (
    <div className="flex gap-1.5 mb-5 overflow-x-auto pb-1 -mx-1 px-1" style={{ scrollbarWidth: 'none' }}>
      {categories.map((cat, i) => {
        const isDone   = isCategoryDone(cat.id);
        const isActive = i === currentStep;

        return (
          <button
            key={cat.id}
            onClick={() => onTabClick(i)}
            className={`
              flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium
              whitespace-nowrap flex-shrink-0 cursor-pointer
              transition-all duration-200 ease-out
              ${isActive
                ? 'bg-green-600 text-white shadow-sm scale-[1.03]'
                : isDone
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
              }
            `}
          >
            <span className="text-sm leading-none">{cat.icon}</span>
            <span className="hidden sm:inline">{cat.label}</span>
            {isDone && !isActive && (
              <span className="text-green-600 font-bold leading-none">✓</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
