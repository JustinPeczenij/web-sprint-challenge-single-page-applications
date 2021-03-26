describe('Pizza Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    });

    const nameInput = ()=> cy.get('input[name="name"]');
    const sizeSelect = ()=> cy.get('select[name="size"]');


    it('Sanity check', () => {
        expect(true).to.equal(true);
    });

    it('Get the name input and type in it', () => {
        nameInput()
            .type('Justin Peczenij')
            .should('have.value', 'Justin Peczenij');
    })

    it('User can select multiple toppings', () => {
        cy.get('input[type="checkbox"]')
            .check()
            .should('have.checked')
            .uncheck();
    })

    it('User can submit the form', () => {
        nameInput()
            .type('Justin Peczenij')
            .should('have.value', 'Justin Peczenij');
        sizeSelect()
            .select('extra-large');
        cy.get('.submit')
            .click();
        nameInput()
            .should('have.value','')
        sizeSelect()
            .should('have.value','')
    })
})