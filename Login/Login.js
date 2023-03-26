import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { React, useState } from 'react'
import Checkbox from 'expo-checkbox';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Config';

export default function Login({ navigation }) {
    const [isChecked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => { 
                const user = userCredential.user;
                Alert.alert(`Successfull Sign in ${email}  and ${password}`);
                navigation.navigate("Home", { myName: `${email}` });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorMessage);
            });
    }
    const handleSignup = () => {
        console.log('click on sigup');
        navigation.navigate("Signup");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Sign In</Text>
            <Text style={styles.vist}>Any Time Vist us on https://nikhil1754.github.io/portfolio.github.io/</Text>
            <View style={styles.mainView}>
                <View style={styles.inputContainer1}>
                    <Text style={styles.nodeText}>Enter Your Email or Phone No.</Text>
                    <TextInput style={styles.input} value={email} onChangeText={(actualData) => {
                        setEmail(actualData);
                    }} />
                </View>
                <View style={styles.inputContainer1}>
                    <Text style={styles.nodeText}>Enter Passowrd Here</Text>
                    <TextInput style={styles.input}
                        value={password}
                        onChangeText={(actualData) => {
                            setPassword(actualData);
                        }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true} />
                </View>
                <View style={styles.section}>
                    <Checkbox style={styles.checkbox}
                        value={isChecked}
                        onValueChange={() => {
                            setChecked(!isChecked)
                        }}
                        color={isChecked ? '#4630EB' : undefined}
                    />
                    <Text>I Have Read All Terms and Condition</Text>
                </View>
                <View style={styles.section}>
                    <TouchableOpacity onPress={()=>Login()} style={[styles.opc, { backgroundColor: isChecked ? '#6495ed' : '#3A3B3C' }]} disabled={!isChecked}><Text style={styles.txt}>Sign In</Text></TouchableOpacity>
                </View>
                <View style={styles.section2}>
                    <TouchableOpacity ><Text style={styles.txt2}>Forgot Username/Password</Text></TouchableOpacity>
                </View>
                <View style={styles.section3}>
                    <TouchableOpacity onPress={handleSignup} ><Text style={styles.txt2}>Create an Account</Text></TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTOp: 40,
        padding: 50,
        height: '100%',
    },
    heading: {
        fontSize: 60,
        fontWeight: 'bold',
    },
    vist: {
        fontSize: 10,
        color: '#3A3B3C',
        marginTop: 10,
    },
    mainView: {
        marginTop: 5,
    },
    nodeText: {
        color: '#3A3B3C',
    },
    inputContainer1: {
        marginTop: 30,
    },
    inputContainer2: {
        marginTop: 40,
    },
    input: {
        borderWidth: 2,
        borderColor: '#3A3B3C',
        padding: 10,
        marginTop: 6,
        borderRadius: 4
    },
    section: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },
    opc: {
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderRadius: 4
    },
    txt: {
        color: 'white',
        fontSize: 30,
    },
    txt2: {
        color: '#3A3B3C',
        fontSize: 14,
    },
    section2: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    section3: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }



})