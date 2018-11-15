import axios from "axios";
import store from "../store";
// import store from "../store";

// let barrenschatAPI = null;
// if (window.location.hostname === "localhost") {
//   barrenschatAPI = "http://localhost";
// }


let ws = new WebSocket("ws://localhost");

// async function getPublicFirebaseKeys() {

//   try {
//     const res = await axios.get(firebasePublicKeyURL);
//     for (var key in res.data) {
//       res.data[key].replace("\n", "");
//     }
//     console.log("done getting public keys");
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// }

// export { getPublicFirebaseKeys };
