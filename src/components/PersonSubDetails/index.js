import './index.css'

const PersonSubDetails = (props) => {
  const {subTitle, subName} = props
  return (
    <div className="person-sub-details-container">
      <h1 className="person-heading">{subTitle}</h1>
      <p className="person-sub-detail-name">{subName}</p>
      <hr className="person-hr-line" />
    </div>
  )
}

export default PersonSubDetails
