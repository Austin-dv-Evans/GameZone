import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { globalStyles } from "../styles/global"
import Card from "../shared/card"

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda Breath of Fresh Air",
      rating: 5,
      body: "Loved this game",
      key: "1",
    },
    {
      title: "Tekken 5 Revenge of Kazuma",
      rating: 5,
      body: "Kicked this games butt",
      key: "2",
    },
    {
      title: "NHL 2021",
      rating: 5,
      body: "Check this game out, it is a score!",
      key: "3",
    },
  ])

  const pressHandler = () => {
    navigation.push("ReviewDetails")
  }

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Game List</Text> */}
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
