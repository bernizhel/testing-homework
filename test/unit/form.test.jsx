import { waitFor } from '@testing-library/react';
import events from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { addToCart } from '../../src/client/store';
import { renderApplication } from './utils';

describe('Форма отправки', () => {
    it('Форма с пустыми полями не отправляется', async () => {
        const { api, store, container } = renderApplication();
        const product = (await api.getProductById(111)).data;
        store.dispatch(addToCart(product));

        const checkoutBtn = container.querySelector('.Form-Submit');
        await events.click(checkoutBtn);
        const errorMsg = container.querySelector('.invalid-feedback');
        expect(errorMsg).toBeInTheDocument();
    });

    it('Форма с валидными данными отправляется', async () => {
        const { api, store, container } = renderApplication();
        const product = (await api.getProductById(111)).data;

        store.dispatch(addToCart(product));

        const params = {
            name: 'John',
            phone: '12345678912',
            address: 'Moscow',
        };
        const nameField = getByRole('textbox', {
            name: /name/i,
        });
        const phoneField = getByRole('textbox', {
            name: /phone/i,
        });
        const addressField = getByRole('textbox', {
            name: /address/i,
        });

        await events.type(nameField, params.name);
        await events.type(phoneField, params.phone);
        await events.type(addressField, params.address);

        const checkoutBtn = container.querySelector('.Form-Submit');
        await events.click(checkoutBtn);

        const successMsg = document.querySelector('.Cart-SuccessMessage');

        await waitFor(() => expect(successMsg).toBeInTheDocument());
    });
});
