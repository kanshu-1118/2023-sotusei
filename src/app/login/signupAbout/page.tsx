"use client";
import { auth} from "@/lib/firebase/index";  //パスは必要に応じて調節してください
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";  // ←next/routerではない
import { useState,useEffect } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/index";
import { center, flex } from "../../../../styled-system/patterns";
import { css } from "../../../../styled-system/css";
import Image from "next/image";
import Link from "next/link";
import firebase from "firebase/compat/app";
import 'firebase/firestore';
import { signOut } from "firebase/auth";



export default function LoginPage() {
    const [firstName, setFirstName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [firstNameKata, setFirstNameKata] = useState("");
    const [familyNameKata, setFamilyNameKata] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [credit,setCredit] = useState(false)
    const [creditNumber,setCreditNumber] = useState("")
    const [creditCVV,setCreditCVV] = useState("")
    const [creditMonth,setCreditMonth] = useState("")
    const [creditYear,setCreditYear] = useState("")
    const [paypay,setPaypay] = useState(false)
    const [linepay,setLinepay] = useState(false)
    const [signInWithEmailAndPassword, user, loginLoading, error] =
        useSignInWithEmailAndPassword(auth);
    const [createUserWithEmailAndPassword, newUser, loading] =
        useCreateUserWithEmailAndPassword(auth);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    if (user) {
        router.push("/");
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                // setCurrentUser(user);
                // setSignInCheck(true);
                console.log("ログインしてるで");
                console.log(user.uid);
                
            } else {
                // setSignInCheck(true);
                console.log("ログインしてないで");
                
            }
        });
    });

    const FireStoreSet = () => {
        auth.onAuthStateChanged(async (user:any) => {
            // ログイン済みのユーザー情報があるかをチェック
            await setDoc(doc(db, "users", user.uid), {
                userUniqueID: user.uid,
                firstName: firstName,
                familyName: familyName,
                firstNameKata: firstNameKata,
                familyNameKata: familyNameKata,
                phoneNumber: phoneNumber,
                pay :{
                    credit:{
                        use : credit,
                        creditNumber :creditNumber,
                        creditCVV:creditCVV,
                        creditMonth:creditMonth,
                        creditYear:creditYear,
                    },
                    paypay:{
                        use:paypay,
                    },
                    linepay:{
                        use:linepay,
                    },
                },
            });
        }
        );
    }

    return (
        <div className={center({h:"100vh",flexDir:"column",gap:"40px"})}>
            <form className={center({
                flexDir:"column",
                gap:"24px",
                })}>
            <div className={flex({
                flexDir:"column",
                gap:"16px",
                })}>
                <div className={flex({
                    flexDir:"column",
                    gap:"8px",
                    })}>
                    <p className={css({fontSize:"20px",fontWeight:"bold"})}>お客様情報入力</p>
                    <div className={flex({ flexDir:"column", gap:"4px"})}>
                        <label htmlFor="name" className={css({fontSize:"12px"})}>お名前</label>
                        <div className={flex({gap:"6px"})}>
                            <div className={flex({
                                flexDir:"column",
                                gap:"4px",
                                })}>
                                <input
                                className={css({border:"1px solid",fontSize:"14px",h:"48px",padding:"4px",borderColor:"main",borderRadius:"4px"})}
                                type="text"
                                placeholder="苗字"
                                defaultValue={familyName}
                                onChange={(e) => setFamilyName(e.target.value)}
                                readOnly={isLoading}
                                />
                            </div>
                            <div className={flex({
                                flexDir:"column",
                                gap:"4px",
                                })}>
                                <input
                                className={css({border:"1px solid",fontSize:"14px",h:"48px",padding:"4px",borderColor:"main",borderRadius:"4px"})}
                                type="text"
                                placeholder="名前"
                                defaultValue={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                readOnly={isLoading}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className={flex({ flexDir:"column", gap:"4px"})}>
                        <label htmlFor="name" className={css({fontSize:"12px"})}>お名前（カタカナ）</label>
                        <div className={flex({gap:"6px"})}>
                            <div className={flex({
                                flexDir:"column",
                                gap:"4px",
                                })}>
                                <input
                                className={css({border:"1px solid",fontSize:"14px",h:"48px",padding:"4px",borderColor:"main",borderRadius:"4px"})}
                                type="text"
                                placeholder="ミョウジ"
                                defaultValue={familyNameKata}
                                onChange={(e) => setFamilyNameKata(e.target.value)}
                                readOnly={isLoading}
                                />
                            </div>
                            <div className={flex({
                                flexDir:"column",
                                gap:"4px",
                                })}>
                                <input
                                className={css({border:"1px solid",fontSize:"14px",h:"48px",padding:"4px",borderColor:"main",borderRadius:"4px"})}
                                type="text"
                                placeholder="ナマエ"
                                defaultValue={firstNameKata}
                                onChange={(e) => setFirstNameKata(e.target.value)}
                                readOnly={isLoading}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={flex({
                        flexDir:"column",
                        gap:"4px",
                        })}>
                        <label htmlFor="name" className={css({fontSize:"12px"})}>お電話番号</label>
                        <input
                        className={css({border:"1px solid",fontSize:"14px",h:"48px",padding:"4px",borderColor:"main",borderRadius:"4px"})}
                        type="tel"
                        placeholder="お電話番号"
                        defaultValue={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        readOnly={isLoading}
                        />
                    </div>
                </div>
                <div className={flex({
                    flexDir:"column",
                    gap:"6px"
                })}>
                    <p className={css({fontSize:"20px",fontWeight:"bold"})}>お支払い方法登録</p>
                    <div>
                        <div className={flex({alignItems:"center",paddingLeft:"16px",gap:"16px",bgColor:"base",border:"1px solid",borderColor:"main",h:"48px",borderRadius:"4px"})}
                            onClick={() => {
                                if (paypay || linepay) {
                                    setCredit(!credit)
                                    setLinepay(false)
                                    setPaypay(false)
                                } else if(credit) {
                                    setCredit(false)
                                } else {
                                    setCredit(!credit)
                                }
                            }}
                            >
                                <input type="checkbox" name="credit" id="credit" defaultChecked={credit} />
                                <span className={css({fontWeight:"bold"})}>クレジット払い</span>
                        </div>
                        {credit && 
                            <div className={flex({
                                flexDir:"column",
                                paddingTop:"4px",
                                })}>
                                <div className={flex({gap:"8px",flexDir:"column",border:"1px solid", borderColor:"main",padding:"8px"})}>
                                    <p className={css({fontWeight:"bold"})}>クレジットカード情報</p>
                                    <div className={flex({
                                        flexDir:"column",
                                        gap:"4px",
                                        })}>
                                        <label htmlFor="name" className={css({fontSize:"12px",fontWeight:"bold"})}>カード番号</label>
                                        <input
                                        className={css({border:"1px solid",fontSize:"14px",h:"48px",padding:"4px",borderColor:"gray",borderRadius:"4px"})}
                                        type="tel"
                                        placeholder="カード番号"
                                        defaultValue={creditNumber}
                                        onChange={(e) => setCreditNumber(e.target.value)}
                                        readOnly={isLoading}
                                        />
                                    </div>
                                    <div className={flex({
                                        flexDir:"column",
                                        gap:"4px",
                                        })}>
                                        <label htmlFor="name" className={css({fontSize:"12px",fontWeight:"bold"})}>CVV</label>
                                        <input
                                        className={css({border:"1px solid",fontSize:"14px",h:"48px",padding:"4px",borderColor:"gray",borderRadius:"4px"})}
                                        type="tel"
                                        placeholder="カード番号"
                                        defaultValue={creditCVV}
                                        onChange={(e) => setCreditCVV(e.target.value)}
                                        readOnly={isLoading}
                                        />
                                    </div>
                                    <div className={flex({ gap:"4px"})}>
                                        <div className={flex({
                                            flexDir:"column",
                                            gap:"4px",
                                            })}>
                                            <label htmlFor="name" className={css({fontSize:"12px",fontWeight:"bold"})}>有効期限</label>
                                            <input
                                            className={css({w:"100px",border:"1px solid",fontSize:"14px",h:"48px",padding:"4px",borderColor:"gray",borderRadius:"4px"})}
                                            type="tel"
                                            placeholder="月"
                                            defaultValue={creditMonth}
                                            onChange={(e) => setCreditMonth(e.target.value)}
                                            readOnly={isLoading}
                                            />
                                        </div>
                                        <div className={flex({
                                            flexDir:"column",
                                            gap:"4px",
                                            })}>
                                            <label htmlFor="name" className={css({fontSize:"12px",fontWeight:"bold"})}>　</label>
                                            <input
                                            className={css({w:"100px",border:"1px solid",fontSize:"14px",h:"48px",padding:"4px",borderColor:"gray",borderRadius:"4px"})}
                                            type="tel"
                                            placeholder="年"
                                            defaultValue={creditYear}
                                            onChange={(e) => setCreditYear(e.target.value)}
                                            readOnly={isLoading}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={flex({ gap:"8px"})}>
                            <div className={flex({w:"100%",alignItems:"center",paddingLeft:"16px",gap:"16px",bgColor:"base",border:"1px solid",borderColor:"main",h:"48px",borderRadius:"4px"})}
                                onClick={() => {
                                    if (credit || linepay) {
                                        setCredit(false)
                                        setLinepay(false)
                                        setPaypay(!paypay)
                                    } else if(paypay) {
                                        setPaypay(false)
                                    } else {
                                        setPaypay(!paypay)
                                    }
                                }}
                                >   
                                    <input type="checkbox" name="paypay" id="paypay" 
                                        defaultChecked={paypay}
                                    />
                                    <span className={css({fontWeight:"bold"})}>PayPay</span>
                            </div>
                            <div className={flex({w:"100%",alignItems:"center",paddingLeft:"16px",gap:"16px",bgColor:"base",border:"1px solid",borderColor:"main",h:"48px",borderRadius:"4px"})}
                                onClick={() => {
                                    if (credit || paypay) {
                                        setCredit(false)
                                        setLinepay(!linepay)
                                        setPaypay(false)
                                    } else if(linepay) {
                                        setLinepay(false)
                                    } else {
                                        setLinepay(!linepay)
                                    }
                                }}
                                >
                                    <input type="checkbox" name="linepay" id="linepay" defaultChecked={linepay} />
                                    <span className={css({fontWeight:"bold"})}>LINEPay</span>
                            </div>
                    </div>
                    {/* <div className={flex({
                        flexDir:"column",
                        gap:"8px",
                        })}>
                        <label htmlFor="name" className={css({fontSize:"12px"})}>お支払い方法</label>
                        <input
                        className={css({border:"1px solid",fontSize:"14px",h:"48px",padding:"4px",borderColor:"main",borderRadius:"4px"})}
                        type="tel"
                        placeholder="お電話番号"
                        defaultValue={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        readOnly={isLoading}
                        />
                    </div> */}
                </div>
            </div>
            <div className={flex({flexDir:"column",gap:"12px"})}>
                <button
                    className={css({
                        bgColor:"main",
                        w:"150px",
                        padding:"8px 0",
                        fontWeight:"bold",
                        color:"base",
                        // border:"3px solid",
                        borderRadius:"8px",
                        })}
                    onClick={async (e) => {
                        e.preventDefault();
                        setIsLoading(true);
                        FireStoreSet()
                        router.push("/");
                        setIsLoading(false);
                    }}
                    disabled={isLoading}
                >
                    確定{loading && "中"}
                </button>
                {/* <button
                    className={css({
                        bgColor:"base",
                        w:"150px",
                        padding:"8px 0",
                        fontWeight:"bold",
                        color:"main",
                        border:"3px solid",
                        borderRadius:"8px",
                        })}
                    onClick={async (e) => {
                        signOut(auth);
                        setIsLoading(true);
                        // const userData = await firebase.auth().
                        // const userdata = user;
                        // const docRef = doc(db, "users", userdata.uid);
                        // const docSnap = await getDoc(docRef);
                        // if (!docSnap.exists()) {
                        //     await setDoc(doc(db, "users", userdata.uid), {
                        //     // name: userdata.displayName,
                        //     // email: userdata.email,
                        //     name:"kanshu",
                        //     });
                        // }
                        setIsLoading(false);
                    }}
                    disabled={isLoading}
                >
                    ログアウト{loading && "中"}
                </button> */}
            </div>
            </form>
        </div>
    );
}