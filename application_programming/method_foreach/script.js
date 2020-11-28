var num = [32, 2, 6, 15, 48];
var sum = 0;
num.forEach(function(elem, index, arr)
{
	arr[index] = elem * elem;
	sum += arr[index]
});

alert(sum)
