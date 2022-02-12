import Switch from './Switch'
import './Help.css'

export default function Settings({ onClose, setDarkMode }) {
  const darkModeButtonHandler = (event) => {
    if (event.target.checked) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }
  return (<div className="help">
    <div className="help__header">
      <h2>Settings</h2>
        <button className="help__header__close" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path fill="var(--menu-color)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
    </div>
    <div className="instructions">
      <div className="setting">
        <p className="setting-name">Dark Theme</p>
        <Switch onChange={darkModeButtonHandler} value={localStorage.getItem('theme') === 'light' ? false : true }/>
      </div>
      <div className="setting">
        <p className="setting-name">Developer</p>
        <div>
          <a href="https://twitter.com/reactoverflow" target="_blank" rel="noreferrer">Twitter</a>
          {" | "}
          <a href="http://siddharthroy.ml/" target="_blank" rel="noreferrer">Website</a>
        </div>
      </div>
    </div>
    <div className="help__footer">
      <p>Version 1.0.2</p>
    </div>
  </div>)
}
