import React from 'react';
import {Text, View} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as firebase from 'firebase';
import db from '../config.js';

export default class TransactionScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal',
            scannedBookId:'',
            scannedStudentId:'',
        }
    }
    getCameraPermissions=async(id) => {
        const {status}=await Permissions.askAsync(Permissions.CAMERA);
        
        this.setState({
            hasCameraPermissions:status==="granted",
            buttonState:id,
            scanned:false
        })
    }
    handleBarCodeScanned=async({type, data}) => {
        const {buttonState}=this.state
        if(buttonState==="BookId"){
        this.setState({
            
            scanned:true,
            scannedBookId:data,
            buttonState:'normal',
        })
    }

    else if(buttonState==="StudentId"){
        this.setState({
            
            scanned:true,
            scannedStudentId:data,
            buttonState:'normal',
        })
    }
}
handleTransaction=async () => {
var transactionMessage
db.collection("books").doc(this.state.scannedBookId).get()
.then((doc) => {
    
})
}
    render(){
        const hasCameraPermissions=this.state.hasCameraPermissions;
const scanned=this.state.scanned;
const buttonState=this.state.buttonState;
if(buttonState!=="normal" && hasCameraPermissions){
    return(
        <BarCodeScanner 
        onBarCodeScanned={scanned?undefined:this.handleBarCodeScanned}style={StyleSheet.absoluteFillObject}>

        </BarCodeScanner>
    )
}
else if(buttonState==="normal"){


    return(
<View style={styles.container}>
    <View>
        <Image
        source={require('../assets/booklogo.jpg')}
        style={{width:200,height:200}}
    
        >
</Image>
<Text style={{textAlign:'center',fontSize:30}}>WILY</Text>
    </View>
    <View style={styles.inputView}>
        <TextInput
        style={styles.inputBox}
        placeholder="BookId"
        value={this.state.scannedBookId}
        >

        </TextInput>
  
    <TouchableOpacity style={styles.ScanButton} onPress={() => {this.getCameraPermissions("BookId")}}>
    <Text style={styles.buttonText}>
 SCAN
    </Text>
    </TouchableOpacity>
    </View>
    <View style={styles.inputView}>
    <TextInput
        style={styles.inputBox}
        placeholder="StudentId"
        value={this.state.scannedId}
        >

        </TextInput>
  
    <TouchableOpacity style={styles.SubmitButton} onPress={async () => {this.handleTransaction()}}>
    <Text style={styles.buttonText}>
 SUBMIT
    </Text>
    </TouchableOpacity>
    </View>
    </View>
    )
}
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 20,
      textAlign:'center',
 marginTop:10,
    },
      inputView:{
          flexDirection:'row',
          margin:20,
 },
 inputBox:{
     width:200,
     height:40,
     borderWidth:1.5,
     borderRightWidth:0,
     fontSize:20
},
scanButton:{
    backgroundColor:'blue',
    width:50,
    borderWidth:1.5,
    borderLeftWidth:0,
},
submitButton:{
    backgroundColor:'blue',
    width:100,
    height:50,
}
    

  });