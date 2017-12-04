inverseCaptcha = (stringOfNumbers) => {
    const numbers = stringOfNumbers.split('');
    let answer = 0;
    
    numbers.forEach((num, index) => {
        const nextNum = isLast(index) ? numbers[0] : numbers[index + 1];
		
		if(num === nextNum) {
			answer += Number(num);
		}
    });

    return answer;
    	
	function isLast(index) {
		return index === numbers.length - 1;
	}
}
