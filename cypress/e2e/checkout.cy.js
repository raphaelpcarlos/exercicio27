const data = require('../fixtures/dados.json')
import { faker } from '@faker-js/faker';
import cad from '../page_object/login.page'

describe('Funcionalidade de checkout', () => {

    const param = {
        "email": faker.internet.email(),
        "pass": faker.internet.password()
    }

    beforeEach(() => {
        cy.visit('/minha-conta/')
    })

    it('Deve realizar o checkout com sucesso', () => {
        cad.cad_usuario(param)
        cy.addIten()
        cy.checkout(data.firstName, data.lastName, data.country, data.address1, data.city, data.city, data.state, data.postCode, data.phone, data.email)
        cy.checkoutConfirm()
    });
});