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

import Item from "./Item.jsx"
import { useStore } from "../../data/store.js"

describe("<Item /> user stories #2", () => {
    
    
    let testData = [ { id: 1, day: 'måndag', done: true, late: false, text: 'Göra klart inlämning' },
    { id: 2, day: 'tisdag', done: true, late: false, text: 'Lektion i skolan 9-16' },
    { id: 3, day: 'tisdag', done: false, late: true, text: 'Övning 1' },
    { id: 4, day: 'onsdag', done: false, late: false, text: 'Repetera lektionen' }]

it("should have an icon for removal of todo #2A", () => {
    cy.mount(<Item item={testData[0]} key={testData[0].id} />)
    cy.get('[data-cy="delete-icon"]').contains("🗑️").should("be.visible")
    
})

it("should render the text in the label #2B", () => {
    
    cy.mount(<Item item={testData[0]} key={testData[0].id} />)
    
    cy.get("label").should("contain", testData[0].text).and("be.visible")
    cy.mount(<Item item={testData[2]} key={testData[2].id} />)
    
    cy.get("label").should("contain", testData[2].text).and("be.visible")
    
})
it("Should delete a todo item when clicking on the 🗑️ icon #2C", () => {
    useStore.setState({
        todos: testData
    })

    cy.mount(<Item item={testData[0]} key={testData[0].id} />)
    cy.get('[data-cy="delete-icon"]').click()
    // Att den tar bort elementet testas i E2E testerna.
})
    
it("should have an edit-icon #3A", () => {
    cy.mount(<Item item={testData[0]} key={testData[0].id} />)
    cy.get('[data-cy="edit-icon"]').contains("✍️").should("be.visible")
})
it("should have an input-field after pressing edit-icon, when typing it should save the input when pressing the save-icon #3B", () => {
    let inputValue = "Gör uppgift 7B"
    cy.mount(<Item item={testData[0]} key={testData[0].id} />)
    cy.get('[data-cy="edit-icon"]').click()
    cy.get('[data-cy="input-field"]').type(inputValue)
    cy.get('[data-cy="save-icon"]').click()
    // att den uppdaterar elementet testas i E2E testerna
    
})

})



