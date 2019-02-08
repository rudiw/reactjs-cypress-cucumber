describe('My First Test', function() {
    it('Does not do much', function() {
        // 1. Arrange - setup initial app state
        //  - visit a web page
        //  - query for an element
        // 2. Act - take an action
        //  - interact with that element
        // 3. Assert - make an assertion
        //  - make an assertio about page content


        expect(true).to.equal(true);
    }) ,
    it('Visits the kitchen sink', function() {
        //visits in 'Finds an element'
        // cy.visit('https://example.cypress.io');

    }),
    it('Finds an element', function () {
        // cy.visit('https://example.cypress.io');

        // cy.contains('type')

        // replaced by 'Clicks an element'
    }),
    it('Clicks an element', function () {
        // cy.visit('https://example.cypress.io');

        // cy.contains('type').click();

        // cy.url().should('include', '/commands/actions');

        // replaced by 'Gets, types and asserts'
    }),
    it('Gets, types and asserts', function () {
        // cy.visit('https://example.cypress.io');

        // cy.contains('type').click();

        // cy.url().should('include', '/commands/actions');

        // cy.get('.action-email')
        //     .type('fake@email.com')
        //     .should('have.value', 'fake@email.com');

        // replaced by 'Gets, types and asserts with pause'
    }),
    it('Gets, types and asserts with pause', function () {
        cy.visit('https://example.cypress.io');

        cy.pause();

        cy.contains('type').click();

        cy.url().should('include', '/commands/actions');

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
    })
 })