import './Switch.css'

export default function Switch({onChange, value}) {
  return (<>
    <input type="checkbox" id="switch" onChange={onChange} checked={value} /><label htmlFor="switch">Toggle</label>
  </>)
}
