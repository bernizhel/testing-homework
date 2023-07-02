import { renderApplication /*, openCatalogPage */ } from './utils';
import '@testing-library/jest-dom';

describe('Страницы', () => {
    it('В магазине должны быть главная страница', async () => {
        const { container } = renderApplication();
        const homePage = container.querySelector('.Home');
        expect(homePage).toBeInTheDocument();
    });

    it.skip('В магазине должны быть страница каталог', async () => {
        const { container } = await openCatalogPage();
        const catalogPage = container.querySelector('.Catalog');
        expect(catalogPage).toBeInTheDocument();
    });

    it('В магазине должны быть страница условий доставки', () => {
        const { history, container } = renderApplication();
        history.push('/delivery');
        const deliveryPage = container.querySelector('.Delivery');
        expect(deliveryPage).toBeInTheDocument();
    });

    it('В магазине должна быть страница контактов', () => {
        const { container, history } = renderApplication();
        history.push('/contacts');
        const contactsPage = container.querySelector('.Contacts');
        expect(contactsPage).toBeInTheDocument();
    });
});
