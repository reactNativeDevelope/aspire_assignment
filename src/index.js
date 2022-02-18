import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigator from './navigations';
import {configureStore} from './store';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const {store, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PersistGate loading={true} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
