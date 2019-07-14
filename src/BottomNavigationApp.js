import BottomNavigation from "react-native-material-ui/src/BottomNavigation";
import React from "react";
import Inputs from './res/list.svg'
import Search from './res/search@3x.svg'
import Fav from './res/star.svg'
import {Actions} from 'react-native-router-flux'; // New code
const BottomNavigationApp = (props) => {
  return (
      <BottomNavigation active={props.active}>
        <BottomNavigation.Action
            key="inputs"
            icon={<Inputs/>}

            onPress={() => Actions.replace("list")}
        />
        <BottomNavigation.Action
            icon={<Search/>}
            key="list"
            onPress={() => Actions.replace("inputs")}
        />
        <BottomNavigation.Action
            key="favorites"
            icon={<Fav/>}
            onPress={() => Actions.jump("favorites")}
        />

      </BottomNavigation>
  );
};

export default BottomNavigationApp;