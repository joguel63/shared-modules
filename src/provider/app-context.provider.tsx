import { useState } from "react";
import { AppContext } from "../contexts/app.context";

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState("Hello from Context");
  const handleSetMessage = (message: string) => setMessage(message);

  return (
    <AppContext.Provider
      value={{
        message: message,
        setMessage: handleSetMessage,
        userInformation: {
          name: "John Doe",
          email: "",
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
