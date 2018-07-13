describe('customer management test suite',function(){
	var login_pom = require("../POM/LoginPage.js");
	var manager_landing_page= require("../POM/ManagerLandingPage.js");
	var d = require("../Testdata/Customers.js");
	var using = require('jasmine-data-provider');
	
	using(d.DataDriven, function(data,description){
	it('adding a new user into the system', function(){
		loginAsAManager();
		manager_landing_page.addcustomer.click();
		manager_landing_page.firstNameTextBox.sendKeys(data.firstname);
		manager_landing_page.lastNameTextBox.sendKeys(data.lastname);
		manager_landing_page.postCodeTextBox.sendKeys(data.postcode)
		manager_landing_page.addCustomerSubmitButton.click();
		browser.switchTo().alert().accept();
		manager_landing_page.showcustomer.click().then(function(){
			browser.sleep(2000);
		})
		
		element.all(by.css("tr[ng-repeat='cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer']")).each(function(elem) {
			elem.element(by.css("td[class='ng-binding']:nth-child(1)")).getText().then(function(txt){
				if(txt==data.firstname){
					elem.element(by.css("td[class='ng-binding']:nth-child(2)")).getText().then(function(txt){
						if(txt==data.lastname){
							expect(true).toBe(true);
						}
					})

				}
			})
						 
		})
		
		
	})
	})
	
	it('deleting a user', function(){
		loginAsAManager();
		manager_landing_page.addcustomer.click();
		manager_landing_page.firstNameTextBox.sendKeys("Darth");
		manager_landing_page.lastNameTextBox.sendKeys("Wader");
		manager_landing_page.postCodeTextBox.sendKeys("10350")
		manager_landing_page.addCustomerSubmitButton.click();
		browser.switchTo().alert().accept();
		manager_landing_page.showcustomer.click().then(function(){
			browser.sleep(1000);
		})
		element.all(by.css("tr[ng-repeat='cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer']")).each(function(elem) {
			elem.element(by.css("td[class='ng-binding']:nth-child(1)")).getText().then(function(txt){
				if(txt=="Darth"){
					console.log("the force is strong with this one");
					elem.element(by.css("button[ng-click='deleteCust(cust)']")).click().then(function(){
						browser.sleep(2000);
					})
				}
			})
						 
		})
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/customer");
		element.all(by.css("tr[ng-repeat='cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer']")).each(function(elem) {
			elem.element(by.css("td[class='ng-binding']:nth-child(1)")).getText().then(function(txt){
				if(txt=="Darth"){
					expect(false).toBe(true);
					console.log("the test user was not successfully deleted.");
				}
			})
						 
		})
		
		
	})
	
	using(d.DataDriven, function(data,description){
	afterAll(function(){
		element.all(by.css("tr[ng-repeat='cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer']")).each(function(elem) {
			elem.element(by.css("td[class='ng-binding']:nth-child(1)")).getText().then(function(txt){
				if(txt==data.firstname){
					elem.element(by.css("td[class='ng-binding']:nth-child(2)")).getText().then(function(txt){
						if(txt==data.lastname){
							elem.element(by.css("button[ng-click='deleteCust(cust)']")).click().then(function(){
								console.log("deleted test user "+data.firstname+" "+data.lastname+" from the system.");
								browser.sleep(1000);
							})
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
})