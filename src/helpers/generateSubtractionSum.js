function generateSubtractionSum() {
	// generate two random numbers
	const sum = {
		firstNumber: Math.floor(Math.random() * (10 - 0 + 1) + 0),
		secondNumber: Math.floor(Math.random() * (10 - 0 + 1) + 0),
		answer: null,
	};

	// make sure the first of the two is higher
	if (sum.firstNumber < sum.secondNumber) {
		const swapStage = sum.firstNumber;
		sum.firstNumber = sum.secondNumber;
		sum.secondNumber = swapStage;
	}

	// update the answer
	sum.answer = sum.firstNumber - sum.secondNumber;

	// return an object with the first number, second number and answer
	return sum;
}

export default generateSubtractionSum;
