function generateAdditionSum() {
	// generate two random numbers
	const sum = {
		firstNumber: Math.floor(Math.random() * (10 - 0 + 1) + 0),
		secondNumber: Math.floor(Math.random() * (10 - 0 + 1) + 0),
		sign: '+',
		answer: null,
	};

	// update the answer
	sum.answer = sum.firstNumber + sum.secondNumber;

	// return an object with the first number, second number and answer
	return sum;
}

export default generateAdditionSum;
