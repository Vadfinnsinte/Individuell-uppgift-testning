
import { useStore } from "../data/store.js"
import Footer from "./Footer.jsx"

describe("Check to se if today is functional", () => {
    it("Should show the day", () => {
        const weekday = "Fredag" 
        cy.mount(< Footer /> )
        useStore.setState({todayName: weekday })
        cy.get('[data-cy="today"]').contains(weekday).should("be.visible")

    })


})