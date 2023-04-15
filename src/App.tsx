import React from "react";
import HomePage from "components/HomePage";
import Component1 from "components/Component1";
import Component2 from "components/Component2";

import { store } from "./store"
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom'
import NavBar from "components/NavBar";

const App: React.FC = () => (
    <Provider store={store}>
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/Component1" Component={Component1} />
                <Route path="/component2" Component={Component2} />
            </Routes>
        </Router>
    </Provider>
);

export default App;
