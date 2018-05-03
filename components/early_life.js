import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginBottom: 60
  },
  section: {
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 18
  },
  link: {
    color: '#007aff',
    fontSize: 15,
    textDecorationLine: 'underline'
  }
})

const EarlyLife = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.text}>
          Kendrick Lamar Duckworth was born in Compton, California on June 17, 1987,
          the son of a couple from Chicago, Illinois. His father, Kenny Duckworth,
          was a member of a street gang called Gangster Disciples, and Lamar's family
          had ties to the Bloods.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>
          His first name was given to him by his mother in honor of American singer-songwriter
          Eddie Kendricks of The Temptations. In 1995, at the age of eight in his hometown
          of Compton, Lamar witnessed his idols, Tupac Shakur and Dr. Dre, film the music
          video for their hit single "California Love", which proved to be a very significant
          moment in his life. He grew up on welfare and section 8 housing.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>
          As a child, Lamar attended McNair Elementary and vanguard learning center in the
          Compton Unified School District. As a teenager, Lamar went on to attend Centennial
          High School in Compton, where he was a straight-A student.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.link} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Kendrick_Lamar#Early_life')}>
          Source: Wikipedia
        </Text>
      </View>
    </View>
  )
}

export default EarlyLife
