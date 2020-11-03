import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Navigator from '../navigator/homeStack';

const Separator = () => (
  <View style={styles.separator} />
);

const App = ({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="Scan"
        //onPress={() => navigation.Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="List"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
  </SafeAreaView>
);};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;