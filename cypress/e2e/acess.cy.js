/// <reference types="Cypress" />

import cad from '../page_object/login.page'
import { faker } from '@faker-js/faker';
import dados from '../helpers/dados'

describe('Cadastro usuario', () => {

  const param = {
    "email": faker.internet.email(),
    "pass": faker.internet.password()
  }

  beforeEach(() => {
    cy.visit('/minha-conta/')
  })


  it('Deve cadastrar e Realiza Login', () => {
    cad.cad_usuario(param)
    cy.logOff()
    cy.login(param)
  })
})
