import { useState, useRef, useEffect } from 'react';

function CategoryDropdown({ options, selectedOption, onSelect }) {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (itemText) => {
    onSelect(itemText);
    setIsActive(false);
  };

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`selectBox2 ${isActive ? 'active' : ''}`} ref={dropdownRef} onClick={toggleDropdown}>
      <div className={`label ${selectedOption !== '카테고리 선택' ? 'has-selection' : ''}`}>
        {selectedOption}
      </div>
      {isActive && (
        <ul className="optionList">
          {options.map(option => (
            <li className="optionItem" key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;