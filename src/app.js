import express from "express";

const app = express();

// ejs 템플릿 엔진
// 구멍이 있는 페이지 -> 구멍에 데이터를 넣을 수 있는 것
// node pug, ejs, ...
// npm install ejs

// express애 나 ejs파일 사용할거야
app.set("view engine", "ejs");
// ejs 파일의 위치는 src 폴더에 client 폴더에 html 폴더 안에 있어
app.set("views", process.cwd() + "/src/client/html");

app.use((request, response, next) => {
  console.log("지나갑니다");
  next();
});

app.get("/", (reqest, response) => {
  const homeData = {
    data: [{ name: "철수" }, { name: "영희" }, { name: "민수" }],
  };
  response.render("home", homeData);
});

app.get("/introduce", (reqest, response) => {
  response.render("introduce");
});

app.listen(8080, () => {
  console.info("8080 포트 서버 열림 http://localhost:8080");
});
