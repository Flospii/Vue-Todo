# VUE-Todo Bootcamp

## Environment Setup
Node.js v12+ herunterladen und installieren. Link: https://nodejs.org/en

Entweder für Android oder iOS Entwicklungsumgebung herunterladen.
### Android
Android Studio herunterladen und installieren.
### iOS
- XCode
- XCode Command Line Tools
- Cocoapods

Im Terminal ausführen:
```
sudo gem install cocoapods
```

## Project setup
### Vue installieren
```
npm install vue@latest
```

### Vue CLI installieren
```
npm i -g @vue/cli
```

### Webapp builden
```
npx run build
```
Nun kann man sich die Webapp starten, indem man folgenden Befehl eingibt:
```
npm run serve
```
STRG+C um Webapp wieder zu stoppen.
### Capacitor installieren
Dadurch wird CapacitorJS neben seiner Befehlszeilenschnittstelle zu Ihrem Projekt hinzugefügt und auch eine Konfigurationsdatei mit dem Namen „capacitor.config.json“ generiert.
#### Für Android
```
npm install @capacitor/android
npx cap add android
npx cap run android
```
#### Für iOS
```
npm install @capacitor/ios
npx cap add ios
npx cap run ios
```
Je nachdem, welche Befehle Sie ausgeführt haben, werden Sie nun neue Ordner mit den Namen „android“ und „ios“ bemerken. Sie können diese Ordner mit Android Studio für Android und Xcode für iOS öffnen.

## Plugin Installation
```
npm install @capacitor/geolocation
npx cap sync
```
