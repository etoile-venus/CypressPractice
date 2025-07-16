export default class AddRemoveElementsPage {
	get addElementButton() {
		return cy.get('button[onclick="addElement()"]')
	}

    get removeButton() {
        return cy.get('.added-manually')
    }

    clickAddElementButton() {
        this.addElementButton.click()
    }

    clickRemoveButton() {
        this.removeButton.click()
    }
}
