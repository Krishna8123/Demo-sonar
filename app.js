const express = require('express');
const app = express();

const password = "admin123"; // security issue

app.get('/', (req, res) => {

    let a = 5;

    if (a == "5") { // bad practice
        console.log("Loose equality");
    }

    function hugeFunction(a, b, c, d, e, f, g, h, i, j) {
        return a + b + c + d + e + f + g + h + i + j;
    }

    res.send("Hello SonarQube");
});

app.listen(3000, () => {
    console.log("Server started");
});