import { css } from "../../../styled-system/css"

function ReturnBike(){
    return(
        <div>
        <button type="button"className={css({
            display:"flex",
            width:"326px",
            height:"48px",
            bgColor:"tomato",
            alignItems:"center",
            justifyContent:"center",
            color:"white",
            borderRadius:"24px",
            cursor:"pointer",
            position:"fixed",
            bottom:"51px",
            right:"0px",
            left:"0px",
            margin:"auto"
        })}>
        <p>ボタン</p>
      </button>

        </div>
    )
}

export default ReturnBike()