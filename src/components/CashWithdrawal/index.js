// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  whileWithdrawing = value => {
    console.log(value)
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="cash-withdrawal-card">
          <div className="name-container">
            <p className="name-logo">s</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-card">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="current-balance">{balance}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="withdraw-text">Withdraw</p>
            <p className="withdraw-choose-text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="withdrawal-amount-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  eachDenomination={eachDenomination}
                  key={eachDenomination.id}
                  whileWithdrawing={this.whileWithdrawing}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
