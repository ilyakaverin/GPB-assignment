import React from "react"
import style from "./style.module.scss"
import { useGetPicture } from "../../customHooks"

function OutputCardButton({ name, click, img }: any) {
  const [image] = useGetPicture(img);
// ???

  console.log(img, image, )

  return (
    <button className={style.outputButton} onClick={click}>
      <img className={style.image} src={`${image}`} alt={name} />
      <img className={style.image} src={`../../assets/${img}`} alt={name} />
      {name}
    </button>
  )
}
export default OutputCardButton
