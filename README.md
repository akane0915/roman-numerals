| behavior |  input   |  output  |
|----------|:--------:|:--------:|
|Numerals 1 - 99|||
| The program will not take any input larger than 3,999 | 4000 | Invalid Input |
| The program will return the following roman numerals given these inputs: I = 1; V = 5; X = 10;  L = 50; C = 100; D = 500; M = 1000| 10 | X |
|If the user inputs 2, the program will return II | 2 | II |
|If the user inputs 3, the program will return III, and continue up to 9 | 9 | IX |
|If the user inputs a number between 11 and 19, return an X | 11 | X |
|If the user inputs a number between 11 and 19, identify the last digit and add the corresponding roman numeral (already defined) after the X | 11 | XI |
|If user input is two digits, if the first digit is a 2, return an XX | 21 | XX |
|If user input is two digits, apply the same spec above for the first digit being 3 - 9 | 31 | XXX |
|If user input is two digits, identify the last digit and follow the rule above to add the correct roman number to the existing array | 21 | XX |
|Numerals 100 - 999|||
|If user input is three digits, if the first digit is a 2, return an CC | 201 | CC |
|If user input is three digits, identify the last two digits and follow the rule above to add the correct roman numeral to the existing array | 201 | CCI |
|If user input is three digits, apply the same spec above for the first digit being 3 - 9 | 605 | DCV |
|Numerals 1000 - 3999|||
|If user input is four digits, if the first digit is a 2, return an MM | 2001 | MM |
|If user input is four digits, identify the last three digits and follow the rule above to add the correct roman numeral to the existing array | 2001 | MMI |
|If user input is four digits, apply the same spec above for the first digit being 1 - 3 | 3999 | MMMCMXCIX |
