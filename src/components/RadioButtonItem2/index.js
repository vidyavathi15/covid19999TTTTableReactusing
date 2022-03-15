import './index.css'

const RadioButtonItem2 = (props) => {
  const {vesselDetails, selectRadioButton2, isVesselSelectedId2} = props
  const {name, id} = vesselDetails

  const uniqueRadioButtonId = id
  console.log(uniqueRadioButtonId)

  const onClickRadioButton = () => {
    selectRadioButton2(name)
  }
  return (
    <li className="vessel-item" onClick={onClickRadioButton}>
      <input
        id={uniqueRadioButtonId}
        type="radio"
        className="radio-btn"
        value={isVesselSelectedId2}
        name={isVesselSelectedId2}
      />
      <label htmlFor={uniqueRadioButtonId} className="vessel-name">
        {name}
      </label>
    </li>
  )
}

export default RadioButtonItem2
