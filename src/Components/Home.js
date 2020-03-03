import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello Class',
      editable: true,
    };
    // console.warn('Hello I am Constructor');
  }
  onChangeText(text) {
    console.warn(text);
  }
  render() {
    const {text, editable} = this.state;
    const {navigation} = this.props;
    console.log(navigation);
    return (
      <View style={styles.container}>
        <Text>{text}</Text>
        <TextInput
          editable={editable}
          style={{
            height: 50,
            width: '90%',
            borderColor: 'red',
            borderWidth: 1,
          }}
          onChangeText={text => this.onChangeText(text)}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Second');
          }}>
          <Text>Move to Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
  componentDidMount() {
    // console.warn('Hello I am ComponentDidMount');
    setTimeout(() => {
      this.setState({
        editable: false,
      });
    }, 4000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
