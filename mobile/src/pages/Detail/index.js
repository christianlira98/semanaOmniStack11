import React from 'react';
import {Image,Text, View, TouchableOpacity, Linking} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'
import {Feather} from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Incidents() {

    const navigation = useNavigation()
    const route = useRoute()
    const incident = route.params.incident
    const message = `Olá ${incident.ongName}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(incident.value)}`

    function navigateBack() {
        navigation.goBack()
    }
 
    function sendMail() {
        MailComposer.composeAsync( {
            subject: `Herói do caso: ${incident.title}`,
            recipients: [`${incident.email}`],
            body: message
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity 
                    style={styles.detailsButton} 
                    onPress= {navigateBack}>
                    <Feather 
                        name="arrow-left" 
                        size={28} 
                        color="#e02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>

                <Text style={styles.incidentProperty}>
                    CASO:
                </Text>
                <Text style={styles.incidentValue}>
                    {incident.title}
                </Text>

                <Text style={styles.incidentProperty}>
                    ONG:
                </Text>
                <Text style={styles.incidentValue}>
                    {incident.ongName} de {incident.city}/{incident.uf}
                </Text>
                
                <Text style={styles.incidentProperty}>
                    DESCRIÇÃO:
                </Text>
                <Text style={styles.incidentValue}>
                    {incident.description}
                </Text>

                <Text style={styles.incidentProperty}>
                    VALOR
                </Text>
                <Text style={[styles.incidentValue, {marginBottom: 0}]}>
                    {Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(incident.value)}
                </Text>
            </View>

            <View style={styles.contact}>
                <Text style={styles.contactTextBold}>Salve o dia!</Text>
                <Text style={styles.contactTextBold}>Seja o herói desse caso.</Text>
                <Text style={styles.contactNormalText}>Entre em contato: </Text>
                <View style={styles.contactButtons}>
                    <TouchableOpacity 
                        style={styles.contactButton} 
                        onPress= {sendWhatsapp}>
                        <Text style={styles.contactButtonText}>
                            Whatsapp
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.contactButton} 
                        onPress= {sendMail}>
                        <Text style={styles.contactButtonText}>
                            E-mail
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}