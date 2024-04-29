const fs = require("fs");
const path = require("path");

const generateFiles = (basePath) => {
  const buttonsDir = path.join(basePath, "buttons");
  if (!fs.existsSync(buttonsDir)) {
    fs.mkdirSync(buttonsDir);
  }

  const utilFunctions = [
    "randomDate",
    "randomNumber",
    "randomBoolean",
    "randomArray",
    "randomString",
  ];

  for (let i = 1; i <= 100; i++) {
    const randomUtilFunction =
      utilFunctions[Math.floor(Math.random() * utilFunctions.length)];
    const randomAlphabetSlice = Math.random()
      .toString(36)
      .substring(2, 7)
      .toUpperCase();
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    const buttonTsx = `
import React from 'react';
import './Button-${i}.css';
import { ${randomUtilFunction}_${i} } from '../utils';

const Button${i} = () => {
  const handleClick = () => {
    console.log(${randomUtilFunction}_${i});
  };

  return <button className="button-${i}" onClick={handleClick}>${randomAlphabetSlice}</button>;
};

export default Button${i};
`;

    const buttonCss = `
.button-${i} {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
  color: ${randomColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
`;

    const utilsTs = `
export const randomDate_${i} = new Date(${
      Math.floor(Math.random() * (2023 - 1970 + 1)) + 1970
    }, ${Math.floor(Math.random() * 12)}, ${
      Math.floor(Math.random() * 28) + 1
    });
export const randomNumber_${i} = ${Math.floor(Math.random() * 1000)};
export const randomBoolean_${i} = ${Math.random() < 0.5};
export const randomArray_${i} = [${Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 100)
    ).join(", ")}];
export const randomString_${i} = '${Math.random()
      .toString(36)
      .substring(2, 10)}';
export const alphabet_${i} = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const obj_${i} = { foo: 'bar', john: 'doe' };
`;

    fs.writeFileSync(
      path.join(buttonsDir, `Button-${i}.tsx`),
      buttonTsx.trim()
    );
    fs.writeFileSync(
      path.join(buttonsDir, `Button-${i}.css`),
      buttonCss.trim()
    );
    fs.appendFileSync(path.join(basePath, "utils.ts"), utilsTs);
  }
};

const basePath = process.argv[2];
if (basePath) {
  generateFiles(basePath);
} else {
  console.log("Please provide a base path as a command line argument.");
}
