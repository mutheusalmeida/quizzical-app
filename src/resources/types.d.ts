declare module 'questions' {
  export type QuestionType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
    id: string
    selected: string
  }
}
