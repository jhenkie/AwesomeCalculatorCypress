const calculatorInput = '#input'
const calculatorButton = '#run'
const calculatorOutput = '#output'
const imageAds = '#id1'

class homePage {
	static visit() {
		cy.setResolution()
			.fixture('url')
			.then((find) => {
				cy.visit(find.url)
				cy.url().should('eq', find.url)
			})
	}

	static checkHeader(title) {
		cy.contains(title)
	}

	static checkInput() {
		cy.get(calculatorInput).should('be.visible')
		cy.screenshot('Calculator input')
	}

	static checkButton() {
		cy.get(calculatorButton).should('be.visible')
	}

	static checkAds() {
		cy.get(imageAds).should('be.visible')
	}

	static fillInInput(input) {
		cy.get(calculatorInput).type(input)
	}

	static clickCalculate() {
		cy.get(calculatorButton).click()
	}

	static checkOutputNotVisible() {
		cy.get(calculatorOutput).should('have.text', '')
	}

	static checkOutputVisible() {
		cy.get(calculatorOutput).should('be.visible')
	}

	static checkOutput(result) {
		cy.get(calculatorOutput).should('contain.text', result)
	}

	static waitPage() {
		cy.wait(28000)
	}

	static checkNewAds() {
		cy.fixture('url').then((find) => {
			cy.intercept('GET', find.urlAds).as('getAds')
		})
		cy.wait('@getAds').its('response.statusCode').should('eq', 200)
		cy.fixture('images').then((img) => {
			cy.get(imageAds)
				.invoke('attr', 'src')
				.should('be.oneOf', [img.ads1, img.ads2, img.ads3, img.ads4])
			cy.screenshot('image ads')
		})
	}
}

export default homePage
