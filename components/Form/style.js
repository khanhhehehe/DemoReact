import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    boxAdd :{
        width: '100%',
        flexDirection: 'row',
        marginHorizontal: 25,
        marginVertical: 25,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addTask: {
        marginHorizontal:25,
        width: '30%',
    },
    logoAdd: {
        width: 50,
        height:50,
        borderRadius: 50
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#00C853',
        height: 44,
        width: '70%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: '#fff'
    },
})
export default styles;
