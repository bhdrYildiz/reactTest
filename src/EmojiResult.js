import React from "react";
import EmojiResultRow from "./EmojiResultRow";

export default function EmojiResults({ emojiData }) {
  return (
    <div data-testid="emoji-results">
      {emojiData.map((emoji, index) => (
        <EmojiResultRow key={index} symbol={emoji.symbol} title={emoji.title} />
      ))}
    </div>
  );
}
