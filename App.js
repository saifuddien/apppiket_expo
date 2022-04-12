import WebView from 'react-native-webview';
import StatusBarCustom from 'react-native-custom-statusbar';

export default function App() {
  return (
    <StatusBarCustom backgroundColor="#f59800" barStyle="light-content">
      {/* <WebView source={{ uri: 'https://piketsabtu.netlify.app' }} /> */}
      <WebView source={{ uri: 'https://piketvue.vercel.app' }} />
    </StatusBarCustom>
  );
}