export default class DropdownPage {
	get dropdown() {
        return cy.get('#dropdown')
    }

    get optionOne() {
        return cy.get('#dropdown').find('option[value="1"]')
    }

    get optionTwo() {
        return cy.get('#dropdown').find('option[value="2"]')
    }

    selectOptionOne() {
        this.dropdown.select('1')
    }

    selectOptionTwo() {
        this.dropdown.select('2')
    }
}
