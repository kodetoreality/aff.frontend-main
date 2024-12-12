// import React, { Suspense ,Component} from "react"
// import Router from "./Router"
// import "./components/@vuexy/rippleButton/RippleButton"
// import "react-perfect-scrollbar/dist/css/styles.css"
// import "prismjs/themes/prism-tomorrow.css"
// import { Provider } from "react-redux"
// import { IntlProviderWrapper } from "./utility/context/Internationalization"
// import { Layout } from "./utility/context/Layout"
// import { store } from "./redux/storeConfig/store"
// import Spinner from "./components/@vuexy/spinner/Fallback-spinner"
// import "./index.scss"
// import "./assets/scss/afflite.scss"
// import "./@fake-db"
// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Suspense fallback={<Spinner />}>
//           <Layout>
//             <IntlProviderWrapper>
//               <Router />
//             </IntlProviderWrapper>
//           </Layout>
//         </Suspense>
//       </Provider>
//     )
//   }
// }

// export default App

import React from "react"
import Router from "./Router"
import "./components/@vuexy/rippleButton/RippleButton"
import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"

const App = props => {
  return <Router />
}

export default App