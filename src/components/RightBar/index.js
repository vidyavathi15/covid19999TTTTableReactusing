import {GiAlarmClock} from 'react-icons/gi'

import './index.css'

const RightBar = (props) => {
  const getAnsweredItems = () => {
    const {multipleQuestionsList} = props
    const isOptionSelectedItems = multipleQuestionsList.map(
      (each) => each.isOptionClicked === true,
    )

    return isOptionSelectedItems
  }

  const getNotAnsweredQuestions = (isOptionSelectedItems) => {
    const {multipleQuestionsList} = props
    const notAnsweredItems =
      multipleQuestionsList.length - isOptionSelectedItems.length

    return notAnsweredItems
  }

  const {initialSeconds} = props

  const isOptionSelectedItems = getAnsweredItems()

  const notAnsweredQuestions = getNotAnsweredQuestions(isOptionSelectedItems)

  return (
    <div className="right-bar-bg-container">
      <div className="clock-timer-container">
        <GiAlarmClock />
        <p className="timer-count">{initialSeconds}</p>
      </div>
      <div className="boxes-options">
        <div className="answer-color">
          <p className="answer-right-bar">{isOptionSelectedItems.length}</p>
          <p className="answer-right-text">Answered</p>
        </div>
      </div>

      <div className="answer-color">
        <p className="not-answer-right-bar">{notAnsweredQuestions}</p>
        <p className="not-answer-right-text">Not Answered</p>
      </div>

      <div className="answer-color">
        <p className="marked-answer-right-bar">{}</p>

        <p className="marked-answer-right-text">Answered & Marked for Review</p>
      </div>

      <div className="answer-color">
        <p className="not-not-marked-answer-right-bar">{}</p>
        <p className="not-answer-marked-review-right-text">
          Not Answered & Marked for Review
        </p>
      </div>

      <hr className="right-top-line" />

      <div className="all-option-boxes">
        <p className="options-right-nbr">01</p>
        <p className="options-right-nbr">02</p>
        <p className="options-right-nbr">03</p>
        <p className="options-right-nbr">04</p>
        <p className="options-right-nbr">04</p>
        <p className="options-right-nbr">05</p>
        <p className="options-right-nbr">06</p>
        <p className="options-right-nbr">07</p>
        <p className="options-right-nbr">08</p>
        <p className="options-right-nbr">09</p>
        <p className="options-right-nbr">10</p>
        <p className="options-right-nbr">11</p>
        <p className="options-right-nbr">12</p>
        <p className="options-right-nbr">13</p>
        <p className="options-right-nbr">14</p>
        <p className="options-right-nbr">15</p>
        <p className="options-right-nbr">16</p>
      </div>
    </div>
  )
}

export default RightBar
