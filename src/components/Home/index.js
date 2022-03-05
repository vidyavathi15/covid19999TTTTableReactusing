import {Component} from 'react'
import {Link} from 'react-router-dom'

/* import {
  AiOutlineQuestionCircle,
  AiTwotoneCalendar,
  AiFillAndroid,
} from 'react-icons/ai'

import {MdScience} from 'react-icons/md'
import {BsCircleHalf, BsBookFill} from 'react-icons/bs'
import {GiAlarmClock} from 'react-icons/gi'

*/

import './index.css'

class Home extends Component {
  state = {
    isSyllabusClicked: false,
    isMarkingSchemaClicked: false,
    isInstructionClicked: false,
    isCheckedTerms: false,
    initialSyllabus: true,
  }

  renderInstructionDetails = () => (
    <div className="instructions-bg-details">
      <h1 className="instructions-heading">Instructions to the candidates</h1>
      <ol className="order-instructions">
        <li className="instruct-1">
          The examination does not require using any paper, pencil and
          calculator.
        </li>
        <li className="instruct-1">
          Every Student will take examinationson Laptop/desktop/SmartPhone
        </li>
        <li className="instruct-1">
          On Computer screen every student will be given objective type multiple
          choice questions(MCQS)
        </li>
        <li className="instruct-1">
          Each student will get questions and answers in different order
          selected randomely from a fixed question Databank
        </li>
        <li className="instruct-1">
          The Students Just need to click on Right Choice/Correct option from
          the multiple choices / options given with each question. for multiple
          choice questions each question has four options, and the candidates,
          has to click the appropriate
        </li>
      </ol>
    </div>
  )

  renderAllAnswerTypes = () => (
    <div className="maths-bg-container">
      <div className="book-container">
        <p className="maths-text">Maths</p>
      </div>

      <div className="radio-box-book">
        <input type="radio" className="radio-btn" />
        <p className="Quadratic">Quadratic Equations</p>
      </div>
      <div className="radio-box-book">
        <input type="radio" className="radio-btn" />
        <p className="Quadratic">Trigonometry</p>
      </div>

      <div className="radio-box-book">
        <p className="maths-text">Physics</p>
      </div>

      <div className="radio-box-book">
        <input type="radio" className="radio-btn" />
        <p className="Quadratic">Kinamatics</p>
      </div>
    </div>
  )

  renderMarkingSchemaDetails = () => (
    <>
      <div className="single-answer-type">
        <p className="single-answer-heading">Single Answer Type:</p>
        <p className="correct-name">Correct Answer: +4</p>
        <p className="correct-name">Wrong Answer: -1</p>
        <p className="correct-name">Not Answer: 0</p>
      </div>
      <div className="single-answer-type">
        <p className="single-answer-heading">Multiple Answer Type:</p>
        <p className="correct-name">Correct Answer: +4</p>
        <p className="correct-name">Wrong Answer: -1</p>
      </div>
      <div className="single-answer-type">
        <p className="single-answer-heading">Numeric Answer Type:</p>
        <p className="correct-name">Correct Answer: +4</p>
        <p className="correct-name">Wrong Answer: -1</p>
      </div>
      <div className="single-answer-type">
        <p className="single-answer-heading">Integer Answer Type:</p>
        <p className="correct-name">Answer is integer in range of 0 to 9</p>
      </div>
    </>
  )

  onClickSyllabus = () => {
    this.setState((prevState) => ({
      isSyllabusClicked: !prevState.isSyllabusClicked,
      isInstructionClicked: false,
      isMarkingSchemaClicked: false,
      initialSyllabus: false,
    }))
  }

  onClickMarkingSchema = () => {
    this.setState((prevState) => ({
      isMarkingSchemaClicked: !prevState.isMarkingSchemaClicked,

      isSyllabusClicked: false,
      isInstructionClicked: false,
      initialSyllabus: false,
    }))
  }

  onClickInstructions = () => {
    this.setState((prevState) => ({
      isInstructionClicked: !prevState.isInstructionClicked,
      isSyllabusClicked: false,
      isMarkingSchemaClicked: false,
      initialSyllabus: false,
    }))
  }

  onChangeTermsCheckBox = () => {
    this.setState((prevState) => ({isCheckedTerms: !prevState.isCheckedTerms}))
  }

  renderAllTypes = () => {
    const {
      isSyllabusClicked,
      isMarkingSchemaClicked,
      isInstructionClicked,
    } = this.state
    return (
      <div>
        {isSyllabusClicked ? this.renderAllAnswerTypes() : null}
        {isMarkingSchemaClicked ? this.renderMarkingSchemaDetails() : null}
        {isInstructionClicked ? this.renderInstructionDetails() : null})
      </div>
    )
  }

  render() {
    const {
      isCheckedTerms,
      isSyllabusClicked,
      isMarkingSchemaClicked,
      isInstructionClicked,
    } = this.state

    const startTestClassName = isCheckedTerms
      ? 'active-test-class-name'
      : 'hidden-test-class-name'
    const {initialSyllabus} = this.state

    const activeSyllabusClassName = isSyllabusClicked
      ? 'border-color'
      : 'without-border'

    const activeMarkingClassName = isMarkingSchemaClicked
      ? 'border-color'
      : 'without-border'

    const activeInstructionsClassName = isInstructionClicked
      ? 'border-color'
      : 'without-border'

    const initialBorderColor = initialSyllabus
      ? 'border-color'
      : 'without-border'

    return (
      <div className="home-bg-container">
        <div className="test-details-container">
          <h1 className="text-name">Egnify Grand Test</h1>
          <div className="date-container">
            <p className="date">26 FEB 2022-2:00 pm to 26 FEB 2022-10 pm</p>
          </div>
        </div>
        <div className="total-time-marks-container">
          <div className="total-details--abut-question">
            <div className="question-container">
              <p className="number-of-questions">40 Q</p>
            </div>
            <div className="marked-or-unmarked">
              <p className="total_marks">90 M</p>
            </div>
            <div className="total-time">
              <p className="total-time-minutes">180 min</p>
            </div>
          </div>
        </div>
        <ul className="pattern-container">
          <button
            type="button"
            className={`syllabus-btn ${activeSyllabusClassName} ${initialBorderColor}`}
            onClick={this.onClickSyllabus}
          >
            <li className="syllabus-of-test">Syllabus</li>
          </button>
          <button
            type="button"
            className={`syllabus-btn ${activeMarkingClassName}`}
            onClick={this.onClickMarkingSchema}
          >
            <li className="syllabus-of-test">Marking Schema</li>
          </button>
          <button
            type="button"
            className={`syllabus-btn ${activeInstructionsClassName}`}
            onClick={this.onClickInstructions}
          >
            <li className="syllabus-of-test">Instructions</li>
          </button>
          <hr />
          {initialSyllabus
            ? this.renderAllAnswerTypes()
            : this.renderAllTypes()}
        </ul>
        <br />
        <div>
          <hr />
        </div>

        <div className="check-box-container">
          <div className="terms-container">
            <input
              type="checkbox"
              className="select-test"
              onChange={this.onChangeTermsCheckBox}
            />
            <p className="about-checkbox"> I accept the instructions</p>
          </div>
          <Link to="/start-test" className="link-text">
            <button
              type="button"
              className={`start-test-button ${startTestClassName}`}
            >
              START TEST
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
