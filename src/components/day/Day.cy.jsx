
import { splitTodosIntoDays } from "../../utils/list.js"
import { useStore } from "../../data/store.js"
import Day from "./Day.jsx"

describe("<Day/>", () => {
    let days
    let weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag"]
    const todos = useStore.getState().todos
    days = splitTodosIntoDays(todos)

    
    it("should show a card for days monday through friday", () => {
        days.forEach((day, index) => {
            cy.mount(<Day day={day} dayIndex={index}/>)
            cy.get('[data-cy="weekday-header"]').invoke("text").then((text) => {
                cy.log("text: ", text)
               let weekday = weekdays[index].toLocaleLowerCase()
               text = text.trim().toLocaleLowerCase()
                expect(weekday).to.equal(text)
            })
       
        })
    })
})