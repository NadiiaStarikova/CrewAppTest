describe('Functionality checking', () => {
/*Block of functional tests that check the main flow scenarios*/
    beforeEach(() => {
            const name = 'Test'
            const city = 'Kyiv'
            cy.clearCookies()
            cy.visit('http://localhost:3000')
        })
        
        it('Submit form', () => {
            cy.get('input#name').type(name)
            cy.get('input#city').type(city)
            cy.get('button').contains('Submit').click()
            cy.get('div.CrewMember-container').should('be.hidden')
            /*Expected result described in this test based on actual behavior. But it seems to me that it isn't correct. 
            /*Expected result should be 'Submitted entity is visible on the page'*/
            })
        it('Clear form', () => {
            cy.get('input#name').type(name)
            cy.get('input#city').type(city)
            cy.get('button').contains('Submit').click()
            cy.get('button').contains('Clear').click()
            cy.get('div.CrewMember-container').should('be.visible')
            /*Expected result described in this test based on actual behavior. But it seems to me that it isn't correct. 
            /*Expected result should be 'Entered data is deleted from the form'*/
            })
        it('Move from Applied to Interviewing', () => {
            cy.get('div.App-column').contains('Applied').find('button.CrewMember-up').click()
            cy.get('div.App-column').contains('Interviewing').find('div.CrewMember-container').should('be.visible')
            /*Checking of appearence the moved entity in Interviewing column*/
            })  
        it('Move from Interviewing to Applied', () => {  
            cy.get('div.App-column').contains('Interviewing').find('button').click()
            cy.get('div.App-column').contains('Interviewing').find('div.CrewMember-container').should('be.hidden')
            /*Checking of disappearence the moved entity from Interviewing column*/
        })

        it('Move from Interviewing to Hired', () => {  
            cy.get('div.App-column').contains('Applied').find('button.CrewMember-up').click()
            cy.get('div.App-column').contains('Interviewing').find('button.CrewMember-up').click()
            cy.get('div.App-column').contains('Interviewing').find('div.CrewMember-container').should('be.hidden')
            /*Checking of disappearence the moved entity from Interviewing column*/
        })

        it('Move from Hired to Interviewing', () => {  
            cy.get('div.App-column').contains('Hired').find('button').click()
            cy.get('div.App-column').contains('Interviewing').find('div.CrewMember-container').should('be.visible')
            /*Checking of appearence the moved entity in Interviewing column*/
        })
            
})

describe('Layout checking', () => {
/*Block of UI tests that check the presence of all main elements on the page*/
        beforeEach(() => {
            cy.clearCookies()
            cy.visit('http://localhost:3000')
        })
        
        it('Logo is visible', () => {
            cy.get('img.App-logo').should('be.visible')
            })
    
        it('Header is visible', () => {
            cy.get('h1.App-title').contains('OpenOceanStudio: Crew Applications').should('be.visible')
            })
    
        it('Form is visible', () => {
            it('Name is visible', () => {
                cy.get('//*[@id="filters"]/text()[1]').should('be.visible')
                })
            it('Name input is visible', () => {
                cy.get('input#name').should('be.visible')
                })
            it('City is visible', () => {
                cy.get('//*[@id="filters"]/text()[2]').should('be.visible')
                })
            it('City input is visible', () => {
                cy.get('input#city').should('be.visible')
                })
            it('Submit button is visible', () => {
                cy.get('button').contains('Submit').should('be.visible')
                })
            it('Clear button is visible', () => {
                cy.get('button').contains('Clear').should('be.visible')
                })
            })
        it('Columns headers are visible', () => {
            it('Applied is visible', () => {
                cy.get('h2').contains('Applied').should('be.visible')
                })
            it('Interviewing is visible', () => {
                cy.get('h2').contains('Interviewing').should('be.visible')
                })
            it('Hired is visible', () => {
                cy.get('h2').contains('Hired').should('be.visible')
                })
            })
        })