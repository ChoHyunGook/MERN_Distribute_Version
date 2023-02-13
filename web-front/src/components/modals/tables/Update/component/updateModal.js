import React from 'react'
import '../../../styles/modal.css'
import UpdateTable from "../Service/UpdateTable";

const Modal = (props) =>{
    const {open, close, header, editedData, data} = props;



    return (
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section style={{width:'100%',marginTop:80}}>
                        <header>
                            {header}
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>
                        <main style={{alignItems: "center"}}><UpdateTable data={data} editedData={editedData}
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
export default Modal