/*
#4. Som en student vill jag kunna söka efter todo items som innehåller en viss text, så att jag lätt kan se om en viss sak finns med i priolistan.
4A. Det ska finnas ett inputfält, där man kan skriva text
4B. det ska visas element som matchar den sökta texten
*/


import PrioList from "./PrioList"

describe("<PrioList /> ",  () => {
        

    it("should have a input field", () => {
        cy.mount(<PrioList /> )
        cy.get("[data-cy='search-input']").should("be.visible")
    })
    it("should be able to match input to elements on the page", () => {
        cy.mount(<PrioList /> )
        let inputValue = "Re"
        cy.get("[data-cy='search-input']").type(inputValue)
        cy.get("div").contains(inputValue).should("be.visible")
    })
    
})