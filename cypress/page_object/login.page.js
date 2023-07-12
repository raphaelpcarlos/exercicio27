class PageCadastro {

    cad_usuario({ email, pass }) {

        cy.get('#reg_email').clear();
        cy.get('#reg_email').type(email);
        cy.get('#reg_password').clear('123');
        cy.get('#reg_password').type(pass);
        cy.get(':nth-child(4) > .button').click();
        cy.get('.page-title').should('contain', "Minha conta")
        cy.visit(`/product/josie-yoga-jacket`)
    }
}

export default new PageCadastro;