export default class FormAuthenticationPage {
	get inputUsername() {
		return cy.get('#username')
	}

	get inputPassword() {
		return cy.get('#password')
	}

	get loginButton() {
		return cy.get('button[type="submit"]')
	}

    get logoutButton() {
        return cy.get('.button')
    }

    get textMessage() {
        return cy.get('#flash')
    }

	enterUsername(username) {
		this.inputUsername.clear().type(username)
	}

	enterPassword(password) {
		this.inputPassword.clear().type(password)
	}

	clickLoginButton() {
		this.loginButton.click()
	}

    clickLogoutButton() {
        this.logoutButton.click()
    }

	login(username, password) {
		this.enterUsername(username)
		this.enterPassword(password)
		this.clickLoginButton()
	}
}
