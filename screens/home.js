import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { globalStyles } from "../styles/global"
import ReviewForm from './reviewForm'
import Card from "../shared/card"

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda Breath of Fresh Air",
      rating: 5,
      body: "Loved this game",
      key: "1",
    },
    {
      title: "Tekken Revenge of Kazuma",
      rating: 4,
      body: "This game is a knockout!",
      key: "2",
    },
    {
      title: "NHL 2021",
      rating: 5,
      body: "Check this game out, it is a score!",
      key: "3",
    },
  ])

  const addReview = (review) => {
    // not the best way to generate key but works for this instance
    review.key = Math.random().toString()
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    })
    setModalOpen(false)
  }

  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={globalStyles.container}
    >
      <Modal visible={modalOpen} animationType="slide" style={styles.modalContent}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.container}>
            <ReviewForm addReview={addReview}/>
            <MaterialIcons
              style={{...styles.modalToggle, ...styles.modalClose}}
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

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
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'teal',
    paddingTop: 10,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 10,
    marginBottom: 0
  },
  modalContent: {
    flex: 1,
  }
})
