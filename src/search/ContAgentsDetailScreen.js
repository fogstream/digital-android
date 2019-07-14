import React from 'react'
import {View, Image, FlatList, Text, TouchableOpacity, ScrollView} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import {
  blueButtonColor,
  borderColorFromStatus,
  COMPANY_ALERT,
  COMPANY_BAD,
  COMPANY_FETCH,
  COMPANY_OK,
  iconFromStatus
} from "../consts";
import Good from '../res/ok.svg'
import Bad from '../res/cancel.svg'

import Container from "react-native-material-ui/src/Container";
import BottomNavigationApp from "../BottomNavigationApp";
import BigGoodIcon from "../res/security_checked.svg";
import BigAttentionIcon from '../res/security_attention.svg'
import BigBadIcon from "../res/security_alert.svg";
import {Actions} from "react-native-router-flux";
import Toolbar from "react-native-material-ui/src/Toolbar";

class ContrAgentsDetailScreen extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      secondInputIsVisible: false,
      item: props.navigation.state.params.item
    };
  }


  // componentDidMount() {
  //   Actions.detail({title: 'Some other title'})
  // }


  bigIconFromStatus = (status) => {
    switch (status) {
      case COMPANY_OK:
        return <BigGoodIcon/>;
      case COMPANY_BAD:
        return <BigBadIcon/>;
      case COMPANY_ALERT:
        return <BigAttentionIcon/>;
    }
  };

  colorFromStatus = (status) => {
    switch (status) {
      case false:
        return 'rgba(230,81,1, 0.1)';
      case true:
        return 'rgba(91,190,6, 0.1)';
    }
  };

  borderColor = (status) => {
    switch (status) {
      case false:
        return 'rgba(230,81,1, 0.3)';
      case true:
        return 'rgba(91,190,6, 0.3)';
    }
  };


  renderItem = ({item}) => {
    return (
        <View style={{paddingHorizontal: 20, backgroundColor: this.colorFromStatus(item.is_clean),}}>
          <View style={{
            borderBottomWidth: 2,
            borderColor: this.borderColor(item.is_clean),
          }}>
            <View style={{paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{paddingRight: 32}}>
                <Text style={{fontSize: 17}}>{item.label}</Text>
              </View>

              <View style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
                {item.is_clean ? <Good/> : <Bad/>}
              </View>
            </View>
          </View>
        </View>
    )
  };


  render() {
    return (
        <Container>
          <Toolbar style={{
            container: {justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'},
            titleText: {color: '#000'},
          }} centerElement={`Компания "${this.state.item.supplier.name}"`}
          />
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
            <View style={{marginTop: 56, alignItems: 'center', marginBottom: 55}}>
              {this.bigIconFromStatus(this.state.item.status)}
              <Text style={{marginTop: 10, color: 'grey', fontSize: 20}}>Надежность</Text>
              <Text style={{marginTop: 10, color: 'grey', fontSize: 28, fontWeight: 'bold'}}>
                {`${this.state.item.percent}%`}
              </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <FlatList
                  data={this.state.item.results.filter((item)=> !item.is_clean)}
                  renderItem={this.renderItem}
                  keyExtractor={(item) => item.id.toString()}
              />
              <FlatList
                  data={this.state.item.results.filter((item)=> item.is_clean)}
                  renderItem={this.renderItem}
                  keyExtractor={(item) => item.id.toString()}
                  // ItemSeparatorComponent={() => <View style={{
                  //   paddingLeft: 10,
                  //   // backgroundColor: this.colorFromStatus(this.state.item.status),
                  //   marginRight: 10,
                  //   borderWidth: 0.2,
                  //   opacity:0.3,
                  //   borderColor: this.colorFromStatus(this.state.item.status),
                  //   height: 1,
                  // }}/>}
              />
            </ScrollView>
          </View>
          <BottomNavigationApp active={"search"}/>
        </Container>);

  }
}

export default ContrAgentsDetailScreen;