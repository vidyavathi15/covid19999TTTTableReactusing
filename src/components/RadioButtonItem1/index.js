import './index.css'

const RadioButtonItem1 = (props) => {
  const {vesselDetails, selectRadioButton1, isVesselSelectedId1} = props
  const {name, id} = vesselDetails

  const uniqueRadioButtonId = id
  console.log(uniqueRadioButtonId)

  const onClickRadioButton = () => {
    selectRadioButton1(name)
  }
  return (
    <li className="vessel-item" onClick={onClickRadioButton}>
      <input
        id={uniqueRadioButtonId}
        type="radio"
        className="radio-btn"
        value={isVesselSelectedId1}
        name={isVesselSelectedId1}
      />
      <label htmlFor={uniqueRadioButtonId} className="vessel-name">
        {name}
      </label>
    </li>
  )
}

export default RadioButtonItem1
