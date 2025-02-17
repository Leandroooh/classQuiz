class Quiz {
	#currentId;
	#points;
	constructor() {
		this.#points = 0;
		this.#currentId = 0;

		this.#getElements();

		this.answers = [
			{
				question: "Quanto é 1 + 1?",
				questions: [
					{ text: 2, isCorrect: true },
					{ text: 22, isCorrect: false },
					{ text: 11, isCorrect: false },
					{ text: 1, isCorrect: false },
				],
			},
			{
				question: "Qual a capital do Brasil?",
				questions: [
					{ text: "Rio de Janeiro", isCorrect: false },
					{ text: "Campinas", isCorrect: false },
					{ text: "Bahia", isCorrect: false },
					{ text: "Brasilia", isCorrect: true },
				],
			},
			{
				question: "O que é PIB?",
				questions: [
					{ text: "Produto Interno Brasileiro", isCorrect: false },
					{ text: "Produto Interno Politico", isCorrect: false },
					{ text: "Produto Interno Bruto", isCorrect: true },
					{ text: "Produto Interno Básico", isCorrect: false },
				],
			},
		];
	}

	#getElements() {
		this.answerTitle = document.getElementById("answer-title");
		this.nextButton = document.getElementById("next-button");
		this.pointsScreen = document.getElementById("points-area");
		this.answerList = Array.from(document.getElementsByTagName("li"));

		this.modal = document.getElementById("modal");
		this.modalTitle = document.getElementById("dialog-h1");
		this.modalDesc = document.getElementById("dialog-p");
		this.resetButton = document.getElementById("dialog-button");
	}

	updateQuestion() {
		if (this.answers.length <= this.#currentId) {
			console.log("Você finalizou o Quiz!");
			this.resetQuiz();
			return;
		}

		this.answerTitle.textContent = this.answers[this.#currentId].question;

		this.answerList.forEach((item, i) => {
			item.style.color = "#C6ADFF";
			item.textContent = this.answers[this.#currentId].questions[i].text;
		});
	}

	addPoints(value) {
		this.#points += value;
		this.pointsScreen.textContent = `Pontução: ${this.#points}`;
	}

	correctAnswer() {
		this.answerList.forEach((item, i) => {
			item.addEventListener("click", () => {
				if (item.classList.contains("respondida")) {
					item.classList.remove("respondida");
					return;
				}

				const clickedAnswer =
					this.answers[this.#currentId].questions[i].isCorrect;

				if (clickedAnswer) {
					// adiciona 15 pontos
					this.addPoints(15);
					item.style.color = "lightGreen";

					for (const answer of this.answerList) {
						answer.classList.remove("respondida");
					}
				} else {
					// remove 5 pontos
					this.addPoints(-5);

					// Altera a cor para Vermelho
					item.style.color = "red";
				}

				item.classList.add("respondida");
			});
		});
	}

	nextQuestion() {
		if (this.answers < this.#currentId) {
			this.resetQuiz();
		} else {
			this.#currentId++;
			this.updateQuestion();

			// Debug para controle
			console.log(`Id: ${this.#currentId}\n`);
			console.log(`Questão Atual: ${this.#currentId}`);
			console.log(`Tamanho do Quiz: ${this.answers.length}`);
		}
	}

	resetQuiz() {
		this.modalTitle.textContent = "PARABÉNS!";
		this.modalDesc.textContent = `Você finalizou o Quiz! 
                            Sua pontuação total foi de ${this.#points}`;

		this.points = 0;
		this.#currentId = 0;

		if (!this.modal.hasAttribute("open")) {
			this.modal.showModal();
			this.modal.open = true;
			this.modal.style.display = "flex";
		} else {
			this.updateQuestion();
			this.modal.style.display = "none";

			this.pointsScreen.textContent - `Pontuação: ${this.#points}`;

			this.modal.close();
		}
	}
}

const quiz = new Quiz();

quiz.updateQuestion();
quiz.correctAnswer();

quiz.nextButton.addEventListener("click", () => {
	quiz.nextQuestion();
});

quiz.resetButton.addEventListener("click", () => {
	quiz.resetQuiz();
});
