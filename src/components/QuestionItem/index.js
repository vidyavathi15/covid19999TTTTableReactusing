import './index.css'

const QuestionItem = (props) => {
  const {
    questionDetails,
    selectOption,
    goToNextQuestion,
    goToPreviousQuestion,
    initialSeconds,
  } = props

  const {id, question, isOptionClicked} = questionDetails

  const nextAndPreviousButtonHightLightClassNames =
    initialSeconds === 0 ? 'no-highlight-name' : 'next-hight-name'

  const previousButtonHighlightClassName = initialSeconds
    ? 'no-prev-name'
    : 'prev-highlight'

  const optionClassName = isOptionClicked
    ? 'option-selected-name'
    : 'option-not-selected'

  const textColorSelectedNames = isOptionClicked
    ? 'color-text'
    : 'without-color'

  const onClickOption1 = () => {
    selectOption(id)
  }

  const onClickPreviousBtn = () => {
    goToPreviousQuestion()
  }

  const onCLickNextBtn = () => {
    goToNextQuestion()
  }

  return (
    <li className="question-item">
      <p className="question-text">{question}</p>

      <button
        type="button"
        className={`option-answer-container ${optionClassName}`}
        onClick={onClickOption1}
      >
        <p className={`option-1 ${textColorSelectedNames}`}>
          A<span className="option-background">Option1</span>
        </p>
      </button>

      <button
        type="button"
        className={`option-answer-container ${optionClassName}`}
        onClick={onClickOption1}
      >
        <p className={`option-1 ${textColorSelectedNames}`}>
          B<span className="option-background">Option2</span>
        </p>
      </button>

      <button
        type="button"
        className={`option-answer-container ${optionClassName}`}
        onClick={onClickOption1}
      >
        <p className={`option-1 ${textColorSelectedNames}`}>
          C<span className="option-background">Option3</span>
        </p>
      </button>

      <button
        type="button"
        className={`option-answer-container ${optionClassName}`}
        onClick={onClickOption1}
      >
        <p className={`option-1 ${textColorSelectedNames}`}>
          D<span className="option-background">Option4</span>
        </p>
      </button>
      <div className="previous-next-button-container">
        <button
          className={`previous-btn ${previousButtonHighlightClassName}`}
          type="button"
          onClick={onClickPreviousBtn}
        >
          Previous
        </button>
        <button
          className={`next-btn ${nextAndPreviousButtonHightLightClassNames}`}
          type="button"
          onClick={onCLickNextBtn}
        >
          Next
        </button>
      </div>
    </li>
  )
}

export default QuestionItem
