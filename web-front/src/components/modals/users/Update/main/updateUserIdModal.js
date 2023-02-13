import React from "react";
import UpdateUserIdService from "../service/updateUserIdService";
import '../../../styles/modal.css'


export default function UpdateUserIdModal(props){
    const {open, close, header, userData, CheckCompany, srcAddress  } = props;

    return(
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <header>
                            {header}
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>
                        <main style={{alignItems: "center"}}><UpdateUserIdService userData={userData} CheckCompany={CheckCompany}
                                                                                  srcAddress={srcAddress}
                                                                                style={{alignItems: "center"}}/></main>
                        <footer>
                            <button className="close" onClick={close}>
                                닫기
                            </button>
                        </footer>
                    </section>
                ) : null}
            </div>
        </>
    )
}