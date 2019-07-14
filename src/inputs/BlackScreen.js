import React from 'react'
import {View, Image, Text, StyleSheet, Dimensions, Modal, Alert} from 'react-native'
import Container from "react-native-material-ui/src/Container";
import Button from "react-native-material-ui/src/Button";
import {Actions} from "react-native-router-flux";

const {width, height} = Dimensions.get('window');

class BlackScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    }
  }

  render() {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.isVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: 'rgba(0,0,0, 0.8)'
          }}>
            <View>
              <Text style={{fontSize: 20, color: '#fff'}}>Окей, мы работаем</Text>
              <Text style={{fontSize: 18, color: '#fff', marginTop: 10, marginBottom: 15}}>Придется подождать :)</Text>
            </View>
            <Button style={{container: {borderWidth: 1, borderColor: '#fff'}, text: {margin: 30, color: '#fff'}}}
                    text={"Хорошо"}
                    onPress={() => {
                      this.setState({isVisible: false});
                      Actions.replace("list");
                    }}/>
          </View>
        </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  // Flex to fill, position absolute,
  // Fixed left/top, and the width set to the window width
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    opacity: 0.6,
    backgroundColor: 'black',
    width: width,
    height: height,
    zIndex: 2
  }
});
export default BlackScreen;