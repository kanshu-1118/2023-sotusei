import { css } from "../../../styled-system/css"

function ReturnBike(){
    return(
        <div>
            <div className={css({
                paddingTop:"76px"
            })}>
                <p className={css({position:"absolute",top:"76px",left:"37px"})}>＜</p>
                <p className={css({textAlign:"center",fontSize:"20px",fontWeight:"bold"})}>お疲れ様でした！</p>
            </div>
            <p className={css({fontSize:"16px",textAlign:"center"})}>下記の手順に従って<br/>機体を返却してください</p>
            <div className={css({
                width:"320px",
                padding:"8px 16px",
                bgColor:"#E7E7E7",
                borderRadius:"8px"
            })}>
                <div className={css({display:"flex"})}>
                    <p>1.</p>
                    <p>にりんポートの枠内に入るように駐車しましょう</p>
                </div>
                <div className={css({display:"flex",marginTop:"24px"})}>
                    <p>2.</p>
                    <p>アプリでライド終了して鍵とヘルメットを元の場所に戻しましょう</p>
                </div>
                <div className={css({display:"flex",marginTop:"24px"})}>
                    <p>3.</p>
                    <p>返却する機体とポートが映るように撮影しましょう</p>
                </div>
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