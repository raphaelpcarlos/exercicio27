Cypress.Commands.add("logOff", () => {
    cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click();
    cy.get('.icon-user-unfollow').should('be.visible');
})

Cypress.Commands.add("login", ({email, pass}) => {
    cy.visit('/minha-conta/')
    cy.get('#username').clear().type(email);
    cy.get('#password').clear().type(pass);
    cy.get('#rememberme').check();
    cy.get('.woocommerce-form > .button').click();
    cy.get('.page-title').should('have.text', 'Minha conta');
})

