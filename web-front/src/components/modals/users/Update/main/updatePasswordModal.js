import React from 'react'
import '../../../styles/modal.css'
import UpdatePasswordService from "../service/updatePasswordService";

export default function UpdatePasswordModal(props){

    const {open, close, header, userData, CheckCompany,srcAddress } = props;

    return (
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section style={{marginTop:80}}>
                        <header>
                            {header}
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>
                        <main style={{alignItems: "center"}}><UpdatePasswordService userData={userData} CheckCompany={CheckCompany}
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