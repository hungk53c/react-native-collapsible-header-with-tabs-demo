import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    marginBottom: 60
  },
  album: {
    flex: 1,
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 2,
    marginBottom: 10
  },
  imgBg: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6
  },
  subtitle: {
    fontSize: 14
  },
  lightText: {
    color: '#fff'
  },
  albumImg: {
    height: 120,
    width: 120
  }
})

const Albums = (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.album, { backgroundColor: '#FBC02D' }]}>
        <View style={{ flexDirection: 'column', width: '60%' }}>
          <Text style={[styles.title, styles.lightText]}>Section.80</Text>
          <Text style={[styles.subtitle, styles.lightText]}>Release Date: July 2, 2011</Text>
        </View>
        <Image
          style={styles.albumImg}
          source={{ uri: 'https://s3.amazonaws.com/rapgenius/1340263356_20110628-SECTION801a.jpg' }}
        />
      </View>
      <View style={[styles.album, { backgroundColor: '#00BCD4' }]}>
        <View style={{ flexDirection: 'column', width: '50%' }}>
          <Text style={[styles.title, styles.lightText]}>Good Kid, M.A.A.D City</Text>
          <Text style={[styles.subtitle, styles.lightText]}>Release Date: October 22, 2012</Text>
        </View>
        <Image
          style={styles.albumImg}
          source={{ uri: 'http://i0.kym-cdn.com/photos/images/newsfeed/001/279/466/dba.png' }}
        />
      </View>
      <View style={[styles.album, { backgroundColor: '#7B1FA2' }]}>
        <View style={{ flexDirection: 'column', width: '50%' }}>
          <Text style={[styles.title, styles.lightText]}>To Pimp a Butterfly</Text>
          <Text style={[styles.subtitle, styles.lightText]}>Release Date: March 15, 2015</Text>
        </View>
        <Image
          style={styles.albumImg}
          source={{ uri: 'http://www.eargrub.com/wp-content/uploads/2015/03/kdotduckworth1-520x220.jpg' }}
        />
      </View>
      <View style={[styles.album, { backgroundColor: '#880E4F' }]}>
        <View style={{ flexDirection: 'column', width: '50%' }}>
          <Text style={[styles.title, styles.lightText]}>DAMN.</Text>
          <Text style={[styles.subtitle, styles.lightText]}>Release Date: April 14, 2017</Text>
        </View>
        <Image
          style={styles.albumImg}
          source={{ uri: 'http://www.klasmag.com/wp-content/uploads/2017/04/image001.jpg' }}
        />
      </View>
    </View>
  )
}

export default Albums
