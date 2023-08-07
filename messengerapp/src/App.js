import "./index.css";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Chat } from "./components/Chat";

function App() {
  const [user] = useAuthState(auth);

  const style = {
    appContainer: {
      maxWidth: "728px",
      margin: "0 auto",
      textAlign: "center",
      width: "100%",
    },
    sectionContainer: {
      display: "flex",
      flexDirection: "column",
      height: "92vh",
      marginTop: "20px",
      marginBottom: "30px",
      position: "relative",
      width: "100%",
    },
  };

  return (
    <div style={style.appContainer}>
      <section style={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {/* Chat component */}
        <Chat />
      </section>
    </div>
  );
}

export default App;
