import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import FlatButton from '../shared/button'
import * as yup from 'yup'

//yup is a package that helps with validation
const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-number-1-5', 'must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0
    })
})

export default function reviewForm({ addReview }) {

  return (
    <View style={globalStyles.container}>
      <Formik
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addReview(values)
          actions.resetForm()
        }}
        initialValues={{ title: "", body: "", rating: "" }}
      >
        {(formikProps) => (
          <View style={styles.formContainer}>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={formikProps.handleChange("title")}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={formikProps.handleChange("rating")}
              value={formikProps.values.rating}
              keyboardType="numeric"
              onBlur={formikProps.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>
            <FlatButton
              text="submit"
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 50,
  }
})