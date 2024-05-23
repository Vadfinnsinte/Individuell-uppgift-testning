/*
#4. Som en student vill jag kunna söka efter todo items som innehåller en viss text, så att jag lätt kan se om en viss sak finns med i priolistan.
4A. Det ska finnas ett inputfält, där man kan skriva text
4B. det ska visas element som matchar den sökta texten
5. Som en student vill jag kunna se en sammanställning av totala antalet todos och hur många som inte är klara, så att jag får en överblick över min produktivitet. (Ex.: "15/20 klara")
5A. En text i vad ska jag göra nu som visar hur många todos som är gjorda. 
#6. Som en student vill jag kunna se en sammanställning av totala antalet todos och hur många som inte är klara, så att jag får en överblick över min produktivitet. (Ex.: "15/20 klara")
*/

describe("User stories #4, #5 och #6", () => {
    beforeEach(() => {
        cy.visit("/") 
    })
    
    it("should check an todo, then uncheck an todo then search for the added todo. Shoud show how many is done(1/2) #4 & #5", () => {
        let inputValue = "Göra klart"
        cy.get('[data-cy="checkbox"]').last().click()
        cy.get('[data-cy="checkbox"]').last().should("be.checked")
        cy.get('[data-cy="checkbox"]').first().click()
        cy.get('[data-cy="checkbox"]').first().should("not.be.checked")
        cy.get("[data-cy='search-input']").type(inputValue)
        cy.get("div").first().contains(inputValue).should("be.visible")
        cy.get("[data-cy='items']").then($item => {
            const initialLength = $item.length;
            cy.get('[data-cy="checkbox"]').then($checkboxes => {
                let checkedBoxes = $checkboxes.filter(':checked')
                checkedBoxes = checkedBoxes.length
                const expectedText = `${checkedBoxes}/${initialLength} klara`;
                cy.get('[data-cy="todo-header"]').contains(expectedText)
            })
        })
    })
    it("Sholud uncheck all the checkboxes when 'starta om vecka'-knappen klickas på #6", () => {
        cy.get('[data-cy="redo-week-btn"]').click()
        cy.get('[data-cy="checkbox"]').then($checkboxes => {
            let checkedBoxes = $checkboxes.filter(':checked')
            checkedBoxes = checkedBoxes.length
            expect(checkedBoxes).to.equal(0)
        })
        
    })
})
