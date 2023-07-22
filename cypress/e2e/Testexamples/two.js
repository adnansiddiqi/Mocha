/// <reference types="Cypress" />

describe('E2E Testing', () => {

    it('Login test', () => {
        cy.visit("https://www.saucedemo.com/").screenshot()
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("[type='submit']").click()
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get(".shopping_cart_link").click()
        cy.get("#checkout").click()
        cy.get("[name='firstName']").type("David")
        cy.get("[placeholder='Last Name']").type("Brown")
        cy.get("#postal-code").type("E129PS")
        cy.get("#continue").click()
        cy.get("#finish").click()
    
        
    
    })

  })