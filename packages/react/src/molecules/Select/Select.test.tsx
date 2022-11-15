import React from "react";
import Select from "./Select";

import { fireEvent, getByTestId, render, screen } from "@testing-library/react";

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
