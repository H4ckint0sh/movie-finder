import React from 'react';
import { View, Text } from 'react-native';

export default function SingleItem({ navigation }) {
    return (
        <View>
            <Text>{navigation.getParam('')}</Text>
        </View>
    )
}