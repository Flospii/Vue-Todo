# VUE-Todo Bootcamp
In diesem Bootcamp zeigen wir, wie man aus jeder Webapp eine mobile Cross-platform App umwandeln kann.
## Environment Setup
Node.js v16+ herunterladen und installieren. Link: https://nodejs.org/en

Entweder für Android oder iOS Entwicklungsumgebung herunterladen.
### Android
Android Studio herunterladen und installieren. Und eine Android SDK downloaden in Android Studio.
### iOS
- XCode aus dem Apple App Store installieren
- XCode Command Line Tools. Mit "xcode-select --install" im Terminal installieren.
- Cocoapods

Im Terminal ausführen:
```
sudo gem install cocoapods
```
Alternativer Weg um Cocoapods zu installieren:

### Homebrew
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
npm run build
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

Auf iOS gehört zusätzlich im Ordner folgender Befehl ausgeführt.
```
pod install
```


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
### Geolocation Code Anpassungen
#### App.vue:
Im script Tag bei den Imports folgende Zeile einfügen
```
import { Geolocation } from '@capacitor/geolocation';
```
AddTodo Anpassung auf:
```
async addTodo(name){
      if(name == null || name.trim() === ""){
        return;
      }

      let coordinates = null; // Default value

      try {
        const position = await Geolocation.getCurrentPosition(); // Get current position
        coordinates = {
          latitude: position.coords.latitude, 
          longitude: position.coords.longitude
        };
      } catch (error) {
        console.error("Failed to get position:", error);
      }

      const todo = {_id: uuidv4(), creationTimestamp: new Date(), todo:name, done:false, coordinates: coordinates } 
      

      console.log(todo);
      this.todos.push(todo);
      this.saveDataFromLocalStorage();
    },
```
#### TodoComponent.vue
Im Template Tag eine Zeile unter "creationTimestamp" p-Tag einfügen:
```
<p v-if="todo.coordinates">Lat: {{ todo.coordinates.latitude }}, Lng: {{ todo.coordinates.longitude }}</p> <!-- Hier sind die Koordinaten -->
```
Anschließend
```
npm run build
npx cap sync
```
#### Berechtigungen
iOS:
In info.plist Datei folgende 2 Reihen einfügen:
```
Privacy - Location Always Usage Description
Privacy - Location When In Use Usage Description
```

Android:
In AndroidManifest.xml folgende 3 uses-permission tags hinzufügen:
```
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />
```

