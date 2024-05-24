/*
#2. Som student vill jag kunna ta bort ett todo item, eftersom att saker kan ändras
2A. Det ska finnas en icon för att radera ett todo. 
2B. Man ska kunna klicka på iconen för och det ska ta bort todo. 

#3. Som en student vill jag kunna ändra texten för en todo item, så att jag kan uppdatera den om något nytt händer.
3A Det ska finnas en icon för att ändra testen i todon
3B När man klickar på knappen ska det dyka upp en input som man kan skriva sin text i
3C Det ska finnas en knapp för att spara den uppdaterade texten
3D Den nya texten ska visas i todon
*/


describe(" Delete, change and add.  #2 & #3 ", () => {
    it("loads page, deletes a todo-item and changes another todo-item, then adds a new one", () => {
        cy.visit("/")
        // plocka ut längden på delete-icon
        cy.get("[data-cy='delete-icon']").then($icons => {
            const initialLength = $icons.length;
            
            // Delete the first todo item
            cy.get("[data-cy='delete-icon']").first().click();

            // Assert the length of delete-icon elements decreased by 1
            cy.get('[data-cy="delete-icon"]').should("have.length", initialLength - 1);
        });

        const inputValue = "Gör uppgift 7B"
        cy.get('[data-cy="edit-icon"]').first().click()
        
        cy.get('[data-cy="input-field"]').type(inputValue)
        cy.get('[data-cy="save-icon"]').click()
        cy.get('label').first().contains(inputValue).should("be.visible")

        const addInput = "Jobba på porfolio sida"
        cy.get('[data-cy="add-btn"]').first().click()
        cy.get('[data-cy="add-input"]').type(addInput)
        cy.get('[data-cy="add-btn"]').first().click()
        cy.get('[data-cy="items"]').first().contains(addInput).should("be.visible")       

    })
})