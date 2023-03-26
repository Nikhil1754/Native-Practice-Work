import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {React,useState} from 'react'
import Checkbox from 'expo-checkbox';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './Config';


const Signup = ({navigation}) => {
    const [isChecked, setChecked] = useState(false);
    //const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");
    const Signup = () => {
        createUserWithEmailAndPassword(auth,email, password)
            .then((userCredential) => { 
                const user = userCredential.user;
                Alert.alert(`Successfull Registerd`);
                navigation.navigate("Login");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorMessage);
            });
    }

  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Sign Up</Text>
    <View style={styles.mainView}>
        <View style={styles.inputContainer1}>
            <Text style={styles.nodeText}>Enter Your Email/Phone</Text>
            <TextInput style={styles.input} value={email} onChangeText={(actualData)=>{
                setEmail(actualData);
            }}/>
        </View>
        <View style={styles.inputContainer1}>
            <Text style={styles.nodeText}>Enter Passowrd Here</Text>
            <TextInput style={styles.input}
               value={password}
               onChangeText={(actualData)=>{
                setPassword(actualData);
               }}
               autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true} />
        </View>
        <View style={styles.section}>
            <Checkbox style={styles.checkbox}
                value={isChecked}
                onValueChange={()=>{
                    setChecked(!isChecked)
                }}
                color={isChecked ? '#4630EB' : undefined}
            />
            <Text>I Have Read All Terms and Condition</Text>
        </View>
        <View style={styles.section}>
            <TouchableOpacity onPress={()=>Signup()} style={[styles.opc,{backgroundColor:isChecked?'#6495ed':'#3A3B3C'}]} disabled={!isChecked}><Text style={styles.txt}>Sign Up</Text></TouchableOpacity>
        </View>

    </View>
</View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        marginTOp: 60,
        padding: 50,
        height: '100%',
    },
    heading: {
        fontSize: 60,
        fontWeight: 'bold',
    },
    mainView: {
        marginTop: 5,
    },
    nodeText: {
        color: '#3A3B3C',
    },
    inputContainer1: {
        marginTop: 10,
    },
    inputContainer2: {
        marginTop: 10,
    },
    input: {
        borderWidth: 2,
        borderColor: '#3A3B3C',
        padding: 10,
        marginTop: 6,
        borderRadius:4
    },
    section: {
        marginTop:8,
        flexDirection: 'row',
        alignItems: 'center',
      },
    paragraph: {
        fontSize: 15,
      },
      checkbox: {
        margin: 8,
      },
      opc:{
        padding:6,
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        borderRadius:4
      },
      txt:{
        color:'white',
        fontSize:30,
      },
      txt2:{
        color:'#3A3B3C',
        fontSize:14,
      },
      section2:{
        marginTop:10,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
      },
})