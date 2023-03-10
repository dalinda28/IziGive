import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase"

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signUp = async () => {
        try {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user.email)
                })
            return navigation.navigate('Login');
        }
        catch (err) {
            switch (err.code) {
                case 'auth/invalid-email':
                    return Alert.alert('Saisissez un e-mail valide');
                    break;
                case 'auth/email-already-in-use':
                    return Alert.alert('Un compte IziGo associé à cet e-mail existe déja. Veuillez recommencer.');
                    break;
                case 'auth/weak-password':
                    return Alert.alert('Le mot de passe doit comprendre au moins 6 caractères.');
                    break;
            }
            console.log(err.code);
            return navigation.navigate('Register');
        }
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/splash.png')}
            />
            <Text style={styles.title}>Inscription</Text>
            <TextInput
                value={email}
                placeholder={'Email'}
                onChangeText={setEmail}
                style={styles.inputStyle}
            />
            <TextInput
                value={password}
                placeholder={'Mot de passe'}
                onChangeText={setPassword}
                style={styles.inputStyle}
                secureTextEntry={true}
            />
            <View style={styles.CheckboxStyle}>
                <BouncyCheckbox
                    size={25}
                    fillColor="#15AA49"
                    unfillColor="rgba(21, 170, 73, 0.5)"
                    text="Commerçant"
                    iconStyle={{ borderColor: "red" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{ fontFamily: "NunitoBold", textDecorationLine: "none" }}
                    onPress={(isChecked: boolean) => { }} />
                <BouncyCheckbox
                    size={25}
                    fillColor="#15AA49"
                    unfillColor="rgba(21, 170, 73, 0.5)"
                    text="Association"
                    iconStyle={{ borderColor: "red" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{ fontFamily: "NunitoBold", textDecorationLine: "none" }}
                    onPress={(isChecked: boolean) => { }}
                    style={{ paddingLeft: 60 }}
                />
            </View>
            {
                error ?
                    <Text style={{ color: 'red' }}>{error}</Text>
                    : null
            }
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.submit}
                onPress={() => signUp()}
            >
                <Text style={styles.submitText}>S'inscrire</Text>
            </TouchableOpacity>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    top: "15%",
                    width: "50%"
                }}
            >
                <Text style={styles.text}>S’inscrire avec</Text>
            </View>

            <View style={styles.containerLogo}>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => onFacebookButtonPress()}>
                    <Ionicons name={"logo-facebook"} size={40} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => onGoogleButtonPress()}>
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
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.submitTextLogin}>Avez vous un compte ?</Text>
                <Text style={styles.submitTextLogin}> Se connecter </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "15%",
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
        fontFamily: 'Roboto',
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
        top: "10%",
        height: "7%",
        width: "85%",
        marginTop: "2%",
        borderWidth: 1,
        borderRadius: 70,
        fontSize: 18,
        paddingLeft: "4%"
    },
    CheckboxStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        top: "24%",

    },
    submit: {
        zIndex: 5,
        top: "14%",
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
    submitTextLogin: {
        fontFamily: 'NunitoBold',
        color: 'black',
        top: "380%",
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
        top: "40%"
    },
    icon: {
        padding: "4%",
    }
})

export default Register;