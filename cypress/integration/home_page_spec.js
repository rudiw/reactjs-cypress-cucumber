describe('The Home Page', function() {
    beforeEach(function () {
        // reset and seed the database prior to every test
        // cy.exec('npm run db:reset && npm run db:seed')

        // seed a post in the DB that we control from our tests
        cy.request('POST', '/rest/person/signUp', {
            username: 'new_person',
            name: 'New Person',
            rawPassword: 'mitrais'
        })
    
    }),
    it('successfully loads', function() {
      cy.visit('http://localhost:8080') // change URL to match your dev URL
        // cy.visit('/') // change URL to match your dev URL --> // "baseUrl": "http://localhost:8080" in cypress.json
    })
  })