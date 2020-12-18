import React, { useState } from 'react';
import correct from '../assets/correct.png';
import incorrect from '../assets/incorrect.png';
import not_set from '../assets/not_set.png';

function Sum() {
	const [firstNum, setFirstNum] = useState(getRandomInt());
	const [secNum, setSecNum] = useState(getRandomInt());
	const answer = firstNum + secNum;
	const [isAnswerCorrect, setIsAnswerCorrect] = useState({
		image: not_set,
	});
	const [userAnswer, setUserAnswer] = useState('');

	function getRandomInt() {
		return Math.floor(Math.random() * (10 - 0 + 1) + 0);
	}

	const onUserInputChange = (e) => {
		setUserAnswer(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		userAnswer === answer.toString()
			? setIsAnswerCorrect({ image: correct })
			: setIsAnswerCorrect({ image: incorrect });
	};

	const nextSum = (e) => {
		e.preventDefault();

		setIsAnswerCorrect({ image: not_set });
		setFirstNum(getRandomInt());
		setSecNum(getRandomInt());
		setUserAnswer('');
	};

	return (
		<div className='ui raised center aligned segment'>
			<form onSubmit={onSubmit}>
				<div className='main'>
					<span className='sum'>
						{firstNum} + {secNum} = &nbsp;
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

export default Sum;
