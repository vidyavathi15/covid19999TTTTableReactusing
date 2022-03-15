import {Component} from 'react'
import {v4} from 'uuid'

import {Link} from 'react-router-dom'
import Header from '../Header'

import RadioButtons from '../RadioButtons'

import './index.css'

class Falcone extends Component {
  state = {
    planetsList: [],
    planetName1: '',
    planetName2: '',
    planetName3: '',
    planetName4: '',
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

    this.setState({planetsList: formattedPlanetsList})
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

  render() {
    const {
      planetsList,
      planetName1,
      planetName2,
      planetName3,
      planetName4,
    } = this.state

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
        {planetName1 === '' ||
        planetName2 === '' ||
        planetName3 === '' ||
        planetName4 === '' ? null : (
          <RadioButtons planetsList={planetsList} />
        )}

        <div className="result-body">
          <Link to="/final-response" className="link-text">
            <button className="result-btn" type="button">
              Finding Falcone!
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Falcone
