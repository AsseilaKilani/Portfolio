const express = require('express');
const cors = require('cors');
const path = require('path');
const { exec } = require('child_process');
const app = express();
const port = 3002;

// Utiliser le middleware CORS
app.use(cors({
    origin: 'http://localhost:3002', // Permettre uniquement l'origine du frontend React
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type'
}));

// Servir les fichiers statiques à partir du dossier 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));

// Route pour la racine
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/start-bomberman', (req, res) => {
    exec('cmd /c run_bomberman.sh', (error, stdout, stderr) => {
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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});