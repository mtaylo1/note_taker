const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("/api", async (req, res) => {
    res.send({ message:"Hello "});
    });
app.get("*", async (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, ()=>console.log('🌐This sever is running on '+PORT))