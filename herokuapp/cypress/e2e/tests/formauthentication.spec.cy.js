/// <reference types="cypress" />
import { url } from '../../../config'
import HerokuAppHome from '../../pages/HerokuAppHome'
import FormAuthentication from '../../pages/FormAuthenticationPage'

const home = new HerokuAppHome()
const formAuthentication = new FormAuthentication()

describe('Form Authentication functionality', () => {
	beforeEach('Page set up', () => {
		cy.visit(url)
		home.clickFormAuthentication()
	})

	it('User can succesffuly log in with valid credentials', () => {
		formAuthentication.login('tomsmith', 'SuperSecretPassword!')
		formAuthentication.textMessage.should('contain.text', 'logged into')
	})

    it('Logged in user can succesffuly logout', () => {
		formAuthentication.login('tomsmith', 'SuperSecretPassword!')
        formAuthentication.clickLogoutButton()
		formAuthentication.textMessage.should('contain.text', 'logged out')
	})
})
