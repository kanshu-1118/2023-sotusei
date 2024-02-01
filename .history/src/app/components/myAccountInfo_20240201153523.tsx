import { css } from '../../../styled-system/css';


function MyAccountInfo(){
    return(
        <div>
            <div className={css({
                width:"100vw",
                padding:"14px",
                bgColor:"#F57F17",
                borderRadius:"8px 8px 0px 0px",
                textAlign:"center",
                color:"#fff"
            })}>
                <p>アカウント情報</p>
            </div>
            <div className={css({
                padding:"16px",
                bgColor:"#F3F3F3"
            })}>
                <p className={css({
                    fontSize:"12px"
                })}>プロフィール情報</p>
                <div className={css({
                    bgColor:"#fff",
                    borderRadius:"8px",
                    padding:"12px",
                    marginTop:"10px"
                })}>
                    <div className={css({
                        display:"flex",
                        justifyContent:"space-between",
                    })}>
                        <p>氏名</p>
                        <p>{}</p>
                    </div>
                    <div className={css({
                        display:"flex",
                        justifyContent:"space-between",
                        borderBottom:"solid 1px #EAEAEA",
                        padding:"12px 0px"
                    })}>
                        <p>生年月日</p>
                        <p>{}</p>
                    </div>
                    <div className={css({
                        display:"flex",
                        justifyContent:"space-between",
                        borderBottom:"solid 1px #EAEAEA",
                        padding:"12px 0px"
                    })}>
                        <p>メールアドレス</p>
                        <p>{}</p>
                    </div>
                    <div className={css({
                        display:"flex",
                        justifyContent:"space-between",
                        padding:"12px 0px 0px 0px"
                    })}>
                        <p>電話番号</p>
                        <p>{}</p>
                    </div>
                </div>
                <p className={css({
                    fontSize:"12px",
                    margin:"10px 0px"
                })}>通知設定</p>
                <div className={css({
                    display:"flex",
                    justifyContent:"space-between",
                    bgColor:"#fff",
                    borderRadius:"8px",
                    padding:"12px",
                })}>
                    <p>メール通知設定</p>
                    <button type="button">＞</button>
                </div>
                <p className={css({
                    fontSize:"12px",
                    margin:"10px 0px"
                })}>支払い情報</p>
                <div className={css({
                    bgColor:"#fff",
                    padding:"8px"
                })}>
                    {}
                </div>
                <button type='button'className={css({
                    width:"100%",
                    bgColor:"#DBDBDB",
                    borderRadius:"24px",
                    padding:"12px"
                })}>ログアウト</button>
                <p className={css({
                    color:"#5E5E5E",
                    textAlign:"center",
                    margin:"32px 0px 40px 0px"
                })}>退会手続き</p>
            </div>
        </div>
    )
}
export default MyAccountInfo;