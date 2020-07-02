import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import ComponentFoo from './features/auth/someComponent';

import configureStore from './configureStore'

const store = configureStore({})

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <ComponentFoo />
  </Provider>,
  rootElement
)