import React, { useContext, useEffect } from "react"
import { Field } from "react-final-form"
import style from "./style.module.scss"
import { UserContext } from "../../context/userContext"
import OnChange from "../../customHooks"
import DatePicker from "../DatePicker/DatePicker"
import TextInput from "../TextInput/TextInput"
import { isStartedTyping } from "../../service"
import { ContextInterface } from "../../interfaces"

interface Props {
  header: string
}

function BusinessOwnerInfo({ header }: Props) {
  const { store, dispatch } = useContext(UserContext) as ContextInterface
  const { data } = store.state.fillState

  useEffect(() => {
    const businessInfoKeys: string[] = Object.keys(store.businessInfo)

    if (data === "filling")
      dispatch({ type: "fillingInterrupted", datakey: "data" })
    if (isStartedTyping(businessInfoKeys, store.businessInfo))
      dispatch({
        type: "checkFilling",
        datakey: "businessInfo",
        payload: businessInfoKeys,
      })
  }, [store.businessInfo])

  return (
    <section>
      <h2>{header}</h2>
      <label className={style.main__container_form_label}>
        <span>Дата и номер</span>
        <div className={style.main__container_form_inputs}>
          <Field name="businessRegeDate" component={DatePicker} />
          <OnChange
            name="businessRegeDate"
            onChange={(value: string) => {
              dispatch({
                type: "businessInfo",
                datakey: "businessRegDate",
                payload: value,
              })
            }}
          />
          <Field name="businessRegId" component={TextInput} />
          <OnChange
            name="businessRegId"
            onChange={(value: string) => {
              dispatch({
                type: "businessInfo",
                datakey: "businessRegId",
                payload: value,
              })
            }}
          />
        </div>
      </label>
      <label className={style.main__container_form_label}>
        <span>Место Регистрации</span>
        <Field name="businessRegPlace" component={TextInput} />
        <OnChange
          name="businessRegPlace"
          onChange={(value: string) => {
            dispatch({
              type: "businessInfo",
              datakey: "businessRegPlace",
              payload: value,
            })
          }}
        />
      </label>
    </section>
  )
}
export default BusinessOwnerInfo
