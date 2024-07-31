export type AppContextType = {
  message: string;
  setMessage: (message: string) => void;
  userInformation: {
    name: string;
    email: string;
  };
};
