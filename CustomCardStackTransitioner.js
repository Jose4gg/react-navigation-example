import React, { Component } from 'react';
import { NativeModules, Easing, Dimensions, Animated, View } from 'react-native';

import { CardStack, Transitioner, CardStackStyleInterpolator, NavigationActions } from 'react-navigation';
import RouteConfig from './routes'
import { navigator } from './navigator'
import FancyAnimation from './FancyAnimation'

class CardStackTransitioner extends Component<DefaultProps, Props, void> {

    static defaultProps = {
        mode: 'card',
    };

    componentDidMount() {
        Object.assign(navigator, {
            goBack: () => {
                this.props.navigation.dispatch(NavigationActions.back())
            },
            push: (route, props) => {
                if (typeof route == "string") {
                    this.props.navigation.dispatch(NavigationActions.navigate(route, props))
                } else {
                    this.props.navigation.dispatch(NavigationActions.navigate(route.pathname, route.props))
                }
            }
        })
        console.log(navigator)

    }

    render() {
        return (
            <Transitioner
                configureTransition={this._configureTransition}
                navigation={this.props.navigation}
                render={this._render}
                style={this.props.style}
                onTransitionStart={this.props.onTransitionStart}
                onTransitionEnd={this.props.onTransitionEnd}
            />
        );
    }

    _configureTransition = (transitionProps, prevTransitionProps) => {
        return {
            timing: Animated.timing,
            delay: 500,
        }
    };

    _render = (transitionProps) => {
        const scenes = transitionProps.scenes.map(scene => this._renderScene(transitionProps, scene));
        return (
            <View style={{ flex: 1 }}>
                {scenes}
            </View>
        );
    };

    _renderScene(transitionProps, scene) {
        const { position } = transitionProps;
        const { index } = scene;
        const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [Dimensions.get('window').height, 0, 0]
        });
        const Scene = this.props.router.getComponentForRouteName(scene.route.routeName);
        const mode = RouteConfig[scene.route.routeName].mode

        const tmp = this.props.navigation.state.routes[scene.index]
        let props = tmp && tmp.params ? tmp.params.props : {}

        switch (mode) {
            case 'modal': {
                return (
                    <Animated.View style={[{ transform: [{ translateY }] }, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }]} key={scene.index}>
                        <Scene {...props} />
                    </Animated.View>
                );
            }
            case 'fade-in': {
                return (
                    <Animated.View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: position }} key={scene.index}>
                        <Scene {...props} />
                    </Animated.View>
                )
            }
            case 'pop-in': {
                return (
                    <Animated.View style={[{ transform: [{ scale: position }] }, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }]} key={scene.index}>
                        <Scene {...props} />
                    </Animated.View>
                )
            }
            case 'fancy': {
                return (
                    <FancyAnimation key={scene.index}>

                    </FancyAnimation>
                )
            }
            default: {
                return (
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} key={scene.index}>
                        <Scene navigation={this.props.navigation}  {...props} />
                    </View>
                )
            }
        }

    }
}

export default CardStackTransitioner;