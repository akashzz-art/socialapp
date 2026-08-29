# Joke Generator

This is a small Express app that fetches a random joke from an external API and serves a minimal web UI.

Quick start

1. Install dependencies:

   cd joke-generator
   npm install

2. Run the server:

   npm start

3. Open http://localhost:3000 in your browser.

Notes

- The server exposes a JSON endpoint at `/api/joke` which proxies https://official-joke-api.appspot.com/random_joke
- This is intentionally tiny — use it as a learning example or drop it into a larger project.
