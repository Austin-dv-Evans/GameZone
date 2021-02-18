import * as Font from "expo-font"
import React, { useState } from "react"
import Home from "./screens/home"
import AppLoading from "expo-app-loading"
import Navigator from "./routes/drawer"

const getFonts = () =>
  Font.loadAsync({
    RaggaeFont: require("./assets/fonts/ReggaeOne.ttf"),
    RobotoBold: require("./assets/fonts/RobotoMonoBold.ttf"),
  })

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return <Navigator />
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={"Whoops, hope you aren't reading this...."}
      />
    )
  }
}
