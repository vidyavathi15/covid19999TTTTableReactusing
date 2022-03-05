import './index.css'

const SpecificNumberItemDetails = (props) => {
  const {
    questionDetails,
    selectOption,
    goToNextQuestion,
    goToPreviousQuestion,
    initialSeconds,
    oneOptionSelected,
    anySelected,
    twoOptionSelected,
    threeOptionSelected,
    fourOptionSelected,
  } = props

  const {id, question, isOptionClicked, reviewLater} = questionDetails
  console.log(reviewLater)
  console.log(isOptionClicked)
  console.log(anySelected)

  const nextAndPreviousButtonHightLightClassNames =
    initialSeconds === 0 ? 'no-highlight-name' : 'next-hight-name'

  const previousButtonHighlightClassName = initialSeconds
    ? 'no-prev-name'
    : 'prev-highlight'

  const optionClassName = isOptionClicked
    ? 'option-selected-name'
    : 'option-not-selected'

  const oneColorSelectedNames =
    anySelected === 'option1' ? 'color-text' : 'without-color'

  const twoColorClassName =
    anySelected === 'option2' ? 'color-text' : 'without-color'

  const threeColorName =
    anySelected === 'option3' ? 'color-text' : 'without-color'

  const fourColorClassName =
    anySelected === 'option4' ? 'color-text' : 'without-color'

  const onClickPreviousBtn = () => {
    goToPreviousQuestion()
  }

  const onClickNextBtn = () => {
    goToNextQuestion()
  }

  const onClickOptionOne = () => {
    oneOptionSelected('option1')
    selectOption(id)
  }

  const onClickOptionTwo = () => {
    twoOptionSelected('option2')
    selectOption(id)
  }

  const onClickOptionThree = () => {
    threeOptionSelected('option3')
    selectOption(id)
  }

  const onClickOptionFour = () => {
    fourOptionSelected('option4')
    selectOption(id)
  }

  return (
    <li className="question-item">
      <p className="question-text">{question}</p>

      <button
        type="button"
        className={`option-answer-container ${optionClassName}`}
        onClick={onClickOptionOne}
      >
        <p className={`option-1 ${oneColorSelectedNames}`}>
          A<span className="option-background">Option1</span>
        </p>
      </button>

      <button
        type="button"
        className={`option-answer-container ${optionClassName}`}
        onClick={onClickOptionTwo}
      >
        <p className={`option-1 ${twoColorClassName}`}>
          B<span className="option-background">Option2</span>
        </p>
      </button>

      <button
        type="button"
        className={`option-answer-container ${optionClassName}`}
        onClick={onClickOptionThree}
      >
        <p className={`option-1 ${threeColorName}`}>
          C<span className="option-background">Option3</span>
        </p>
      </button>

      <button
        type="button"
        className={`option-answer-container ${optionClassName}`}
        onClick={onClickOptionFour}
      >
        <p className={`option-1 ${fourColorClassName}`}>
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
          onClick={onClickNextBtn}
        >
          Next
        </button>
      </div>
    </li>
  )
}

export default SpecificNumberItemDetails
