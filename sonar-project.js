const sonarqubeScanner = require("sonarqube-scanner");

sonarqubeScanner(
	{
		serverUrl: "http://localhost:9000",
		token: "a13bed182a75ce7f368a1debc4606d72ff3a70f4",
		options: {
			"sonar.projectKey": "React_Mocha",
			"sonar.projectName": "React Mocha",
			"sonar.exclusions":
				"./node_modules/**,src/environments/**,**/*.test.js,dist/**,**/docs/**,e2e/**,coverage/**,**/*.css",
			"sonar.sources": "./src",
			"sonar.tests": "./src/test",
			"sonar.test.inclusions": "./src/**/*.test.js,src/**/*.test.jsx",
			"sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
			"sonar.testExecutionReportPaths": "xunit.xml",
		},
	},
	() => {}
);
