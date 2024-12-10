const express = require('express');
const cors = require('cors');
const path = require('path');
const { exec } = require('child_process');
const app = express();
const port = 3002;

// Utiliser le middleware CORS
app.use(cors({
    origin: 'http://51.83.79.10', // Changez cela si votre frontend React tourne sur un autre port
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type'
}));

// Middleware pour analyser les corps de requêtes JSON
app.use(express.json());


app.use(express.static(path.join(__dirname, 'portfolio')));


app.get('/', (req, res) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'portfolio', 'index.html'));
    });
    });

app.post('/start-bomberman', (req, res) => {
    exec('./run_bomberman.sh', (error, stdout, stderr) => {  // Assurez-vous que le script est exécutable et à la bonne place
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).send({ message: 'Error starting Bomberman', error: error.message });
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return res.status(500).send({ message: 'Error starting Bomberman', stderr: stderr });
        }
        console.log(`Stdout: ${stdout}`);
        res.send({ message: 'Bomberman started successfully', output: stdout });
    });
});

// Démarrer le serveur
app.listen(port, '51.83.79.10', () => {  // Utilisez '0.0.0.0' pour écouter toutes les interfaces réseau (utile pour un VPS)
    console.log(`Server running at http://51.83.79.10:${port}`);
});
