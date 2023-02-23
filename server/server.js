const express = require('express');
const app = express();
const fs = require('fs');

app.get("/api", (req, res) => {
    console.log(`called /api endpoint`);
});

app.listen(5000, () => {
    console.log("Server listens to port 5000");
})