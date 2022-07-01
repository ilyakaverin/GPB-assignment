import React, { useContext } from "react";
import style from './style.module.scss';
import { Form, Field } from "react-final-form";
import TextInput from "../TextInput/TextInput";
import { UserContext } from "../../context/userContext";
import OnChange from "../TextInput/customListener";
import DatePicker from "../DatePicker/DatePicker";


interface Header {
	header: string;
}

const CommonInfo = ({ header }: Header) => {
	const context = useContext(UserContext);

	const handleChange = (values: any) => {
		console.log(Object.entries(values));
		context?.dispatch({ type: "registryNumber", payload: values });
	};

	return (
		<Form
			onSubmit={handleChange}
			initialValues={{}}
			render={() => {
				return (
					<>
                    <h2>{header}</h2>
						<label className={style.main__container_form_label}>
							<span>ИНН, ОГРН или ОГРНИП</span> 
							<Field name="registryNumber" component={TextInput} />
							<OnChange
								name="registryNumber"
								onChange={(value: string) => {
									context?.dispatch({ type: "registryNumber", payload: value });
								}}
							/>
						</label>
                        <label className={style.main__container_form_label}>
							<span>Фамилия, имя и отчество</span> 
							<Field name="fullName" component={TextInput} />
							<OnChange
								name="fullName"
								onChange={(value: string) => {
									context?.dispatch({ type: "fullName", payload: value });
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
									context?.dispatch({ type: "dateOfBirth", payload: value });
								}}
							/>
                            <Field name="placeOfBirth" component={TextInput} />
							<OnChange
								name="placeOfBirth"
								onChange={(value: string) => {
									context?.dispatch({ type: "placeOfBirth", payload: value });
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
									context?.dispatch({ type: "citizenship", payload: value });
								}}
							/>
						</label>
                        <label className={style.main__container_form_label}>
							<span>Снилс (при наличии)</span> 
							<Field name="snils" component={TextInput} />
							<OnChange
								name="snils"
								onChange={(value: string) => {
									context?.dispatch({ type: "snils", payload: value });
								}}
							/>
						</label>
                        <label className={style.main__container_form_label}>
							<span>Адрес места жительства (регистрации)</span> 
							<Field name="registerAdress" component={TextInput} />
							<OnChange
								name="registerAdress"
								onChange={(value: string) => {
									context?.dispatch({ type: "registerAdress", payload: value });
								}}
							/>
						</label>
                        <label className={style.main__container_form_label}>
							<span>Адрес места пребывания (если отличается от места жительства)</span> 
							<Field name="livingAdress" component={TextInput} />
							<OnChange
								name="livingAdress"
								onChange={(value: string) => {
									context?.dispatch({ type: "livingAdress", payload: value });
								}}
							/>
						</label>
						<pre>{JSON.stringify(context!.state, undefined, 2)}</pre>
					</>
				);
			}}
		/>
	);
};
export default CommonInfo;
