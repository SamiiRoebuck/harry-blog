import React from "react"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  return (
    <div className="site-wrapper">
      {/* <header className="site-header"> */}
        {/* <Navigation /> */}
      {/* </header> */}
      {children}
      <footer className="site-footer">
        <p>Based on &copy; 2020 Delog by <a href="https://w3layouts.com">W3Layouts</a>
        <br></br> Customised by <a href="https://samroebuck.dev">samroebuck.dev</a></p>
      </footer>
    </div>
  )
}