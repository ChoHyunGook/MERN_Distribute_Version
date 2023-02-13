import UpdateNameService from "../service/updateNameService";
import React from 'react'
import '../../../styles/modal.css'

export default function UpdateNameModal(props){

    const {open, close, header, userData, CheckCompany, srcAddress } = props;

    return(
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section style={{marginTop:50}}>
                        <header>
                            {header}
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>
                        <main style={{alignItems: "center"}}><UpdateNameService userData={userData} CheckCompany={CheckCompany}
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