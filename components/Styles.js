import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },

    // NoteList styling
    header: {
        height: 80,
        backgroundColor: "#FFD700",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        color: "#FFFFFF",
        fontSize: 24,
        alignSelf: "center",
        paddingTop: 10,
        fontWeight: "700"
    },
    emptyNotes: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50%"
    },
    emptyNotesText: {
        fontSize: 20,
        color: "#D9D9D9"
    },
    noteList: {
        paddingHorizontal: 15,
        paddingTop: 15,
        flex: 1,
        paddingBottom: 120
    },
    addNoteButton: {
        backgroundColor: "#FFD700",
        borderRadius: 7,
        marginTop: 20,
        alignSelf: "center",
        bottom: 10
    },
    addNoteText: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: '500',
        color: "#FFFFFF"
    },
    noteCard: {
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#FFD700",
        elevation: 4,
        width: "100%",
        marginTop: 10
    },
    noteCardTitle: {
        fontWeight: "500",
        fontSize: 16,
        marginVertical: 20,
        marginHorizontal: 10,
    },

    // NoteForm styling
    inputField: {
        borderWidth: 1,
        borderColor: "#FFD700",
        borderRadius: 7,
        marginBottom: 10,
        fontSize: 20,
        padding: 15,
        marginHorizontal: 30
    },
    inputFieldsContainer: {
        marginTop: 40,
        flex: 1
    },
    inputLabel: {
        fontSize: 18,
        marginHorizontal: 30,
        fontWeight: "500",
        marginBottom: 10
    },

    // Note styling
    noteHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#FFD700",
        marginTop: 30,
        paddingHorizontal: 15,
        paddingBottom: 10
    },
    noteTitle: {
        fontSize: 20,
        fontWeight: "600"
    },
    noteActionsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    noteActionContainer: {
        marginLeft: 15,
        borderRadius: 5
    },
    noteAction: {
        // fontSize: 16,
        fontWeight: "500",
        marginVertical: 5,
        marginHorizontal: 10
    },
    editButton: {
        borderWidth: 1,
        borderColor: "#FFD700",
    },
    deleteButton: {
        backgroundColor: "#FF0000"
    },
    noteBody: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 15
    },
    noteContent: {
        fontSize: 18
    }
})

export default Styles;