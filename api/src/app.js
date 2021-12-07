const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.post('/users', function (req, res) {
    res.send('Hello World');
}); // проверил, Postman поставил, скриншот приложу к сообщению

console.log(process.env.APP_PORT);

// nodemon -r dotenv/config src/app.js
// Напомните мне спросить
// об ошибке запуска конфигурации
// связаной с nodemon

app.listen(process.env.APP_PORT);