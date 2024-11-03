import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const EnterName = () => {
  return (
    <View>
      <TextInput
                style = {{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }} 
                defaultValue="Name me!"
            />
    </View>
  )
}

export default EnterName

const styles = StyleSheet.create({})