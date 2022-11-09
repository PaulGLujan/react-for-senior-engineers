import React, { useState } from 'react';

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

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    setIsOpen(!isOpen)
    if (handler) {
      handler(option, optionIndex);
    }
  };

  const onLabelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={onLabelClick}>
        {label}
      </button>

      {isOpen ?
        (
          <ul>
            {options.map((option, optionIndex) => {
              return (
                <li
                  key={option.value}
                  onClick={() => { onOptionSelected(option, optionIndex) }}>
                  {option.label}
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
