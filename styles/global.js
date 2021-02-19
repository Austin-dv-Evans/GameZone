import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
    padding: 25,
  },
  titleText: {
    fontFamily: "RaggaeFont",
    fontSize: 18,
    color: "teal",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'teal',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    marginBottom: 5,
    color: 'crimson',
    fontWeight: 'bold',
    marginTop: 3,
    textAlign: 'center',
  }
})

export const images = {
  ratings: {
    '1' : require("../assets/rating-1.png"),
    '2' : require("../assets/rating-2.png"),
    '3' : require("../assets/rating-3.png"),
    '4' : require("../assets/rating-4.png"),
    '5' : require("../assets/rating-5.png"),
  },
}
