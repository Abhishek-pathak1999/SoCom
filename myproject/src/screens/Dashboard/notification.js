import * as React from 'react';
import { Button, View } from 'react-native';

export default function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'black'}}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }