import axios from "axios";
import store from "../store";
const firebasePublicKeyURL =
  "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com";
const firebaseAuthURL =
  "https://www.googleapis.com/identitytoolkit/v3/relyingparty";
const firebaseAccountKey = "AIzaSyD5YZQXGeHidECx-eEAZ4UJPkX5F7wEi9M";

async function getPublicFirebaseKeys() {
  console.log(store.state.firebasePublicKeys);

  try {
    const res = await axios.get(firebasePublicKeyURL);
    for (var key in res.data) {
      res.data[key].replace("\n", "");
    }
    console.log("done getting public keys");
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

async function getUserJWT(email, password) {
  let res = null;
  try {
    res = await axios.post(
      `${firebaseAuthURL}/verifyPassword?key=${firebaseAccountKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export { getPublicFirebaseKeys, getUserJWT };
