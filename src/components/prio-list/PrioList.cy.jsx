/*
#4. Som en student vill jag kunna söka efter todo items som innehåller en viss text, så att jag lätt kan se om en viss sak finns med i priolistan.
4A. Det ska finnas ett inputfält, där man kan skriva text
4B. det ska visas element som matchar den sökta texten

5. Som en student vill jag kunna se en sammanställning av totala antalet todos och hur många som inte är klara, så att jag får en överblick över min produktivitet. (Ex.: "15/20 klara")
5A. En text i vad ska jag göra nu som visar hur många todossom är gjorda. 
*/



import PrioList from "./PrioList"

describe("<PrioList /> ",  () => {
    beforeEach(() => {
        cy.mount(<PrioList /> )
    })

    it("should have a input field #4A", () => {
        cy.get("[data-cy='search-input']").should("be.visible")
    })
    it("should be able to match input to elements on the page #4B", () => {
        let inputValue = "Re"
        cy.get("[data-cy='search-input']").type(inputValue)
        cy.get("div").contains(inputValue).should("be.visible")
    })
    it("Should show how many tasks you have done #5A", () => {
        cy.get('[data-cy="todo-header"]').contains("3/6").should("be.visible")
    })
    
})

