import {Component} from 'react'
import {Link} from 'react-router-dom'

import SpecificNumberItemDetails from '../specificNumberItemDetails'

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

class SpecificNumberItem extends Component {
  state = {
    multipleQuestionsList: questionsList,

    reviewsList: [],
    initialSeconds: 2,
    oneOptionSelected: 'option1',
  }

  componentDidMount() {
    this.initiateTimers()
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
  }

  initiateTimers = () => {
    this.intervalId = setInterval(() => {
      this.decrementSeconds()
    }, 1000)
  }

  decrementSeconds = () => {
    const {initialSeconds} = this.state

    if (initialSeconds < 2) {
      this.stopTimer()
    }

    this.setState((prevState) => ({
      initialSeconds: prevState.initialSeconds - 1,
    }))
  }

  callingTimerFunction = () => {
    this.setState({initialSeconds: 2})
    this.initiateTimers()
  }

  /* goToNextQuestion = () => {
    const {
      initialSeconds,

      multipleQuestionsList,
    } = this.state

    const {match} = this.props
    const {params} = match
    const {sheetId} = params

    const currentQuestionId = sheetId
    console.log(currentQuestionId)

    if (
      initialSeconds <= 1 &&
      currentQuestionId < multipleQuestionsList.length
    ) {
      this.setState(
        (prevState) => ({
          currentQiestionId: prevState.currentQuestionId + 1,
        }),
        this.callingTimerFunction(),
      )
    }
  }

  goToPreviousQuestion = () => {
    const {initialSeconds} = this.state
    const {match} = this.props
    const {params} = match
    const {sheetId} = params

    const currentQuestionId = sheetId
    if (initialSeconds <= 1 && currentQuestionId > 1) {
      this.setState(
        (prevState) => ({
          currentQuestionId: prevState.currentQuestionId - 1,
        }),
        this.callingTimerFunction(),
      )
    }
  } */

  oneOptionSelected = (option1) => {
    this.setState({oneOptionSelected: option1})
  }

  twoOptionSelected = (option2) => {
    this.setState({oneOptionSelected: option2})
  }

  threeOptionSelected = (option3) => {
    this.setState({oneOptionSelected: option3})
  }

  fourOptionSelected = (option4) => {
    this.setState({oneOptionSelected: option4})
  }

  selectOption = (clickedId) => {
    const {oneOptionSelected} = this.state

    this.setState((prevState) => ({
      multipleQuestionsList: prevState.multipleQuestionsList.map(
        (eachOption) => {
          if (
            (clickedId === eachOption.id && oneOptionSelected === 'option1') ||
            (clickedId === eachOption.id && oneOptionSelected === 'option2') ||
            (clickedId === eachOption.id && oneOptionSelected === 'option3') ||
            (clickedId === eachOption.id && oneOptionSelected === 'option4')
          ) {
            return {
              ...eachOption,
              isOptionClicked: !eachOption.isOptionClicked,
              reviewLater: false,
            }
          }
          return eachOption
        },
      ),
    }))
  }

  onChangeReviewCheckbox = () => {
    const {match} = this.props
    const {params} = match
    const {sheetId} = params

    const currentQuestionId = sheetId
    const {multipleQuestionsList} = this.state

    const singleQuestionItemOne = multipleQuestionsList[currentQuestionId - 1]

    const updatedReviewList = multipleQuestionsList.map((each) => {
      if (each.id === singleQuestionItemOne.id) {
        return {...each, reviewLater: !each.reviewLater}
      }
      return each
    })
    this.setState({multipleQuestionsList: updatedReviewList})
  }

  getAnsweredList = () => {
    const {multipleQuestionsList} = this.state

    const filteredAnsweredList = multipleQuestionsList.filter((each) => {
      if (each.isOptionClicked === true && each.reviewLater === false) {
        return each
      }
      return null
    })
    return filteredAnsweredList
  }

  getReviewedList = () => {
    const {multipleQuestionsList} = this.state

    const filteredReviewList = multipleQuestionsList.filter(
      (each) => each.reviewLater === true,
    )
    return filteredReviewList
  }

  getNoneList = (listOne, listTwo, listThree) => {
    const {multipleQuestionsList} = this.state

    const noneListLength =
      multipleQuestionsList.length -
      (listOne.length + listTwo.length + listThree.length)

    return noneListLength
  }

  getAnsweredReviewList = () => {
    const {multipleQuestionsList} = this.state

    const bothAnsweredAndReviewedList = multipleQuestionsList.filter((each) => {
      if (each.isOptionClicked === true && each.reviewLater === true) {
        return each
      }
      return null
    })

    return bothAnsweredAndReviewedList
  }

  getNotAnsweredAndReviewedList = () => {
    const {multipleQuestionsList} = this.state

    const notAnsweredAndNotReviewedList = multipleQuestionsList.filter(
      (each) => {
        if (each.isOptionClicked === false && each.reviewLater === true) {
          return each
        }
        return null
      },
    )

    return notAnsweredAndNotReviewedList
  }

  render() {
    const {
      multipleQuestionsList,

      reviewsList,
      initialSeconds,
      oneOptionSelected,
    } = this.state
    const {match} = this.props
    const {params} = match
    const {sheetId} = params

    const currentQuestionId = sheetId

    const answeredList = this.getAnsweredList()

    /* const reviewedList = this.getReviewedList()
    console.log(reviewedList) */

    const answeredAndReviewList = this.getAnsweredReviewList()

    const notAnsweredAndReviewedList = this.getNotAnsweredAndReviewedList()

    const noneAnsweredList = this.getNoneList(
      answeredList,
      answeredAndReviewList,
      notAnsweredAndReviewedList,
    )

    const singleQuestionItem = multipleQuestionsList[currentQuestionId - 1]
    console.log(singleQuestionItem)

    return (
      <div className="start-test-bg-container">
        <div className="top-container">
          <div className="name-test-container">
            <h1 className="test-rout-name">Egnify Grand Test</h1>
            <Link to="/result-page" className="link-text">
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

          <SpecificNumberItemDetails
            questionDetails={singleQuestionItem}
            selectOption={this.selectOption}
            reviewLaterQuestion={this.reviewLaterQuestion}
            goToNextQuestion={this.goToNextQuestion}
            goToPreviousQuestion={this.goToPreviousQuestion}
            initialSeconds={initialSeconds}
            onChangeReviewCheckbox={this.onChangeReviewCheckbox}
            oneOptionSelected={this.oneOptionSelected}
            threeOptionSelected={this.threeOptionSelected}
            anySelected={oneOptionSelected}
            twoOptionSelected={this.twoOptionSelected}
            fourOptionSelected={this.fourOptionSelected}
          />
        </div>
        <div className="right-bar-margin">
          <RightBar
            multipleQuestionsList={multipleQuestionsList}
            reviewsList={reviewsList}
            initialSeconds={initialSeconds}
            answeredList={answeredList}
            answeredAndReviewList={answeredAndReviewList}
            notAnsweredAndReviewedList={notAnsweredAndReviewedList}
            noneAnsweredList={noneAnsweredList}
            singleItemDetailsForRightBar={singleQuestionItem}
          />
        </div>
      </div>
    )
  }
}

export default SpecificNumberItem
