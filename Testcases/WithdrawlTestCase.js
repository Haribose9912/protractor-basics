describe('withdrawl test suite',function(){
	var login_pom = require("../POM/LoginPage.js");
	var landingpage_pom = require("../POM/CustomerLandingPage.js");	
	
	it('withdrawl a valid amount', function(){
		
		loginAsACustomer();
		var initialAmount;
		landingpage_pom.accountBalance.getText().then(function(txt){
			initialAmount = txt;
		}); 
		landingpage_pom.withdrawlButton.click();
		landingpage_pom.amountTextBox.sendKeys("1000");
		landingpage_pom.amountTextBox.sendKeys(protractor.Key.ENTER).then(function() {
			landingpage_pom.accountBalance.getText().then(function(txt){
				expect((Number(initialAmount) - Number(txt)) == 1000).toBe(true);
			});
		});
		
		
	})
	
	it('trying to withdraw exceeding balance', function(){
		loginAsACustomer();
		landingpage_pom.withdrawlButton.click();
		landingpage_pom.amountTextBox.sendKeys("100000");
		landingpage_pom.amountTextBox.sendKeys(protractor.Key.ENTER);
		landingpage_pom.amountErrorMessage.getText().then(function(txt){
			expect(txt).toEqual("Transaction Failed. You can not withdraw amount more than the balance.");
		});
		
		
	})
	
	
	
	//utility method
	function loginAsACustomer(){
		login_pom.getTestURL();
		login_pom.customerButton.click().then(function(){
			browser.sleep(2000);
			login_pom.loginNameDropdown.element(by.css("option[value='1']")).click().then(function(){
				login_pom.loginButton.click();
				})
			});
	}
})