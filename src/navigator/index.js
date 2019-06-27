// @flow
import React from "react";

import {
  TouchableOpacity,
  Image,
  View,
  BackHandler,
  Keyboard,
  Animated,
  Easing,
  BackAndroid
} from "react-native";
import { connect } from "react-redux";

import {
  Stack,
  Scene,
  Router,
  Actions,
  ActionConst,
  Route,
  Schema,
  Drawer
} from "react-native-router-flux";
import CounterComponent from "../components/counter";
import { TabButtonLeft } from "../components";
import { Colors, Metrics, Images } from "../theme";
import styles from "./styles";
function onBackPress() {
  // const scene = Actions.currentScene;
  // if (BACK_SCENES.includes(scene)) {
  //     return false;
  // }
  // if (scene === "tour" || scene === "landingpage") {
  //     utils.showYesNoMessage(
  //         strings("alertMessages.confirm"),
  //         strings("alertMessages.confirmAppExit"),
  //         () => {
  //             BackAndroid.exitApp();
  //         },
  //         () => { }
  //     );
  //     return true;
  // } else {
  //     Actions.pop();
  //     return true;
  // }
}

const navigator = Actions.create(
  <Stack
    titleStyle={styles.title}
    headerStyle={styles.header}
    key="root"
    tintColor={Colors.primary}
  >
    {/* <Scene key="tour" component={CounterComponent} /> */}
    {/* {DrawerMenu.getDrawerMenu()} */}
    <Scene
      tintColor="white"
      title={"CreditCard"}
      key="CounterComponent"
      component={CounterComponent}
      renderLeftButton={() => (
        <TabButtonLeft imagesArray={["rightArrow"]} actions={[Actions.pop]} />
      )}
    />
  </Stack>
);

export default () => (
  <AppNavigator backAndroidHandler={onBackPress} navigator={navigator} />
);

const AppNavigator = connect()(Router);
