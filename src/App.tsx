import React, { useReducer } from "react"
import { UserContext } from "./context/userContext"
import { stateReducer } from "./reducer"
import Menu from "./views/Menu/Menu"
import Navigation from "./views/Navigation/Navigation"
import Main from "./views/Main/Main"
import Modal from "./components/Modal/Modal"

const  App = () => {
  const [store, dispatch] = useReducer(stateReducer, {
    username: "Иванов А. И.",
    data: {
      registryNumber: "",
      fullName: "",
      dateOfBirth: "",
      placeOfBirth: "",
      citizenship: "",
      snils: "",
      registerAdress: "",
      livingAdress: "",
    },
    businessInfo: {
      businessRegDate: "",
      businessRegPlace: "",
      businessRegId: "",
    },
    state: {
      hasLicense: false,
      licenseMode: "",
      permanent: false,
      currentEditingLicenseId: 0,
      fillState: {
        data: "initialized",
        businessInfo: "initialized",
        currentLicense: "initialized",
        survey: "initialized",
      },
      isModalOpened: false,
    },
    currentLicense: {
      typeOfDocument: "",
      documentId: "",
      activity: "",
      issued: "",
      dateOfIssue: "",
      expiresAt: "",
    },
    licenses: [],
    survey: {
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
    },
  })

 

  return (
    <UserContext.Provider value={{ store, dispatch }}>
      <Menu />
      <Navigation />
      <Main />
      <Modal />
    </UserContext.Provider>
  )
}

export default App
