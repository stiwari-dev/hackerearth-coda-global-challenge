import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Layout from './hoc/Layout/Layout';
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ErrorBoundary>
                    <Layout />
                </ErrorBoundary>
            </div>
        </BrowserRouter>
    );
}

export default App;
