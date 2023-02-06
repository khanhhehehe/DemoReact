import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const Task = (props) => {
    let numTask = (props.number<10)?'0'+props.number:props.number;
    let bgNumber = (props.number%2===0)?styles.bgNumberEven:styles.bgNumberOdd;
    return (
        <TouchableOpacity
        onPress={props.showDetail}>
            <View style={styles.boxWork}>
                <Text style={[styles.numberWork,bgNumber]}>{numTask}</Text>
                <Text style={styles.textWork}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Task;