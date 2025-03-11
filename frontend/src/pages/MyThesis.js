import React from "react";
import '../styles/one_column_style.css'

//reprezentuje podstránku s priradenou témou (ak existuje priradená téma)
export const MyThesis = () => {
    return (
        <>
            <div className="main-container">
                <div className="content-container">
                    <div className="content-inner-container">
                        <h5>Zadanie bakalarskej/diplomovej prace</h5>
                    </div>
                    <div className="content-inner-container">
                        Tu bude info o prihlaske na statnu skusku
                    </div>
                </div>
            </div>
        </>
    );
}