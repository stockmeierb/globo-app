import { styleSheets } from 'min-document';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Homepage() {
    return (
        <View style = {styles.container}>
            <Text>This will be the Home Page</Text>
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    }
});
//test test test