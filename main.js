"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//2nd question
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("\n\t\"PERSONAL MESSAGE\"");
let personalmessage = "HEY ALICE! would you like to learn some python.";
console.log(personalmessage);
//3rd question
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("\n\t\"NAME CASES\"");
let UPPERCASE = "uppercase:ALICE";
let toLOWERCASE = "lowercase:alice";
let TITLECASE = "titlecase:Alice";
console.log(UPPERCASE);
console.log(toLOWERCASE);
console.log(TITLECASE);
//4th question
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log("\n\t\"FAMOUS QUOTE\"");
console.log("QUAID-E-AZAM once said,\"I DONT BELIEVE IN TAKING RIGHT DICISIONS,I TAKE DECISIONS AND MAKE THEM RIGHT\"");
//5th question
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("\n\t\"FAMOUS QUOTE 2\"");
let quote = "\"YOUR MIND IS A POWERFUL THING WHEN YOU FILL IT WITH POSITIVE THOUGHTS,YOUR LIFE WILL START TO CHANGE.\"";
let famous_person = "NELSON MENDELA";
let message = `${famous_person} once said, ${quote}`;
console.log(message);
//6th question
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("\n\t\"STRIPPING NAMES\"");
let personname = "\n\t Alice \t\n";
console.log(personname);
let personname2 = personname.trim();
console.log(personname2);
//7th & 8th question
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log("\n\t\"NUMBER EIGHT\"");
let num1 = 5 + 3;
console.log(num1);
let num2 = 10 - 2;
console.log(num2);
let num3 = 4 * 2;
console.log(num3);
let num4 = 16 / 2;
console.log(num4);
//9th & 10th question
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log("\n\t\"ADDING COMMENTS\"");
//NAME:"MARYAM RASHEED"
//DATE:"21 JUNE 2024"
console.log("\n\t\"FAVOURITE\"");
//MAKING A VARIABLE OF favourite_number AND STORING A NUMBER IN IT.
let favourite_number = "\'7\'";
//MAKING ANOTHER VARIABLE AND STORING MY MESSAGE IN IT. 
let mymessage = `${favourite_number} is my favourite number.`;
//THEN PRINTING mymessage VARIABLE IN IT.
console.log(mymessage);
//11th question
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("\n\t\"NAMES\"");
let friendsnames = ["KAYCEE", "MILA", "ANDREA", "EMILY"];
for (let i = 0; i < friendsnames.length; i++) {
    console.log(friendsnames[i]);
}
//12th question
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("\n\t\"GREETINGS\"");
let friendsname = ["KAYCEE", "MILA", "ANDREA", "EMILY"];
let messages = "SHE IS MY VERY GOOD FRIEND:";
for (let i = 0; i < friendsname.length; i++) {
    console.log(messages, friendsname[i]);
}
//13th question
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("\n\t\"MY OWN ARRAY\"");
let vehicles = ["TOYOTA CAR", "AIRPLANE", "TRAIN", "HEAVYBIKE"];
for (let i = 0; i < vehicles.length; i++) {
    console.log(vehicles[i], "is my favourite transport");
}
//14th question
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("\n\t\"GUEST LIST\"");
let guestlist = ["Rabiya", "Kanwal", "Abeeha"];
for (let i = 0; i < guestlist.length; i++) {
    console.log("Dear Ms," + guestlist[i] + "\nI would like to invite you in dinner,tomorrow.Its a one dish party.");
}
//15th question
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
console.log("\n\t\"CHANGING GUEST LIST\"");
let gguestlist = ["Rabiya", "Kanwal", "Abeeha"];
gguestlist.pop();
gguestlist.push("Rabeeca");
for (let i = 0; i < gguestlist.length; i++) {
    console.log("Dear Ms", gguestlist[i], "I would like to invite you on dinner,tomorrow.its a one dish party.");
}
console.log("Abeeha is not coming in the party.");
//16th question
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//. Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("\n\t\"MORE GUESTS\"");
console.log("Its a good news,I found a new and big dinner table for three more guest.");
let guestllist = ["Rabiya", "Kanwal", "Abeeha"];
guestllist.pop();
guestllist.push("Rabeeca");
guestllist.unshift("Fatima");
guestllist.push("Abeeha");
guestllist.splice(2, 0, "Hira");
for (let i = 0; i < guestllist.length; i++) {
    console.log("Dear Ms", guestllist[i], "I would like to call you on dinner,tomorrow.its a one dish party.");
}
//17th question
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("\n\t\"SHRINKING GUEST LIST\"");
console.log("I am so sorry but i could only invite two guests for dinner becoz the new dinner table wont arrive at the time.");
let guestliist = ["Hira", "Kanwal", "Rabeeca", "Abeeha"];
guestliist.pop();
console.log("I am sorry i cant invite you for dinner Abeeha.");
guestliist.pop();
console.log("I am sorry i cant invite you for dinner Rabeeca.");
guestliist.pop();
console.log("I am sorry i cant invite you for dinner Kanwal.");
guestliist.pop();
console.log("I am sorry i cant invite you for dinner Hira.");
for (let i = 0; i < guestliist.length; i++) {
    console.log(guestliist[i]);
}
console.log("Fatima you are still part of dinner");
console.log("Rabiya you are still part of dinner");
console.log("\n\t\"EMPTY LIST\"");
let guuestliist = []; //empty list
console.log(guuestliist);
console.log("Sorry,The dinner is cancelled");
//18th question
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n\t\"SEEING THE WORLD\"");
let places = ["PAKISTAN", "CHINA", "KOREA", "EUROPE", "INDIA"];
console.log("Oranginal Order", places);
let placess = ["CHINA", "EUROPE", "INDIA", "KOREA", "PAKISTAN"];
console.log("Alphabetical Order", placess);
console.log("Original Order", places);
let pplaces = ["PAKISTAN", "KOREA", "INDIA", "EUROPE", "CHINA"];
console.log("Reverse Alphabatical Order", pplaces);
console.log("Original Order", places);
let pplacces = ["CHINA", "EUROPE", "INDIA", "KOREA", "PAKISTAN"];
console.log("Reverse Order", pplacces);
console.log("Original Order", places);
let plaaces = ["CHINA", "EUROPE", "INDIA", "KOREA", "PAKISTAN"];
console.log("Alphabetical Order", plaaces);
let places1 = ["PAKISTAN", "KOREA", "INDIA", "EUROPE", "CHINA"];
console.log("Reverse Alphabatical Order", places1);
//19th question
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("\n\t\"DINNER GUESTS\"");
console.log("The number of people i am inviting to dinner is", guuestliist.length);
//20 question
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("\n\t\"LIST OF VEGETABLES\"");
let array = ["LIST OF VEGETABLES:", "ginger", "garlic", "radish", "lady_finger", "tomato", "patato"];
array.forEach(array => {
    console.log(array);
});
//21 question
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("\n\t\"PERSONAL DATA\"");
let personaldata = {
    name: "MARYAM",
    age: 14,
    education: "9th Grade"
};
console.log(personaldata);
//22 question
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log("\n\t\"INTENTIONAL ERROR\"");
let numa = ["apple", "mango", "banana", "grapes", "strawberry"];
console.log(numa[5]); //error(undefined)
console.log(numa[3]); //error solved coz grapes index number is "3"
//23 question
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log("\n\t\"CONDITIONAL TEST\"");
//1
let car = 'lamborghini';
console.log("Is car ==(equal) 'lamborghini'? I predict True.");
console.log(car == 'lamborghini');
//2
let carr = "lamberghini";
console.log("Is car !==(not equal) 'lamberghini'? I predict False.");
console.log(car !== 'lamborghini');
//3
let fruits = "apple";
console.log("Is fruits ==(equal) 'apple'? I predict True.");
console.log(fruits == 'apple');
//4
let fruit = "apple";
console.log("Is fruit !==(not equal) 'apple'? I predict False.");
console.log(fruit !== 'apple');
//5
let vegetable = "patato";
console.log("Is vegetable ==(equal) 'patato'? I predict True.");
console.log(vegetable == 'patato');
//6
let vegetables = "patato";
console.log("Is vegetables !==(not equal) 'patato'? I predict False.");
console.log(vegetables !== 'patato');
//7
let dress = "frock";
console.log("Is dress ==(equal) 'frock'? I predict True.");
console.log(dress == 'frock');
//8
let dresss = "frock";
console.log("Is dresss !==(not equal) 'frock'? I predict False.");
console.log(dresss !== 'frock');
//9
let food = "biryani";
console.log("Is food ==(equal) 'biryani'? I predict True.");
console.log(food == 'biryani');
//10
let foood = "biryani";
console.log("Is foood !==(not equal) 'biryani'? I predict False.");
console.log(foood !== 'biryani');
//24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
console.log("\n\t\"MORE CONDITIONAL TEST\"");
console.log("EQUALITY TEST:", "maryam rasheed" === "maryam rasheed");
console.log("INEQUALITY TEST:", "maryam rasheed" === "fatima");
console.log("Lowercase Test:", "maryam rasheed".toLowerCase() === "maryam rasheed");
console.log("EQALITY TEST:", 1000 === 1000);
console.log("INEQALITY TEST:", 10 !== 9);
console.log("GREATER THAN TEST:", 100 > 10);
console.log("LESS THAN TEST:", 100 < 1000);
console.log("GREATER THAN AND EQUALS TO TEAST:", 100 >= 10);
console.log("LESS THAN AND EQUALS TO TEST:", 10 <= 100);
console.log("AND OPERATOR:", true && true);
console.log("OR OPERATOR:", true || false);
let numbers = [1, 2, 3, 4, 5];
console.log("ITEM IN ARRAY:", 3 in numbers);
console.log("ITEM IS NOT IN ARRAY:", 6 in numbers);
//25 question
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
console.log("\n\t\"ALIEN COLORS#1\"");
let alien_color = "Yellow";
if (alien_color = "yellow") {
    console.log("PLAYER1 JUST EARNED 5 POINTS");
}
else {
    ("TRY AGAIN");
}
let alien_colorr = "green";
if (alien_colorr === "yellow") {
    console.log("PLAYER JUST EARNED 5 POINTS");
}
//26 question
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
console.log("\n\t\"ALIEN COLORS#2\"");
let alien = "green";
if (alien === "green") {
    console.log("PLAYER2 JUST EARNED 5 POINTS");
}
else {
    console.log("try again");
}
let alien2 = "green";
if (alien2 === "green") {
    console.log("PLAYER JUST EARNED 10 POINTS");
}
let alien_collor = "red";
if (alien_collor === "green") {
    console.log("player just earned 2 points");
}
else {
    console.log("TRY AGAIN");
}
//27 question
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log("\n\t\"ALIEN COLORS#3\"");
let alien3_color = "green";
if (alien3_color === "green") {
    console.log("player earned 5 points");
}
else if (alien3_color === "yellow") {
    console.log("player earned 10 points");
}
else if (alien3_color === "red") {
    console.log("player earned 15 points");
}
let aliien3_color = "yellow";
if (aliien3_color === "green") {
    console.log("player earned 5 points");
}
else if (aliien3_color === "yellow") {
    console.log("player earned 10 points");
}
else if (aliien3_color === "red") {
    console.log("player earned 15 points");
}
let alieen3_color = "red";
if (alieen3_color === "green") {
    console.log("player earned 5 points");
}
else if (alieen3_color === "yellow") {
    console.log("player earned 10 points");
}
else if (alieen3_color === "red") {
    console.log("player earned 15 points");
}
//28 question
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
console.log("\n\t\"STAGES OF LIFE\"");
let age = 1;
if (age === 1) {
    console.log("1 YEAR's OLD:Person Is a Baby");
}
let age1 = 2;
if (age === 2 || 2 < 4) {
    console.log("2 YEAR's OLD:Person Is Toddler");
}
let age3 = 4;
if (age3 === 4 || 4 < 13) {
    console.log("4 YEAR's OLD:Person Is a Kid");
}
let age4 = 13;
if (age === 13 || 13 < 20) {
    console.log("13 YEAR's OLD:Person Is a Teenager");
}
let age5 = 20;
if (age == 20 || 20 < 65) {
    console.log("20 YEAR's OLD:Person Is Adult");
}
let age6 = 65;
if (age == 65 || 65 < 75) {
    console.log("65 YEAR's OLD:Person Is Elder");
}
//29 question
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
console.log("\n\t\"FAVOURITE FRUITS\"");
let favourite_fruits = ["apple", "grapes", "pineapple"];
if (favourite_fruits.includes("apple")) {
    console.log("YOU REALLY LIKE APPLE's.");
}
if (favourite_fruits.includes("grapes")) {
    console.log("YOU REALLY LIKE GRAPE's.");
}
if (favourite_fruits.includes("pineapple")) {
    console.log("YOU REALLY LIKE PINEAPPLE's.");
}
if (favourite_fruits.includes("bananas")) {
    console.log("YOU REALLY LIKE BANANA's.");
}
if (favourite_fruits.includes("kiwi")) {
    console.log("YOU REALLY LIKE KIWI's.");
}
//30 question
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
console.log("\n\t\"HELLO ADMIN\"");
let users = ['babar', "shadab", "rizwan", "fakhar", "admin"];
for (let user of users) {
    if (user === "admin") {
        console.log("HELLO ADMIN,would you like to see a status report?");
    }
    else {
        console.log(`HELLO ${user},"thankyou for loging in again".`);
    }
}
//31 question
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed
console.log("\n\t\"NO USERS\"");
let usernames = ["ali", "hammad", "humza", "muhammad"];
if (usernames.length === 0) {
    console.log("WE NEED TO FIND SOME USERS.");
}
else {
    usernames = [];
    console.log("ALL USERS HS BEEN REMOVED,", usernames.length);
}
//32 question
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
console.log("\n\t\"CHECKING USERNAMES\"");
let current_users = ["lisa", "jennie", "rose", "jisoo", "pharita"];
let new_users = ["diana", "natalia", "jennie", "olivia", "lisa"];
for (let newUsers of new_users) {
    const lowercase_newUsers = newUsers.toLowerCase();
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_newUsers)) {
        console.log(`the username ${newUsers} is not available`);
    }
    else {
        console.log(`the username ${newUsers} is available`);
    }
}
//33 question
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
console.log("\n\t\"ORDINAL NUMBERS\"");
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < number.length; i++) {
    const numbers = number[i];
    let ordinalending;
    if (numbers === 1) {
        ordinalending = "st";
    }
    else if (numbers === 2) {
        ordinalending = "nd";
    }
    else if (numbers === 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log(`${numbers}${ordinalending}`);
}
//34 question
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("\n\t\"PIZZAS\"");
let pizzas = ["Veggie Pizza", "Cheese Pizza", "BBQ Chicken Pizza "];
for (let pizza of pizzas) {
    console.log(`i like ${pizza} so much`);
}
console.log("   I Really Love Eating Diferent Types Of Pizza's.");
//35 question
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("\n\t\"ANIMALS\"");
let animals = ["Cat", "Rabbit", "Hamster"];
for (let animal of animals) {
    console.log(`${animal} would be the best pet.`);
}
console.log("all three of them have little similar appearence and charachterstics so they can be great pets for kids.");
//36 question
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
console.log("\n\t\"T-Shirt's\"");
let shirts = ["small", "medium-size", "large"];
let shirt1 = "This shirt is for casual wearing";
let shirt2 = "This shirt is for party wearing";
let shirt3 = "This shirt is for party wearing";
function make_shirt() {
    let simple_function = `This is a ${shirts[1]} shirt, and ${shirt1} `;
    return simple_function;
}
let result = make_shirt();
console.log(result);
//37 question
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
console.log("\n\t\"LARGE SHIRT's\"");
let size = ["Extralarge , medium"];
let defaultmessage = "I LOVE TYPESCRIPT";
let mediumShirt = (`size of shirt is:${1}, ${defaultmessage}`);
let largeShirt = (`size of shirt is:${0},${defaultmessage}`);
let ExtraLargeshirt = (`size of shirt is EXTRALARGE and ,${defaultmessage}`);
let smallshirt = (`size of shirt is small and i love swimming!`);
function make_tshirt() {
    let simplefunction = (ExtraLargeshirt);
    console.log(simplefunction);
    return smallshirt;
}
let ressult = make_tshirt();
console.log(ressult);
//38 question
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
console.log("\n\t\"CITIE's\"");
let city = ["KARACHI", "BEJING", "SEOUL"];
let city1 = (`${city[0]} is in PAKISTAN`);
let city2 = (`${city[1]} is in CHINA`);
let city3 = (`${city[2]} is in KOREA`);
function cities() {
    let simplefunction = (city1);
    console.log(simplefunction);
    console.log(city2);
    return city3;
}
let response = cities();
console.log(response);
//39 question
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
console.log("\n\t\"CITIE's NAME's\"");
let cityname = ["Islamabad,PAKISTAN", "Busan,KOREA", "Jadah,SAUDIA ARABIA"];
let city01 = (`${cityname[0]}`);
let city02 = (`${cityname[1]}`);
let city03 = (`${cityname[2]}`);
function city_country() {
    let simplefunction = (city01);
    console.log(simplefunction);
    console.log(city02);
    return city03;
}
let ressponse = city_country();
console.log(ressponse);
//40 question
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
console.log("\n\t\"ALBUM\"");
function make_album(artistname, albumtitle) {
    return { artistname, albumtitle };
}
let album1 = make_album("Ayaz", "mausam-e-dil");
let album2 = make_album("Ali", "isq-e-muhabat");
let album3 = make_album("Madad", "rohan andhera");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album2(artistname, albumtitle, numberoftracks) {
    return { artistname, albumtitle, numberoftracks };
}
let album4 = make_album2("babar", "isq-e-dil", 55);
let album5 = make_album2("Arif", "yariyan", 35);
let album6 = make_album2("Mudad", "muskaan", 54);
console.log(album4);
console.log(album5);
console.log(album6);
//41 question
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
console.log("\n\t\"MAGICIANS\"");
let magicians_name = ["David Blaine", "Derren Brown", "Harry Houdini", "Criss Angel"];
//function show_magicians(){
//let magic=`[${magicians_name}]`
//  return magic
//}
//let output=show_magicians();
console.log(magicians_name);
//42 question
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies
// the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the
// list has actually been modified.
console.log("\n\t\"GREAT MAGICIANS\"");
let greatmagicians_name = ["David Blaine", "Derren Brown", "Harry Houdini", "Criss Angel"];
function show_magicians(greatmagicians_name) {
    greatmagicians_name.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(greatmagicians_name);
//43 question
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of
// magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the 
//Great added to each magician’s name.
console.log("\n\t\"UNCHANGED MAGICIANS\"");
let magicians = ["David Blaine", "Criss Angel", "Harry Houdini"];
function make_great(magicians) {
    let great_magicians = [];
    magicians.forEach(magician => {
        great_magicians.push(`${magician} the great`);
    });
    return great_magicians;
}
let greaat_magicians = make_great(magicians.slice());
console.log("Original magicians:");
show_magicians(magicians);
let great_magicians = make_great(magicians.slice());
console.log("Great magicians:");
show_magicians(great_magicians);
//44 question
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one
// parameter that collects as many items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number of arguments each time.
console.log("\n\t \"SANDWITCHES\"");
function makeSandwiches(item) {
    console.log("\n Making Your Sandwitch With:");
    item.forEach(element => console.log("-" + element));
    console.log("Enjoy Your Sandwitch!\n");
}
makeSandwiches(["TOMATO", "CUCUMBER", "LETTUCE", "CHEESE"]);
makeSandwiches(["KETCHUP", "TURKEY", "MAYO", "PICKLES"]);
makeSandwiches(["PEANUT BUTTER", "JAM"]);
//45 question
//Cars: Write a function that stores information about a car in a Object. The function should always receive a 
//manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with
// the required information and two other name-value pairs, such as a color or an optional feature. Print the Object 
//that’s returned to make sure all the information was stored correctly.
console.log("\n\t\"CARS\"");
function caarr(description) {
    description.forEach(element => console.log("-" + element));
}
console.log("CAR DESCRIPTION:");
caarr(["munufacturer:\"FERRARI\""]);
caarr(["modelName:\"DAYTONA SP3\""]);
caarr(["color:\"BLACK\""]);
caarr(["features:\n\"POWER STEERING\",\n\"DRIVER\",\n\"PASSENGER AIRBAG\""]);
