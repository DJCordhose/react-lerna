import { render, screen, waitFor } from "@testing-library/react";

import { AriaButton } from "./AriaButton";

test("smoke: renders something", () => {
  const label = "Click mich";
  const { getAllByText } = render(
    <AriaButton
      testid="oha"
      label={label}
      text={label}
      onClick={() => {}}
    ></AriaButton>
  );

  expect(getAllByText(label)).toHaveLength(1);
});
