
describe('testsuite for the login page',function(){
	var login_pom = require("../POM/LoginPage.js");
	var landingpage_pom = require("../POM/CustomerLandingPage.js");
	var manager_landingpage_pom = require("../POM/ManagerLandingPage.js");
	
	it('successful customer login',function(){
		login_pom.getTestURL();
		login_pom.customerButton.click().then(function(){
			browser.sleep(2000);
			login_pom.loginNameDropdown.element(by.css("option[value='1']")).click().then(function(){
				login_pom.loginButton.click().then(function(){
				landingpage_pom.customerNameLable.getText().then(function(txt){
					expect(txt).toBe("Hermoine Granger");
				})});
			});
		})
		landingpage_pom.logoutButton.click();
		expect(browser.getCurrentUrl()).toEqual("http://www.way2automation.com/angularjs-protractor/banking/#/customer")
	})
	
	it('successful admin login', function(){
		login_pom.getTestURL();
		login_pom.managerButton.click();
		manager_landingpage_pom.openAccountButton.getText().then(function(txt){
			expect(txt).toBe("Open Account");
		})
		
	})
})