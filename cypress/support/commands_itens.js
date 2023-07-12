Cypress.Commands.add('addIten', () => {
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Black').click()
    cy.get('.input-text').clear().type(2)
    cy.get('.single_add_to_cart_button').click()

})

Cypress.Commands.add('checkoutConfirm', () => {
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.wait(3000)
})

Cypress.Commands.add('checkout', (firstName, lastName, country, address1, city, state, postCode, phone, email) => {
    const fd = new FormData()
    fd.append('wc-ajax', 'checkout')
    fd.append('billing_first_name', firstName)
    fd.append('billing_last_name', lastName)
    fd.append('billing_country', country)
    fd.append('billing_address_1', address1)
    fd.append('billing_city', city)
    fd.append('billing_state', state)
    fd.append('billing_postcode', postCode)
    fd.append('billing_phone', phone)
    fd.append('billing_email', email)
    fd.append('payment_method', 'bacs')
    fd.append('terms', 'on')
    fd.append('terms-field', 1)
    fd.append('woocommerce-process-checkout-nonce', '30e0a8c583')
    fd.append('_wp_http_referer', `/?wc-ajax=update_order_review`)
    cy.request({
        url: `/?wc-ajax=checkout`,
        method: "POST",
        body: fd
    }).then((resp) => {
        expect(resp.status).to.eq(200)

    })
    cy.visit(`/checkout`)
})