/// <reference types="cypress" />
import { url } from '../../../config'
import HerokuAppHome from '../../pages/HerokuAppHome'
import AddRemoveElementsPage from '../../pages/AddRemoveElementsPage'

const home = new HerokuAppHome()
const addRemoveElement = new AddRemoveElementsPage()

describe('Add Remove Elements functionality', () => {
    beforeEach('Page set up', () => {
        cy.visit(url)
        home.clickAddRemoveElements()
    })

    it('User can successfully add element by clicking on addElement button', () => {
        addRemoveElement.clickAddElementButton()
        addRemoveElement.removeButton.should('be.visible')

    })

    it('User can successfully remove element by clicking on remove button', () => {
        addRemoveElement.clickAddElementButton()
        addRemoveElement.clickRemoveButton()
        addRemoveElement.removeButton.should('not.exist')
    })
})