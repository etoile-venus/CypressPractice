export default class HerokuAppHome {
	get addRemoveElementsLink() {
		return cy.get('a[href*="/add_remove_elements"]')
	}

    get dropdownLink() {
		return cy.get('a[href*="/dropdown"]')
	}

	get formAuthenticationLink() {
		return cy.get('a[href*="/login"]')
	}

	clickAddRemoveElements() {
		this.addRemoveElementsLink.click()
	}

	clickDropdown() {
		this.dropdownLink.click()
	}

	clickFormAuthentication() {
		this.formAuthenticationLink.click()
	}
}
