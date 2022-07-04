import React, { useContext } from "react";
import style from "./style.module.scss";
import { UserContext } from "../../context/userContext";
import OutputCardButton from "../OutputCardButton/OutputCardButton";
import { LicenseInterface } from "../../models/licence";
import { ContextInterface } from "../../interfaces";
interface LicenseCardProp {
  license: LicenseInterface;
}

const LicenseCard = ({ license }: LicenseCardProp) => {
  const { dispatch } = useContext(UserContext) as ContextInterface;

  return (
    <section className={style.main__container_card}>
      <h4>Лицензия {license.documentId}</h4>
      <div className={style.main__container_card_info}>
        <span>Вид и номер документа</span>
        <span>
          {license.documentId}, {license.typeOfDocument}{" "}
        </span>
        <span>Вид деятельности</span>
        <span>{license.activity}</span>
        <span>Кем выдан документ</span>
        <span>{license.issued}</span>
        <span>Дата выдачи документа и срок действия</span>
        <span>
          {license.dateOfIssue} - {license.expiresAt}
        </span>
      </div>
      <div className={style.main__container_card_buttons}>
        <OutputCardButton
          img="edit.svg"
          name="Редактировать"
          click={() => {
            dispatch({
              type: "editLicense",
              datakey: "licenseMode",
              payload: license,
            });
          }}
        />
        <OutputCardButton
          img="delete.svg"
          name="Удалить"
          click={() => {
            dispatch({
              type: "deleteLicense",
              datakey: "licenses",
              payload: license.id,
            });
            dispatch({
              type: "clearLicenseForm",
              datakey: "newLicense",
              payload: null,
            });
          }}
        />
      </div>
    </section>
  );
};
export default LicenseCard;
