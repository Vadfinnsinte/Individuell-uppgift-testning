/*
#6. Som en student vill jag kunna se en sammanställning av totala antalet todos och hur många som inte är klara, så att jag får en överblick över min produktivitet. (Ex.: "15/20 klara")
6A. Kolla att knappen finns och kan klickas. 
6B. Kolla att alla chekboxar är ocheckade. (Kolla att variablerna ändrasts i store)
*/

import Header from "./Header"
import { useStore } from "../data/store"


describe("Tests userStorie #6", () => {
    let testData = [ { id: 1, day: 'måndag', done: true, late: false, text: 'Göra klart inlämning' },
    { id: 2, day: 'tisdag', done: true, late: false, text: 'Lektion i skolan 9-16' },
    { id: 3, day: 'tisdag', done: false, late: true, text: 'Övning 1' },
    { id: 4, day: 'onsdag', done: false, late: false, text: 'Repetera lektionen' }]

    it("Should have a button, when clicked it should changel done: true till false", () => {
        useStore.setState({todos: testData })
        cy.mount(<Header /> )
        cy.get('[data-cy="redo-week-btn"]').should("be.visible")
        cy.get('[data-cy="redo-week-btn"]').click()
        cy.then(() => {
            const todos = useStore.getState().todos;
            todos.forEach(todo => {
                expect(todo.done).to.equal(false);
            });
        });

    })

})