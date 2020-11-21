let icantstop = ['здравствуйте','один', 'hundred', 'world', 'goodbye', 'медальон'];

result = icantstop.map(function(elem) {
	return elem.split('').reverse().join('')
});

console.log(result);
