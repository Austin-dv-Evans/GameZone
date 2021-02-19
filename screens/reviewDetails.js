import React from "react"
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native"
import { globalStyles, images } from "../styles/global"
import Card from "../shared/card"

export default function reviewDetails({ navigation }) {
  const rating = navigation.getParam("rating")

  // const pressHandler = () => {
  //   navigation.goBack()
  // }

  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={globalStyles.container}
      >
      <Card>
        <Text style={globalStyles.titleText}>{navigation.getParam("title")}</Text>
      </Card>
      <Text style={styles.titleText}>{navigation.getParam("body")}</Text>
      <View style={styles.rating}>
        <Text>GameZone Rating:</Text>
        <Image source={images.ratings[rating]} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "teal",
  },
  titleText: {
    fontFamily: "RaggaeFont",
    fontSize: 18,
    color: "teal",
    marginTop: 20,
    textAlign: 'center',
  },
})
