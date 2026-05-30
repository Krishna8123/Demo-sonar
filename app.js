const express = require('express');

const app = express();

app.disable('x-powered-by');

function hugeFunction(data) {
    return data.a + data.b + data.c;
}

app.get('/', (req, res) => {

    let a = 5;

    if (a === 5) {
        console.log("Strict equality");
    }

    const result = hugeFunction({
        a: 1,
        b: 2,
        c: 3
    });

    res.send(`Hello SonarQube ${result}`);
});

app.listen(3000, () => {
    console.log("Server started");
});