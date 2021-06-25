const express = require('express');
const app = express();
const port = 3000;
 
app.use(express.static(__dirname + '/public')); 

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
    console.log('escuchando solicitudes en el puerto', port);
})