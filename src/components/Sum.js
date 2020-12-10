import React, { useState } from 'react';

function Sum() {
	const [firstNum, setFirstNum] = useState(getRnd());
	const [secNum, setSecNum] = useState(getRnd());
	const answer = firstNum + secNum;
	const [userAnswer, setUserAnswer] = useState('');

	function getRnd() {
		return Math.floor(Math.random() * (10 - 0 + 1) + 0);
	}

	const onUserInputChange = (e) => {
		setUserAnswer(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		userAnswer === answer.toString()
			? console.log('correct!')
			: console.log('incorrect');
		setFirstNum(getRnd());
		setSecNum(getRnd());
		setUserAnswer('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='ui input'>
				{firstNum} + {secNum} =
				<input
					type='text'
					value={userAnswer}
					onChange={onUserInputChange}
					style={{ width: '3.5em', height: '1em' }}
				/>
			</div>
			<div>
				<br />
				<button className='ui purple button'>Check Answer</button>
			</div>
		</form>
	);
}

export default Sum;
