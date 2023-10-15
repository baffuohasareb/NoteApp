import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Styles from "./Styles";

const NoteList = () => {
    const navigation = useNavigation();
    const route = useRoute();
    
    const notes = route.params?.notes || []

    const handleAddNotePress = () => {
        navigation.navigate('NoteForm', { notes })
    }
    
    const handleNotePress = (item) => {
        const targetNote = notes.find((note) => note.title === item.title);
        navigation.navigate("Note", {notes: notes, noteData: targetNote})
    }

    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity style={Styles.noteCard} onPress={() => handleNotePress(item)}>
                <Text style={Styles.noteCardTitle}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
    return(
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.headerText}>Sticky notes</Text>
            </View>

            {notes.length === 0 && (
                <View style={Styles.emptyNotes}>
                    <Text style={Styles.emptyNotesText}>No saved notes</Text>
                </View>
            )}
            <FlatList 
                data={notes}
                renderItem={renderItem}
                style={Styles.noteList}
            />
            <TouchableOpacity onPress={handleAddNotePress} style={Styles.addNoteButton}>
                <Text style={Styles.addNoteText}>Add Note</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NoteList;