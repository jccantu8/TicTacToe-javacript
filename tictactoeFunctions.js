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

const displayController = (() => {
	const playGame = () => {
		gameBoard.displayBoard();
		if (checkPlayerWin(gameBoard.boardMain)) {
			alert("You win! Click on the board to restart.");
			gameBoard.restart();
			return;
		}
		if (checkDraw(gameBoard.boardMain)) {
			alert("Draw! Click on the board to restart.");
			gameBoard.restart();
			return;
		}
		makeComputerMove();
		gameBoard.displayBoard();
		if (checkComputerWin(gameBoard.boardMain)) {
			alert("You lose! Click on the board to restart.");
			gameBoard.restart();
			return;
		}
		if (checkDraw(gameBoard.boardMain)) {
			alert("Draw! Click on the board to restart.");
			gameBoard.restart();
			return;
		}
	};

	const checkPlayerWin = (board) => {
		for (let i = 0; i <= 2; i++) {
			if (board[3*i] === 'X' && board[3*i + 1] === 'X' && board[3*i + 2] === 'X') {
				return true;
			} else if (board[i] === 'X' && board[i + 3] === 'X' && board[i + 6] === 'X') {
				return true;
			};
		}

		if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
				return true;
		} else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
				return true;
		}
	};

	const checkComputerWin = (board) => {
		for (let i = 0; i <= 2; i++) {
			if (board[3*i] === 'O' && board[3*i + 1] === 'O' && board[3*i + 2] === 'O') {
				return true;
			} else if (board[i] === 'O' && board[i + 3] === 'O' && board[i + 6] === 'O') {
				return true;
			};
		}

		if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
				return true;
		} else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
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
		move = optimalMove(gameBoard.boardMain, 'computer')
		gameBoard.placeO(move, gameBoard.boardMain);
	};

	const optimalMove = (board, currentPlayer) => {

		let topScore = -10000;
		let topMove = null;
		let depth = 0;

		for(let position = 0; position < 9; position++) {
			if (gameBoard.isEmpty(position, board)) {
				let boardCopy = board.slice();

				if (currentPlayer === 'computer') {
					gameBoard.placeO(position, boardCopy);
				} else { //Must be human then
					gameBoard.placeX(position, boardCopy);
				};

				let nextPlayer = null;
				if (currentPlayer = 'computer') {
					nextPlayer = 'human';
				} else {
					nextPlayer = 'computer';
				};

				newScore = minimax(boardCopy, nextPlayer, depth);

				if (newScore > topScore) {
					topScore = newScore;
					topMove = position;
				}
			}
		};

		return topMove;
	};

	const minimax = (board, currentPlayer, depth) => {
		if (checkComputerWin(board)) {
			return 10;
		} else if (checkPlayerWin(board)) {
			return -10;
		} else if (checkDraw(board)) {
			return 0;
		};

		let scoreList = [];
		depth++;

		for(let position = 0; position < 9; position++) {
			if (gameBoard.isEmpty(position, board)) {
				let boardCopy = board.slice();

				if (currentPlayer === 'computer') {
					gameBoard.placeO(position, boardCopy);
				} else { //Must be human then
					gameBoard.placeX(position, boardCopy);
				};

				let nextPlayer = null;
				if (currentPlayer === 'computer') {
					nextPlayer = 'human';
				} else {
					nextPlayer = 'computer';
				};

				scoreList.push(minimax(boardCopy, nextPlayer, depth));
			}
		}

		if (currentPlayer === 'computer') {
			return Math.max(...scoreList) - depth;
		} else {
			return Math.min(...scoreList) + depth;
		};

	};

	return {
		playGame,
		checkPlayerWin,
		checkComputerWin,
		makeComputerMove,
	};
})();

gameBoard.addListeners();