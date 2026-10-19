import express from "express"
import path from  "node:path"


const app = express();
const port = 3000;

app.listen(port, ()=> {
    console.log(`Server started listening on port ${port}`);
});

app.use(express.static(path.join(import.meta.dirname, "public")));

app.get("/", (req, res) => {
res.send("<h1>Request received!</h1><h2>Welcome from home.</h2>");
});

app.get("/home", (req, res) => {
res.sendFile(path.join(import.meta.dirname,"public/hw3", "index.html"));
});

//mayne i should have added a gitignore for node modules?