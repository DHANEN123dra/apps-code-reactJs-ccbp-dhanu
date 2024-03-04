import './index.css'

const AppItem = props => {
  const {appDetailes} = props
  const {appName, imageUrl} = appDetailes

  return (
    <li className="list-element">
      <img className="app" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
