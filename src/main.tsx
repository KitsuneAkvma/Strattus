import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'
import Store, { persistor } from './Redux/store.ts'


import App from './App.tsx'

import { TimeThemeProvider } from './utility/Themes/TimeThemeProvider.tsx'
import { GlobalStyles } from './utility/Themes/Global.ts'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={Store}>
    <PersistGate persistor={persistor}>
      <TimeThemeProvider>
        <GlobalStyles />
        <App />
      </TimeThemeProvider>
    </PersistGate>
  </Provider>
)
