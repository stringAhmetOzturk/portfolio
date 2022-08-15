import React from 'react'

const Footer = () => {
  return (
    <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
    © {new Date().getFullYear()}&nbsp;Copyright &nbsp;
    <a className="text-dark" href="https://alokanka.vercel.app" style={{textDecoration:"none",fontWeight:"bold"}}>ahmetozturk.vercel.app</a>
  </div>
  )
}

export default Footer
