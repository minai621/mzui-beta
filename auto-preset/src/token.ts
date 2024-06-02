import * as fs from "fs";

// mapper.ts
type TokenMapper = {
  colors: string;
  typography: string;
  spacing: string;
  primary: string;
  secondary: string;
  danger: string;
  background: string;
  text: string;
  heading: string;
  body: string;
  small: string;
  medium: string;
  large: string;
};

type TokenMapperKey = keyof TokenMapper;

const tokenMapper: TokenMapper = {
  colors: "색상",
  typography: "서체",
  spacing: "간격",
  primary: "기본",
  secondary: "보조",
  danger: "위험",
  background: "배경",
  text: "텍스트",
  heading: "제목",
  body: "본문",
  small: "작은",
  medium: "중간",
  large: "큰",
};

type Tokens = {
  colors: {
    primary: string;
    secondary: string;
    danger: string;
    background: string;
    text: string;
  };
  typography: {
    heading: string;
    body: string;
    small: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
};

const tokens: Tokens = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
    danger: "#e74c3c",
    background: "#ecf0f1",
    text: "#2c3e50",
  },
  typography: {
    heading: "24px",
    body: "16px",
    small: "12px",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
};

// Convert tokens to Korean-mapped version

const convertTokensToKorean = (tokens: Tokens, mapper: TokenMapper): any => {
  const convertObject = (obj: any): any => {
    return Object.keys(obj).reduce((acc, key) => {
      const mappedKey = mapper[key as TokenMapperKey] || key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        acc[mappedKey] = convertObject(obj[key]);
      } else {
        acc[mappedKey] = obj[key];
      }
      return acc;
    }, {} as any);
  };

  return convertObject(tokens);
};

const koreanTokens = convertTokensToKorean(tokens, tokenMapper);

// Generate TypeScript file content
const generateTsFileContent = (tokens: any): string => {
  const jsonString = JSON.stringify(tokens, null, 2);
  return `export const tokens = ${jsonString};`;
};

const tsFileContent = generateTsFileContent(koreanTokens);

// Write to a new TypeScript file
fs.writeFileSync("koreanTokens.ts", tsFileContent, "utf8");

console.log("koreanTokens.ts 파일이 생성되었습니다.");
