// Cloudtype이 주입하는 PORT로 index.html 한 장을 서빙하는 최소 서버(의존성 없음).
const http = require("http");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 3000;
const html = fs.readFileSync(path.join(__dirname, "index.html"));
http
  .createServer((req, res) => {
    if (req.url === "/healthz") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end("ok");
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
  })
  .listen(port, "0.0.0.0", () => console.log("listening on " + port));
