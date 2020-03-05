import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello Class',
      editable: true,
    //   newValue: props.route.params.title || null,
    };
    const {navigation, route} = this.props;
    console.log(route, navigation);
    // console.warn('Hello I am Constructor');
  }

  onChangeText(text) {
    console.warn(text);
  }
  render() {
    const {text, editable, newValue} = this.state;
    const {navigation, route} = this.props;
    return (
      <View style={styles.container}>
        {/* <Text>{`${newValue} 123`}</Text> */}
        {/* <TouchableOpacity
          onPress={() => navigation.setOptions({title: 'Updated!'})}>
          <Text>Move to Next</Text>
        </TouchableOpacity> */}
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

export default Second;
