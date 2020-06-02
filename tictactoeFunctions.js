const gameBoard = (() => {
	let boardMain = ['','','','','','','','',''];

	const placeX = (position, board) => {
		board[position] = 'X';
	};

	const placeO = (position, board) => {
		board[position] = 'O';
	};

	const isEmpty = (position, board) => {
		if (board[position] === '') {
			return true;
		} else {
			return false;
		}
	};

	const addListeners = () => {
		document.querySelector(".a").addEventListener("click", () => {
			if (isEmpty(0, boardMain)) {
				gameBoard.placeX(0, boardMain);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".b").addEventListener("click", () => {
			if (isEmpty(1, boardMain)) {
				gameBoard.placeX(1, boardMain);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".c").addEventListener("click", () => {
			if (isEmpty(2, boardMain)) {
				gameBoard.placeX(2, boardMain);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".d").addEventListener("click", () => {
			if (isEmpty(3, boardMain)) {
				gameBoard.placeX(3, boardMain);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".e").addEventListener("click", () => {
			if (isEmpty(4, boardMain)) {
				gameBoard.placeX(4, boardMain);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".f").addEventListener("click", () => {
			if (isEmpty(5, boardMain)) {
				gameBoard.placeX(5, boardMain);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".g").addEventListener("click", () => {
			if (isEmpty(6, boardMain)) {
				gameBoard.placeX(6, boardMain);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".h").addEventListener("click", () => {
			if (isEmpty(7, boardMain)) {
				gameBoard.placeX(7, boardMain);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
		document.querySelector(".i").addEventListener("click", () => {
			if (isEmpty(8, boardMain)) {
				gameBoard.placeX(8, boardMain);
				displayController.playGame();
			} else {
				alert("Can't do that.");
			}
		});
	};

	const displayBoard = () => {
		document.querySelector(".a").innerHTML = boardMain[0];
		document.querySelector(".b").innerHTML = boardMain[1];
		document.querySelector(".c").innerHTML = boardMain[2];
		document.querySelector(".d").innerHTML = boardMain[3];
		document.querySelector(".e").innerHTML = boardMain[4];
		document.querySelector(".f").innerHTML = boardMain[5];
		document.querySelector(".g").innerHTML = boardMain[6];
		document.querySelector(".h").innerHTML = boardMain[7];
		document.querySelector(".i").innerHTML = boardMain[8];
	};

	const restart = () => {
		for(let i = 0; i < 9; i++) {
			boardMain[i] = '';
		}
	}

	return {
		boardMain,
		placeX,
		placeO,
		displayBoard,
		addListeners,
		restart,
		isEmpty,
	};
})();

const Player = (name) => {

};

const displayController = (() => {
	const playGame = () => {
		gameBoard.displayBoard();
		if (checkPlayerWin(gameBoard.boardMain)) {
			return;
		}
		if (checkDraw(gameBoard.boardMain)) {
			alert("Draw!");
			gameBoard.restart();
			return;
		}
		makeComputerMove();
		gameBoard.displayBoard();
		if (checkComputerWin(gameBoard.boardMain)) {
			return;
		}
		if (checkDraw(gameBoard.boardMain)) {
			alert("Draw!");
			gameBoard.restart();
			return;
		}
	};

	const checkPlayerWin = (board) => {
		for (let i = 0; i <= 2; i++) {
			if (board[3*i] === 'X' && board[3*i + 1] === 'X' && board[3*i + 2] === 'X') {
				alert('You win!');
				gameBoard.restart();
				return true;
			} else if (board[i] === 'X' && board[i + 3] === 'X' && board[i + 6] === 'X') {
				alert('You win!');
				gameBoard.restart();
				return true;
			};
		}

		if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
				alert('You win!');
				gameBoard.restart();
				return true;
		} else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
				alert('You win!');
				gameBoard.restart();
				return true;
		}
	};

	const checkComputerWin = (board) => {
		for (let i = 0; i <= 2; i++) {
			if (board[3*i] === 'O' && board[3*i + 1] === 'O' && board[3*i + 2] === 'O') {
				alert('You lose!');
				gameBoard.restart();
				return true;
			} else if (board[i] === 'O' && board[i + 3] === 'O' && board[i + 6] === 'O') {
				alert('You lose!');
				gameBoard.restart();
				return true;
			};
		}

		if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
				alert('You lose!');
				gameBoard.restart();
				return true;
		} else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
				alert('You lose!');
				gameBoard.restart();
				return true;
		}
	};

	const checkDraw = (board) => {
		for(let i = 0; i < 9; i++){
			if (gameBoard.isEmpty(i, board)) {
				return false;
			}
		}

		return true;
	};

	const makeComputerMove = () => {
		let randomPosition = null;
		do {
			randomPosition = Math.floor(Math.random() * 9);
		}
		while (!(gameBoard.boardMain[randomPosition] === ''));

		gameBoard.placeO(randomPosition, gameBoard.boardMain);
	};

	/*const optimalMove = () => {
		for(let position = 0; position < 9; position++) {
			if 
		}
	};*/

	return {
		playGame,
		checkPlayerWin,
		checkComputerWin,
		makeComputerMove,
	};
})();

gameBoard.addListeners();