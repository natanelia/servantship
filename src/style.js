import React from "react";
import { StyleSheet } from "react-native";

export const colors = {
  backgroundSuperDark: "#000000",
  backgroundDark: "#222222",
  backgroundSemiDark: "#4F4F4F",
  backgroundMedium: "#828282",
  backgroundSemiLight: "#BDBDBD",
  backgroundLight: "#E0E0E0",
  backgroundSuperLight: "#F2F2F2",

  default: "#2BBBAD",
  defaultDark: "#00695c",
  primary: "#56CCF2",
  primaryDark: "#0d47a1",
  secondary: "#aa66cc",
  secondaryDark: "#9933CC",
  danger: "#ff4444",
  dangerDark: "#cc0000",
  warning: "#FFBB33",
  warningDark: "#ff8800",
  success: "#00c851",
  successDark: "#007e33",
  info: "#33b5e5",
  infoDark: "#0099cc"
};

export const values = {
  fontTitle: "Montserrat-Light",
  fontBody: "Montserrat",
  fontBodySize: 14,
  fontTitleSize: 20,
  borderRadius: 2
};

export const global = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
  },
  h1: {
    fontSize: 60
  }
});
