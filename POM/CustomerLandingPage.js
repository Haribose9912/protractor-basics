function landing_page(){
	this.customerNameLable=element(by.css("span[class='fontBig ng-binding'"));
	this.depositButton=element(by.css("button[ng-click='deposit()']"));
	this.withdrawlButton=element(by.css("button[ng-click='withdrawl()']"));
	this.transactionsButton=element(by.css("button[ng-click='transactions()']"));
	this.amountTextBox=element(by.model("amount"));
	this.accountBalance=element.all(by.css("div[ng-hide='noAccount']")).first().element(by.css("strong[class='ng-binding']:nth-child(2)"))
	this.depositSubmitButton=element(by.css("button[class='btn btn-default']"));
	this.withdrawlSubmitButton=element(by.css("button[class='btn btn-default']"));
	this.amountErrorMessage=element(by.css("span[class='error ng-binding']"));
	this.logoutButton=element(by.css("button[ng-click='byebye()']"));
	
	this.getTestURL=function(){
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/account");
	}
	
	
}

module.exports=new landing_page(); 