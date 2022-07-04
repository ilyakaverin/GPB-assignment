import React, { useContext } from 'react';
import style from './style.module.scss';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { Form, Field } from 'react-final-form';
import { UserContext, ContextInterface } from '../../context/userContext';
import OnChange from '../../customHooks';
import AddButton from '../AddButton/AddButton';
import LicenseInput from '../LicenseInput/LicenseInput';
import cn from 'classnames';
import LicenseCard from '../LicenseCard/LicenseCard';

const LicenseInfo = ({header}:any) => {
    const handleSubmit = () => console.log('hi');
    const  { store, dispatch } = useContext(UserContext) as ContextInterface;
    const { licenses } = store;
    return (
        <>
        <Form onSubmit={handleSubmit}
        initialValues={{hasLicense: store.state.hasLicense }}
            render={() => (
                <section className={style.main__container_form_head}>
                
                <h2>{header}</h2>
                <Field name="hasLicense" component={ToggleSwitch} type="checkbox"  />
                <OnChange
                name="hasLicense"
                onChange={(value: string) => {
                    dispatch({type: 'state', datakey: "hasLicense", payload: value });
                }}
            />
            </section>
            )}
        />
           <section className={cn(style.main__container_form_optional, 
            {[style.main__container_form_optional_visible] : store.state.hasLicense})}>
                <h3>Ваши лицензии</h3>
                {
                    licenses.map((license) => <LicenseCard key={license.id} license={license} />)
                }
                <LicenseInput />
            </section>
            <AddButton 
                isVisible={store.state.hasLicense} 
                name="Добавить еще одну лицензию"
                click={dispatch}
                action={{type: 'state', datakey: "licenseMode", payload: 'creating' }}
                />

        </>
    )
}
export default LicenseInfo;