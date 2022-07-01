import React, { useContext } from 'react';
import style from './style.module.scss';
import TextInput from "../TextInput/TextInput";
import OnChange from '../TextInput/customListener';
import { Form, Field } from 'react-final-form';
import { UserContext } from '../../context/userContext';
import Datepicker from '../DatePicker/DatePicker';
import cn from 'classnames';

const LicenseInput = () => {

    const context = useContext(UserContext);

    const handleSubmit = () => console.log('hi');
    return (
        <section className={cn(style.main__container_form_card, 
            {[style.main__container_form_card_visible] : context!.store.state.licenseMode === 'creating'})}>
            <h4>Добавить новую</h4>
            <Form onSubmit={handleSubmit}
            render={() => (
                <>
                <label className={style.main__container_form_label}>
                <span>Вид и номер документа</span> 
                <div className={style.main__container_form_inputs}>
                <Field name="typeOfDocument" component={TextInput}  />
                <OnChange
                    name="typeOfDocument"
                    onChange={(value: string) => {
                        context?.dispatch({ type: 'newLicense', datakey: "typeOfDocument", payload: value });
                    }}
                />
                <Field name="documentId" component={TextInput}  />
                <OnChange
                    name="documentId"
                    onChange={(value: string) => {
                        context?.dispatch({ type: 'newLicense', datakey: "documentId", payload: value });
                    }}
                />
                </div>
            </label>
            <label className={style.main__container_form_label}>
                <span>Вид деятельности</span> 
                <Field name="activity" component={TextInput}  />
                <OnChange
                    name="activity"
                    onChange={(value: string) => {
                        context?.dispatch({ type: 'newLicense', datakey: "activity", payload: value });
                    }}
                />
            </label>
            <label className={style.main__container_form_label}>
                <span>Кем выдан документ</span> 
                <Field name="issued" component={TextInput}  />
                <OnChange
                    name="issued"
                    onChange={(value: string) => {
                        context?.dispatch({ type: 'newLicense', datakey: "issued", payload: value });
                    }}
                />
            </label>
            <label className={style.main__container_form_label}>
                <span>Дата выдачи и срок действия документы</span> 
                <div className={style.main__container_form_inputs}>
                <Field name="dateOfIssue" component={Datepicker}  />
                <OnChange
                    name="dateOfIssue"
                    onChange={(value: string) => {
                        context?.dispatch({ type: 'newLicense', datakey: "dateOfIssue", payload: value });
                    }}
                />
                <Field name="expiresAt" component={Datepicker} disabled={context?.store.newLicense.permanent}  />
                <OnChange
                    name="expiresAt"
                    onChange={(value: string) => {
                        context?.dispatch({ type: 'newLicense', datakey: "expiresAt", payload: value });
                    }}
                />  
                <label className={style.main_container_form_checkbox}>
                <Field name="permanent" component="input" type="checkbox"  />
                <OnChange
                    name="permanent"
                    onChange={(value: string) => {
                        context?.dispatch({ type: 'newLicense', datakey: "permanent", payload: value });
                        context?.dispatch({ type: 'newLicense', datakey: "expiresAt", payload: "" });
                    }}
                />
                <span>Бессрочный</span>
                </label>
                </div>

            </label>
            </>
            )}
        />
        </section>
    )
}
export default LicenseInput;