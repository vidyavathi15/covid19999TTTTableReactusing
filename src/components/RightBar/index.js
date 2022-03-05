import {GiAlarmClock} from 'react-icons/gi'

import NumberItem from '../NumberItem'

import './index.css'

const answerSheetNumbersList = [
  {
    sheetId: 1,
    number: '01',
  },
  {
    sheetId: 2,
    number: '02',
  },
  {
    sheetId: 3,
    number: '03',
  },
  {
    sheetId: 4,
    number: '04',
  },
  {
    sheetId: 5,
    number: '05',
  },
  {
    sheetId: 6,
    number: '06',
  },
  {
    sheetId: 7,
    number: '07',
  },
  {
    sheetId: 8,
    number: '08',
  },
  {
    sheetId: 9,
    number: '09',
  },
  {
    sheetId: 10,
    number: '10',
  },
  {
    sheetId: 11,
    number: '11',
  },
  {
    sheetId: 12,
    number: '12',
  },
  {
    sheetId: 13,
    number: '13',
  },
  {
    sheetId: 14,
    number: '14',
  },

  {
    sheetId: 15,
    number: '15',
  },
  {
    sheetId: 16,
    number: '16',
  },
]

const RightBar = (props) => {
  const {
    initialSeconds,
    answeredList,
    answeredAndReviewList,
    notAnsweredAndReviewedList,
    noneAnsweredList,
    singleItemDetailsForRightBar,
  } = props

  return (
    <div className="right-bar-bg-container">
      <div className="clock-timer-container">
        <GiAlarmClock className="clock-timer" />
        <p className="timer-count">{initialSeconds}</p>
      </div>
      <div className="boxes-options">
        <div className="answer-color">
          <p className="answer-right-bar">{answeredList.length}</p>
          <p className="answer-right-text">Answered</p>
        </div>
      </div>

      <div className="answer-color">
        <p className="not-answer-right-bar">{noneAnsweredList}</p>
        <p className="not-answer-right-text">Not Answered</p>
      </div>

      <div className="answer-color">
        <p className="marked-answer-right-bar">
          {answeredAndReviewList.length}
        </p>

        <p className="marked-answer-right-text">Answered & Marked for Review</p>
      </div>

      <div className="answer-color">
        <p className="not-not-marked-answer-right-bar">
          {notAnsweredAndReviewedList.length}
        </p>
        <p className="not-answer-marked-review-right-text">
          Not Answered & Marked for Review
        </p>
      </div>

      <hr className="right-top-line" />

      <ul className="all-option-boxes">
        {answerSheetNumbersList.map((each) => (
          <NumberItem
            key={each.sheetId}
            numberDetails={each}
            singleItemDetailsForRightBar={singleItemDetailsForRightBar}
          />
        ))}
      </ul>
    </div>
  )
}

export default RightBar
