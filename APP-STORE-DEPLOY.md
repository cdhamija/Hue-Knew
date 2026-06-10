# Deploying Hue Knew? to the Apple App Store

The project is already wrapped as a native iOS app with Capacitor. The web app
lives in `www/`, and the native Xcode project is in `ios/`. After any change to
`www/`, run `npx cap sync ios` to copy it into the native project.

## What you need (no way around these)

1. **A Mac with Xcode** — Apple only allows iOS apps to be built and submitted
   from macOS. Options if you don't own one:
   - A cloud Mac: MacStadium, MacinCloud, Scaleway
   - A CI build service that handles signing + upload from a repo:
     Codemagic, Bitrise, Ionic Appflow (these can build Capacitor iOS apps
     without you ever touching Xcode)
2. **Apple Developer Program membership** — $99/year.
   Enroll at https://developer.apple.com/programs/enroll/

## Steps on the Mac

1. Clone/copy this `color-dance` folder to the Mac.
2. `npm install && npx cap sync ios`
3. `npx cap open ios` (opens `ios/App/App.xcworkspace` in Xcode)
4. In Xcode, select the **App** target:
   - **Signing & Capabilities** → choose your team, let Xcode manage signing.
   - **General** → set the Bundle Identifier. It is currently
     `com.colordance.app` (also in `capacitor.config.json`) — change it to a
     domain you control, e.g. `com.yourname.colordance`, and keep both in sync.
   - Set the app icon: drop a 1024×1024 PNG into
     `ios/App/App/Assets.xcassets/AppIcon.appiconset/` (Xcode 14+ generates all
     sizes from the single 1024 image).
5. Test on a real device or simulator (Product → Run). Tap around — confirm
   sound plays and the layout respects the notch/home indicator.
6. **Product → Archive**, then **Distribute App → App Store Connect → Upload**.

## App Store Connect

1. https://appstoreconnect.apple.com → My Apps → **+** → New App
   (platform iOS, the same bundle ID, name "Hue Knew?" — if taken, pick a
   variant like "Hue Knew? Rare Color Pop").
2. Fill in the listing: description, keywords, support URL, screenshots
   (6.7" iPhone screenshots are required; take them in the simulator).
3. Privacy: this app collects **no data** — declare "Data Not Collected"
   and add a simple privacy policy URL (required even for no-data apps).
4. Age rating questionnaire (this app is 4+).
5. Select the uploaded build, then **Submit for Review**.
   Review typically takes 1–3 days.

## Honest review-risk note (Guideline 4.2 — Minimum Functionality)

Apple sometimes rejects very simple apps and web wrappers. To improve the odds:
- Mention in the review notes that sound, animation, and haptics are core to
  the experience (it's a toy/fidget app, a recognized category).
- Easy wins to add before submitting: haptic feedback via Capacitor's Haptics
  plugin (`npm i @capacitor/haptics`), a "collection" screen showing which of
  the 64 colors you've discovered, and a share-a-color feature. A discovery /
  collection mechanic materially helps with 4.2.

## Day-to-day workflow

- Edit the app: `www/index.html`
- Preview locally: `npm run serve` → http://localhost:4173
- Push changes into the native project: `npx cap sync ios`
