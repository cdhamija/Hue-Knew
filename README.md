# Hue Knew?

A tap toy for discovering rare and wonderful colors. Every tap conjures a new
color with a springy pop-in, a marimba boop pitched to its hue, a haptic buzz,
and its name in big Helvetica — Zaffre, Coquelicot, Smaragdine, who knew?
Collect all 64.

## Structure

- `www/` — the entire app (a single `index.html`, no build step)
- `ios/` — native Xcode project (Capacitor wrapper for the App Store)
- `serve.js` — tiny local dev server
- `APP-STORE-DEPLOY.md` — step-by-step App Store submission guide

## Develop

```
npm install
npm run serve        # http://localhost:4173
```

After editing `www/`, push changes into the native project:

```
npx cap sync ios
```

## Ship

See [APP-STORE-DEPLOY.md](APP-STORE-DEPLOY.md).
