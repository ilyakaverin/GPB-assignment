import React, { useContext, useEffect } from "react";
import style from "./style.module.scss";
import { Field } from "react-final-form";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { UserContext, ContextInterface } from "../../context/userContext";
import OnChange from "../../customHooks";

const SurveyInfo = () => {
  const { store, dispatch } = useContext(UserContext) as ContextInterface;
  const { currentLicense} = store.state.fillState

  useEffect(() => {

    const toggleValues = Object.values(store.survey);
    if(currentLicense === 'filling') dispatch({type: 'fillingInterrupted', datakey: 'currentLicense'})
    dispatch({type: 'checkToggles', datakey: 'survey', payload: toggleValues })

  },[store.survey])
  return (
    <>
    <section className={style.main__container_survey}>
      <h2>
        Предоставление услуг с использованием сайта в сети Интернет
      </h2>
      <Field
        name="first"
        component={ToggleSwitch}
        type="checkbox"
      />
      <OnChange
        name="first"
        onChange={(value: string) => {
          dispatch({
            type: "switchSurveyToggle",
            datakey: "first",
            payload: value,
          });
        }}
      />
    </section>
    <section className={style.main__container_survey}>
      <h2>Статус публичного должностного лица (ПДЛ)</h2>
      <Field
        name="second"
        component={ToggleSwitch}
        type="checkbox"
      />
      <OnChange
        name="second"
        onChange={(value: string) => {
            dispatch({
                type: "switchSurveyToggle",
                datakey: "second",
                payload: value,
              });
        }}
      />
    </section>
    <section className={style.main__container_survey}>
      <h2>Наличие выгодоприобретателей</h2>
      <Field
        name="third"
        component={ToggleSwitch}
        type="checkbox"
      />
      <OnChange
        name="third"
        onChange={(value: string) => {
          dispatch({
            type: "switchSurveyToggle",
            datakey: "third",
            payload: value,
          });
        }}
      />
    </section>
    <section className={style.main__container_survey}>
      <h2>Наличие представителей</h2>
      <Field
        name="fourth"
        component={ToggleSwitch}
        type="checkbox"
      />
      <OnChange
        name="fourth"
        onChange={(value: string) => {
          dispatch({
            type: "switchSurveyToggle",
            datakey: "fourth",
            payload: value,
          });
        }}
      />
    </section>
    <section className={style.main__container_survey}>
      <h2>Наличие бенефициарного владельца</h2>
      <Field
        name="fifth"
        component={ToggleSwitch}
        type="checkbox"
      />
      <OnChange
        name="fifth"
        onChange={(value: string) => {
          dispatch({
            type: "switchSurveyToggle",
            datakey: "fifth",
            payload: value,
          });
        }}
      />
    </section>
  </>

  );
};
export default SurveyInfo;
