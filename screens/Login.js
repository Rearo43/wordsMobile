import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder='Email'
        />
        <TextInput
          style={styles.inputBox}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder='Password'
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Button title='Sign up' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: '65%',
    margin: 15,
    padding: 5,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  linearGradient: {
    shadowColor: 'black',
    shadowOffset: {
      width: -5,
      height: -7,
    },
    shadowOpacity: 0.64,
    shadowRadius: 5.79,
  },
  button: {
    marginTop: 15,
    // marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    // borderColor: '#F6820D',
    // borderWidth: 1,
    borderRadius: 8,
    width: 200,
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: -5,
    //   height: -7,
    // },
    // shadowOpacity: 0.64,
    // shadowRadius: 5.79,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonSignup: {
    fontSize: 12,
  },
});

export default Login;
