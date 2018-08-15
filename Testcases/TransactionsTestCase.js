describe('transaction testsuite', function(){
	var login_pom = require("../POM/LoginPage.js");
	var landingpage_pom = require("../POM/CustomerLandingPage.js");
	var transactionspage_pom = require("../POM/TransactionsPage.js");
	var depositAmount="2000"
	
	it('checking if deposit is recorded in transaction history', function(){
		loginAsACustomer();
		landingpage_pom.transactionsButton.click();
		transactionspage_pom.resetButton.click();
		transactionspage_pom.backButton.click();
		depositMoneyToAccount();
		landingpage_pom.transactionsButton.click();
		transactionspage_pom.amountColumn.getText().then(function(txt){
			expect(txt).toEqual(depositAmount);
		})
		
		
	})
	
	function loginAsACustomer(){
		login_pom.getTestURL();
		login_pom.customerButton.click().then(function(){
			browser.sleep(2000);
			login_pom.loginNameDropdown.element(by.css("option[value='1']")).click().then(function(){
				login_pom.loginButton.click();
				})
			});
	}
	
	function depositMoneyToAccount(){
			landingpage_pom.depositButton.click().then(function(){
			landingpage_pom.amountTextBox.sendKeys(depositAmount);
			landingpage_pom.depositSubmitButton.click().then(function(){
				browser.sleep(2000);
			})
			})
	}
})