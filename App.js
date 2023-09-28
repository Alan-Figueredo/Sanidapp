import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './componentes/Main.jsx';
import { NativeRouter } from 'react-router-native';
export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}