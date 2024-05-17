/*
#2. Som student vill jag kunna ta bort ett todo item, eftersom att saker kan ändras
2A. Det ska finnas en icon för att radera ett todo. 
2B. Man ska kunna klicka på iconen för och det ska ta bort todo. 
*/
import Item from "./Item.jsx"
import { splitTodosIntoDays } from "../../utils/list.js"
import { useStore } from "../../data/store.js"

describe("<Item />", () => {
    let days
    
        beforeEach(() => {
            const todos = useStore.getState().todos
            days = splitTodosIntoDays(todos)
        })
    it("should have an icon for removal of todo", () => {
        days.forEach((day => {
            cy.mount(<Item item={day} key={day.id} />)
            cy.get('[data-cy="delete-icon"]').contains("🗑️").should("be.visible")
    }))
    })
    it("Should delete a todo item when clicking on the 🗑️ icon ", () => {
        days.forEach(day  => {
            cy.mount(<Item item={day} key={day.id} />)
            cy.get('[data-cy="delete-icon"]').click()
            
        })
    })
})