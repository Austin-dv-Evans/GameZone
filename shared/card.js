import React from "react"
import { StyleSheet, View } from "react-native"

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 60,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 6, height: 6 },
    shadowColor: "purple",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    paddingHorizontal: 15,
    paddingTop: 5,
    margin: 10,
    marginTop: 35,
  },
  cardContent: {
    marginHorizontal: 1,
    marginVertical: 13,
    alignItems:'center',
  },
})
