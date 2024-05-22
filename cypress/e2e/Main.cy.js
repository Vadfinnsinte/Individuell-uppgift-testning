

describe(", ", () => {
    it("loads page, deletes a todo-item and changes another todo-item", () => {
        cy.visit("/")
        cy.get("[data-cy='delete-icon']").first().click()
        cy.get('[data-cy="delete-icon"]').should("have.length", 5);
        let inputValue = "Gör uppgift 7B"
        cy.get('[data-cy="edit-icon"]').first().click()
        cy.get('[data-cy="input-field"]').should("be.visible")
        cy.get('[data-cy="save-icon"]').contains("💾").should("be.visible")
        cy.get('[data-cy="input-field"]').type(inputValue)
        cy.get('[data-cy="save-icon"]').click()
        cy.get('label').first().contains(inputValue).should("be.visible")
    })
})