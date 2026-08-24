Malformed input, handle something like "12abc"
"1,\n2" currently sums to 3 by accident, because the empty piece between the separators becomes Number("") === 0
delimiter is interpolated into a regex — breaks on metacharacters