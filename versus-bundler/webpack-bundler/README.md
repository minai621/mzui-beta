## 웹팩으로 리액트 번들링하기

### 명령어

```shell
node generateCodes.js (생성할 폴더)
node generateApp.js (생성할 폴더)

npm run build
```

### 조건

#### 파일

- index.html
- src/index.tsx
- src/App.tsx

100개의 Button.tsx
100개의 Button.css
1개의 utils.ts (100개의 함수가 선언돼있고, 랜덤하게 Button 컴포넌트에서 특정 함수를 1개만 사용한다. 나머지 함수는 트리쉐이킹돼야 한다)
App.tsx에서 100개의 Button.tsx를 모두 사용한다.

#### dependencies

- react
- react-dom

### 결과

![alt text](../assets/webpack.png)
main.js 파일의 사이즈가 207KB가 나왔다.

웹팩의 로더는 ts-loader를 사용해서 jsx 문법을 js로 변환하였고, webpack5의 기본 설정인 @babel/preset-env를 사용해 기본적인 트랜스파일이 되도록 하였다.
