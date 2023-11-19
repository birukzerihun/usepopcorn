import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
// import StarRating from "./StarRating"

// function Test() {
//   const [movieRating, setMovieRating] = useState(0)
//   return (
//     <div>
//       <StarRating color='pink' maxRating={10} on onSetRating={setMovieRating} />
//       <p>THIS movie was rated {movieRating}</p>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} />
    <StarRating messages={["terrible", "bad", "okay", "good", "amazing"]} />
    <StarRating color='red' size={25} className='test' />
    <StarRating color='blue' defaultRating={2} />
    <Test /> */}
  </React.StrictMode>
)
