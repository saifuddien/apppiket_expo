import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import StatusBarCustom from 'react-native-custom-statusbar';

export default function App() {
  return (
    <StatusBarCustom backgroundColor="#f59800" barStyle="light-content">
      <WebView style={styles.container} source={{ uri: 'https://piketsabtu.netlify.app' }} />
    </StatusBarCustom>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    borderTopWidth: 2,
    borderTopColor: 'black'
  },
});
