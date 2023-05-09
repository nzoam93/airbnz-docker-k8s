import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import csrfFetch from './store/csrf'
import * as sessionActions from './store/session';
import { ModalProvider } from "./context/Modal";
import { createRoot } from 'react-dom/client';

//for search functionality. Then, you have to wrap the app in QueryParamProvider
import {QueryParamProvider} from 'use-query-params';
import {ReactRouter5Adapter} from 'use-query-params/adapters/react-router-5';



//defines the store from the configureStore function
const store = configureStore();


const renderApplication = () => {

  //this is for testing environments only
  if (process.env.NODE_ENV !== 'production') {
    window.store = store;
    window.csrfFetch = csrfFetch;
    window.sessionActions = sessionActions;
  }

  //the Root is what is rendered below in ReactDOM.render
  //Provider wraps the store around the app so that the whole app can have access to the store (and thus, the state)
  //BrowserRouter from React Router for routing
  function Root() {
    return (
      <ModalProvider>
        <Provider store={store}>
          <BrowserRouter>
            <QueryParamProvider adapter={ReactRouter5Adapter}>
              <App />
            </QueryParamProvider>
          </BrowserRouter>
        </Provider>
      </ModalProvider>
    );
  }

  //this is what is actually rendered
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
    );
}

//makes sure that there is an authenticity token present before continuing (or else the app would not load)
if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}
