import React, { useContext, useEffect, useRef } from "react"
import { Form, Field } from "react-final-form"
import style from "./style.module.scss"
import TextInput from "../TextInput/TextInput"
import { UserContext } from "../../context/userContext"
import OnChange from "../../customHooks"
import DatePicker from "../DatePicker/DatePicker"
import { isStartedTyping } from "../../service"
import { ContextInterface } from "../../interfaces"

interface Header {
  header: string
}

const CommonInfo = ({ header }: Header) => {
  const { store, dispatch } = useContext(UserContext) as ContextInterface

  useEffect(() => {
    const commonInfoKeys: string[] = Object.keys(store.data)

    if (isStartedTyping(commonInfoKeys, store.data))
      dispatch({
        type: "checkFilling",
        datakey: "data",
        payload: commonInfoKeys,
      })
  }, [store.data])

  return (
    <section className={style.main__container_wrapper}>
      <h2>{header}</h2>
      <label className={style.main__container_form_label}>
        <span>ИНН, ОГРН или ОГРНИП</span>
        <Field name="registryNumber" component={TextInput} />
        <OnChange
          name="registryNumber"
          onChange={(value: string) => {
            dispatch({
              type: "data",
              datakey: "registryNumber",
              payload: value,
            })
          }}
        />
      </label>
      <label className={style.main__container_form_label}>
        <span>Фамилия, имя и отчество</span>
        <Field name="fullName" component={TextInput} />
        <OnChange
          name="fullName"
          onChange={(value: string) => {
            dispatch({ type: "data", datakey: "fullName", payload: value })
          }}
        />
      </label>
      <label className={style.main__container_form_label}>
        <span>Дата и Место Рождения</span>
        <div className={style.main__container_form_inputs}>
          <Field name="dateOfBirth" component={DatePicker} />
          <OnChange
            name="dateOfBirth"
            onChange={(value: string) => {
              dispatch({
                type: "data",
                datakey: "dateOfBirth",
                payload: value,
              })
            }}
          />
          <Field name="placeOfBirth" component={TextInput} />
          <OnChange
            name="placeOfBirth"
            onChange={(value: string) => {
              dispatch({
                type: "data",
                datakey: "placeOfBirth",
                payload: value,
              })
            }}
          />
        </div>
      </label>
      <label className={style.main__container_form_label}>
        <span>Гражданство</span>
        <Field name="citizenship" component={TextInput} />
        <OnChange
          name="citizenship"
          onChange={(value: string) => {
            dispatch({ type: "data", datakey: "citizenship", payload: value })
          }}
        />
      </label>
      <label className={style.main__container_form_label}>
        <span>Снилс (при наличии)</span>
        <Field name="snils" component={TextInput} />
        <OnChange
          name="snils"
          onChange={(value: string) => {
            dispatch({ type: "data", datakey: "snils", payload: value })
          }}
        />
      </label>
      <label className={style.main__container_form_label}>
        <span>Адрес места жительства (регистрации)</span>
        <Field name="registerAdress" component={TextInput} />
        <OnChange
          name="registerAdress"
          onChange={(value: string) => {
            dispatch({
              type: "data",
              datakey: "registerAdress",
              payload: value,
            })
          }}
        />
      </label>
      <label className={style.main__container_form_label}>
        <span>
          Адрес места пребывания (если отличается от места жительства)
        </span>
        <Field name="livingAdress" component={TextInput} />
        <OnChange
          name="livingAdress"
          onChange={(value: string) => {
            dispatch({ type: "data", datakey: "livingAdress", payload: value })
          }}
        />
      </label>
    </section>
  )
}
export default CommonInfo
