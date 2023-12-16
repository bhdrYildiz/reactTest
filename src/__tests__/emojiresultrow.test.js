import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EmojiResultRow from "../EmojiResultRow";

test("Clicking emoji copies it to clipboard", async () => {
  const mockSymbol = "😊";
  const mockTitle = "Smile";
  render(<EmojiResultRow symbol={mockSymbol} title={mockTitle} />);
  const emojiResultRow = screen.getByText(mockTitle);
  
  await fireEvent.click(emojiResultRow);
});
