import React from "react";
import { StyleSheet, KeyboardAvoidingView, TextInput, View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TaskInput(props) {

    const [task, setTask] = React.useState('')

    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <TextInput placeholder="Write A Task" value={task} onChangeText={(text) => setTask(text)} style={styles.input} />
            <TouchableOpacity onPress={() => handleAddTask(task)}>
                <View style={styles.button}>
                    <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 20,
        borderRadius: 12,
        backgroundColor: '#3E3364',
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    input: {
        paddingHorizontal: 20,
        paddingHorizontal: 20,
        height: 50,
        flex: 1,
        color: '#fff',
    },
    button: {
        borderRadius: 5,
        width: 30,
        height: 30,
        backgroundColor: "#fff",
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center"
    }

})