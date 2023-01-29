import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export default {
    asyncStorageKey: "NewsApp001",
    BASE_URL_TEST: "https://5e39-115-42-33-161.in.ngrok.io/api/",
    BASE_URL_PROD: "https://5e39-115-42-33-161.in.ngrok.io/api/",
    THEME: {
        primary: "#062743",
        secondary: "#182952",

        // colors
        black: "#1E1F20",
        white: "#FFFFFF",

        lightGray: "#F5F5F6",
        lightGray2: "#F6F6F7",
        lightGray3: "#EFEFF1",
        lightGray4: "#F8F8F9",
        lightGray5: "#9ea9b3",
    },
    MyLightTheme: {
        ...DefaultTheme,
        dark: false,
        colors: {
            ...DefaultTheme.colors,
            primary: "#062743",
            secondary: "#182952",

            // colors
            black: "#1E1F20",
            white: "#FFFFFF",

            lightGray: "#F5F5F6",
            lightGray2: "#F6F6F7",
            lightGray3: "#EFEFF1",
            lightGray4: "#F8F8F9",
            lightGray5: "#9ea9b3",
        }
    },
    MyDarkTheme: {
        ...DarkTheme,
        dark: true,
        colors: {
            ...DarkTheme.colors,
            primary: "#062743",
            secondary: "#182952",
            card: '#1f1f1f',
            black: "#1E1F20",
            white: "#FFFFFF",

            lightGray: "#F5F5F6",
            lightGray2: "#F6F6F7",
            lightGray3: "#EFEFF1",
            lightGray4: "#F8F8F9",
            lightGray5: "#9ea9b3",
        },
    }
}


export const COLORS = {
    // base colors
    secondary: "#182952", // orange
    primary: "#062743",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    lightGray5: "#9ea9b3",

    transparent: "transparent",
    darkgray: '#898C95',
    tabColorInactive: "#9ba9b4"
};

export const slides = [
    {
      key: "slide1",
      image: require("@assets/intro/frontal_home.png"),
      title: "Welcome to React Native News App.",
      text:
        "Here you can read latest news updates. By registering to this application.",
    },
    {
      key: "slide2",
      image: require("@assets/intro/doodle_reading.png"),
      title: "Read News",
      text:
        "Read news at anywhere at any place just by connecting to the internet.",
    },
    {
      key: "slide3",
      image: require("@assets/intro/stting_on_floor.png"),
      title: "Add to favorite.",
      text: "Add to your favorite read list and also you can add comments.",
    },
  ];