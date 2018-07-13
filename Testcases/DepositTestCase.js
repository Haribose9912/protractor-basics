describe('deposit testsuit',function(){
	var login_pom = require("../POM/LoginPage.js");
	var landingpage_pom = require("../POM/CustomerLandingPage.js");
	
	it('depositing happy path',function(){
				
		loginAsACustomer();
		var initialAmount;
		landingpage_pom.accountBalance.getText().then(function(txt){
			initialAmount = txt;
		}) 
		landingpage_pom.depositButton.click().then(function(){
			landingpage_pom.amountTextBox.sendKeys(2000);
			landingpage_pom.depositSubmitButton.click().then(function(){
				landingpage_pom.accountBalance.getText().then(function(txt){
					
					//assertion	
					expect(((Number(txt) - Number(initialAmount)) == 2000)).toBe(true)
					
					
				}) 
			});
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