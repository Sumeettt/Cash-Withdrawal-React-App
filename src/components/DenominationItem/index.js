// Write your code here

import './index.css'

const DenominationItem = props => {
  const {eachDenomination, whileWithdrawing} = props
  const {id, value} = eachDenomination

  const onWithdrawal = () => {
    whileWithdrawing(value)
  }

  return (
    <li className="each-withdraw-button-list">
      <button onClick={onWithdrawal} className="denomination-buttons">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
