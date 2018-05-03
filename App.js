import React, { Component } from 'react'
import {
  Animated,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions
} from 'react-native'
import { AppLoading, Asset, LinearGradient, BlurView } from 'expo'
import { TabViewAnimated, TabBar } from 'react-native-tab-view'

import Header from './components/header'
import EarlyLife from './components/early_life'
import Career from './components/career'
import Albums from './components/albums'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)

const HEADER_HEIGHT = (SCREEN_WIDTH - 50)
const COLLAPSED_HEIGHT = 82
const SCROLL_HEIGHT = (HEADER_HEIGHT - COLLAPSED_HEIGHT)

const TAB_BAR_HEIGHT = 50

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1
  },
  headerActionsRow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100
  },
  tabBar: {
    backgroundColor: '#fff',
    elevation: 0,
    shadowOpacity: 0,
    height: TAB_BAR_HEIGHT,
    marginTop: TAB_BAR_HEIGHT + 35
  },
  scrollViewContent: {
    paddingTop: (HEADER_HEIGHT - COLLAPSED_HEIGHT) + 10,
    marginHorizontal: 15,
    zIndex: 99
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingBottom: 16,
    height: HEADER_HEIGHT,
    zIndex: 1
  },
  titleStyle: {
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.41,
    color: '#fff',
    fontWeight: '700',
    fontStyle: 'normal'
  },
  subtitleStyle: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    fontWeight: '600',
    color: 'rgba(255,255,255, 0.8)'
  },
  gradient: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})

export default class App extends Component {
  constructor(props) {
    super(props)

    this.tabsY = this.state.scrollY.interpolate({
      inputRange: [0, SCROLL_HEIGHT],
      outputRange: [SCROLL_HEIGHT, 0],
      extrapolateRight: 'clamp'
    })
  }

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

  cacheResourcesAsync = async () => {
    return Promise.all([
      Asset.fromModule(require('./img/kendrick.png')).downloadAsync(),
      Asset.fromModule(require('./img/back-icon-dark.png')).downloadAsync(),
      Asset.fromModule(require('./img/more-icon-dark.png')).downloadAsync(),
      Image.prefetch('https://upload.wikimedia.org/wikipedia/commons/5/53/KendrickLive.jpg'),
      Image.prefetch('http://i0.kym-cdn.com/photos/images/newsfeed/001/279/466/dba.png'),
      Image.prefetch('http://www.eargrub.com/wp-content/uploads/2015/03/kdotduckworth1-520x220.jpg'),
      Image.prefetch('http://www.klasmag.com/wp-content/uploads/2017/04/image001.jpg'),
      Image.prefetch('https://s3.amazonaws.com/rapgenius/1340263356_20110628-SECTION801a.jpg')
    ])
  }

  alignScrollViews = (view, y) => {
    if (y <= SCROLL_HEIGHT + 20) {
      if (view !== 'earlyLife') {
        this.earlyLifeScrollV.getNode().scrollTo({ x: 0, y, animated: false })
      }
      if (view !== 'career') {
        this.careerScrollV.getNode().scrollTo({ x: 0, y, animated: false })
      }
      if (view !== 'albums') {
        this.albumScrollV.getNode().scrollTo({ x: 0, y, animated: false })
      }
    }
  }

  renderScene = ({ route }) => {
    const routeKey = route.key.toString()
    let refFunc = null
    let tabToCheck = 0
    let content = null

    switch (routeKey) {
      case 'earlyLife':
        refFunc = (scrollView) => { this.earlyLifeScrollV = scrollView }
        tabToCheck = 0
        content = <EarlyLife />
        break
      case 'career':
        refFunc = (scrollView) => { this.careerScrollV = scrollView }
        tabToCheck = 1
        content = <Career />
        break
      case 'albums':
        refFunc = (scrollView) => { this.albumScrollV = scrollView }
        tabToCheck = 2
        content = <Albums />
        break
      default:
        return null
    }

    return (
      <AnimatedScrollView
        showsVerticalScrollIndicator={false}
        ref={refFunc}
        scrollEventThrottle={6}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
          {
            useNativeDriver: true,
            listener: (event) => {
              const y = event.nativeEvent.contentOffset.y
              if (this.state.index === tabToCheck) {
                this.alignScrollViews(routeKey, y)
              }
            }
          }
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
    const img = require('./img/kendrick.png')

    const imageOffset = this.state.scrollY.interpolate({
      inputRange: [0, SCROLL_HEIGHT + 4],
      outputRange: [0, -SCROLL_HEIGHT],
      extrapolateRight: 'clamp'
    })

    const imgScale = this.state.scrollY.interpolate({
      inputRange: [-15, 0],
      outputRange: [1.1, 1],
      extrapolateRight: 'clamp'
    })

    const blurOpacity = this.state.scrollY.interpolate({
      inputRange: [0, SCROLL_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    return (
      <View style={{ zIndex: 1, backgroundColor: '#fff' }}>
        <View style={styles.headerActionsRow}>
          <Header />
        </View>
        <Animated.View style={[styles.header, { transform: [{ translateY: imageOffset }] }]}>
          <StatusBar barStyle='light-content' />
          <Animated.View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>
              Kendrick Lamar
            </Text>
            <Text style={styles.subtitleStyle}>
              Rapper and Songwriter
            </Text>
          </Animated.View>
          <Animated.View style={{ opacity: 1, transform: [{ scale: imgScale }] }}>
            <ImageBackground
              source={img}
              ref={(ref) => { this.backgroundImage = ref }}
              style={{ height: HEADER_HEIGHT, width: '100%' }}
              imageStyle={{ height: HEADER_HEIGHT, width: '100%' }}
              resizeMode='cover'
              resizeMethod='resize'
            >
              <LinearGradient
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0, 0.2, 0.6, 1.0]}
                colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0.6)']}
                style={styles.gradient}
              />
            </ImageBackground>
            <Animated.View style={[styles.blur, { opacity: blurOpacity, zIndex: 10 }]}>
              <BlurView
                style={styles.blur}
                viewRef={this.backgroundImage}
                blurType='dark'
                blurAmount={5}
              />
            </Animated.View>
          </Animated.View>
        </Animated.View>
        <TabBar
          {...props}
          style={[styles.tabBar, { transform: [{ translateY: this.tabsY }] }]}
          labelStyle={{ color: '#000' }}
          useNativeDriver
        />
      </View>
    )
  }

  render() {
    if (!this.state.isAppLoading) {
      return (
        <AppLoading
          startAsync={this.cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }

    return (
      <TabViewAnimated
        style={{ flex: 1, position: 'relative' }}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ height: 0, width: SCREEN_WIDTH }}
        useNativeDriver
      />
    )
  }
}
