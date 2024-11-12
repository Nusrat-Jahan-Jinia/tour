import { Platform, Alert } from 'react-native';

export const alertDialog = (msgTitle: string, body: string) => {
  if(Platform.OS === 'web') {
    Alert.alert(msgTitle, body);
    return;
  }
  else{
    alert(`${msgTitle}: ${body}`);
  }
}