import FontSizes from "../FontSizes";

test("snapshot of fontsizes", () => {
  expect(FontSizes).toMatchSnapshot();
});
