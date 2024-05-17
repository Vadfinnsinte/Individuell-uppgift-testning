
/*
#1 Som student vill jag att veckans alla dagar visas, så att jag kan välja fritt när jag vill göra mina uppgifter.
1A. det ska finnas 1 element som innehåller måndag
1B. det ska finnas 1 element som innehåller Tisdag
1C. det ska finnas 1 element som innehåller Onsdag
1D. det ska finnas 1 element som innehåller Torsdag
1E. det ska finnas 1 element som innehåller Fredag
*/

import { splitTodosIntoDays } from "../../utils/list.js"
import Day from "./Day.jsx"
import { useStore } from "../../data/store.js"

describe("<Day/>", () => {
    let days
    let weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag"]
    beforeEach(() => {
        const todos = useStore.getState().todos
        days = splitTodosIntoDays(todos)
    })
    
    it("should show a card for days monday through friday", () => {
        days.forEach((day, index) => {
            cy.mount(<Day day={day}/>)
            cy.get('[data-cy="weekday-header"]').invoke("text").then((text) => {
               let weekday = weekdays[index].toLocaleLowerCase()
               text = text.trim()
                expect(weekday).to.equal(text)
            })
        })
    })
})