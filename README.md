# Password Generator (pw-generator)

![Static Badge](https://img.shields.io/badge/HTML-%23e34c26?style=for-the-badge&logo=HTML5&logoColor=white)
![Static Badge](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS-%231572B6?style=for-the-badge&logo=CSS&logoColor=white)
![Static Badge](https://img.shields.io/badge/npm-%23CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Static Badge](https://img.shields.io/badge/Tailwind-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Static Badge](https://img.shields.io/badge/Vite-bd34fe?style=for-the-badge&logo=vite&logoColor=white)
![Static Badge](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Static Badge](https://img.shields.io/badge/Figma-%23F24E1E?style=for-the-badge&logo=figma&logoColor=white)

## Introduction
This is an interactive, single-page Web application that generates a password based on the requirements provided by the user. Users are allowed to specify the desired length and the occurrences of the following:
* Uppercase Characters (letters A to Z)
* Special Characters (!, #, $, %, and *)
* Numbers (0 to 9)  

**Note:** Lowercase characters are the base for the password; therefore, the user is not required to specify the lowercase characters occurrences. Instead, it is calculated as the difference between the length and the sum of the other occurrences.

### Requirements
#### Functional Requirements
- [x] Provide a form in which the user can input the requirements for the password and obtain each value from their respective inputs.
- [x] Validate that the character inputs do not exceed the total length of the password input before generating the password.
- [x] Output the generated password to the UI.
- [x] Adjust the components within the UI to improve the user’s experience across a variety of viewports (responsive design).

#### Nonfunctional Requirement(s)
- [x] Provide a “copy to clipboard” button which copies the generated password to the user’s device.

## Design
As mentioned previously, a form is used to gather the requirements data and corresponding state variables (`useState`) are used to track each of their changes. The `generatePassword(e)` function is called on submit and the state variables are put into an object and passed along to the `createPassword(reqs)` function where the password is created based on the given requirements. From there, the password state variable is updated and passed to the Password component as a prop and displayed to the UI.

#### Components
* `Header:` The header of the application; simply contains the title.
* `Instructions:` This provide instructions on how to properly use the program.
* `Requirements:` This contains the `Password` component and the form in which the user inputs and submits their requirements for the password.
  * `Password:` Section in which the generated password is displayed.

#### Password Generation
The project includes a file (`generator.js`) containing various helper functions which assist with the generation of a password that satisfies the given requirements. The general idea is to create separate strings for all potential characters, pick random characters from the strings using the charAt() method, concatenate those substrings together, and return the shuffled result. 
* lowercase = ‘abcdefghijklmnopqrstuvwxyz’
* uppercase = lowercase.toUpperCase()
* special = ‘!#$%&*’
* numbers = ‘0123456789’

#### Helper Functions
The following are the helper functions included in the `generator.js` file.
* `createPassword(reqs):` Takes in an object that contains the number of occurrences and requirements for the password (length, uppercase characters, special characters, and numbers). Calculates the number of lowercase characters by filling in the gaps left by the other properties. Then, it generates strings for each of the properties and concatenates them all into a single string that is shuffled and returned to the caller.
* `shuffle(str):` Destructs the given string into an array, shuffles the contents, and returns the shuffled array as a string (using an array method).
* `getRandomIndex(min, max):` Returns a random number in the given range (min and max are included).
* `getRandomStr(occ, str):` Takes in the number of occurrences for the given requirement (i.e., uppercase characters) and the corresponding string and generates a random substring and returns it back to the caller.