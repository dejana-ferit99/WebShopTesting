# WEB SHOP TESTING PROJECT
This project is testing demo web application using Cypress. Technologies used in this project are Visual Studio Code, Node.js, Cypress, JavaScript.
This app is testing functionalities of [Demo Web page](https://demowebshop.tricentis.com/) using Cypress. This project is made as a part of internship in which main subject was web testing using Cypress. 

### Installation:
Test cases and results of each can be found [here](https://docs.google.com/spreadsheets/d/1v-j0Kw_QRvNQrnGy4LDS51WABCOYdNV3_cQ2ksRf04c/edit?usp=sharing)

#### Instalation steps
To run this Cypress script, you need to install the following:
1. Download Node.js installer for you OS from [official page](https://nodejs.org/en/download/). Follow the steps and install node.js on you computer.
2. Open Terminal or Command Prompt and check Node installation with this command:
```
node -v
```
 
3. Download Visual Studio Code from [official page](https://code.visualstudio.com/download) and install VSC following the steps.
4. Download link of this project to your computer and open it in VSC (more ways to do this step).
5. In command line run following command to install cypress
 ```
npm install cypress --save-dev
 ```

This will install Cypress locally as dev dependancy for this project. To be sure that you have succesfully installed cypress, open package.json file and search for cypress version in devDependencies.
6. Open cypress using command
```
npx cypress open
```
This will open project in new window where you can open specific test file.
 
7. Run cypress using command
 ```
npx cypress run
 ```
   
This will run test directly in Terminal of Visual Studio Code
 
This project uses POM. All classes can be found in PageObject file. e2e/WebShop folder contains all Cypress test cases, these test cases import specific page object that is used in that specific test file. 
Also, e2e/WebShop folder is divided in files representing pages of the Web page. Each file tests functionalities of that specific page.

Fixtures folder contains JSON files that are used for providing test data in test cases.

Project has test cases that are marked with grep tags. Test with grep tags can be executed by running the command:
```
npm run-script <script name>
```   
All scripts can be found in package.json file.


