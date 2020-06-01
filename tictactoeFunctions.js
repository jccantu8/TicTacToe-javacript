const gameBoard = (() => {
	let board = ['','','','','','','','',''];

	const placeX = (position) => {
		board[position] = 'X';
	};

	const placeO = (position) => {
		board[position] = 'O';
	};

	const isEmpty = (position) => {
		if (board[position] === '') {
			return true;
		} else {
			return false;
		}
	};

	const addListeners = () => {
		document.querySelector(".a").addEventListener("click", () => {
			if (isEmpty(0)) {
				gameBoard.placeX(0);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".b").addEventListener("click", () => {
			if (isEmpty(1)) {
				gameBoard.placeX(1);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".c").addEventListener("click", () => {
			if (isEmpty(2)) {
				gameBoard.placeX(2);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".d").addEventListener("click", () => {
			if (isEmpty(3)) {
				gameBoard.placeX(3);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".e").addEventListener("click", () => {
			if (isEmpty(4)) {
				gameBoard.placeX(4);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".f").addEventListener("click", () => {
			if (isEmpty(5)) {
				gameBoard.placeX(5);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".g").addEventListener("click", () => {
			if (isEmpty(6)) {
				gameBoard.placeX(6);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".h").addEventListener("click", () => {
			if (isEmpty(7)) {
				gameBoard.placeX(7);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".i").addEventListener("click", () => {
			if (isEmpty(8)) {
				gameBoard.placeX(8);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
	};

	const displayBoard = () => {
		document.querySelector(".a").innerHTML = board[0];
		document.querySelector(".b").innerHTML = board[1];
		document.querySelector(".c").innerHTML = board[2];
		document.querySelector(".d").innerHTML = board[3];
		document.querySelector(".e").innerHTML = board[4];
		document.querySelector(".f").innerHTML = board[5];
		document.querySelector(".g").innerHTML = board[6];
		document.querySelector(".h").innerHTML = board[7];
		document.querySelector(".i").innerHTML = board[8];
	};

	const restart = () => {
		for(let i = 0; i < 9; i++) {
			board[i] = '';
		}
	}

	return {
		board,
		placeX,
		placeO,
		displayBoard,
		addListeners,
		restart,
	};
})();

const Player = (name) => {

};

const displayController = (() => {
	const playGame = () => {
		gameBoard.displayBoard();
		if (checkPlayerWin()) {
			return;
		}
		makeComputerMove();
		gameBoard.displayBoard();
		if (checkComputerWin()) {
			return;
		}
	};

	const checkPlayerWin = () => {
		for (let i = 0; i <= 2; i++) {
			if (gameBoard.board[3*i] === 'X' && gameBoard.board[3*i + 1] === 'X' && gameBoard.board[3*i + 2] === 'X') {
				alert('You win!');
				gameBoard.restart();
				return true;
			} else if (gameBoard.board[i] === 'X' && gameBoard.board[i + 3] === 'X' && gameBoard.board[i + 6] === 'X') {
				alert('You win!');
				gameBoard.restart();
				return true;
			};
		}

		if (gameBoard.board[0] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[8] === 'X') {
				alert('You win!');
				gameBoard.restart();
				return true;
		} else if (gameBoard.board[2] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[6] === 'X') {
				alert('You win!');
				gameBoard.restart();
				return true;
		}
	};

	const checkComputerWin = () => {
		for (let i = 0; i <= 2; i++) {
			if (gameBoard.board[3*i] === 'O' && gameBoard.board[3*i + 1] === 'O' && gameBoard.board[3*i + 2] === 'O') {
				alert('You lose!');
				gameBoard.restart();
				return true;
			} else if (gameBoard.board[i] === 'O' && gameBoard.board[i + 3] === 'O' && gameBoard.board[i + 6] === 'O') {
				alert('You lose!');
				gameBoard.restart();
				return true;
			};
		}

		if (gameBoard.board[0] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[8] === 'O') {
				alert('You lose!');
				gameBoard.restart();
				return true;
		} else if (gameBoard.board[2] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[6] === 'O') {
				alert('You lose!');
				gameBoard.restart();
				return true;
		}
	};

	const makeComputerMove = () => {
		let randomPosition = null;
		do {
			randomPosition = Math.floor(Math.random() * 9);
		}
		while (!(gameBoard.board[randomPosition] === ''));

		gameBoard.placeO(randomPosition);
	};

	return {
		playGame,
		checkPlayerWin,
		checkComputerWin,
		makeComputerMove,
	};
})();

gameBoard.addListeners();