import { render, screen, waitFor } from "@testing-library/react";

import { AriaButton } from "./AriaButton";


test("smoke: renders something", () => {
    const { getAllByText } = render(
      <AriaButton testid='oha' label='Click mich' text='Click mich' onClick={() => {}}></AriaButton>
      );
  
    expect(getAllByText(/add/i)).toHaveLength(2);
  });
  