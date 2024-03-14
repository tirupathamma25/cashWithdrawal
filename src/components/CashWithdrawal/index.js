import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  denominateItem = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="main-container">
        <div className="container">
          <div className="card-h1">
            <p className="round-s">S</p>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="balance-card">
            <p className="balance-h1">Your Balance</p>
            <p className="rupee-h1">
              {balance} <br /> <span className="in-rupee">In Rupees</span>
            </p>
          </div>
          <p className="rupee-h1">Withdraw</p>
          <p className="balance-h1">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationDetails={eachItem}
                key={eachItem.id}
                denominateItem={this.denominateItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
