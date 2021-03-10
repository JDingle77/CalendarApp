import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

function TaskInput() {

    const [ text, setText ] = useState('')

    return <View style={styles.container}>
    <TextInput
        placeholder='Add task'
        placeholderTextColor='white'
        onChangeText={ (inputText) => { setText(inputText) }}
        value={text}
        selectionColor='white'
        style={styles.textInput}
        />
    </View>
    
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    textInput: {
        color: 'white'
    },
})  

export default TaskInput;