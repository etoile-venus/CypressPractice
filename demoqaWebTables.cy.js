/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Web Tables funcionality', () => {

    function deleteAllRows() {
        cy.get('span[title="Delete"]').then(($btns) => {
            const sviIdjevi = Array.from($btns).map(el => el.id);
            sviIdjevi.forEach(id => {
                cy.get(`#${id}`).click({ force: true })
                cy.wait(300) 
            })
        })
    }

    function addNewRecord2(){
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').clear().type("Milos")
        cy.get('#lastName').clear().type("Bijeljanin")
        cy.get('#userEmail').clear().type("bijeljaninmilos@gmail.com")
        cy.get('#age').clear().type("27")
        cy.get('#salary').clear().type("100000")
        cy.get('#department').clear().type("QA")
        cy.get('#submit').click()
    }

    function addNewRecord3(){
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').clear().type("Deni")
        cy.get('#lastName').clear().type("Zekoslav")
        cy.get('#userEmail').clear().type("zekoslavko@gmail.com")
        cy.get('#age').clear().type("11")
        cy.get('#salary').clear().type("100000")
        cy.get('#department').clear().type("QA")
        cy.get('#submit').click()
    }

    beforeEach('Page set up', () => {
        cy.visit('https://demoqa.com')
        cy.contains('Elements').click()
        cy.contains("span.text", "Web Tables").click()

    })

    it("Delete existing rows", () => {
        deleteAllRows()
        cy.get('span[title="Delete"]').should('not.exist')
    })

    it("Successful row adding", () => {
        deleteAllRows()

        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').clear().type("Danica")
        cy.get('#lastName').clear().type("Bijeljanin")
        cy.get('#userEmail').clear().type("bijeljanindanica@gmail.com")
        cy.get('#age').clear().type("26")
        cy.get('#salary').clear().type("100000")
        cy.get('#department').clear().type("QA")
        cy.get('#submit').click()

        //assert
        cy.get(".rt-tr-group").first().find(".rt-td").then(($cells) => {
            const values = []
            for (let i = 0; i < $cells.length; i++) {
            values.push($cells[i].innerText)
        }

        expect(values[0]).to.equal("Danica")
        expect(values[1]).to.equal("Bijeljanin")
        expect(values[2]).to.equal("26")
        expect(values[3]).to.equal("bijeljanindanica@gmail.com")
        expect(values[4]).to.equal("100000")
        expect(values[5]).to.equal("QA")
    })

    })

    it("Successful search funcionality", () => {
        deleteAllRows()
        addNewRecord2()
        addNewRecord3()

        const query = "Mil"

        cy.get("#searchBox").type(query)

        cy.get(".rt-tr-group").each(($row) => {
            const rowText = $row.text().trim()
            if (rowText !== "") {
                expect(rowText.toLowerCase()).to.include(query.toLowerCase())
            }
        })

    })



})