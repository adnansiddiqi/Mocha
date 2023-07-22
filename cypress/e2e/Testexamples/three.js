describe('mouse events',()=>{

    it('Mouse hover',()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').click()
        cy.get('h2').should('be.visible')
    })

    it('Right click', ()=>{

        cy.visit("https://demoqa.com")
        cy.get(':nth-child(1) > :nth-child(1) > .card-body').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()

        // first approach
        // cy.get('#rightClickBtn').trigger('contextmenu')
        // cy.get('#rightClickMessage').should('have.text', 'You have done a right click')

        // second approach
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click')
    })

    it('double clikc action', ()=>{
        cy.visit("https://demoqa.com")
        cy.get(':nth-child(1) > :nth-child(1) > .card-body').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
        // 1st approach
        //cy.get('#doubleClickBtn').trigger('dblclick')
        // second approach
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click')
    })

    it('drag and drop', ()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box1').drag('#box101')
        //cy.get('#box1').drag('#box101', {force:true})
        
    })

    it.only('scrol the page', ()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get(':nth-child(1) > tbody > :nth-child(51) > :nth-child(1)').scrollIntoView({duration:30000})
        cy.get(':nth-child(1) > tbody > :nth-child(51) > :nth-child(1)').should('be.visible')
    })

})