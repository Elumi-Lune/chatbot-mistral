# Chatbot Mistral

Petit projet réalisé en JavaScript pour apprendre à utiliser une API d'intelligence artificielle.

L'application permet d'envoyer une question à l'API Mistral, de récupérer sa réponse, puis de l'afficher dans le DOM.

## Objectifs

- Découvrir le fonctionnement d'une API
- Envoyer une requête avec `fetch`
- Utiliser une clé API
- Récupérer une réponse au format JSON
- Afficher le résultat dans une page HTML avec JavaScript

## Installation

### Clonez le projet :

```bash
git clone https://github.com/Elumi-Lune/chatbot-mistral.git
```

#### Ouvrez ensuite le dossier du projet :

```bash
cd chatbot-mistral
```

### Configuration

#### Créez le fichier suivant :

```text
./assets/js/env.js
```

#### Ajoutez votre clé API Mistral :

```js
const API_KEY = "VOTRE_CLE_API";
export default API_KEY;
```

### Utilisation

- #### Lancez le projet avec un serveur local, puis ouvrez la page dans votre navigateur.
- #### Entrez un message et cliquez sur le bouton d'envoi.
- #### La réponse de Mistral sera affichée dans la zone de texte.

### Technologies utilisées

- HTML
- CSS
- JavaScript
- API Mistral

### Sécurité

- #### Ne partagez jamais votre clé API et ne l'envoyez pas sur GitHub.
- #### Ajoutez le fichier contenant votre clé dans `.gitignore` :

```gitignore
assets/js/env.js
```

- #### Pour un projet destiné à être publié, il est préférable d'utiliser un serveur afin de garder la clé API secrète.


#### Ton projet devrait ressembler à ceci :

```text
mon-projet/
├── README.md
├── index.html
├── .gitignore
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        ├── script.js
        └── env.js
