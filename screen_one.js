import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Button = (props) => (
    <TouchableHighlight
        style={{
            height: 100,
            width: 100,
            backgroundColor: "red"
        }}
        {...props}
    />
)

export const ScreenTwo = props => (
    <View style={styles.container}>
        <TouchableHighlight style={{ paddingVertical: 15 }} onPress={() => props.navigation.navigate('Modal', {
            props: {
                foo: "bar"
            }
        })}>
            <Text>Go to a Modal</Text>
        </TouchableHighlight>

        <TouchableHighlight style={{ paddingVertical: 15 }} onPress={() => props.navigation.navigate('Fade', {
            props: {
                foo: "bar"
            }
        })}>
            <Text>Go to a Fade In</Text>
        </TouchableHighlight>


        <TouchableHighlight style={{ paddingVertical: 15 }} onPress={() => props.navigation.navigate('Pop', {
            props: {
                foo: "bar"
            }
        })}>
            <Text>Go to a Pop In</Text>
        </TouchableHighlight>

        <TouchableHighlight style={{ paddingVertical: 15 }} onPress={() => props.navigation.navigate('Normal', {
            props: {
                foo: "bar"
            }
        })}>
            <Text>Go to a Normal</Text>
        </TouchableHighlight>
    </View>
);

