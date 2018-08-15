
exports.config = {
		seleniumAddress: "http://localhost:4444/wd/hub",
		specs: ["Testcases/LoginTestCase.js","Testcases/WithdrawlTestCase.js","Testcases/TransactionsTestCase.js","Testcases/NewUserFlowTestCase.js","Testcases/DepositTestCase.js","Testcases/CustomerManagementTestCase.js","Testcases/AccountTestCase.js"],
		onPrepare: function() {
		    var jasmineReporters = require('jasmine-reporters');
		    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
		        consolidateAll: true,
		        savePath: './',
		        filePrefix: 'xmlresults'
		    }));
		},
		onComplete: function() {
		     var browserName, browserVersion;
		     var capsPromise = browser.getCapabilities();
		 
		     capsPromise.then(function (caps) {
		        browserName = caps.get('browserName');
		        browserVersion = caps.get('version');
		 
		        var HTMLReport = require('protractor-html-reporter');
		 
		        testConfig = {
		            reportTitle: 'Test Execution Report',
		            outputPath: './',
		            screenshotPath: './screenshots',
		            testBrowser: browserName,
		            browserVersion: browserVersion,
		            modifiedSuiteName: false,
		            screenshotsOnlyOnFailure: false
		        };
		        new HTMLReport().from('xmlresults.xml', testConfig);
		    });
		 }
		
	
	
}
