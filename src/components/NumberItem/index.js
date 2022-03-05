import {Link} from 'react-router-dom'
import './index.css'

const NumberItem = (props) => {
  const {numberDetails, singleItemDetailsForRightBar} = props
  const {number, sheetId} = numberDetails
  const {id, isOptionClicked, reviewLater} = singleItemDetailsForRightBar
  let colorNumberClassNames = ''

  const renderAnsweredColorClassNames = () => {
    if (isOptionClicked === true && reviewLater === false) {
      colorNumberClassNames = 'blue-color-bg-nbr'
    } else if (isOptionClicked === true && reviewLater === true) {
      colorNumberClassNames = 'yellow-color-bg-nbr'
    } else if (isOptionClicked === false && reviewLater === true) {
      colorNumberClassNames = 'red-color-bg-nbr'
    } else {
      colorNumberClassNames = 'grey-color-bg-nbr'
    }

    return colorNumberClassNames
  }

  const changedColorNumberNames =
    id === sheetId ? renderAnsweredColorClassNames() : null

  return (
    <Link to={`/specificNumberItem/${sheetId}`} className="link-text">
      <li className="number-item">
        <p className={`options-right-nbr ${changedColorNumberNames}`}>
          {number}
        </p>
      </li>
    </Link>
  )
}

export default NumberItem
