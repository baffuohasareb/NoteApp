import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Platform } from "react-native";
import Styles from "./Styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const NoteForm = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [notes, setNotes] = useState(route.params?.notes || []);

    const noteData = route.params?.noteData || {};

    const [title, setTitle] = useState(noteData.title || "");
    const [content, setContent] = useState(noteData.title || "");

    const handleTitleChange = (text) => {
        setTitle(text);
    }
    const handleContentChange = (text) => {
        setContent(text);
    }

    const updatedNote = {
        id: noteData.id || notes.length + 1,
        title: title,
        content: content
    };

    const updateNoteData = () => {

        const updatedNotes = [...notes];

        if (updatedNote.id) {
            const existingNoteIndex = updatedNotes.findIndex(
                (note) => note.id === updatedNote.id
            );

            if (existingNoteIndex !== -1) {
                updatedNotes[existingNoteIndex] = updatedNote;
            } else {
                updatedNotes.push(updatedNote);
                console.log("Updated Notes:::", updatedNotes)
            }
        }
                
        return updatedNotes;
    }
    
    const handleSubmit = () => {
        const newNotes = updateNoteData();
        console.log("New notes:", newNotes)
        setNotes(newNotes);
        navigation.navigate('Note', {notes: newNotes, noteData: updatedNote});
    }
    return(
        <View style={Styles.container}>
            <View style={Styles.inputFieldsContainer}>
                <Text style={Styles.inputLabel}>Title:</Text>
                <TextInput 
                    defaultValue={noteData ? noteData.title : 'Title'} 
                    onChangeText={handleTitleChange} 
                    // placeholder="Title" 
                    style={Styles.inputField}
                />
                <Text style={Styles.inputLabel}>Body:</Text>
                <TextInput 
                    defaultValue={noteData ? noteData.content : 'Note Content'} 
                    onChangeText={handleContentChange} 
                    // placeholder="Content"
                    multiline={true}
                    style={[
                        Styles.inputField, {
                            minHeight: "70%",
                            textAlignVertical: Platform.OS === "android" ? "top" : "auto"
                        }]} 
                />
            </View>
            <TouchableOpacity onPress={handleSubmit} style={Styles.addNoteButton}>
                <Text style={Styles.addNoteText}>Save changes</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NoteForm;