import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>
      <TextInput style={styles.input} placeholder="이메일을 입력해주세요!" />
      <TextInput style={styles.input} placeholder="비밀번호를 입력해주세요!" />
      <Text style={styles.kakao}>카카오로 로그인</Text>
      <Text style={styles.apple}>애플아이디로 로그인</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 40,
    paddingLeft: 40,
    backgroundColor: '#f1f1f1',
  },

  title: {
    marginBottom: 14,
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },

  input: {
    marginBottom: 7,
    padding: 7,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderRadius: 7,
  },

  kakao: {
    marginBottom: 7,
    padding: 7,
    color: '#FFF',
    backgroundColor: '#f0d558',
    borderRadius: 7,
  },

  apple: {
    marginBottom: 7,
    padding: 7,
    color: '#FFF',
    backgroundColor: '#000',
    borderRadius: 7,
  },
});

export default App;
