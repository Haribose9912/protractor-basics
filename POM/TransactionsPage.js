function transactions_landing_page(){
	this.resetButton=element(by.css("button[ng-click='reset()']"));
	this.backButton=element(by.css("button[ng-click='back()']"));
	this.amountColumn=element(by.id("anchor0")).element(by.css("td[class='ng-binding']:nth-child(2)"))
	
	this.getTestURL=function(){
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/manager");
	}
	
	
}

module.exports=new transactions_landing_page();