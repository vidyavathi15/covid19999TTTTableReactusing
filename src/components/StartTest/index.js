import {Component} from 'react'
import {Link} from 'react-router-dom'

import QuestionItem from '../QuestionItem'

import RightBar from '../RightBar'

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

class StartTest extends Component {
  state = {
    multipleQuestionsList: questionsList,
    isCheckedReviewLaterBox: false,
    currentQuestionId: questionsList[0].id,
    reviewsList: [],
    initialSeconds: 30,
  }

  componentDidMount() {
    this.initiateTimers()
  }

  stopTimer = () => {
    clearTimeout(this.intervalId)
  }

  initiateTimers = () => {
    this.intervalId = setInterval(this.decrementSeconds, 1000)
  }

  decrementSeconds = () => {
    const {initialSeconds} = this.state

    if (initialSeconds <= 1) {
      this.stopTimer()
    }

    this.setState((prevState) => ({
      initialSeconds: prevState.initialSeconds - 1,
    }))
  }

  goToNextQuestion = () => {
    const {initialSeconds} = this.state
    if (initialSeconds <= 1) {
      this.setState((prevState) => ({
        currentQuestionId: prevState.currentQuestionId + 1,
      }))
    }
  }

  goToPreviousQuestion = () => {
    const {initialSeconds} = this.state
    if (initialSeconds < 1) {
      this.setState((prevState) => ({
        currentQuestionId: prevState.currentQuestionId - 1,
      }))
    }
  }

  selectOption = (clickedId) => {
    const {multipleQuestionsList} = this.state

    const matchedOption = multipleQuestionsList.filter((each) => {
      if (each.id === clickedId) {
        console.log(true)
        return {...each, isOptionClicked: !each.isOptionClicked}
      }
      return each
    })

    console.log(clickedId)
    console.log(matchedOption)

    this.setState({multipleQuestionsList: matchedOption})
  }

  addToReviewList = () => {}

  onChangeReviewCheckbox = () => {
    this.setState((prevState) => ({
      isCheckedReviewLaterBox: !prevState.isCheckedReviewLaterBox,
    }))

    this.addToReviewList()
  }

  reviewLaterQuestion = (reviewedId) => {
    const {multipleQuestionsList} = this.setState

    const reviewedQuestions = multipleQuestionsList.filter((each) => {
      if (each.id === reviewedId) {
        return {...each, reviewLater: !each.reviewLater}
      }
      return each
    })

    this.setState({multipleQuestionsList: reviewedQuestions})
  }

  render() {
    const {
      multipleQuestionsList,
      currentQuestionId,
      reviewsList,
      initialSeconds,
    } = this.state
    const singleQuestionItem = multipleQuestionsList[currentQuestionId]

    return (
      <div className="start-test-bg-container">
        <div className="top-container">
          <div className="name-test-container">
            <h1 className="test-rout-name">Egnify Grand Test</h1>
            <Link to="/" className="link-text">
              <button
                type="button"
                className="submit-btn"
                onClick={this.onClickSubmit}
              >
                Submit
              </button>
            </Link>
          </div>
          <div className="answer-type-review">
            <div className="question-nbr">
              <p className="question-box">{singleQuestionItem.id}</p>
              <p className="single-test-top-head">Single Answer Type</p>
            </div>

            <div className="review-container">
              <input
                type="checkbox"
                className="check-box"
                onChange={this.onChangeReviewCheckbox}
              />
              <p className="review-text">Review Later</p>
            </div>
          </div>

          <QuestionItem
            questionDetails={singleQuestionItem}
            selectOption={this.selectOption}
            reviewLaterQuestion={this.reviewLaterQuestion}
            goToNextQuestion={this.goToNextQuestion}
            goToPreviousQuestion={this.goToPreviousQuestion}
            initialSeconds={initialSeconds}
          />
        </div>
        <div className="right-bar-margin">
          <RightBar
            multipleQuestionsList={multipleQuestionsList}
            reviewsList={reviewsList}
            initialSeconds={initialSeconds}
          />
        </div>
      </div>
    )
  }
}

export default StartTest
