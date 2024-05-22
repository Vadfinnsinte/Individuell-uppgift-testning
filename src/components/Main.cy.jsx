
/*
#1 Som student vill jag att veckans alla dagar visas, så att jag kan välja fritt när jag vill göra mina uppgifter.
1A. det ska finnas 1 element som innehåller måndag
1B. det ska finnas 1 element som innehåller Tisdag
1C. det ska finnas 1 element som innehåller Onsdag
1D. det ska finnas 1 element som innehåller Torsdag
1E. det ska finnas 1 element som innehåller Fredag
1F. det ska finnas 1 element som innehåller Lördag
1G. det ska finnas 1 element som innehåller Söndag
*/

import Main from "./Main"


describe("<Main/>", () => {
    let weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"]
    it("should show days monday throuh sunday", () => {
        cy.mount(<Main/> )
        cy.get("[data-cy='weekday-header']").contains(weekdays[0]).should("be.visible")
        cy.get("[data-cy='weekday-header']").contains(weekdays[1]).should("be.visible")
        cy.get("[data-cy='weekday-header']").contains(weekdays[2]).should("be.visible")
        cy.get("[data-cy='weekday-header']").contains(weekdays[3]).should("be.visible")
        cy.get("[data-cy='weekday-header']").contains(weekdays[4]).should("be.visible")
        cy.get("[data-cy='weekday-header']").contains(weekdays[5]).should("be.visible")
        cy.get("[data-cy='weekday-header']").contains(weekdays[6]).should("be.visible")
    })
})