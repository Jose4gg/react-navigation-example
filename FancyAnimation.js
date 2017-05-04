import React, { Component } from 'react';
import { View, Animated, Text, Dimensions, Easing } from 'react-native';

const { width, height } = Dimensions.get("window");

export default class FancyAnimation extends Component {

    constructor(props) {
        super(props);
        this.springValue = new Animated.Value(0);
        this.circleValue = new Animated.Value(height / 2);
    }

    spring() {
        Animated.parallel([
            Animated.timing(
                this.springValue,
                {
                    toValue: 1,
                    duration: 300,
                    easing: Easing.in()
                }
            )
        ]).start()
    }

    componentDidMount() {
        this.spring();
    }

    render() {
        return (

            <Animated.View
                style={{
                    position: "absolute",
                    bottom: 0,
                    top: 0,
                    left: 0,
                    right: 0,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "black"
                    }}
                >
                    <Text style={{ color: "white" }}>
                        Fancy
                    </Text>
                </View>
            </Animated.View>
        )
    }
} 