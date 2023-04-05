/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import WebView from 'react-native-webview';
import {Button, SafeAreaView} from 'react-native';

function App(): JSX.Element {
  const webViewRef = useRef<WebView>(null);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Button
        title="reload"
        onPress={() => {
          webViewRef.current?.reload();
        }}
      />
      <WebView
        ref={webViewRef}
        source={{uri: 'https://reactnative.dev/'}}
        userAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1"
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
}

export default App;
