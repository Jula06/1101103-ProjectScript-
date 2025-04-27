import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ route, navigation }) {
  const { userType } = route.params; // รับค่าจาก HomeScreen

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in as:', userType, 'with', username, password);
    navigation.navigate('HomePage', { userType }); // ไปหน้า Blank หลังจาก login
  };

  // ฟังก์ชันไปที่หน้า RegisterScreen
  const navigateToRegister = () => {
    navigation.navigate('Register', { userType }); // นำทางไปยังหน้า Register และส่ง userType
  };

  // ฟังก์ชันไปที่หน้า ResetPasswordScreen
  const navigateToResetPassword = () => {
    navigation.navigate('ResetPassword', { userType }); // นำทางไปยังหน้า ResetPassword
  };

  return (
    <View style={styles.container}>
      {/* เพิ่ม Image ที่ด้านบนสุด */}
      <Image 
        source={require('./assets/Login.png')} 
        style={styles.loginImage} 
      />

      <Text style={styles.header}>เข้าสู่ระบบ{userType === 'teacher' ? 'ครู' : 'นักเรียน'}</Text>

      <TextInput
        style={styles.input}
        placeholder="ชื่อผู้ใช้"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor={"#000000"}
      />
      <TextInput
        style={styles.input}
        placeholder="รหัสผ่าน"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={"#000000"}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity onPress={navigateToRegister}>
          <Text style={styles.footerText}>ลงทะเบียน</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToResetPassword}>
          <Text style={styles.footerText}>ลืมรหัสผ่าน</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f1f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginImage: {
    width: 100, // กำหนดขนาดของรูป
    height: 100, // กำหนดขนาดของรูป
    marginBottom: 20, // เพิ่มระยะห่างจากด้านบน
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5e2a8c',
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: '#eeeeee',
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    marginTop: 15,
    position: 'relative',
    paddingVertical: 10,
    paddingHorizontal: 25,
    width: 365,
    height: 58,
    backgroundColor: '#8e24aa',
    fontSize: 17,
    fontWeight: '500',
    color: '#181818',
    borderRadius: 8,
    justifyContent: 'center', // ทำให้ข้อความอยู่ตรงกลางในแนวตั้ง
    alignItems: 'center', // ทำให้ข้อความอยู่ตรงกลางในแนวนอน
    flexDirection: 'row', // ใช้ในการจัดระเบียบภายในปุ่ม (ตัวอักษร)
  },
  
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center', // ตั้งค่าการจัดตำแหน่งข้อความในแนวนอน
    justifyContent: 'center', // ทำให้ข้อความอยู่ตรงกลางในแนวตั้ง
    alignItems: 'center', // ทำให้ข้อความอยู่ตรงกลางในแนวนอน
  },
  
  footer: {
    marginTop: 20,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%',
    paddingHorizontal: 50,
  },
  footerText: {
    
    color: '#8e24aa',
    fontSize: 16,
    
  },
  loginImage: {
    width:350,
    height:350,
    marginBottom:10,
  }
});
