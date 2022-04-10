import {Component} from 'react'
// import {Chrono} from 'react-chrono'

import {AiOutlineUser, AiFillPrinter, AiOutlineFileAdd} from 'react-icons/ai'

import {FaEdit} from 'react-icons/fa'

import {styled, alpha} from '@mui/material/styles'

import Button from '@mui/material/Button'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import SearchIcon from '@mui/icons-material/Search'

import InputBase from '@mui/material/InputBase'
import TabsUnstyled from '@mui/base/TabsUnstyled'
import TabsListUnstyled from '@mui/base/TabsListUnstyled'
import {buttonUnstyledClasses} from '@mui/base/ButtonUnstyled'
import TabUnstyled, {tabUnstyledClasses} from '@mui/base/TabUnstyled'
import Avatar from '@mui/material/Avatar'
import AddIcon from '@mui/icons-material/Add'
import Badge from '@mui/material/Badge'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'

import PersonSubDetails from '../PersonSubDetails'

import AppointmentDetail from '../AppointmentDetail'
import Document from '../Document'

import './index.css'

const StyledButton = styled(Button)({
  width: 'max-content',
  height: '5%',
  backgroundColor: 'white',
  color: 'lightgrey',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'white',
  },
})

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',

  border: '1px solid grey',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  color: 'grey',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'grey',
  '& .MuiInputBase-input': {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '1 0%',
    [theme.breakpoints.up('md')]: {
      width: '15ch',
    },
  },
}))

const blueColor = {
  600: '#0072E5',
}

const Tab = styled(TabUnstyled)`
  font-family: sans-serif;
  color: lightgrey;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: transparent;
  width: 80%;
  padding: 8px 4px;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: white;
    color: ${blueColor[600]};
  }
  &:focus {
    color: #fff;
    border-radius: 3px;
  }
  &.${tabUnstyledClasses.selected} {
    background-color: white;
    color: ${blueColor[600]};
  }
  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const TabsList = styled(TabsListUnstyled)`
  width: 70%;
  background-color: #f2f5f9;
  border-radius: 8px;
  padding: 10px 8px;
  margin-bottom: 16px;
  margin-left: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`

class MainBody extends Component {
  state = {
    appointData: [],
    doctorData: [],
  }

  componentDidMount() {
    this.apiGet()
  }

  getFormattedDoctorData = (doctorData) => ({
    name: doctorData.name,
    email: doctorData['e-email'],
    birthday: doctorData.Birthday,
    gender: doctorData.Gender,
    upcoming: doctorData.Upcoming,
    zip: doctorData['ZIP Code'],
    phoneNumber: doctorData['Phone Number'],
    streetAddress: doctorData['Street Address'],
    registerDate: doctorData['Register Date'],
    memberStatus: doctorData['Member Status'],
    past: doctorData.Past,
  })

  getFormattedAppointData = (jsonAppointData) => ({
    date: jsonAppointData.Date,
    time: jsonAppointData.Time,
    nurse: jsonAppointData.Nurse,
    dentist: jsonAppointData.Dentist,
    treatment: jsonAppointData.Dentist,
  })

  apiGet = async () => {
    const response = await fetch(
      'https://619f39821ac52a0017ba467e.mockapi.io/patientDetails',
    )
    const jsonData = await response.json()

    const formattedDataDoctorData = this.getFormattedDoctorData(jsonData[0])

    const appointResponse = await fetch(
      'https://619f39821ac52a0017ba467e.mockapi.io/appointment_details',
    )
    const fetchedAppointData = await appointResponse.json()

    const formattedAppointData = this.getFormattedAppointData(
      fetchedAppointData[0]['Upcoming Appointments'],
    )

    this.setState({
      appointData: formattedAppointData,
      doctorData: formattedDataDoctorData,
    })
  }

  render() {
    const {doctorData, appointData} = this.state
    console.log(appointData)
    console.log(doctorData)
    const {
      name,
      email,
      zip,
      registerDate,
      phoneNumber,
      memberStatus,
      gender,
      birthday,
      streetAddress,
      upcoming,
      past,
    } = doctorData

    return (
      <div className="main-body-container">
        <div className="main-header">
          <div className="header-username">
            <AiOutlineUser color="#0d53fc" size={30} />
            <h1 className="header-name"> {name} </h1>
          </div>
          <div className="header-right-side">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
              />
            </Search>
            <Avatar className="badge1" sx={{backgroundColor: '#0d53fc'}}>
              <AddIcon />
            </Avatar>
            <Badge className="badge" color="warning" variant="dot">
              <CircleNotificationsIcon sx={{color: 'gray'}} />
            </Badge>
          </div>
        </div>
        <hr />
        <div className="sub-header">
          <div className="path">
            <h3>Patient List</h3>

            <h1 className="patient-name"> {name} </h1>
          </div>
          <div className="print">
            <AiFillPrinter className="printer" />
            <div className="edit-patient">
              <FaEdit />
              <p>Edit Patient</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="main-body">
          <div className="person-details">
            <div className="avatar-container">
              <Avatar
                className="user-image"
                sx={{width: 80, height: 80}}
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <div className="email-container">
                <h1 className="user-name"> {name} </h1>
                <p className="user-email">{email}@example.com</p>
              </div>
            </div>
            <div className="counter">
              <div className="sub-counter1">
                <h1 className="sub-counter1-header">
                  {' '}
                  {past} <span className="slide">|</span>
                </h1>
                <p className="sub-counter1-para">{upcoming}</p>
              </div>

              <div className="sub-counter2">
                <h1 className="sub-counter2-header">2</h1>
                <p className="sub-counter2-para">Upcoming</p>
              </div>
            </div>
            <button className="send-message" type="submit">
              Send Message
            </button>
          </div>
          <div className="person-description">
            <PersonSubDetails subTitle="Gender" subName={gender} />
            <PersonSubDetails subTitle="Birthday" subName={birthday} />
            <PersonSubDetails subTitle="Phone Number" subName={phoneNumber} />
            <PersonSubDetails
              subTitle="Street Address"
              subName={streetAddress}
            />
            <PersonSubDetails subTitle="City" subName="Cilacop" />
            <PersonSubDetails subTitle="ZIP Code" subName={zip} />
            <PersonSubDetails subTitle="Member Status" subName={memberStatus} />
            <PersonSubDetails
              sub-deatil-heading="Registered Date"
              sub-detail-val={registerDate}
            />
          </div>

          <div className="notes">
            <div className="notes-heading">
              <h4 className="notes-h4">Notes</h4>
              <h4 className="notes-heading-all">See all</h4>
            </div>
            <div className="box">
              <div className="sub-box">
                <p className="box-paragraph">
                  - Lorem ipsum dolor sit amet consectetur
                </p>
                <p className="box-paragraph">
                  - Lorem ipsum dolor sit amet consectetur
                </p>
                <p className="box-paragraph">
                  - Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              <button type="button" className="save-notes">
                save note
              </button>
            </div>
            <div className="notes-footer">
              <div className="footer-doctor">
                <p className="footer-lorem">Lorem ipsum dolor sit amet</p>
                <div className="subtext-footer">
                  <AiOutlineUser color="#0d53fc" size={15} />
                  <p className="footer-doc-name">Drg.Mega Nanade</p>
                </div>
              </div>
              <p className="footer-date">20 Nov 19</p>
            </div>
          </div>
        </div>
        <div className="bottom-body">
          <div className="events">
            <div className="tabs">
              <TabsUnstyled defaultValue={0}>
                <TabsList>
                  <Tab>Upcoming Appointments</Tab>
                  <Tab>Past Appointments</Tab>
                  <Tab>Medical Records</Tab>
                </TabsList>
              </TabsUnstyled>
            </div>
            <div className="appointment-history">
              <div className="history-header">
                <h1 className="header-title">Root Canal Treatment</h1>
                <StyledButton
                  className="history-button"
                  disableRipple
                  startIcon={<KeyboardArrowUpIcon />}
                >
                  Show Previous Treatment
                </StyledButton>
              </div>
              <hr />

              <div className="appointment">
                <AppointmentDetail appointData={appointData} />
              </div>
            </div>
          </div>

          <div className="files">
            <div className="files-heading">
              <h1 className="file-title">Files/Documents</h1>
              <p className="files-h42">
                <AiOutlineFileAdd /> Add Files
              </p>
            </div>
            <Document />
            <Document />
            <Document />
            <Document />
          </div>
        </div>
      </div>
    )
  }
}

export default MainBody
