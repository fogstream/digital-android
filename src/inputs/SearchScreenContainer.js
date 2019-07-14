import React from 'react'
import {View, Image, Alert, Text, Modal} from 'react-native'
import {TextField} from "react-native-material-textfield";
import Button from "react-native-material-ui/src/Button";
import Toolbar from 'react-native-material-ui/src/Toolbar'
import {blueButtonColor} from "../consts";
import Plus from "../res/plus.svg";
import Minus from "../res/minus.svg";
import Container from "react-native-material-ui/src/Container";
import BottomNavigationApp from "../BottomNavigationApp";
import BlackScreen from "./BlackScreen";


class SearchScreenContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      secondInputIsVisible: false,
      modalIsVisible: false
    }
  }

  onAddClick = () => {
    this.setState({secondInputIsVisible: !this.state.secondInputIsVisible})
  };

  render() {
    return (
        <React.Fragment>
          <Container style={{position: 'relative'}}>
            {this.state.modalIsVisible ? <BlackScreen/> : <View/>}
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
              <View style={{margin: 20}}>
                <TextField label='Контрагент'/>
                {!this.state.secondInputIsVisible
                    ?
                    <View style={{alignItems: 'flex-end'}}>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>

                        <Button style={{container: {width: 230}, text: {marginLeft: 'auto', color: blueButtonColor}}}
                                onPress={this.onAddClick}
                                icon={<Plus width={30} height={30}/>}
                                text={"Добавить госзакупку"}/>
                      </View>
                    </View>
                    :
                    <View>
                      <View style={{alignItems: 'flex-end'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>

                          <Button style={{container: {width: 230, justifyContent: 'flex-end'}, text: {marginLeft: 'auto', color: blueButtonColor}}}
                                  onPress={this.onAddClick}
                                  text={"Убрать госзакупку"}
                                  icon={<Minus width={30} height={30}/>}/>

                        </View>
                      </View>
                      <TextField label='Гос.закупка'/>
                    </View>
                }
              </View>
              <View style={{marginBottom: 30, margin: 20}}>
                <Button
                    style={{container: {borderWidth: 2, borderColor: blueButtonColor, borderRadius: 8, paddingVertical: 16, height: 40}, text: {color: blueButtonColor}}}
                    text={"Проверить"}
                    onPress={() => this.setState({modalIsVisible: !this.state.modalIsVisible})}/>
              </View>
            </View>
            <BottomNavigationApp active={"inputs"}/>
          </Container>
        </React.Fragment>
    );

  }
}

export default SearchScreenContainer;