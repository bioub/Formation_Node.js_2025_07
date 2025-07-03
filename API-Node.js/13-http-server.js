import { createServer } from "node:http";

const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page!\n");
  } else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page!\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found\n");
  }
});

server.on("error", (err) => {
  console.error("Server error:", err);
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
