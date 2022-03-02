
# 채팅 페이지
[![Netlify Status](https://api.netlify.com/api/v1/badges/00d459cf-a8e2-475e-9bc0-7488475737a9/deploy-status)](https://app.netlify.com/sites/2weekchat/deploys)

<br>

## 🚀 정보

- [배포주소 바로가기](https://2weekchat.netlify.app/)
- [노션 바로가기](https://sleepy-oxygen-343.notion.site/41970b5fee2d45aebd7b01de061039eb)
- [figma 바로가기](https://www.figma.com/file/4Cd5n1VVGLrAzlldO6FEEe/Swit?node-id=0%3A1)

<br>

## 📝 스택

<br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=black">  <img alt="SCSS" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white"/></a>


## 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/wanted-team2/2week_Chat.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn start
```
<br>

<br>

## 🔥 프로젝트 과정 소개
| [코딩 컨벤션 규칙](https://sleepy-oxygen-343.notion.site/9c06caa291f44d129f3b707fd4627aa0) | [깃허브 작성 규칙](https://sleepy-oxygen-343.notion.site/9c06caa291f44d129f3b707fd4627aa0) |
|:--:|:--:|
|![1](https://user-images.githubusercontent.com/78653426/152985098-26a0af22-9186-4d1b-b302-ef5246f85b29.png)|![3](https://user-images.githubusercontent.com/78653426/152985107-45acb775-a967-4e8d-a0d9-271171369fed.png)|
|![2](https://user-images.githubusercontent.com/78653426/152985104-7c2ac57a-1491-4d2f-90cf-3d1ae24c6799.png)|![4](https://user-images.githubusercontent.com/78653426/152985109-90d48190-b379-481d-aa1f-66ed1f86e581.png)|
| [정보 공유](https://www.notion.so/5520df8322e549ebb29b4528de020d52) | [구현명세 시각화](https://www.figma.com/file/4Cd5n1VVGLrAzlldO6FEEe/Swit?node-id=0%3A1) |
|![11](https://user-images.githubusercontent.com/78653426/153548448-d9e13041-e5fa-4b66-b69f-9b54b8d8fbdc.png)|![11](https://user-images.githubusercontent.com/78653426/153548281-6e4d5866-29ef-4a4d-b9e2-2c64c4e01dd2.png)|



<br>
<br>


### ✨ 구현 사항 목록 
-   `Typescript` 사용
-    base, domain, hooks, models, pages, styles, redux, utils 으로 프로젝트 구조를 나눠 재사용에 용이하게 개발

-   [x] Redux를 이용한 상태 관리

    -   [x] 기존의 메시지 내역 불러오기, 사용자의 메시지 데이터 관리

-   [x] 메시지 입력창

    -   [x] 입력창에 내용 입력 시 전송 버튼 활성화 (미 입력 시 비활성화)
    -   [x] Shift Enter로 멀티라인 입력 
    -   [x] Enter 키로 전송 가능

-   [x] 메시지

    -   [x] 내가 전송한 메시지의 경우 이름 옆에 * 문자가 출력
    -   [x] 보낸 날짜의 경우 yyyy-mm-dd hh:MM:ss 포맷으로 출력
    -   [x] 답장을 클릭하면 "사용자 이름\n" + "메시지 내용\n" + "(회신)\n" 문자가 입력창에 자동으로 삽입
    -   [x] 삭제 버튼을 클릭하면 "*** 메시지를 삭제하시겠습니까?" 라는 메시지가 출력되며 응답 시 삭제

-   [x] 대화 목록

    -   [x] 미리 생성된 데이터 불러와 구성
    -   [x] 과거부터 최신 순으로 정렬


<br>

## 📈 디렉토리 구조
```
.
├── README.md
├── config-overrides.js
├── package.json
├── public
│   ├── _redirects
│   ├── index.html
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── index.tsx
│   ├── models
│   ├── pages
│   ├── react-app-env.d.ts
│   ├── redux
│   ├── setupTests.ts
│   ├── styles
│   ├── types
│   └── utils
├── tsconfig.json
├── tsconfig.paths.json
├── yarn-error.log
└── yarn.lock
```
