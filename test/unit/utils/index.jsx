import { initStore } from '../../src/client/store';
import { createMemoryHistory } from 'history';
import { MockCartApi, MockData } from '../mock';
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Application } from './Application';

const BASENAME = '/hw/store';

export function renderApplication() {
    const api = new MockData(BASENAME);
    const cart = new MockCartApi();
    const store = initStore(api, cart);
    const history = createMemoryHistory({
        initialEntries: ['/cart'],
        initialIndex: 0,
    });
    const application = (
        <BrowserRouter basename={BASENAME}>
            <Provider store={store}>
                <Application />
            </Provider>
        </BrowserRouter>
    );
    return { ...render(application), api, cart, store, history };
}
