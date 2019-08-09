# Application : Target Acquisition

### Steps to run the project:
- git clone https://github.com/priyankatayi/TargetAcquisition.git
- Install NPM and Node
- Install Angular CLI: `npm install -g @angular/cli`
- Install `$ npm install -g json-server` and ` run json-server --watch db.json`
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`
- Run `ng test` to execute the tests

### Funtionality:

As part of this project, I have developed an application in Angular with below functionality:

**1. Create a target**
- The values are entered into a template driven form which has validations 		and saves data to json server on Submit *(Component - CreateTargetComponent,  Service - TargetsService).*

**2. Edit an exisiting target**
-  Based on the id in the url, it distinguishes if its a new target or existing target and displays the title accordingly (Create a Target/Edit Target)
- Redirects to the form that retains the information of existing target intended to modify.
- Updates the modified information in server and view is updated *(Component - CreateTargetComponent).*

**3. View the list of targets**:
- Based on the entrees in db.json file or target data created using the form, the list of targets are displayed. Each Target data has buttons to edit or delete the target content *(Parent Component: ListTargetsComponent, Child Component: ViewTargetsComponent).*
- Used a custom pipe that appends $ to the revenue data and also replaces increase and decrease with symbols *(Pipe: DollarPipe).*
- An alert message is displayed if there is no target data available for viewing.

**4. Delete a target**:
- When clicked on delete, that particular target entree is deleted from server. Output property is used to raise a event in child component to let the parent component know that data has been deleted and to update the view *(Parent Component: ListTargetsComponent, Child Component: ViewTargetsComponent).*

**4. Unit and Integration tests**:
- Developed a unit test to test the custom pipe *(DollarPipe ).*
- Developed a integration test to test the template with mock data 
*(ViewTargetsComponent ).*

**Concepts Used**: Container and Nested Components, Routing, Dependency Injection, Lifecyle hooks, Custom Pipes, Services, Error Handling, Input and Output properties, HTTP Client, Template Driven Forms with validation, Error Handling, Unit and Integration Testing

### Project Environment:
Environment | Technology
------------ | -------------
Frameworks | Bootstrap
Programming languages | Angular
Version control/code repositories | GIT
Command Line Interface | Angular CLI 8.2.0
Database| JSON Server
Testing| Karma, Jasmine
