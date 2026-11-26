var num1 = 10;
var num2 = 3;

var sum = num1 + num2;
document.write("Q1: Write a program that take two numbers & add them in a new variable. Show the result in your browser.? <br>")
document.write(" Ans: Sum of " + num1 + " and " + num2 + " is " + sum)
document.write("<hr>")

var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

document.write("Q2: Repeat task1 for subtraction, multiplication, division & modulus. <br>")
document.write("Ans: Subtraction: " + subtraction + "<br>");
document.write("Multiplication: " + multiplication + "<br>");
document.write("Division: " + division + "<br>");
document.write("Modulus: " + modulus);

document.write("<hr>")
document.write("Q3: Do the following using JS Mathematic Expressions <br>")
document.write("a. Declare a variable. <br>")
document.write("b. Show the value of variable in your browser like 'Value after variable declaration is: ??'. <br>")
document.write("c. Initialize the variable with some number. <br>")
document.write("d. Show the value of variable in your browser like 'Initial value: 5'. <br>")
document.write("e. Increment the variable. <br>")
document.write("f. Show the value of variable in your browser like 'Value after increment is: 6'. <br>")
document.write("g. Add 7 to the variable. <br>")
document.write("h. Show the value of variable in your browser like 'Value after addition is: 13'. <br>")
document.write("i. Decrement the variable. <br>")
document.write("j. Show the value of variable in your browser like 'Value after decrement is: 12'. <br>")
document.write("k. Show the remainder after dividing the variable's value by 3. <br>")
document.write('l. Output: document.write("The remainder is : 0.") <br>')

var number;
document.write("Ans: Value after variable declaration is: " + number + "<br>");
number = 5;
document.write("Initial value: " + number + "<br>");
number++;
document.write("Value after increment is: " + number + "<br>");
number = number + 7;
document.write("Value after addition is: " + number + "<br>");
number--;
document.write("Value after decrement is: " + number + "<br>");
var remainder = number % 3;
document.write("The remainder is: " + remainder);

document.write("<hr>")

document.write("Q4: Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. <br>")

var ticketPrice = 600;
var tickets = 5;

var totalCost = ticketPrice * tickets;

document.write("Ans: Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

document.write("<hr>")

var number = 4;

document.write("Table of " + number + "<br>");

document.write(number + " x 1 = " + number * 1 + "<br>");
document.write(number + " x 2 = " + number * 2 + "<br>");
document.write(number + " x 3 = " + number * 3 + "<br>");
document.write(number + " x 4 = " + number * 4 + "<br>");
document.write(number + " x 5 = " + number * 5 + "<br>");
document.write(number + " x 6 = " + number * 6 + "<br>");
document.write(number + " x 7 = " + number * 7 + "<br>");
document.write(number + " x 8 = " + number * 8 + "<br>");
document.write(number + " x 9 = " + number * 9 + "<br>");
document.write(number + " x 10 = " + number * 10);

document.write("<hr>")

document.write("Q6: It's hot out! Let's make a converter based on the steps here. <br>")
document.write("a. Store a Celsius temperature into a variable. <br>")
document.write("b. Convert it to Fahrenheit & output “NN°C is NN°F”. <br>")
document.write("c. Now store a Fahrenheit temperature into a variable. <br>")
document.write("d. Convert it to Celsius & output “NN°F is NN°C”. <br>")

var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "C is " + fahrenheit + "F<br>");
var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;
document.write(fahrenheit2 + "F is " + celsius2 + "C");

document.write("<hr>")

document.write("Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables: <br>")

document.write("a. Price of item 1 <br>")

document.write("b. Price of item 2 <br>")

document.write("c. Ordered quantity of item 1 <br>")

document.write("d. Ordered Quantity of item 2 <br>")

document.write("e. Shipping charges <br>")

var price1 = 650;
var price2 = 100;

var quantity1 = 3;
var quantity2 = 7;

var shippingCharges = 100;

var totalCost = (price1 * quantity1) + (price2 * quantity2) + shippingCharges;

document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + price1 + "<br>");
document.write("Quantity of item 1 is " + quantity1 + "<br>");
document.write("Price of item 2 is " + price2 + "<br>");
document.write("Quantity of item 2 is " + quantity2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost);

document.write("<hr>")

document.write("Q9: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser. <br>")

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("<h2>Marks Sheet</h2>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%");

document.write("<hr>")

document.write("Q10: Write a program to initialize a variable with some number and do arithmetic in following sequence:")
document.write("a. Add 5 <br>")
document.write("b. Multiply by 10 <br>")
document.write("c. Divide the result by 2 <br>")
document.write("Perform all calculations in a single expression. <br>")

var number = 5;
var result = ((number + 5) * 10) / 2;

document.write("Result: " + result);

document.write("<hr>")

document.write("Q11: Forgot how old someone is? Calculate it! <br>")
document.write("a. Store the current year in a variable. <br>")
document.write("b. Store their birth year in a variable. <br>")
document.write("c. Calculate their 2 possible ages based on the stored values. <br>")
document.write("Output them to the screen like so: “They are either NN or NN years old”. <br>")


var currentYear = 2026;
var birthYear = 2013;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h2>Age Calculator</h2>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age1 + " or " + age2 + " years old");

document.write("<hr>")

document.write("Q12: Calculate the circumference and area of a circle. <br>")


var radius = 20;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h2>The Geometrizer</h2>");

document.write("Radius of a circle: " + radius + "<br>");

document.write("The circumference is: " + circumference + "<br>");

document.write("The area is: " + area);

document.write("<hr>")

document.write("Q13: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. <br>")
document.write("a. Store your favorite snack into a variable. <br>")
document.write("b. Store your current age into a variable. <br>")
document.write("c. Store a maximum age into a variable. <br>")
document.write("d. Store an estimated amount per day (as a number). <br>")
document.write("e. Calculate how many would you eat total for the rest of your life. <br>")
document.write("Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.")


var favoriteSnack = "Chips";
var currentAge = 13;
var maximumAge = 80;
var amountPerDay = 2;
var total = (maximumAge - currentAge) * 365 * amountPerDay;
document.write("<h2>Lifetime Supply Calculator</h2>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Maximum Age: " + maximumAge + "<br>");
document.write("Amount per day: " + amountPerDay + "<br>");
document.write("You will need " + total + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);
