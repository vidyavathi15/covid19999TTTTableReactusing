import './index.css'

const RadioButtonItem3 = (props) => {
  const {vesselDetails, selectRadioButton3, isVesselSelectedId3} = props
  const {name, id} = vesselDetails

  const uniqueRadioButtonId = id
  console.log(uniqueRadioButtonId)

  const onClickRadioButton = () => {
    selectRadioButton3(name)
  }
  return (
    <li className="vessel-item" onClick={onClickRadioButton}>
      <input
        id={uniqueRadioButtonId}
        type="radio"
        className="radio-btn"
        value={isVesselSelectedId3}
        name={isVesselSelectedId3}
      />
      <label htmlFor={uniqueRadioButtonId} className="vessel-name">
        {name}
      </label>
    </li>
  )
}

export default RadioButtonItem3
