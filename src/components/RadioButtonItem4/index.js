import './index.css'

const RadioButtonItem4 = (props) => {
  const {
    vesselDetails,
    selectRadioButton4,

    isVesselSelectedId4,
  } = props
  const {name, id} = vesselDetails

  const uniqueRadioButtonId = id
  console.log(uniqueRadioButtonId)

  const onClickRadioButton = () => {
    selectRadioButton4(name)
  }
  return (
    <li className="vessel-item" onClick={onClickRadioButton}>
      <input
        id={uniqueRadioButtonId}
        type="radio"
        className="radio-btn"
        value={isVesselSelectedId4}
        name={isVesselSelectedId4}
      />
      <label htmlFor={uniqueRadioButtonId} className="vessel-name">
        {name}
      </label>
    </li>
  )
}

export default RadioButtonItem4
