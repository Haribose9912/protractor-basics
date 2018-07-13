function manager_landing_page(){
	this.openAccountButton=element(by.css("button[ng-click='openAccount()']"));
	this.addcustomer=element(by.css("button[ng-click='addCust()']"));
	this.showcustomer=element(by.css("button[ng-click='showCust()']"));
	this.firstNameTextBox = element(by.model("fName"));
	this.lastNameTextBox = element(by.model("lName"));
	this.postCodeTextBox = element(by.model("postCd"));
	this.addCustomerSubmitButton = element(by.css("button[class='btn btn-default']"));
	this.homeButton=element(by.css("button[ng-click='home()']"));
	this.openAccountButton=element(by.css("button[ng-click='openAccount()']"));
	this.customerNamesDropDown=element(by.model("custId"));
	this.currencyDropDown=element(by.model("currency"));
	this.processButton=element(by.css("button[type='submit']"));
	
	
	this.getTestURL=function(){
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/manager");
	}
	
	
}

module.exports=new manager_landing_page(); /**
 * 
 */