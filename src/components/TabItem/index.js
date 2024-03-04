import './index.css'

const TabItem = props => {
  const {tabDetails, updatedAppId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    updatedAppId(tabId)
  }
  const tabCssStyles = isActive ? 'tab-active' : 'tab-inactive'

  return (
    <div className="tab-container">
      <button className={tabCssStyles} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </div>
  )
}
export default TabItem
