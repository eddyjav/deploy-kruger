
export const Footer = ({name,contact,email}) => {
  
  return (
    <div className="foot-container">
    <h1 className="foot-title">Este es el Footer</h1>
    <p className="footer-text" >Created by: {name}</p>
    <p className="footer-text" >Contact : {contact}</p>
    <p className="footer-text" >Mi email es: {email}</p>
  </div>
  
  )
}


