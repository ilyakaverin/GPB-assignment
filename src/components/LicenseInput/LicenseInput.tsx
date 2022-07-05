import React, { useContext, useEffect } from "react"
import { Form, Field } from "react-final-form"
import cn from "classnames"
import style from "./style.module.scss"
import TextInput from "../TextInput/TextInput"
import OnChange from "../../customHooks"
import Datepicker from "../DatePicker/DatePicker"
import AddCardButton from "../AddCardButton/AddCardButton"
import { ContextInterface } from "../../interfaces"
import { isStartedTyping, isValidForm } from "../../service"
import { UserContext } from "../../context/userContext"

function LicenseInput() {
  const { store, dispatch } = useContext(UserContext) as ContextInterface

  const { state, currentLicense } = store
  const { businessInfo } = state.fillState

  const onSubmit = (): void => {
    dispatch({ type: "addLicense", datakey: "licenses", payload: "" })
    dispatch({ type: "state", datakey: "licenseMode", payload: null })
    dispatch({
      type: "clearLicenseForm",
      datakey: "currentLicense",
      payload: null,
    })
  }
  useEffect(() => {
    const licenseInfoKeys: string[] = Object.keys(store.currentLicense)

    if (businessInfo === "filling")
      dispatch({ type: "fillingInterrupted", datakey: "businessInfo" })

    if (isStartedTyping(licenseInfoKeys, currentLicense))
      dispatch({
        type: "checkFilling",
        datakey: "currentLicense",
        payload: licenseInfoKeys,
      })
  }, [store.currentLicense])
  return (
    <section
      className={cn(style.main__container_form_card, {
        [style.main__container_form_card_visible]:
          state.licenseMode === "creating" || state.licenseMode === "editing",
      })}
    >
      <h4>
        {state.licenseMode === "editing"
          ? "Редактирование лицензии"
          : "Добавить новую"}
      </h4>
      <Form
        onSubmit={onSubmit}
        initialValues={currentLicense}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label className={style.main__container_form_label}>
              <span>Вид и номер документа</span>
              <div className={style.main__container_form_inputs}>
                <Field name="typeOfDocument" component={TextInput} />
                <OnChange
                  name="typeOfDocument"
                  onChange={(value: string) => {
                    dispatch({
                      type: "currentLicense",
                      datakey: "typeOfDocument",
                      payload: value,
                    })
                  }}
                />
                <Field name="documentId" component={TextInput} />
                <OnChange
                  name="documentId"
                  onChange={(value: string) => {
                    dispatch({
                      type: "currentLicense",
                      datakey: "documentId",
                      payload: value,
                    })
                  }}
                />
              </div>
            </label>
            <label className={style.main__container_form_label}>
              <span>Вид деятельности</span>
              <Field name="activity" component={TextInput} />
              <OnChange
                name="activity"
                onChange={(value: string) => {
                  dispatch({
                    type: "currentLicense",
                    datakey: "activity",
                    payload: value,
                  })
                }}
              />
            </label>
            <label className={style.main__container_form_label}>
              <span>Кем выдан документ</span>
              <Field name="issued" component={TextInput} />
              <OnChange
                name="issued"
                onChange={(value: string) => {
                  dispatch({
                    type: "currentLicense",
                    datakey: "issued",
                    payload: value,
                  })
                }}
              />
            </label>
            <label className={style.main__container_form_label}>
              <span>Дата выдачи и срок действия документы</span>
              <div className={style.main__container_form_inputs}>
                <Field name="dateOfIssue" component={Datepicker} />
                <OnChange
                  name="dateOfIssue"
                  onChange={(value: string) => {
                    dispatch({
                      type: "currentLicense",
                      datakey: "dateOfIssue",
                      payload: value,
                    })
                  }}
                />
                <Field
                  name="expiresAt"
                  component={Datepicker}
                  disabled={state.permanent}
                />
                <OnChange
                  name="expiresAt"
                  onChange={(value: string) => {
                    dispatch({
                      type: "currentLicense",
                      datakey: "expiresAt",
                      payload: value,
                    })
                  }}
                />
                <label className={style.main_container_form_checkbox}>
                  <Field name="permanent" component="input" type="checkbox" />
                  <OnChange
                    name="permanent"
                    onChange={(value: boolean) => {
                      dispatch({
                        type: "state",
                        datakey: "permanent",
                        payload: value,
                      })
                      dispatch({
                        type: "currentLicense",
                        datakey: "expiresAt",
                        payload: "3000-01-01",
                      })
                    }}
                  />
                  <span>Бессрочный</span>
                </label>
              </div>
            </label>
            {state.licenseMode === "editing" ? (
              <AddCardButton
                name="Сохранить"
                type="button"
                classname="cardSaveButton"
                onClick={() => {
                  dispatch({
                    type: "saveLicense",
                    datakey: "licenses",
                    payload: currentLicense,
                  })
                  dispatch({
                    type: "state",
                    datakey: "licenseMode",
                    payload: null,
                  })
                  dispatch({
                    type: "clearLicenseForm",
                    datakey: "currentLicense",
                    payload: null,
                  })
                }}
              />
            ) : (
              <AddCardButton
                name="Добавить"
                type="submit"
                classname="cardAddButton"
                disabled={
                  !isValidForm(Object.keys(currentLicense), currentLicense)
                }
              />
            )}
            <AddCardButton
              type="reset"
              classname="cardCancelButton"
              name="Отменить"
              onClick={() => {
                dispatch({
                  type: "state",
                  datakey: "licenseMode",
                  payload: null,
                })
                dispatch({
                  type: "clearLicenseForm",
                  datakey: "currentLicense",
                  payload: null,
                })
                dispatch({type: "setInitStateFilling", datakey: ''})
              }}
            />
          </form>
        )}
      />
    </section>
  )
}
export default LicenseInput
