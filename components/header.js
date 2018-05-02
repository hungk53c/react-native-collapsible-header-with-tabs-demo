import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 28,
    height: 28,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0.75)'
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 64,
    position: 'absolute',
    top: 16,
    left: 0,
    right: 0,
    flex: 1,
    zIndex: 1000001,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 8
  },
  leftButtons: { flex: 1 },
  rightButtons: { flex: 1, alignItems: 'flex-end' }
})

const Header = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.leftButtons}>
        <TouchableOpacity {...props} style={styles.container}>
          <View style={{ paddingRight: 2 }}>
            <Image source={require('../img/back-icon-dark.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rightButtons}>
        <TouchableOpacity {...props} style={styles.container}>
          <View style={{ paddingRight: 2 }}>
            <Image source={require('../img/more-icon-dark.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header
