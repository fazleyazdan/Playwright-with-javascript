/* 
allure is not built in for playwright. it is a third party reporter
1: Therefore we have to install it using : npm i -D @playwright/test allure-playwright
2: after that we have to install allure command line : npm install -g allure-commandline --save-dev
3: change in config file : reporter : [['allure-playwright', {  outputFolder: 'allure-test-result' }]]
4: then run the test using

*/