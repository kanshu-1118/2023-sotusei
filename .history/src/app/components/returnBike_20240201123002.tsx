import { css } from "../../../styled-system/css"

function ReturnBike(){
    return(
        <div>
            <div className={css({
                width:"100vw",
                display:"flex"
            })}>
                <p>＜</p>
                <p className={css({textAlign:"center"})}>お疲れ様でした！</p>
            </div>
            <p className={css({fontSize:"16px"})}>下記の手順に従って<br/>機体を返却してください</p>
            <div>
                <p>1.にりんポートの枠内に入るように駐車しましょう</p>
                <p>2.アプリでライド終了して鍵とヘルメットを元の場所に戻しましょう</p>
                <p>3.返却する機体とポートが映るように撮影しましょう</p>
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