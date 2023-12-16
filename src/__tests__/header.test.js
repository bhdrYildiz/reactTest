import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("Header component renders correctly", () => {
  render(<Header />);
  const headerElement = screen.getByText("Emoji Search");
  expect(headerElement).toBeInTheDocument();
});
