# WEB SHOP TESTING PROJECT
This project is testing demo web application using Cypress. Technologies used in this project are Visual Studio Code, Node.js, Cypress and all test cases are written using JavaScript.
This app is testing functionalities of [Demo Web page](https://demowebshop.tricentis.com/) using Cypress. This project is made as a part of internship in which main subject was web testing using Cypress. 

### Installation:
Test cases and results of each can be found [here](https://docs.google.com/spreadsheets/d/1v-j0Kw_QRvNQrnGy4LDS51WABCOYdNV3_cQ2ksRf04c/edit?usp=sharing)
#### Instalation steps
To run this Cypress script, you need to install the following:
	1. Download Node.js installer for you OS from official page (https://nodejs.org/en/download/)
	2. Follow the steps and install node.js on you computer
	3. Open Terminal or Command Prompt and check Node installation with this command:
		node -v
	4. Download Visual Studio Code from official page (https://code.visualstudio.com/download)
	5. Install VSC following the steps
	6. Download link of this project to your computer
	7. Open project in VSC
	8. In command linke run following command to install cypress
		npm install cypress --save-dev
	This will install Czpress locally as dev dependancy for this project. To be sure that you have succesfully installed cypress, open package.json file and search for cypress version in devDependencies.
	9. Open cypress using command
		npx cypress open
	This will open project in new window where you can open specific test file.
	10. Run cypress using command
		npx cypress run
	This will run test directly in Terminal of Visual Studio Code
-This project uses POM. All classes can be find in PageObject file. In this file there are multiple .js files where each of them represents one class.
e2e/WebShop file contains all czpress test cases. This test cases import specific page object that is used in that specific test file. Also, in this folder, each file represents specific page of web page and each cypress test file contains test for functionalities in that page.
Fixtures folder contains json files that are used for providing data in test cases.
