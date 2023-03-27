import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Looking to fix or record your audio? We got you!</h1>
      <span className="mailDesc">Sign up and we'll recommend the best audio engineers to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList