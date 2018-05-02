import React, { Component } from 'react'
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ImageBackground
} from 'react-native'
import { LinearGradient, BlurView } from 'expo'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const IMAGE_HEIGHT = (SCREEN_WIDTH - 50)
const HEADER_HEIGHT = 72
const SCROLL_HEIGHT = (IMAGE_HEIGHT - HEADER_HEIGHT)

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    position: 'relative',
    zIndex: 100
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0
  },
  scrollViewContent: {
    paddingTop: SCROLL_HEIGHT,
    paddingBottom: 20,
    minHeight: (SCREEN_HEIGHT + SCROLL_HEIGHT) - HEADER_HEIGHT
  },
  gradient: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  textContainer: {
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
    paddingBottom: 26,
    height: IMAGE_HEIGHT,
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
  }
})

class Profile extends Component {
  constructor(props) {
    super(props)

    this.tabY = this.state.scrollY.interpolate({
      inputRange: [0, SCROLL_HEIGHT],
      outputRange: [SCROLL_HEIGHT, 0],
      extrapolateRight: 'clamp'
    })
  }

  state = {
    activeTab: 0,
    scrollY: new Animated.Value(0)
  }

  alignScrollViews = (view, y) => {
    if (y <= SCROLL_HEIGHT + 20) {
      if (view !== 'about') {
        this.about.getNode().scrollTo({ x: 0, y, animated: false })
      }
      if (view !== 'interactions') {
        this.interactions.getNode().scrollTo({ x: 0, y, animated: false })
      }
      if (view !== 'contact') {
        this.contact.getNode().scrollTo({ x: 0, y, animated: false })
      }
    }
  }

  renderTabBar = (props) => {
    return (
      <Animated.View style={{
        transform: [{ translateY: this.tabY }],
        zIndex: 1,
        width: '100%',
        backgroundColor: 'white'
      }}>
        <ScrollableTab
          {...props}
          style={{ borderWidth: StyleSheet.hairlineWidth }}
          underlineStyle={{ backgroundColor: '#000', height: 2 }}
          renderTab={(name, page, active, onPress, onLayout) => (
            <TouchableHighlight key={page}
              underlayColor='#f2f2f2'
              onPress={() => onPress(page)}
              onLayout={onLayout}
              activeOpacity={0.4}
            >
              <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <TabHeading
                  scrollable
                  style={{
                    backgroundColor: 'transparent',
                    width: SCREEN_WIDTH / 3,
                    height: 52
                  }}
                  active={active}
                >
                  <Animated.Text style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: active ? '#000000' : BORDER_COLOR
                  }}>
                    {name}
                  </Animated.Text>
                </TabHeading>
              </View>
            </TouchableHighlight>
          )}
        />
      </Animated.View>
    )
  }

  render() {
    const img = require('./img/kendrick.jpg')

    const imageOffset = this.state.scrollY.interpolate({
      inputRange: [0, SCROLL_HEIGHT],
      outputRange: [0, -(IMAGE_HEIGHT / 2)],
      extrapolateRight: 'clamp'
    })
    const imgScale = this.state.scrollY.interpolate({
      inputRange: [-25, 0],
      outputRange: [1.1, 1],
      extrapolateRight: 'clamp'
    })
    const imgOpacity = this.state.scrollY.interpolate({
      inputRange: [0, SCROLL_HEIGHT],
      outputRange: [1, 0]
    })
    const blurOpacity = this.state.scrollY.interpolate({
      inputRange: [0, SCROLL_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    return (
      <View style={styles.fill}>
        <StatusBar barStyle='light-content' />
        {
          // <HeaderContent
          //   goBack={this.goBack}
          //   customRight={this.renderRightHeaderSection(entity, primaryProfileId)}
          // />
        }
        <View style={{ flex: 1, zIndex: 10, backgroundColor: 'transparent' }}>
          <Tabs
            locked
            style={{ backgroundColor: 'transparent', marginTop: HEADER_HEIGHT }}
            prerenderingSiblingsNumber={3}
            onChangeTab={({ i }) => this.setState({ activeTab: i })}
            renderTabBar={props => this.renderTabBar(props)}
          >
            <Tab style={{ backgroundColor: 'transparent' }} heading='About'>
              <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                ref={(scrollView) => { this.about = scrollView }}
                style={styles.fill}
                scrollEventThrottle={6}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                  {
                    useNativeDriver: true,
                    listener: (event) => {
                      const y = event.nativeEvent.contentOffset.y
                      if (this.state.activeTab === 0) {
                        this.alignScrollViews('about', y)
                      }
                    }
                  }
                )}
              >
                <View style={styles.scrollViewContent}>
                  <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <Text>Tab 1</Text>
                  </View>
                </View>
              </Animated.ScrollView>
            </Tab>
            <Tab style={{ backgroundColor: 'transparent' }} heading='Interactions'>
              <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                ref={(scrollView) => { this.interactions = scrollView }}
                style={styles.fill}
                scrollEventThrottle={6}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                  {
                    useNativeDriver: true,
                    listener: (event) => {
                      const y = event.nativeEvent.contentOffset.y
                      if (this.state.activeTab === 1) {
                        this.alignScrollViews('interactions', y)
                      }
                    }
                  }
                )}
              >
                <View style={styles.scrollViewContent}>
                  <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <Text>Tab 2</Text>
                  </View>
                </View>
              </Animated.ScrollView>
            </Tab>
            <Tab style={{ backgroundColor: 'transparent' }} heading='Contact'>
              <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                ref={(scrollView) => { this.contact = scrollView }}
                style={styles.fill}
                scrollEventThrottle={6}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                  {
                    useNativeDriver: true,
                    listener: (event) => {
                      const y = event.nativeEvent.contentOffset.y
                      if (this.state.activeTab === 2) {
                        this.alignScrollViews('contact', y)
                      }
                    }
                  }
                )}
              >
                <View style={styles.scrollViewContent}>
                  <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <Text>Tab 3</Text>
                  </View>
                </View>
              </Animated.ScrollView>
            </Tab>
          </Tabs>
        </View>

        { /* animated top image section */ }
        <Animated.View
          style={[styles.header, {
            transform: [
              { translateY: imageOffset },
              { scale: 1 }
            ]
          }]}
        >
          <Animated.View style={[styles.textContainer, { height: IMAGE_HEIGHT }]}>
            <Text style={styles.titleStyle}>Kendrick Lamar</Text>
            <Text style={styles.subtitleStyle}>Rapper, Songwriter, Artist</Text>
          </Animated.View>
          <Animated.View
            style={{
              opacity: imgOpacity,
              transform: [{ scale: imgScale }]
            }}
          >
            <ImageBackground
              ref={(ref) => { this.backgroundImage = ref }}
              source={img}
              style={{ height: IMAGE_HEIGHT, width: '100%' }}
              imageStyle={{ height: IMAGE_HEIGHT, width: '100%' }}
              resizeMode='cover'
              resizeMethod='resize'
            >
              <LinearGradient
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0, 0.2, 0.7, 1.0]}
                colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0.5)']}
                style={styles.gradient}
              />
            </ImageBackground>
            <Animated.View style={[styles.absolute, { opacity: blurOpacity, zIndex: 10 }]}>
              <BlurView
                style={styles.absolute}
                viewRef={this.backgroundImage}
                blurType='dark'
                blurAmount={5}
              />
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </View>
    )
  }
}

export default Profile
