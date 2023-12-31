import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import "./App.css";
import Routes from "./Routes/Routes";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState({
    user_id: 1010
  });

  return (
    <div className="d-flex">
      <UserContext.Provider value={{ user, setUser }}>
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
