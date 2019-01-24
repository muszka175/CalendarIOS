import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    listElementHeader: {
        marginBottom: 5,
        marginTop: 5,
        fontWeight: "700",
        fontSize: 14,
        width: '100%'
    },
    taskName: {
        fontWeight: "700",
        fontSize: 14,
    },
    // headerText: {
    //     color: 'white',
    //     fontSize: 18,
    //     padding: 26
    // },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    },
    note: {
        width: '100%',
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',

    },
    noteDelete: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ce1626',
        fontSize: 30,
        padding: 10,
    },
    noteDeleteText: {
        color: 'white'
    },
    editButton: {
        backgroundColor: '#ce1626',
        width: '100%',
        height: '100%',
    }
});