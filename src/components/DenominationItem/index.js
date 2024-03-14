import './index.css'

const DenominationItem = props => {
  const {denominationDetails, denominateItem} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    denominateItem(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
