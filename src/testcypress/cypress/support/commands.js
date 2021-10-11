Cypress.Commands.add("setResolution", ()=> {
    if(Cypress.env('size') == 'iphone'){
        cy.viewport('iphone-6')
    }else if(Cypress.env('size') == 'ipad'){
        cy.viewport('ipad-2')
    }else{
        cy.viewport(1200,800)
    }
})