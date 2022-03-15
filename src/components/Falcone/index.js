import {Component} from 'react'
import {v4} from 'uuid'

import Header from '../Header'
import RadioButtonItem1 from '../RadioButtonItem1'
import RadioButtonItem2 from '../RadioButtonItem2'
import RadioButtonItem3 from '../RadioButtonItem3'
import RadioButtonItem4 from '../RadioButtonItem4'

import FalconeResult from '../FalconeResult'

import './index.css'

class Falcone extends Component {
  state = {
    planetsList: [],
    vesselsList: [],
    planetName1: '',
    planetName2: '',
    planetName3: '',
    planetName4: '',
    isVesselSelectedId1: '',
    isVesselSelectedId2: '',

    isVesselSelectedId3: '',
    isVesselSelectedId4: '',
    findingFalcone: false,
    originalToken: '',
  }

  componentDidMount() {
    this.getPlanetsList()
  }

  getPlanetsList = async () => {
    const planetsUrl = 'https://findfalcone.herokuapp.com/planets'

    const options = {
      method: 'GET',
    }

    const fetchedData = await fetch(planetsUrl, options)
    const jsonData = await fetchedData.json()

    const formattedPlanetsList = jsonData.map((each) => ({
      id: v4(),
      name: each.name,
      distance: each.distance,
    }))

    const vesselUrl = 'https://findfalcone.herokuapp.com/vehicles'
    const vesselOptions = {
      method: 'GET',
    }

    const vesselFetchedData = await fetch(vesselUrl, vesselOptions)

    const vesselJsonData = await vesselFetchedData.json()
    const formattedVesselsData = vesselJsonData.map((eachVessel) => ({
      id: v4(),
      name: eachVessel.name,
      maxDistance: eachVessel.max_distance,
      speed: eachVessel.speed,
      totalNo: eachVessel.total_no,
    }))

    const tokenUrl = 'https://findfalcone.herokuapp.com/token'
    const tokenOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }

    const originalTokenFetched = await fetch(tokenUrl, tokenOptions)
    const tokenJsonData = await originalTokenFetched.json()
    const originalToken = tokenJsonData.token

    this.setState({
      planetsList: formattedPlanetsList,
      vesselsList: formattedVesselsData,
      originalToken,
    })
  }

  renderResultView = () => {
    const {
      planetName1,
      planetName2,
      planetName3,
      planetName4,
      isVesselSelectedId1,
      isVesselSelectedId2,
      isVesselSelectedId3,
      isVesselSelectedId4,
      originalToken,
    } = this.state

    return (
      <FalconeResult
        planetName1={planetName1}
        planetName2={planetName2}
        planetName3={planetName3}
        planetName4={planetName4}
        isVesselSelectedId1={isVesselSelectedId1}
        isVesselSelectedId2={isVesselSelectedId2}
        isVesselSelectedId3={isVesselSelectedId3}
        isVesselSelectedId4={isVesselSelectedId4}
        originalToken={originalToken}
      />
    )
  }

  onChangePlanetName1 = (event) => {
    this.setState({planetName1: event.target.value})
  }

  onChangePlanetName2 = (event) => {
    this.setState({planetName2: event.target.value})
  }

  onChangePlanetName3 = (event) => {
    this.setState({planetName3: event.target.value})
  }

  onChangePlanetName4 = (event) => {
    this.setState({planetName4: event.target.value})
  }

  selectRadioButton1 = (selectedId) => {
    this.setState({isVesselSelectedId1: selectedId})
  }

  selectRadioButton2 = (selectedId) => {
    this.setState({isVesselSelectedId2: selectedId})
  }

  selectRadioButton3 = (selectedId) => {
    this.setState({isVesselSelectedId3: selectedId})
  }

  selectRadioButton4 = (selectedId) => {
    this.setState({isVesselSelectedId4: selectedId})
  }

  renderButtons = () => {
    const {
      vesselsList,
      isVesselSelectedId1,
      isVesselSelectedId2,
      isVesselSelectedId3,
      isVesselSelectedId4,
    } = this.state
    return (
      <div className="radio-button-container">
        <div className="button-container">
          <ul className="vessels-list">
            {vesselsList.map((each) => (
              <RadioButtonItem1
                key={each.id}
                vesselDetails={each}
                isVesselSelectedId1={isVesselSelectedId1}
                selectRadioButton1={this.selectRadioButton1}
              />
            ))}
          </ul>
          <ul className="vessels-list">
            {vesselsList.map((each) => (
              <RadioButtonItem2
                key={each.id}
                vesselDetails={each}
                isVesselSelectedId2={isVesselSelectedId2}
                selectRadioButton2={this.selectRadioButton2}
              />
            ))}
          </ul>
          <ul className="vessels-list">
            {vesselsList.map((each) => (
              <RadioButtonItem3
                key={each.id}
                vesselDetails={each}
                isVesselSelectedId3={isVesselSelectedId3}
                selectRadioButton3={this.selectRadioButton3}
              />
            ))}
          </ul>
          <ul className="vessels-list">
            {vesselsList.map((each) => (
              <RadioButtonItem4
                key={each.id}
                vesselDetails={each}
                isVesselSelectedId4={isVesselSelectedId4}
                selectRadioButton4={this.selectRadioButton4}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  onClickFindingFalconeBtn = () => {
    this.setState({findingFalcone: true})
  }

  renderLaunchView = () => {
    const {
      planetsList,
      planetName1,
      planetName2,
      planetName3,
      planetName4,
    } = this.state

    return (
      <div className="top-container">
        <div className="total-drop-down-container">
          <div className="drop-down-container">
            <p className="label-input">Destination 1</p>
            <select
              value={planetName1}
              className="planet-name"
              onChange={this.onChangePlanetName1}
            >
              {planetsList.map((each) => (
                <option key={each.id} value={each.id}>
                  {each.name}
                </option>
              ))}
            </select>
          </div>

          <div className="drop-down-container">
            <p className="label-input">Destination 2</p>
            <select
              value={planetName2}
              className="planet-name"
              onChange={this.onChangePlanetName2}
            >
              {planetsList.map((each) => (
                <option key={each.id} value={each.id}>
                  {each.name}
                </option>
              ))}
            </select>
          </div>
          <div className="drop-down-container">
            <p className="label-input">Destination 3</p>
            <select
              value={planetName3}
              className="planet-name"
              onChange={this.onChangePlanetName3}
            >
              {planetsList.map((each) => (
                <option key={each.id} value={each.id}>
                  {each.name}
                </option>
              ))}
            </select>
          </div>

          <div className="drop-down-container">
            <p className="label-input">Destination 4</p>
            <select
              value={planetName4}
              className="planet-name"
              onChange={this.onChangePlanetName4}
            >
              {planetsList.map((each) => (
                <option key={each.id} value={each.id}>
                  {each.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="result-body">
          {this.renderButtons()}
          <div className="button-alignment">
            <button
              className="result-btn"
              type="button"
              onClick={this.onClickFindingFalconeBtn}
            >
              Finding Falcone!
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {findingFalcone} = this.state

    return (
      <div className="app-container">
        <Header />
        <div className="flacone-container">
          <div className="home-menu">
            <p className="reset-txt">Reset | </p>

            <p className="geek-home-txt"> Geek Trust Home </p>
          </div>
          <h1 className="main-falcone-heading">Finding Falcone!</h1>
          <p className="falcone-description-text">
            Select planets you want to search in
          </p>
        </div>
        {findingFalcone ? this.renderResultView() : this.renderLaunchView()}
      </div>
    )
  }
}

export default Falcone
