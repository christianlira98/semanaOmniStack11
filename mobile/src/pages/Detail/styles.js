import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: Constants.statusBarHeight + 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    incident: {
        marginTop: 32,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 8, 
        color: '#737380'
    },
    contact: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    contactTextBold: {
        textAlign:'left',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30

    },
    contactNormalText: {
        color: '#737380',
        fontSize: 15,
        marginTop: 16
    },
    contactButtons: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contactButton: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    contactButtonText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold'
    }
})