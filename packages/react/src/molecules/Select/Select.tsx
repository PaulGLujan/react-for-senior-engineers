import React, { useEffect, useRef, useState } from 'react';
import Text from '../../atoms/Text';

interface SelectProps {
  label?: string
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void
  options?: SelectOption[]
}

interface SelectOption {
  label: string
  value: string
}

const Select: React.FC<SelectProps> = ({
  label = 'Please select an option...',
  onOptionSelected: handler,
  options = []
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const labelRef = useRef<HTMLButtonElement>(null);
  const [overlayTop, setOverlayTop] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    if (handler) {
      handler(option, optionIndex);
    }

    setSelectedIndex(optionIndex);
    setIsOpen(false);
  };

  const onLabelClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setOverlayTop((
      labelRef.current?.offsetHeight || 0
    ) + 10)
  }, [labelRef.current?.offsetHeight]);

  let selectedOption = null;

  if (selectedIndex !== null) {
    selectedOption = options[selectedIndex];
  }

  return (
    <div className='dse-select'>
      <button className='dse-select__label' onClick={onLabelClick} ref={labelRef}>
        <Text>{selectedOption ? selectedOption.label : label}</Text>

        <svg
          className={`dse-select__caret ${isOpen ? 'dse-select__caret--open' : 'dse-select__caret--closed'}`}
          width={'1rem'} height={'1rem'} xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>

      </button>

      {isOpen ?
        (
          <ul className='dse-select__overlay' style={{ top: overlayTop }}>
            {options.map((option, optionIndex) => {
              const isSelected = selectedIndex === optionIndex;

              return (
                <li
                  className={`dse-select__option ${isSelected ? 'dse-select__option--selected' : ''}`}
                  key={option.value}
                  onClick={() => { onOptionSelected(option, optionIndex) }}>
                  <Text>{option.label}</Text>

                  {isSelected ? (<svg height={'1rem'} width={'1rem'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  ) : null}
                </li>
              )
            })}
          </ul>
        ) : ''
      }
    </div>
  )
}

export default Select;
