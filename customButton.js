import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Animated, Dimensions, Easing } from 'react-native';
const { width, height } = Dimensions.get("window");

export default class CustomButton extends Component {

    constructor(props) {
        super(props);
        this.position = new Animated.Value(1)
    }

    state = {
        visible: true
    }

    click = () => {
        this.setState({
            visible: false
        })
        Animated.timing(
            this.position,
            {
                toValue: 30,
                duration: 500,
                easing: Easing.in()
            }
        ).start(() => {
            this.props.onPress();

            setTimeout(() => {
                this.position.setValue(1);
                this.setState({
                    visible: true
                })
            }, 1000)
        })
    }

    render() {
        return (
            <Animated.View
                style={{
                    height: 70,
                    width: 70,
                    position: "absolute",
                    bottom: 20,
                    transform: [{
                        scale: this.position
                    }]
                }}
            >
                <TouchableHighlight
                    style={{
                        position: "absolute",
                        height: 70,
                        backgroundColor: "black",
                        width: 70,
                        borderRadius: 35,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    onPress={this.click}
                >
                    {
                        this.state.visible ?
                            <Text style={{ color: "white", textAlign: "center" }}>Go to a Fancy</Text>
                            :
                            <View></View>
                    }
                </TouchableHighlight>
            </Animated.View>
        )
    }
}