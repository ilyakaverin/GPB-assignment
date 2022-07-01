import React, { useContext } from 'react';
import style from './style.module.scss';
import { UserContext } from '../../context/userContext';
import {Form, Field } from 'react-final-form';
import OnChange from '../TextInput/customListener';
import DatePicker from '../DatePicker/DatePicker';
import TextInput from '../TextInput/TextInput';


interface Props {
    header: string
}

const businessOwnerInfo = ({header}:Props) => {
    const handleChange = () => console.log('hi');
	const context = useContext(UserContext);
    return (
		<Form
			onSubmit={handleChange}
			render={() => {
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
									context?.dispatch({ type: 'data', datakey: "businessRegeDate", payload: value });
								}}
							/>
                            <Field name="businessRegId" component={TextInput} />
							<OnChange
								name="businessRegId"
								onChange={(value: string) => {
									context?.dispatch({ type: 'data', datakey: "businessRegId", payload: value });
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
									context?.dispatch({ type: 'data', datakey: "businessRegPlace", payload: value });
								}}
							/>
						</label>
					</section>
				);
			}}
		/>
	);
}
export default businessOwnerInfo;