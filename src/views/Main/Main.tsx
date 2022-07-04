import React, { useContext } from "react";
import style from "./style.module.scss";
import CommonInfo from "../../components/CommonInfo/CommonInfo";
import LicenseInfo from "../../components/LicenseInfo/LicenseInfo";
import { UserContext } from "../../context/userContext";
import BusinessOwnerInfo from "../../components/BuisnessOwnerInfo/BuisnessOwnerInfo";
import SurveyInfo from "../../components/SurveyInfo/SurveyInfo";
import AddCardButton from "../../components/AddCardButton/AddCardButton";
import StateFilling from "../../components/StateFilling/StateFilling";
import { Form } from "react-final-form";
import { ContextInterface } from "../../interfaces";

const Main = () => {
  const { store, dispatch } = useContext(UserContext) as ContextInterface;

  const handleChange = () => {
    dispatch({ type: "modalToggle", datakey: "isModalOpened", payload: true });
  };
  const isMinimumDataFilled =
    store.state.fillState.data === "approved" &&
    store.state.fillState.businessInfo === "approved";

  return (
    <main className={style.main__container}>
      <div className={style.main__container_form}>
        <Form
          onSubmit={handleChange}
          initialValues={{}}
          render={() => {
            return (
              <>
                <CommonInfo header="Общая информация" />
                <BusinessOwnerInfo header="Сведения о регистрации в качестве индивидуального предпринимателя" />
                <LicenseInfo header="Моя компания осуществляет деятельность, подлежащую лицензированию в соответствии с законодательством РФ" />
                <SurveyInfo />
                <AddCardButton
                  classname="cardSendButton"
                  type="submit"
                  disabled={!isMinimumDataFilled}
                  name="Перейти к формированию документов"
                  onClick={() => {
                    dispatch({ type: "prepareObject", datakey: "" });
                    dispatch({
                      type: "modalToggle",
                      datakey: "isModalOpened",
                      payload: true,
                    });
                  }}
                />
              </>
            );
          }}
        />
      </div>
      <div className={style.fixed}>
        <StateFilling />
        <pre>{JSON.stringify(store.state,null,2)}</pre>
      </div>
    </main>
  );
};
export default Main;
