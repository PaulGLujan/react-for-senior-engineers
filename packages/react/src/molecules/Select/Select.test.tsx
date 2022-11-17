import React from "react";
import Select from "./Select";

import { fireEvent, render, screen } from "@testing-library/react";

interface RenderOptionProps {
  getOptionRecommendedProps: (overrideProps?: Object) => Object
  isSelected: boolean
  option: SelectOption
}

interface SelectOption {
  label: string
  value: string
}

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

test("renders all options passed to it", () => {
  const { getAllByRole } = render(<Select options={options} />);
  const selectButton = screen.getByTestId('DseSelectButton')
  fireEvent.click(selectButton);
  expect(getAllByRole("menuitemradio")).toHaveLength(3);
});

test('renders options using custom renderOption method if passed as prop', () => {
  const renderOption = ({ getOptionRecommendedProps, option }: RenderOptionProps) => {
    return <p data-testid={"custom-render-option"} {...getOptionRecommendedProps()}>{option.label}</p>
  };
  const { getAllByTestId } = render(<Select options={options} renderOption={renderOption} />);
  const selectButton = screen.getByTestId('DseSelectButton');
  fireEvent.click(selectButton);
  expect(getAllByTestId("custom-render-option")).toHaveLength(3);
});

test('calls the onOptionSelected prop with the selected option its index is passed', () => {
  const onOptionSelected = jest.fn();
  const { getAllByRole } = render(<Select options={options} onOptionSelected={onOptionSelected} />);
  const selectButton = screen.getByTestId('DseSelectButton');
  fireEvent.click(selectButton);
  const firstSelectOption = getAllByRole('menuitemradio')[0];
  fireEvent.click(firstSelectOption);
  expect(onOptionSelected).toHaveBeenCalledWith(options[0], 0);
});

test('the button label changes to the selected option label', () => {
  const { getAllByRole } = render(<Select options={options} />);
  const selectButton = screen.getByTestId('DseSelectButton');
  fireEvent.click(selectButton);
  const firstSelectOption = getAllByRole('menuitemradio')[0];
  fireEvent.click(firstSelectOption);
  expect(selectButton).toHaveTextContent(options[0].label);
})

test('snapshot of the selected option state', () => {
  const { asFragment, getAllByRole } = render(<Select options={options} />);
  const selectButton = screen.getByTestId('DseSelectButton');
  fireEvent.click(selectButton);
  const firstSelectOption = getAllByRole('menuitemradio')[0];
  fireEvent.click(firstSelectOption);
  expect(asFragment()).toMatchSnapshot();
})

test('snapshot of the base state', () => {
  const { asFragment } = render(<Select options={options} />);
  expect(asFragment).toMatchSnapshot();
})

test('snapshot of the options menu open state', () => {
  const { asFragment } = render(<Select options={options} />);
  const selectButton = screen.getByTestId('DseSelectButton');
  fireEvent.click(selectButton);
  expect(asFragment()).toMatchSnapshot();
})
