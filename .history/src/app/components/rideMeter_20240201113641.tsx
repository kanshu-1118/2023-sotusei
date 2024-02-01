import { css } from "../../../styled-system/css"

function RideMeter(){
    return(
        <div className={css({
            width:"240px",
            height:"auto",
            boxShadow:"10px 10px 10px #000000"
        })}>
            <div className={css({

            })}>
                <p>ライド中</p>
            </div>
            <div>
                <div>
                    <p>走行距離</p>
                    <p>{}km</p>
                </div>
                <div>
                    <p>走行時間</p>
                    <p>{}</p>
                </div>
                <div>
                    <p>料金</p>
                    <p>{}円</p>
                </div>
            </div>
        </div>
    )
}

export default RideMeter