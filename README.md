# 🌍 CountryInfo React Native App

A simple React Native app that fetches and displays country data from the [REST Countries API](https://restcountries.com/).

---

## ✨ Features

- Display a list of countries with:
  - 🇺🇳 Name
  - 🏳️ Flag
  - 🏙️ Capital
  - 🌎 Region
- 🔍 Search countries by name (case-insensitive, partial matches supported)
- 📱 Navigate between:
  - **Home Screen** – List of countries
  - **Detail Screen** – Full details for a selected country
- 📦 Built with:
  - React Native
  - React Navigation
- ✅ Tested on Android

---

## 🚀 Getting Started

### 📋 Prerequisites

- [Node.js](https://nodejs.org/) & npm
- React Native CLI (`npm install -g react-native-cli`)
- Android Studio with emulator or a connected Android device

> ℹ️ For detailed setup instructions, follow the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) guide (select the **React Native CLI** tab).

---

## 🛠️ Installation & Running

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd CountryInfo
```

2. **Install dependencies**

   ```bash
   npm install
   # OR
   yarn install
   ```

3. **Start the Metro bundler**

   ```bash
   npm start
   # OR
   yarn start
   ```

4. **Run the app on Android**

   Make sure an Android device or emulator is running.

   ```bash
   npm run android
   # OR
   yarn android
   ```
---
## 🧩 Troubleshooting

* Check that your device/emulator is running before running the app.

* Try cleaning the build if issues occur:

  ```bash
  cd android
  ./gradlew clean
  cd ..
  npm run android
  ```

* See the [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting) for more help.

---
## 🎉 Congratulations!

You're all set to explore and expand the CountryInfo app. Happy coding! 🚀

```md
📸 Screenshots
Home Screen

![Home Screen in Dark Mode](./assets/HomeScreenInDarkMode.jpeg)
![Home Screen in Light Mode](./assets/HomeScreenInLightMode.jpeg)
![Home Screen Search in Dark Mode](./assets/SearchInDarkMode.jpeg)
![Home Screen Search in Light Mode](./assets/SearchInLightMode.jpeg)

Detail Screen

![Detail screen in Dark Mode](./assets/DetailScreenInDarkMode.jpeg)
![Detail screen in Light Mode](./assets/DetailScreenInLightMode.jpeg)

---
## 📚 Learn More

* [React Native Docs](https://reactnative.dev/docs/getting-started)
* [React Navigation](https://reactnavigation.org/)
* [REST Countries API](https://restcountries.com/)
* [Awesome React Native](https://github.com/jondot/awesome-react-native)

---

