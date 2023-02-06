import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

const Form = (getValue) => {
    const [task, setTask] = useState('')
    const handleAddTask = () => {
        if (task.length === 0) {
            alert("Không được để trống nhé bạn hiền");
            return false;
        }
        getValue.addTask(task)
        setTask('');
        Keyboard.dismiss();
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={14}
            style={styles.boxAdd}>
            <TextInput
                value={task}
                onChangeText={(text) => setTask(text)}
                placeholder='Your task' style={styles.inputText}></TextInput>
            <TouchableOpacity
                onPress={handleAddTask}
                style={styles.addTask}>
                <Image style={styles.logoAdd}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Form;