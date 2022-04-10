import './index.css'

const OptionList = (props) => {
  const {name, icon} = props
  console.log(icon)
  const Icon = icon
  return (
    <div className="each-option">
      <Icon className="icon-color" />

      <h1 className="option-heading">{name}</h1>
    </div>
  )
}

export default OptionList
