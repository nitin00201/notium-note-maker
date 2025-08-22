import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <ScreenContent title='name' path='/'>
            <View>
        <Text>Helo</Text>
      </View>
      </ScreenContent>

    </>
  );
}
