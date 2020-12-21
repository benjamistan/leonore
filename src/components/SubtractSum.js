import React, { useState } from 'react';
import generateSubtractionSum from '../helpers/generateSubtractionSum';
import correct from '../assets/correct.png';
import incorrect from '../assets/incorrect.png';
import not_set from '../assets/not_set.png';

function SubtractSum() {
	const [sum, setSum] = useState(generateSubtractionSum());
	const [isAnswerCorrect, setIsAnswerCorrect] = useState({
		image: not_set,
	});
	const [userAnswer, setUserAnswer] = useState('');

	const onUserInputChange = (e) => {
		setUserAnswer(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		userAnswer === sum.answer.toString()
			? setIsAnswerCorrect({ image: correct })
			: setIsAnswerCorrect({ image: incorrect });
	};

	const nextSum = (e) => {
		e.preventDefault();
		setSum();
		setIsAnswerCorrect({ image: not_set });
		setUserAnswer('');
	};

	return (
		<div className='ui raised center aligned segment'>
			<form onSubmit={onSubmit}>
				<div className='main'>
					<span className='sum'>
						{sum.firstNumber} - {sum.secondNumber} = &nbsp;
					</span>
					<span className='ui input'>
						<input
							className='answer'
							type='text'
							value={userAnswer}
							onChange={onUserInputChange}
						/>
					</span>
					<span>
						<img
							className='answer_img'
							src={isAnswerCorrect.image}
							alt=' is this correct?'
						/>
					</span>
				</div>
				<div>
					<br />
					<button type='submit' className='ui purple button'>
						Check Answer
					</button>
					{isAnswerCorrect.image === correct ? (
						<button className='ui purple button' onClick={nextSum}>
							Next
						</button>
					) : (
						''
					)}
				</div>
			</form>
		</div>
	);
}

export default SubtractSum;
