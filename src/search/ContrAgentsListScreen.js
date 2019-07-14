import React from 'react'
import {View, Image, FlatList, Text, TouchableOpacity} from 'react-native'

import Toolbar from 'react-native-material-ui/src/Toolbar'
import {
  blueButtonColor,
  borderColorFromStatus,
  COMPANY_ALERT,
  COMPANY_BAD,
  COMPANY_FETCH,
  COMPANY_OK, iconFromStatus,
  mock
} from "../consts";

import Good from '../res/ok.svg'
import Bad from '../res/cancel.svg'
import Add from '../res/add_user_male.svg'
import Fetch from '../res/clock.svg'
import Alert from '../res/attention.svg'
import Container from "react-native-material-ui/src/Container";
import BottomNavigationApp from "../BottomNavigationApp";
import {Actions} from "react-native-router-flux";
import Button from "react-native-material-ui/src/Button";

class ContrAgentsListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      secondInputIsVisible: false,
    };
  }

  isFetching = (item) => {
    return item.status === COMPANY_FETCH;
  };

  renderItem = ({item}) => {
    const disabled = this.isFetching(item);
    return (
        <TouchableOpacity disabled={disabled}
                          onPress={() => Actions.jump('detail', {item, onBack: () => console.log()})}>
          <View style={{
            flex: 1,
            marginTop: 24,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: borderColorFromStatus(item.status)
          }}>
            <View style={{margin: 20, flexDirection: 'row', justifyContent: 'space-between'}}>

              <View>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{fontSize: 18,}}>{item.supplier.name} </Text>
                  <Text style={{flex: 1, fontSize: 12, color: 'grey', alignItems: 'center'}}>
                    ИНН {item.supplier.inn}
                  </Text>
                </View>
                <Text style={{fontSize: 12, color: 'grey', width: 250}}>{item.tender.name}</Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                {iconFromStatus(item.status)}
              </View>
            </View>
          </View>
        </TouchableOpacity>)
  };

  render() {
    const items = mock;

    return (
        <Container>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>

            {items.length !== 0 ?
                <ListComponent renderItem={this.renderItem} items={items}/>
                : <NoListComponent/>
            }
            <BottomNavigationApp active={"search"}/>
          </View>
        </Container>);

  }
}


const ListComponent = (props) => {
  return (
      <FlatList
          data={props.items}
          renderItem={props.renderItem}
          keyExtractor={(item) => item.supplier.id.toString()}
      />)
};

const NoListComponent = (props) => {
  return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24}}>УПС</Text>
        <Text style={{fontSize: 18}}>Тут пока ничего нет</Text>
        <Button icon={<Add/>} style={{container: {width: 210}, text: {fontSize: 14, color: blueButtonColor}}}
                text={"Добавить"}
                onPress={() => Actions.replace('inputs')}/>
      </View>
  )
};

export default ContrAgentsListScreen;