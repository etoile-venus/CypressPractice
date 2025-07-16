/// <reference types="cypress" />
import { url } from '../../../config'
import HerokuAppHome from '../../pages/HerokuAppHome'
import Dropdown from '../../pages/DropdownPage'

const home = new HerokuAppHome()
const dropdown = new Dropdown()

describe('Form Authentication functionality', () => {
	beforeEach('Page set up', () => {
		cy.visit(url)
		home.clickDropdown()
	})

	it('Default option should be "Please select an option"', () => {
        dropdown.dropdown
            .find('option:selected')
            .should('have.text', 'Please select an option')
            .and('have.value', '')
    })

    it('User can select Option 1', () => {
        dropdown.selectOptionOne()
        dropdown.dropdown.should('have.value', '1')
        dropdown.optionOne.should('be.selected')
    })

    it('User can select Option 2', () => {
        dropdown.selectOptionTwo()
        dropdown.dropdown.should('have.value', '2')
        dropdown.optionTwo.should('be.selected')
    })

})