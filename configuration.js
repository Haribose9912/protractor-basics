var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
		seleniumAddress: "http://localhost:4444/wd/hub",
		specs: ["Testcases/LoginTestCase.js","Testcases/WithdrawlTestCase.js","Testcases/TransactionsTestCase.js","Testcases/NewUserFlowTestCase.js","Testcases/DepositTestCase.js","Testcases/CustomerManagementTestCase.js","Testcases/AccountTestCase.js"],
	
	onPrepare : function(){
	console.log('--- starting testcase execution for the way2automation backing example site ---');
	jasmine.getEnv().addReporter(
	        new Jasmine2HtmlReporter({
	          savePath: 'target/screenshots'
	        })
	      );
}
}