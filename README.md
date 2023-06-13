# VUE-Todo Bootcamp

## Environment Setup
Node.js v12+ herunterladen und installieren. Link: https://nodejs.org/en

Entweder für Android oder iOS Entwicklungsumgebung herunterladen.
### Android
Android Studio herunterladen und installieren. Und eine Android SDK downloaden in Android Studio.
### iOS
- XCode
- XCode Command Line Tools
- Cocoapods

Im Terminal ausführen:
```
sudo gem install cocoapods
```
Alternativer Weg um Cocoapods zu installieren:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
```
brew install cocoapods
```

```
pod --version
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
Nun kann man die Webapp starten, indem man folgenden Befehl eingibt:
```
npm run serve
```
STRG+C um Webapp wieder zu stoppen.
### Capacitor installieren
```
npm install @capacitor/cli @capacitor/core
npx cap init
```
Dadurch wird CapacitorJS neben seiner Befehlszeilenschnittstelle zu Ihrem Projekt hinzugefügt und auch eine Konfigurationsdatei mit dem Namen „capacitor.config.json“ generiert.
#### Für Android
```
npm install @capacitor/android
npx cap add android
```
#### Für iOS
```
npm install @capacitor/ios
npx cap add ios
```
Je nachdem, welche Befehle Sie ausgeführt haben, werden Sie nun neue Ordner mit den Namen „android“ und „ios“ bemerken. Sie können diese Ordner mit Android Studio für Android und Xcode für iOS öffnen.

### Die App synchron halten
Wenn Sie Änderungen an der Web-App vornehmen und diese erstellen, aktualisiert Capacitor Ihre Ordner für mobile Apps nicht automatisch. Dazu müssen Sie den Sync-Befehl verwenden.
```
npx cap sync
```

## Plugin Installation
```
npm install @capacitor/geolocation
npx cap sync
```
