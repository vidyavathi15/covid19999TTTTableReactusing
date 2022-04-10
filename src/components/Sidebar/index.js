import {useEffect, useState} from 'react'

import {MdKeyboardArrowDown, MdMessage, MdSettings} from 'react-icons/md'

import {
  AiOutlineUser,
  AiOutlineQuestion,
  AiOutlineCalendar,
  AiOutlineDollar,
  AiOutlineMenu,
  AiOutlineCheckCircle,
  AiFillPayCircle,
} from 'react-icons/ai'

import OptionList from '../OptionList'

import './index.css'

const Sidebar = () => {
  const [sideBarData, setSideBarData] = useState([])

  const getSideBarData = () => {
    fetch('https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails')
      .then((respose) => respose.json())
      .then((json) => {
        console.log(json)
        setSideBarData(json[0])
      })
  }

  useEffect(() => {
    getSideBarData()
  }, [])

  return (
    <div className="sidebar-container">
      <div className="logo-navbar">
        <div className="logo-heading">
          <img
            className="logo"
            src="https://res.cloudinary.com/dfwdrrxpf/image/upload/v1649478883/teeth_mtmaql.jpg"
            alt="logo"
            width={70}
            height={70}
          />
          <div className="heading">
            <h2 className="logo-header-text">Zendenta</h2>
            <p className="logo-caption">Cabut gigi tanpa sankit</p>
          </div>
        </div>
        <div className="logo-hamburger">
          <AiOutlineMenu size={25} color="lightgrey" />
        </div>
      </div>

      <div className="sidebar-options">
        <OptionList
          icon={AiOutlineCheckCircle}
          name="Overview"
          className="overview"
        />
        <OptionList
          icon={AiOutlineCalendar}
          name="Calendar"
          className="calendar"
        />
        <OptionList
          icon={AiOutlineUser}
          name="Patient List"
          className="patient-list"
        />
        <OptionList icon={MdMessage} name="Messages" className="messages" />
        <OptionList
          icon={AiFillPayCircle}
          name="Payment Information"
          className="payment-information"
        />
        <OptionList icon={MdSettings} name="Settings" className="settings" />
      </div>
      <div className="help">
        <AiOutlineDollar color="#2e3b4c9c" />
        <h1 className="help-text">Help</h1>
        <AiOutlineQuestion color="#2e3b4c9c" />
      </div>
      <hr />
      <div className="doctor-details">
        <div className="doctor-logo-heading">
          <img
            className="icon-img"
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <div className="doctor-heading">
            <h1 className="logo-header-text">{sideBarData.name}</h1>
            <p className="logo-caption"> {sideBarData.specification} </p>
          </div>
        </div>
        <div className="logo-hamburger">
          <MdKeyboardArrowDown size={25} color="grey" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
