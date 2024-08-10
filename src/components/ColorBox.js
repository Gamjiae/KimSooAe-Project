import { useState } from 'react';

// 84개의 서로 다른 색상을 생성
const colors = [
    '#e5e5e5', '#d4d4d4', '#a3a3a3', '#737373', '#404040', '#262626', '#000000', /*gray*/
    '#fecaca', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', /*red*/
    '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412', /*orange*/
    '#fde68a', '#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', /*amber*/
    '#d9f99d', '#bef264', '#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#3f6212', /*lime*/
    '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', /*green*/
    '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59', /*teal*/
    '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#075985', /*sky*/
    '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', /*blue*/
    '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', /*violet*/
    '#f5d0fe', '#f0abfc', '#e879f9', '#d946ef', '#c026d3', '#a21caf', '#86198f', /*fuchsia*/
    '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', '#9d174d' /*pink*/
];

const ColorBox = ({ onSelectColor }) => {
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorClick = (color) => {
      setSelectedColor(color);
      onSelectColor(color);
    };

    return (
      <div className="flex flex-col items-center w-full h-full bg-white z-50">
        <div className="relative flex justify-center items-center w-full p-5">
          <span className="text-lg text-center text-[#737373] mt-[-15px] mb-[-18px]">색상</span>
        </div>
        
        <div className="w-[95%] h-full grid grid-cols-7 gap-2.5 pb-2.5 justify-items-center items-center overflow-y-auto">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-[36px] h-[36px] rounded-full border-2 ${selectedColor === color ? 'border-current' : 'border-transparent'}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      </div>
    );
  };
  
export default ColorBox;