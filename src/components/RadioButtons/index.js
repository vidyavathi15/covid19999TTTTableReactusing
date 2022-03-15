import {Component} from 'react'
import {v4} from 'uuid'
import RadioButtonItem1 from '../RadioButtonItem1'
import RadioButtonItem2 from '../RadioButtonItem2'
import RadioButtonItem3 from '../RadioButtonItem3'
import RadioButtonItem4 from '../RadioButtonItem4'

// import FalconeResult from '../FalconeResult'

import './index.css'

class RadioButtons extends Component {
  state = {
    sendingVesselsList: [],
    isVesselSelectedId1: '',
    isVesselSelectedId2: '',
    isVesselSelectedId3: '',
    isVesselSelectedId4: '',
  }

  componentDidMount() {
    this.getSendingVesselsList()
  }

  getSendingVesselsList = async () => {
    const vesselUrl = 'https://findfalcone.herokuapp.com/vehicles'
    const options = {
      method: 'GET',
    }

    const response = await fetch(vesselUrl, options)
    const jsonData = await response.json()

    const formattedVesselsList = jsonData.map((each) => ({
      id: v4(),
      name: each.name,
      maxDistance: each.max_distance,
      speed: each.speed,
      totalNo: each.total_no,
    }))
    this.setState({sendingVesselsList: formattedVesselsList})
  }

  selectRadioButton1 = (activeVesselSelectedId1) => {
    this.setState({isVesselSelectedId1: activeVesselSelectedId1})
  }

  selectRadioButton2 = (activeVesselSelectedId2) => {
    this.setState({isVesselSelectedId2: activeVesselSelectedId2})
  }

  selectRadioButton3 = (activeVesselSelectedId3) => {
    this.setState({isVesselSelectedId3: activeVesselSelectedId3})
  }

  selectRadioButton4 = (activeVesselSelectedId4) => {
    this.setState({isVesselSelectedId4: activeVesselSelectedId4})
  }

  selectRadioButton2 = (activeVesselSelectedId2) => {
    this.setState({isVesselSelectedId2: activeVesselSelectedId2})
  }

  render() {
    const {
      sendingVesselsList,
      isVesselSelectedId1,
      isVesselSelectedId2,
      isVesselSelectedId3,
      isVesselSelectedId4,
    } = this.state

    // const {planetsList} = this.props

    console.log(sendingVesselsList)

    return (
      <div className="radio-button-container">
        <div className="button-container">
          <ul className="vessels-list">
            {sendingVesselsList.map((each) => (
              <RadioButtonItem1
                key={each.id}
                vesselDetails={each}
                isVesselSelectedId1={isVesselSelectedId1}
                selectRadioButton1={this.selectRadioButton1}
              />
            ))}
          </ul>
          <ul className="vessels-list">
            {sendingVesselsList.map((each) => (
              <RadioButtonItem2
                key={each.id}
                vesselDetails={each}
                isVesselSelectedId2={isVesselSelectedId2}
                selectRadioButton2={this.selectRadioButton2}
              />
            ))}
          </ul>
          <ul className="vessels-list">
            {sendingVesselsList.map((each) => (
              <RadioButtonItem3
                key={each.id}
                vesselDetails={each}
                isVesselSelectedId3={isVesselSelectedId3}
                selectRadioButton3={this.selectRadioButton3}
              />
            ))}
          </ul>
          <ul className="vessels-list">
            {sendingVesselsList.map((each) => (
              <RadioButtonItem4
                key={each.id}
                vesselDetails={each}
                selectRadioButton4={this.selectRadioButton4}
                isVesselSelectedId4={isVesselSelectedId4}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default RadioButtons
