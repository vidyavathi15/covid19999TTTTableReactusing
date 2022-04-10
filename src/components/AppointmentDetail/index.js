import {CgNotes} from 'react-icons/cg'
import './index.css'

const AppointmentDetail = (props) => {
  const {appointData} = props
  const {date, time, dentist, nurse, treatment} = appointData
  return (
    <div className="appointment-detail-container">
      <div className="date-time">
        <h3 className="date">{date}</h3>
        <p className="time">{time}</p>
      </div>

      <div className="Person-sub-details">
        <h4 className="person-heading">Treatment</h4>
        <p className="person">{treatment}</p>
      </div>

      <div className="Person-sub-details">
        <h4 className="person-heading">Dentist</h4>
        <p className="person">{dentist}</p>
      </div>
      <div className="Person-sub-details">
        <h4 className="person-heading">Nurse</h4>
        <p className="person">{nurse}</p>
      </div>
      <div className="icon">
        <CgNotes color="#0d53fc" />
        <p className="note">Note</p>
      </div>
    </div>
  )
}

export default AppointmentDetail
