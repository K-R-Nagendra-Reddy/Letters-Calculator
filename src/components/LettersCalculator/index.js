// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  countOfLetters = event => {
    const lengthOfPhrase = event.target.value.length
    this.setState({count: lengthOfPhrase})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="input" className="label-element">
              Enter the phrase
              <input
                type="text"
                id="input"
                className="input-element"
                onChange={this.countOfLetters}
                placeholder="Enter the phrase"
              />
            </label>
          </div>
          <p className="button" type="button">
            No.of letters: {count}
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}
export default LettersCalculator
