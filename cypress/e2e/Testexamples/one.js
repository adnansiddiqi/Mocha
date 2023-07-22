describe("hooks events",()=>{
    // runs just one time before test   
       before(()=>{
           cy.log("this will run just once before all the test")
       
   })
       // this will run before every it block
       beforeEach(()=>{
           cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
           cy.get("[name='username']").type("admin")
           cy.get("[name='password']").type("admin123")
           cy.get("[type='submit']").click()
       })
   
       //this will run just once after all tests
       after(()=>{
           cy.log("this is the after log")
       })
   
       it("frst event",()=>{
           cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()
           cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
           cy.get('.oxd-userdropdown-name').click()
           cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
       })
   
       it('second test', ()=>{
           cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
           cy.get('.oxd-table-filter-header-title > .oxd-text').should('be.visible')
           cy.get('.oxd-userdropdown-name').click()
           cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
       })
   })