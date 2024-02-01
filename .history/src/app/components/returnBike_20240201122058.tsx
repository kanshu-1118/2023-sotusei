import { css } from "../../../styled-system/css"

function ReturnBike(){
    return(
        <div>
            <div>
                <p>＜</p>
                <p>お疲れ様でした！</p>
            </div>
            <button type="button"className={css({
                display:"flex",
                width:"326px",
                height:"48px",
                bgColor:"#494949",
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

export default ReturnBike;