import React, { useContext } from 'react';
import style from './style.module.scss';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { Form, Field } from 'react-final-form';
import { UserContext } from '../../context/userContext';
import OnChange from '../TextInput/customListener';
import AddButton from '../AddButton/AddButton';
import LicenseInput from '../LicenseInput/LicenseInput';
import cn from 'classnames';


const LicenseInfo = ({header}:any) => {
    const handleSubmit = () => console.log('hi');
    const context = useContext(UserContext);
    return (
        <>
        <Form onSubmit={handleSubmit}
            render={() => (
                <section className={style.main__container_form_head}>
                
                <h2>{header}</h2>
                <Field name="hasLicense" component={ToggleSwitch} type="checkbox" />
                <OnChange
                name="hasLicense"
                onChange={(value: string) => {
                    context?.dispatch({type: 'state', datakey: "hasLicense", payload: value });
                }}
            />
            </section>
            )}
        />
           <section className={cn(style.main__container_form_optional, 
            {[style.main__container_form_optional_visible] : context!.store.state.hasLicense})}>
                <h3>Ваши лицензии</h3>
                <LicenseInput />
            </section>
            <AddButton 
                isVisible={context?.store.state.hasLicense} 
                name="Добавить еще одну лицензию"
                click={context!.dispatch}
                action={{type: 'state', datakey: "licenseMode", payload: 'creating' }}
                />

        </>
    )
}
export default LicenseInfo;