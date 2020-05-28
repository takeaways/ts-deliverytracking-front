import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from "redux";

import {composeWithDevTools} from 'redux-devtools-extension';
import {ModalProvider} from 'styled-react-modal';

import GoogleFontLoader from 'react-google-font-loader';
import {GlobalStyle} from './Modules/Styled/GlobalStyles';

import rootReducer from "./Reducer";


import {hot} from 'react-hot-loader/root';

const store = Redux.createStore(rootReducer, composeWithDevTools());


import './index.css';
import App from './App';

const Hot = hot(App);

ReactDom.render(
    <>
        <GoogleFontLoader
            fonts={[
                {
                    font: 'Noto+Sans+KR',
                    weights: [300, 400, 700, 900],
                },
            ]}
        />
        <GlobalStyle/>
        <ReactRedux.Provider store={store}>
            <ModalProvider>
                <Hot/>
            </ModalProvider>
        </ReactRedux.Provider>
    </>
    , document.querySelector('#root'));