import express from "express";

const app = express();
const port = 3000;

// Middleware de log
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Passe au middleware suivant ou à la route
});

// Body-parser middleware (permet de parser le body des requêtes JSON, et de le rendre accessible via req.body)
// app.use(express.json());

// app.[NOM_DE_METHODE_HTTP]("/chemin", (req, res) => {});
// app.get("/chemin", (req, res) => {});
// app.post("/chemin", (req, res) => {});
// app.put("/chemin", (req, res) => {});
// app.delete("/chemin", (req, res) => {});
// app.patch("/chemin", (req, res) => {}); // pour toutes les méthodes HTTP

// Quelque soit la méthode HTTP, on peut utiliser app.all :
// app.all("/chemin", (req, res) => {}); // pour toutes les méthodes HTTP

// Quelque soit la méthode HTTP, et tout les chemin commençant par /prefix, on peut utiliser app.use :
// app.use('/prefix', (req, res, next) => {

// Les chemins peut être des chaînes de caractères, ou des expressions régulières
// Exemple de regex :
// app.get(/^\/api\/users\/\d+$/, (req, res) => {});

// Les chemins peut avoir des paramètres dynamiques
// Exemple :
app.get("/api/hello/:name", (req, res) => {
  // req.params contient les paramètres dynamiques
  const name = req.params.name;
  res.json({ message: `Hello, ${name}!` });
});

// Les chemins peuvent aussi avoir des paramètres de requête (query parameters ou query string)
// Exemple : /api/search?q=hello
app.get("/api/search", (req, res) => {
  // req.query contient les paramètres de requête
  const query = req.query.q;
  res.json({ message: `You searched for: ${query}` });
});

app.get("/", (req, res) => {
  // res.writeHead(200, { "Content-Type": "text/plain" });
  // res.write("Home page!\n");
  // res.end(); // Il faut appeler end() pour terminer la réponse
  res.send("Home page!\n");
});

app.get("/api/users", (req, res) => {
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.write(JSON.stringify([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]));
  // res.end();
  res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
});

app.post('/api/users', express.json(), (req, res) => {
  console.log(req.body); // req.body contient le corps de la requête JSON
  res.status(201).json({ message: 'User created' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
