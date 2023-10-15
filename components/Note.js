import React, {useState} from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Styles from "./Styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const Note = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [notes, setNotes] = useState(route.params?.notes || []);

    const { noteData } = route.params;

    const handleEditPress = () => {
        console.log(noteData);
        navigation.navigate('NoteForm', {noteData});
    }


    const deleteNote = () => {
        const noteIndexToDelete = notes.findIndex(note => note.id === noteData.id);

        if (noteIndexToDelete !== -1) {
            const updatedNotes = [...notes.slice(0, noteIndexToDelete), ...notes.slice(noteIndexToDelete + 1)];
            setNotes(updatedNotes);
            alert(`${noteData.title} has been deleted.`)
            navigation.navigate("NoteList", { notes: updatedNotes})
        }
    }

    const handleDeletePress = () => {
        Alert.alert(
            "Confirm deletion",
            "Are you sure you want to delete this note?",
            [
                {
                    text: "Yes",
                    onPress: () => {
                        deleteNote();
                    },
                },

                {
                    text: "No",
                    style: "cancel"
                },
            ],
            { cancelable: false }
        )
    }

    const handleHomePress = () => {
        navigation.navigate('NoteList', {notes: notes});
        console.log("Notes available in Note screen:", notes)
    }

    return(
        <View style={Styles.container}>
            <View style={Styles.noteHeader}>
                <Text style={Styles.noteTitle}>{noteData.title}</Text>
                <View style={Styles.noteActionsContainer}>
                    <TouchableOpacity 
                        onPress={handleEditPress} style={[Styles.noteActionContainer, Styles.editButton]}>
                        <Text style={Styles.noteAction}>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleDeletePress} style={[Styles.noteActionContainer, Styles.deleteButton]}>
                        <Text style={[Styles.noteAction, {color: "#FFFFFF"}]}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={Styles.contentContainer}>
                <Text style={Styles.noteContent}>{noteData.content}</Text>
            </View>

            <TouchableOpacity onPress={handleHomePress} style={Styles.addNoteButton}>
                <Text style={Styles.addNoteText}>Back to home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Note;