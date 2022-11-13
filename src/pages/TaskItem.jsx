
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";


export default function TaskItem(props) {
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <View style={styles.button}>
                        <MaterialIcons name="delete" size={18} color="#fff" />
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 20
    },
    indexContainer: {
        borderRadius: 12,
        width: 50,
        height: 50,
        backgroundColor: '#3E3364',
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    index: {
        color: "#fff",
        fontSize: 20
    },
    taskContainer: {
        borderRadius: 12,
        flex: 1,
        backgroundColor: '#3E3364',
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        maxHeight: 50,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    task: {
        color: "#fff",
        fontSize: 16,
        width: '90%',
    }
});