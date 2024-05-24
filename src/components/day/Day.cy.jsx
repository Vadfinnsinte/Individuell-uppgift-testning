
import Day from "./Day.jsx"

describe("<Day/>", () => {
    
    let weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag"]
    
    let testData = [ { id: 1, day: 'måndag', done: true, late: false, text: 'Göra klart inlämning' },
    ]
    
    it("should show a card for day, with, Day, a task and a 'ny uppgift'-button ", () => {
        cy.log(testData[0]);
       cy.mount(<Day day={testData} dayIndex={0} /> )
        cy.get('[data-cy="day"]').contains(weekdays[0]).should("be.visible")
        cy.get('[data-cy="checkbox"]').should("be.visible")
        
        cy.get("label").contains('Göra klart inlämning').should("be.visible")
        cy.get('[data-cy="add-btn"]').contains("Ny uppgift").should("be.visible")
    })
       
    
    
})