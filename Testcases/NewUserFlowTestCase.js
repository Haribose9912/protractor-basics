describe('new user flow test suite',function(){
	var login_pom = require("../POM/LoginPage.js");
	var manager_landing_page = require("../POM/ManagerLandingPage.js");
	var customer_landing_page = require("../POM/CustomerLandingPage.js")
	
	it('login as a new user',function(){
		createNewUser();
		manager_landing_page.homeButton.click()
		login_pom.customerButton.click().then(function(){
			browser.sleep(1000);
		});
		login_pom.loginNameDropdown.element(by.css("option:nth-last-child(1)")).click();
		login_pom.loginButton.click().then(function(){
			browser.sleep(1000);
			customer_landing_page.customerNameLable.getText().then(function(txt){
				expect(txt).toBe("Luke Skywalker");
			})
		})
		
		
	})
	
	function createNewUser(){
		loginAsAManager();
		manager_landing_page.addcustomer.click();
		manager_landing_page.firstNameTextBox.sendKeys("Luke");
		manager_landing_page.lastNameTextBox.sendKeys("Skywalker");
		manager_landing_page.postCodeTextBox.sendKeys("10350")
		manager_landing_page.addCustomerSubmitButton.click();
		browser.switchTo().alert().accept();
		
	}
	
	function loginAsAManager(){
		login_pom.getTestURL();
		login_pom.managerButton.click();
	}
})