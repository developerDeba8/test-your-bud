import "./styles.css";
import React, { useState } from "react";

var emojiFoodDictionary = {
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥗": "Green Salad",
  "🍺": "Beer Mug",
  "🥤": "Cup with Straw",
  "🍏": "Green Apple",
  "🌮": "Taco",
  "🍫": "Chocolate Bar",
  "🥂": "Clinking Glasses"
};

var foodEmojisWeKnow = Object.keys(emojiFoodDictionary);

export default function App() {
  const [inputEmojiMeaning, setInputEmojiMeaning] = useState("");

  function inputEmojiFoodHandler(event) {
    var inputFoodEmoji = event.target.value;
    var inputFoodEmojiMeaning = emojiFoodDictionary[inputFoodEmoji];
    if (inputFoodEmojiMeaning === undefined) {
      inputFoodEmojiMeaning = "Sorry! not available in the database";
    }
    setInputEmojiMeaning(inputFoodEmojiMeaning);
  }

  function foodEmojiClickHandler(foodEmoji) {
    var inputFoodEmojiMeaning = emojiFoodDictionary[foodEmoji];
    setInputEmojiMeaning(inputFoodEmojiMeaning);
  }

  return (
    <div className="App">
      <h1>taste your bud!</h1>
      <input
        onChange={inputEmojiFoodHandler}
        style={{
          padding: "0.75rem",
          width: "55%",
          margin: "auto",
          border: "2.5px solid black",
          backgroundColor: "#D1D5DB",
          fontSize: "1rem"
        }}
      />
      <h2>{inputEmojiMeaning}</h2>
      <h3>food emojis we know</h3>

      {foodEmojisWeKnow.map((foodEmoji) => {
        return (
          <span
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            onClick={() => foodEmojiClickHandler(foodEmoji)}
            key={foodEmoji}
          >
            {foodEmoji}
          </span>
        );
      })}
    </div>
  );
}
