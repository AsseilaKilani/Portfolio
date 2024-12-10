const express = require('express');
const cors = require('cors');
const path = require('path');
const { exec } = require('child_process');
const app = express();
const port = 3002;

app.use(cors({
    origin: 'http://51.83.79.10',  
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type'
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/start-bomberman', (req, res) => {
    exec('./run_bomberman.sh', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).send('Error starting Bomberman');
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return res.status(500).send('Error starting Bomberman');
        }
        console.log(`Stdout: ${stdout}`);
        res.send('Bomberman started successfully');
    });
});

// Démarrer le serveur
app.listen(port, '51.83.79.10', () => {  // Utilisez l'IP de votre VPS
    console.log(`Server running at http://51.83.79.10:${port}`);
});
