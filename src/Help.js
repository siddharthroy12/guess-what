import './Help.css'

export default function Help({ onClose }) {
  return (<div className="help">
    <div className="help__header">
      <h2> HOW TO PLAY </h2>
      <button className="help__header__close" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path fill="var(--menu-color)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </button>
    </div>
    <div className="instructions">
      <p>Guess the <strong>WORDS</strong> in 6 tries.</p>
      <p>Each guess must be a valid 5 letter word. Hit the enter button to submit.</p>
      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
      <div className="examples">
        <p><strong>Examples</strong></p>
        <div className="row">
          <div className="tile tile-correct">
            W
          </div>
          <div className="tile">
            E
          </div>
          <div className="tile">
            A
          </div>
          <div className="tile">
            R
          </div>
          <div className="tile">
            Y
          </div>
        </div>
        <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>
        <div className="row">
          <div className="tile">
            P
          </div>
          <div className="tile tile-present">
            I
          </div>
          <div className="tile">
            L
          </div>
          <div className="tile">
            L
          </div>
          <div className="tile">
            S
          </div>
        </div>
        <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>
        <div className="row">
          <div className="tile">
            V
          </div>
          <div className="tile">
            A
          </div>
          <div className="tile">
            G
          </div>
          <div className="tile tile-wrong">
            U
          </div>
          <div className="tile">
            E
          </div>
        </div>
        <p>The letter <strong>U</strong> is not in the word in any spot.</p>
      </div>
      <p><strong>Unlimited WORDS everyday</strong></p>
    </div>
  </div>)
}
