import React, { Component } from 'react'
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ImageBackground,
  ScrollView
} from 'react-native'
import { Font, AppLoading, Asset, Constants } from 'expo'
import { TabViewAnimated, TabBar } from 'react-native-tab-view'

// import Header from './components/header'

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)
const { width: SCREEN_WIDTH } = Dimensions.get('window')

const HEADER_HEIGHT = 350
const COLLAPSED_HEIGHT = 60 + Constants.statusBarHeight
const SCROLL_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT
const TAB_BAR_HEIGHT = 50

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  tabBar: {
    backgroundColor: '#fff',
    elevation: 0,
    shadowOpacity: 0,
    height: TAB_BAR_HEIGHT
  },
  scrollViewContent: {
    paddingTop: HEADER_HEIGHT + TAB_BAR_HEIGHT + 20, // offset image + height of tabs + a little breathing room
    marginHorizontal: 15
  }
})

export default class App extends Component {
  state = {
    index: 0,
    scrollY: new Animated.Value(0),
    isAppLoading: true,
    routes: [
      { key: 'earlyLife', title: 'Early Life' },
      { key: 'career', title: 'Career' },
      { key: 'albums', title: 'Albums' }
    ]
  }

  _cacheResourcesAsync = async () => {
    return Promise.all([
      Asset.fromModule(require('./img/kendrick.jpg')).downloadAsync(),
      Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
      })
    ])
  }

  renderScene = ({ route }) => {
    let content = null

    switch (route.key.toString()) {
      case 'earlyLife':
        content = <Text>Albums</Text>
        break
      case 'career':
        content = <Text>Career</Text>
        break
      case 'albums':
        content = <Text>Albums</Text>
        break
      default:
        return null
    }

    return (
      <AnimatedScrollView
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
          {content}
        </View>
      </AnimatedScrollView>
    )
  }

  renderHeader = (props) => {
    const img = require('./img/kendrick.jpg')

    const translateY = this.state.scrollY.interpolate({
      inputRange: [0, SCROLL_HEIGHT],
      outputRange: [0, -SCROLL_HEIGHT],
      extrapolate: 'clamp'
    })

    return (
      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        <StatusBar barStyle='light-content' />
        <ImageBackground source={img} style={{ height: HEADER_HEIGHT }}>
          <View style={styles.overlay} />
        </ImageBackground>
        <TabBar
          {...props}
          style={styles.tabBar}
          labelStyle={{ color: '#000' }}
          useNativeDriver
        />
      </Animated.View>
    )
  }

  render() {
    if (!this.state.isAppLoading) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }

    return (
      <TabViewAnimated
        style={{ flex: 1 }}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ height: 0, width: SCREEN_WIDTH }}
      />
    )
  }
}
