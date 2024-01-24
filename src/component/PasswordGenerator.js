import React, { useState, useEffect } from "react";
import "./passwordGenerator.css";
const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [special, setSpecial] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [copyText, setCopytext] = useState("Copy");

  const randomPasswordGenerator = () => {
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq";
    if (numbers) {
      str += "1234567890";
    }
    if (special) {
      str += "!@#$%^&*()_-+={}][|.,></?";
    }
    let result = "";
    for (let i = 1; i <= length; i++) {
      result += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(result);
  };

  const copyPassword = () => {
    setCopytext("Copied");
    if (password) navigator.clipboard.writeText(password);
    setTimeout(() => {
      setCopytext("Copy");
    }, 1000);
  };

  useEffect(() => {
    randomPasswordGenerator();
  }, [length, special, numbers]);

  return (
    <div className="container">
      <div className="container__password">
        <div className="password_section">
          <input
            className="password_section__input"
            type="text"
            value={password}
          />
          <button className="password_section__button" onClick={copyPassword}>
            {copyText}
          </button>
        </div>
        <div className="password_item">
          <input
            onChange={(event) => {
              setLength(event.target.value);
            }}
            name="range"
            type="range"
            min="8"
            max="50"
            value={length}
          />
          <label htmlFor="range"> length {length}</label>
          <input
            type="checkbox"
            name="character"
            onChange={() => {
              setSpecial((prev) => !prev);
            }}
          />
          <label for="character"> specials</label>
          <input
            type="checkbox"
            name="numbers"
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
          />
          <label htmlFor="numbers">numbers</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
