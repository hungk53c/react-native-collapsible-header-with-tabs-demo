import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'
import { Card, CardTitle, CardContent, CardImage } from 'react-native-cards'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    marginBottom: 60
  },
  section: {
    marginBottom: 20,
    flexDirection: 'column'
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8
  },
  text: {
    fontSize: 14,
    lineHeight: 18
  },
  link: {
    color: '#007aff',
    fontSize: 13,
    textDecorationLine: 'underline'
  },
  card: {
    marginBottom: 15
  }
})

const renderCareerBeginnings = () => (
  <Card style={styles.card}>
    <CardTitle
      title='Career Beginnings'
      subtitle='2004-2009'
    />
    <CardContent>
      <Text style={[styles.text, { marginBottom: 8 }]}>
        In 2004, at the age of 16, Lamar released his first full-length project,
        a mixtape titled Youngest Head Nigga in Charge (Hub City Threat: Minor of the Year),
        under the pseudonym K-Dot. The mixtape was released under Konkrete Jungle Muzik
        and garnered local recognition for Lamar. The mixtape led to Lamar securing a
        recording contract with Top Dawg Entertainment (TDE), a newly founded indie record
        label, based in Carson, California.[12] He began recording material...
          </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Kendrick_Lamar#2004%E2%80%932009:_Career_beginnings')}
      >
        Read More
      </Text>
    </CardContent>
  </Card>
)

const renderSection80 = () => (
  <Card style={styles.card}>
    <CardImage source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/KendrickLive.jpg' }} />
    <CardTitle
      title='Overly Dedicated and Section.80'
      subtitle='2010-2011'
    />
    <CardContent>
      <Text style={[styles.text, { marginBottom: 8 }]}>
        In 2004, at the age of 16, Lamar released his first full-length project,
        a mixtape titled Youngest Head Nigga in Charge (Hub City Threat: Minor of the Year),
        under the pseudonym K-Dot. The mixtape was released under Konkrete Jungle Muzik
        and garnered local recognition for Lamar. The mixtape led to Lamar securing a
        recording contract with Top Dawg Entertainment (TDE), a newly founded indie record
        label, based in Carson, California.[12] He began recording material...
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Kendrick_Lamar#2010%E2%80%932011:_Overly_Dedicated_and_Section.80')}
      >
        Read More
      </Text>
    </CardContent>
  </Card>
)

const renderGKMC = () => (
  <Card style={styles.card}>
    <CardImage source={{ uri: 'http://i0.kym-cdn.com/photos/images/newsfeed/001/279/466/dba.png' }} />
    <CardTitle
      title='Good Kid, M.A.A.D City and controversies'
      subtitle='2012-2013'
    />
    <CardContent>
      <Text style={[styles.text, { marginBottom: 8 }]}>
        On February 15, 2012, a song by Lamar titled "Cartoon and Cereal", featuring fellow
        American rapper Gunplay, was leaked online. Lamar later revealed that the
        track was for his major-label debut studio album and that he had plans to shoot a
        video for it. Although the song would later be ranked #2 in Complex's Best 50 Songs
        of 2012 list, it would ultimately fail to appear on Lamar's debut. In February
        2012, it was announced that Fader had enlisted both Kendrick Lamar and
        Detroit-based rapper Danny Brown, to appear on the cover of the magazine's Spring Style
        issue. In February, Lamar also embarked...
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Kendrick_Lamar#2012%E2%80%932013:_Good_Kid,_M.A.A.D_City_and_controversies')}
      >
        Read More
      </Text>
    </CardContent>
  </Card>
)

const renderToPimpAButterfly = () => (
  <Card style={styles.card}>
    <CardImage source={{ uri: 'http://www.eargrub.com/wp-content/uploads/2015/03/kdotduckworth1-520x220.jpg' }} />
    <CardTitle
      title='To Pimp a Butterfly and Untitled Unmastered'
      subtitle='2014-2016'
    />
    <CardContent>
      <Text style={[styles.text, { marginBottom: 8 }]}>
        In an interview with Billboard in February 2014, Lamar stated he was
        planning to put out a new album the next September. During the same
        interview, which also included Schoolboy Q, Anthony "Top Dawg" Tiffith, and
        Dave Free, the possibility of a debut effort from the Black Hippy collective
        appearing in 2014 was announced. On July 31, 2014, it was announced that
        Lamar would premiere his short film m.A.A.d at Sundance's inaugural NEXT Fest
        in Los Angeles on August 9. The film is inspired by good kid, m.A.A.d city,
        and was directed by Kahlil Joseph, who had previously worked with Lamar
        on the Yeezus...
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Kendrick_Lamar#2014%E2%80%932016:_To_Pimp_a_Butterfly_and_Untitled_Unmastered')}
      >
        Read More
      </Text>
    </CardContent>
  </Card>
)

const renderDamnBlackPanther = () => (
  <Card style={styles.card}>
    <CardImage source={{ uri: 'http://www.klasmag.com/wp-content/uploads/2017/04/image001.jpg' }} />
    <CardTitle
      title='Damn and Black Panther'
      subtitle='2017-Present'
    />
    <CardContent>
      <Text style={[styles.text, { marginBottom: 8 }]}>
        On March 23, 2017, Lamar released a promotional single "The Heart Part 4".
        A week later, Lamar released the lead single, titled "Humble", accompanied by
        its music video. On April 7, 2017, his fourth studio album was made available
        for pre-order and confirmed to be released on April 14, 2017. On April 11,
        Lamar announced the album title, Damn (stylized as DAMN.), as well as the
        track list, which confirmed guest appearances by Rihanna, Zacari, and...
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Kendrick_Lamar#2017%E2%80%93present:_Damn_and_Black_Panther_soundtrack')}
      >
        Read More
      </Text>
    </CardContent>
  </Card>
)

const Career = (props) => {
  return (
    <View style={styles.container}>
      {renderCareerBeginnings()}
      {renderSection80()}
      {renderGKMC()}
      {renderToPimpAButterfly()}
      {renderDamnBlackPanther()}
    </View>
  )
}

export default Career
