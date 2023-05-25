import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from "../../Firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import * as WebBrowser from 'expo-web-browser';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn = async () => {
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                });
            return navigation.navigate('HomePage');
        }
        catch (err) {
            switch (err.code) {
                case 'auth/invalid-email':
                    return Alert.alert('Saisissez un e-mail valide');
                    break;
                case 'auth/user-not-found':
                    return Alert.alert('Impossible de trouver un compte IziGo associé à cet e-mail. Veuillez recommencer.');
                    break;
                case 'auth/wrong-password':
                    return Alert.alert('Le mot de passe est incorrect. Réessayez ou identifiez-vous avec les réseaux sociaux.');
                    break;
                case 'auth/invalid-uid':
                    return Alert.alert('Compte non trouvé');
                    break;
            }
            console.log(err.code);
            return navigation.navigate('Login');
        }
    }


    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/splash.png')}
            />
            <Text style={styles.title}>Se connecter</Text>
            <TextInput
                value={email}
                placeholder={'Email, Nom d\'utilisateur'}
                onChangeText={setEmail}
                style={styles.inputStyle}
                keyboardType="email-address"
            />
            <TextInput
                value={password}
                placeholder={'Mot de passe'}
                style={styles.inputStyle}
                secureTextEntry={true}
                onChangeText={setPassword}
                returnKeyType='go'
            />
            {
                error ?
                    <Text style={{ color: 'red' }}>{error}</Text>
                    : null
            }
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.submit}
                onPress={() => signIn()}
            >
                <Text style={styles.submitText}>Se connecter</Text>
            </TouchableOpacity>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    top: "21%",
                    width: "50%"
                }}
            >
                <Text style={styles.text}>Se connecter avec</Text>
            </View>

            <View style={styles.containerLogo}>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => onFacebookButtonPress()}>
                    <Ionicons name={"logo-facebook"} size={40} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => promptAsync()}>
                    <Ionicons name={"logo-google"} size={40} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => onAppleButtonPress()}>
                    <Ionicons name={"logo-apple"} size={40} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.submitSignUp}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.submitTextRegister}>Pas encore de compte ?</Text>
                <Text style={styles.submitTextRegister}> Inscrivez-vous</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "20%",
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 1
    },
    tinyLogo: {
        width: 130,
        height: 130
    },
    title: {
        position: 'absolute',
        height: "50%",
        top: "20%",
        fontFamily: 'NunitoBold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 42,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },
    inputStyle: {
        paddingVertical: 0,
        borderColor: '#D3D3D3',
        opacity: 1,
        top: "13%",
        height: "7%",
        width: "85%",
        marginTop: "2%",
        borderWidth: 1,
        borderRadius: 70,
        fontSize: 18,
        paddingLeft: "4%"
    },
    submit: {
        zIndex: 5,
        top: "17%",
        width: "55%",
        padding: "2%",
        backgroundColor: '#15AA49',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#fff',
    },
    submitText: {
        fontFamily: 'NunitoBold',
        color: '#fff',
        textAlign: 'center',
        fontSize: 25
    },
    submitTextRegister: {
        fontFamily: 'NunitoBold',
        color: 'black',
        top: "480%",
        color: "#A0A0A0",
        textAlign: "center"
    },
    text: {
        fontFamily: 'NunitoBold',
        top: 40,
        textAlign: "center"
    },
    containerLogo: {
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        top: "50%"
    },
    icon: {
        padding: "4%",
    }
})

export default Login;