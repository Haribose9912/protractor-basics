describe('Accounts testsuite',function(){
	var login_pom = require("../POM/LoginPage.js");
	var manager_landing_page= require("../POM/ManagerLandingPage.js");
	
	it('opening an account',function(){
		loginAsAManager();
		createAUser();
		manager_landing_page.openAccountButton.click();
		manager_landing_page.customerNamesDropDown.element(by.css("option[ng-repeat='cust in Customers']:nth-last-child(1)")).click();
		manager_landing_page.currencyDropDown.element(by.css("option[value='Rupee']")).click();
		manager_landing_page.processButton.click().then(function(){
			browser.sleep(2000);
		});
		browser.switchTo().alert().getText().then(function(txt) {
			var msg = String(txt);
			var accountNo = msg.split(":")[1]
			browser.switchTo().alert().accept();
			manager_landing_page.showcustomer.click();
			
			element.all(by.css("tr[ng-repeat='cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer']")).each(function(elem) {
				elem.element(by.css("td[class='ng-binding']:nth-child(1)")).getText().then(function(txt){
					if(txt=="Master"){
						elem.element(by.css("span[ng-repeat='account in cust.accountNo']")).getText().then(function(id){
							if(id == accountNo){
								expect(true).toBe(true);
							}
						})
					}
				})
							 
			})
			
		})
		
		
		
	})
	
	function loginAsAManager(){
		login_pom.getTestURL();		
		login_pom.managerButton.click();
		
	}
	
	function createAUser(){
		manager_landing_page.addcustomer.click();
		manager_landing_page.firstNameTextBox.sendKeys("Master");
		manager_landing_page.lastNameTextBox.sendKeys("Yoda");
		manager_landing_page.postCodeTextBox.sendKeys("10450")
		manager_landing_page.addCustomerSubmitButton.click();
		browser.switchTo().alert().accept();
	}
	
	
})