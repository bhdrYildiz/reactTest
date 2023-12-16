import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("Emoji list renders correctly on initial render", () => {
  render(<App />);
  const emojiResults = screen.getByTestId("emoji-results");
  expect(emojiResults).toBeInTheDocument();
});

test("Emoji list renders correctly after filtering", () => {
  render(<App />);
  const searchInput = screen.getByRole("textbox");
  fireEvent.change(searchInput, { target: { value: "happy" } });
  const emojiResults = screen.getByTestId("emoji-results");
  expect(emojiResults).toBeInTheDocument();
});
