import React from "react";
import { render } from "@testing-library/react";

import App from "@components/App/Index";

test("check app snapshot", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
