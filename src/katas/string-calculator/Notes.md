Malformed input, handle something like "12abc"
"1,\n2" currently sums to 3 by accident, because the empty piece between the separators becomes Number("") === 0
delimiter is interpolated into a regex — breaks on metacharacters

Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed. 
if there are multiple negatives, show all of them in the exception message.

Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2

Delimiters can be of any length with the following format: “//[delimiter]\n” for example: “//[***]\n1***2***3” should return 6

Allow multiple delimiters like this: “//[delim1][delim2]\n” for example “//[*][%]\n1*2%3” should return 6.

make sure you can also handle multiple delimiters with length longer than one char