import React, { createRef, KeyboardEventHandler, PropsWithChildren, useEffect, useRef, useState } from 'react';
import Text from '../../atoms/Text';

const KEY_CODES = {
  ENTER: 13,
  SPACE: 32,
  DOWN_ARROW: 40
}

interface SelectProps {
  label?: string
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void
  options?: SelectOption[]
  renderOption?: (props: RenderOptionProps) => React.ReactNode
}

interface SelectOption {
  label: string
  value: string
}

interface RenderOptionProps {
  getOptionRecommendedProps: (overrideProps?: Object) => Object
  isSelected: boolean
  option: SelectOption
}

const Select: React.FC<PropsWithChildren<SelectProps>> = ({
  label = 'Please select an option...',
  onOptionSelected: handler,
  options = [],
  renderOption,
}) => {
  const [highlightedIndex, setHighlightedIndex] = useState<null | number>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const labelRef = useRef<HTMLButtonElement>(null);
  const [optionRefs, setOptionRefs] = useState<React.RefObject<HTMLLIElement>[]>([]);
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

  const onKeyDown: KeyboardEventHandler = (event) => {
    event.preventDefault();

    if ([
      KEY_CODES.DOWN_ARROW,
      KEY_CODES.ENTER,
      KEY_CODES.SPACE,
    ].includes(event.keyCode)) {
      setIsOpen(true);


      highlightItem(0);
    }
  }

  const highlightItem = (optionIndex: number | null) => {
    setHighlightedIndex(optionIndex);
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

  useEffect(() => {
    setOptionRefs(options.map(_ => {
      return createRef<HTMLLIElement>();
    }))
  }, [options.length]);

  useEffect(() => {
    if (isOpen && highlightedIndex !== null) {
      const highlightedRef = optionRefs[highlightedIndex];
      highlightedRef?.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className='dse-select'>
      <button
        aria-controls='dse-select-list'
        aria-expanded={isOpen}
        aria-haspopup={true}
        className='dse-select__label'
        onKeyDown={onKeyDown}
        onClick={onLabelClick}
        ref={labelRef}
      >
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
          <ul aria-hidden={!isOpen} className='dse-select__overlay' id='dse-select-list' role={'menu'} style={{ top: overlayTop }}>
            {options.map((option, optionIndex) => {
              const isSelected = selectedIndex === optionIndex;
              const isHighlighted = highlightedIndex === optionIndex;
              const ref = optionRefs[optionIndex];

              const renderOptionProps = {
                getOptionRecommendedProps: (overrideProps = {}) => {
                  return {
                    className: `dse-select__option 
                    ${isSelected ? 'dse-select__option--selected' : ''}
                    ${isHighlighted ? 'dse-select__option--highlighted' : ''}`,
                    key: option.value,
                    onClick: () => onOptionSelected(option, optionIndex),
                    onMouseEnter: () => { highlightItem(optionIndex) },
                    onMouseLeave: () => { highlightItem(null) },
                    ref,
                    ...overrideProps
                  }
                },
                isSelected,
                option,
                ref
              };

              if (renderOption) {
                return renderOption(renderOptionProps);
              }

              return (
                <li
                  {...renderOptionProps.getOptionRecommendedProps()}
                >
                  <Text>{option.label}</Text>

                  {isSelected ? (
                    <svg
                      height={'1rem'}
                      width={'1rem'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
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
