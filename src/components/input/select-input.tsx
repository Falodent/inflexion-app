import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import clsx from "clsx";
import ClickAwayListener from "react-click-away-listener";
import { AnimatePresence, motion } from "framer-motion";

interface Option {
  label: string;
  value: string;
}

interface SelectDropdownProps {
  label?: string;
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  error,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedValue = options.find((opt) => opt.value === value)?.label;

  return (
    <div className="relative flex flex-col gap-[28px]">
      {label && (
        <label className="text-xl leading-none font-[700] -tracking-[0.03em] text-black-100">
          {label}
        </label>
      )}

      <ClickAwayListener onClickAway={() => setIsOpen(false)}>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={clsx(
              "w-full h-16 flex justify-between items-center pl-2.5 pr-5 md:px-[28px] border rounded-lg text-left",
              isOpen
                ? "border-blue-100"
                : error
                ? "border-red-500"
                : "border-[#C5C5C5]",
              "focus:outline-none cursor-pointer"
            )}
          >
            <span
              className={clsx(
                "text-lg md:text-xl leading-none -tracking-[0.01em]",
                selectedValue ? "text-black-100" : "text-[#03030380]"
              )}
            >
              {selectedValue || placeholder}
            </span>

            <FaChevronDown className="text-sm shrink-0" />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute mt-1 w-full bg-white border border-gray-200 shadow-lg z-10 rounded max-h-60 overflow-y-auto"
              >
                {options.map((option) => (
                  <li
                    key={option.value}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                  >
                    {option.label}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </ClickAwayListener>

      {error && <p className="text-xs text-red-500 -mt-3">{error}</p>}
    </div>
  );
};

export default SelectDropdown;
