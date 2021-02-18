import React from "react"
import Header from "../shared/header"
import { createStackNavigator } from "react-navigation-stack"
import About from "../screens/about"

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About Game Zone" />
        ),
      }
    },
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#444", height: 100 },
  },
})

export default AboutStack
