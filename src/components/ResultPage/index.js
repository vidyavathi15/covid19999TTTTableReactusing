import {
  AiOutlinePlusCircle,
  AiOutlineCheckCircle,
  AiFillAndroid,
} from 'react-icons/ai'

import {GiAlarmClock} from 'react-icons/gi'

import './index.css'

const questionsList = [
  {
    id: 1,

    question: 'A line which cuts a pair of parallel lines is called',
    isOptionClicked: false,
    reviewLater: false,
  },

  {
    id: 2,
    question: 'An angle whose value is ____, is called complete angle',
    isOptionClicked: false,
    reviewLater: false,
  },
  {
    id: 3,
    question:
      'The areas of two similar triangles are 81 sq. cm and 49 sq. cm. Find the ratio of their corresponding heights',
    isOptionClicked: false,
    reviewLater: false,
  },

  {
    id: 4,
    question:
      'Consider ΔABD such that angle ADB = 20° and C is a point on BD such that AB=AC and CD=CA. Then the measure of angle ABC is',
    isOptionClicked: false,
    reviewLater: false,
  },
  {
    id: 5,
    question:
      'If the length and breadth of a rectangle are increased by a% and b% respectively, then the area will be increased by',
    isOptionClicked: false,
    reviewLater: false,
  },
  {
    id: 6,
    question: 'A line which cuts a pair of parallel lines is called',
    isOptionClicked: false,
    reviewLater: false,
  },

  {
    id: 7,
    question: 'An angle whose value is ____, is called complete angle',
    isOptionClicked: false,
    reviewLater: false,
  },
  {
    id: 8,
    question:
      'The areas of two similar triangles are 81 sq. cm and 49 sq. cm. Find the ratio of their corresponding heights',
    isOptionClicked: false,
    reviewLater: false,
  },

  {
    id: 9,
    question:
      'The areas of two similar triangles are 81 sq. cm and 49 sq. cm. Find the ratio of their corresponding heights',
    isOptionClicked: false,
    reviewLater: false,
  },

  {
    id: 10,
    question:
      'Consider ΔABD such that angle ADB = 20° and C is a point on BD such that AB=AC and CD=CA. Then the measure of angle ABC is',
    isOptionClicked: false,
    reviewLater: false,
  },

  {
    id: 11,
    question:
      'If the length and breadth of a rectangle are increased by a% and b% respectively, then the area will be increased by',
    isOptionClicked: false,
    reviewLater: false,
  },
  {
    id: 12,
    question: 'A line which cuts a pair of parallel lines is called',
    isOptionClicked: false,
    reviewLater: false,
  },
  {
    id: 13,
    question: 'An angle whose value is ____, is called complete angle',
    isOptionClicked: false,
    reviewLater: false,
  },
  {
    id: 14,
    question:
      'The areas of two similar triangles are 81 sq. cm and 49 sq. cm. Find the ratio of their corresponding heights',
    isOptionClicked: false,
    reviewLater: false,
  },
  {
    id: 15,
    question:
      'Consider ΔABD such that angle ADB = 20° and C is a point on BD such that AB=AC and CD=CA. Then the measure of angle ABC is',
    isOptionClicked: false,
    reviewLater: false,
  },

  {
    id: 16,
    question:
      'If the length and breadth of a rectangle are increased by a% and b% respectively, then the area will be increased by',
    isOptionClicked: false,
    reviewLater: false,
  },
]

const ResultPage = () => {
  const totalMarksScore = questionsList.length * 4

  return (
    <>
      <h1 className="result-name">Egnify Grand Test</h1>
      <div className="result-bg-cont">
        <div className="overall">
          <div className="top-result">
            <div className="result-score-cont">
              <p className="marks-scored-gree">
                {totalMarksScore} / <span className="total-out-blue">90</span>
              </p>
            </div>
            <div className="schema-cont">
              <div className="each-schema">
                <AiOutlinePlusCircle className="result-display" />
                <p className="marks-scored">
                  Marks Scored :
                  <span className="marks-green">{totalMarksScore} M</span>
                </p>
              </div>

              <div className="each-schema">
                <AiOutlineCheckCircle className="result-display" />
                <p className="marks-scored">
                  Total Marks : <span className="marks-violet">90 M</span>
                </p>
              </div>

              <div className="each-schema">
                <GiAlarmClock className="result-display" />
                <p className="marks-scored">
                  Time Spent : <span className="marks-yellow">40: 15 s</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bottom-result">
            <div className="table">
              <ul className="ul-subject">
                <li className="heading">Subjects</li>
                <li className="heading">Marks Scored</li>
              </ul>
              <ul className="subjects-marks-ul">
                <li className="names-sub-table-blue">
                  Maths <span className="score-each">5</span>
                </li>
                <li className="names-sub-red">
                  Physics<span className="score-each-2">-2</span>
                </li>
                <li className="names-sub-light">
                  Chemistry <span className="score-each-3">-1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="android-image">
          <AiFillAndroid className="android-big-image" />
        </div>
      </div>
    </>
  )
}

export default ResultPage
