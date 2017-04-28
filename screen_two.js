import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { navigator } from './navigator'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const ScreenTwo = props => (
    <View style={styles.container}>
        <TouchableHighlight style={{ paddingVertical: 15 }} onPress={() => navigator.goBack()}>
            <Text style={{ color: 'white' }}>Go Back</Text>
        </TouchableHighlight>
    </View>
)

