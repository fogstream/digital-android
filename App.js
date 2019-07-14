/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyButton from "./src/inputs/Button";
import SearchScreenContainer from "./src/inputs/SearchScreenContainer";
import {Actions, Router, Scene, Stack} from "react-native-router-flux";
import ContrAgentsListScreen from "./src/search/ContrAgentsListScreen";
import ContrAgentsDetailScreen from "./src/search/ContAgentsDetailScreen";
import SplashScreen from "react-native-splash-screen";


class App extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }


  componentDidMount() {
    SplashScreen.hide();

  }

  render() {
    return (
        <Router
            backAndroidHandler={() => {
              Actions.pop();
              return true;
            }}
            navigationBarStyle={{
              backgroundColor: '#FFF',
            }} titleStyle={{flex: 1, color: 'black', textAlign: 'center'}}
            cardStyle={{backgroundColor: '#FFF'}}>
          <Stack key="root">
            <Scene key="inputs" title="Поиск контрагентов" component={SearchScreenContainer}/>
            <Scene key="list" title="Компании" component={ContrAgentsListScreen}/>
            <Scene key="detail" component={ContrAgentsDetailScreen} hideNavBar={true}/>
            {/*<Scene key="favorites" component={Home}/>*/}
          </Stack>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
