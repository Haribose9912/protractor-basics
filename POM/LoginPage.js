function login_page(){
	this.customerButton=element(by.css("button[ng-click='customer()'"));
	this.managerButton=element(by.css("button[ng-click='manager()'"));
	this.loginNameDropdown=element(by.model("custId"));
	this.loginButton=element(by.css("button[class='btn btn-default'"));
	
	this.getTestURL=function(){
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	}
	
}

module.exports=new login_page(); 