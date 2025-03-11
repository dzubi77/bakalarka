import React from "react";

/*
údaje - voľná téma: názov slovensky (stupeň, št. program, názov prace) a anglicky
                    predmet práce
                    vedúci (prípadne aj tútor)
údaje - vypracovaná téma: plus študent
*/

//reprezentuje položku zo zoznamu záverečných prác
export const ThesisItem = () => {
    return (
        <>

        </>
    );
}

//reprezentuje jednu záverečnú prácu zo zoznamu záverečných prác (po kliknutí na voľnú tému)
/*
údaje po kliknutí - názov, stupeň, pre koho (odbor), vedúci (príp. tútor), cieľ práce, info o vedúcom
*/
export const GeneralThesis = () => {
    return (
        <>
            <div className="main-container">
                <div className="content-container">
                    Here will be shown whole thesis //after clicking one in the list of thesis.
                </div>
            </div>
        </>
    );
}

export const FinishedThesis = () => {
    return (
        <>
        </>
    );
}