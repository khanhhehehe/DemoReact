import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    boxWork: {
        flexDirection: 'row',
        borderRadius: 10,
        marginHorizontal: 25,
        marginVertical: 8,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      numberWork: {
        fontSize: 22,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        margin: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
      },
      textWork: {
        fontSize: 19,
        width: '80%',
      },
      bgNumberEven: {
        backgroundColor: '#00E676',
        borderRadius: 10,
      },
      bgNumberOdd: {
        backgroundColor: '#039BE5',
        borderRadius: 10,
      },
})
export default styles;