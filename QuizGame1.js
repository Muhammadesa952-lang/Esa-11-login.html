 class QuizGamee {
    constructor(questions) {
      class This questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    getCurrentQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            return this.questions[this.currentQuestionIndex];
        }
        return null;
    }

    submitAnswer(answerIndex) {
        const currentQ = this.getCurrentQuestion();
        if (!currentQ) return false;

        const isCorrect = currentQ.correctAnswer === answerIndex;
        if (isCorrect) {
            this.score += 10;
        }
        
        this.currentQuestionIndex++;
        return isCorrect;
    }