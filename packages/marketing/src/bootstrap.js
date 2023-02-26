import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mountMarketing = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_marketing-dev-root');
    if (el) mountMarketing(el);
}

export { mountMarketing };
