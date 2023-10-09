import ReactDOM from "react-dom/client";
import App from "./App";
// import counterReducer from "./counterSlice";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";

// const store = configureStore({
//     reducer: {
//         counter: counterReducer
//     }
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Provider store={store}><App /></Provider>)
root.render(<App />)