import React from "react";
import '../styles/documents_style.css';

//reprezentuje podstránku "Dokumenty" 
//TODO for prod: doplnit spravne linky k odkazom
export const DocumentsPage = () => {
    return (
        <div className="documents-container">
            <section className="important-links">
                <h2>Dôležité linky</h2>
                <ul>
                    <li><button onClick={() => window.location.href = '#'} title="Tu si zmeníte/vytvoríte heslo pre LDAP konto">LDAP Uniza</button></li>
                    <li><button onClick={() => window.location.href = '#'} title="Tu odovzdajte text a prílohy svojej záverečnej práce">Evidencia záverečných prác</button></li>
                </ul>
            </section>
    
            <section className="instructions-for-students">
                <h2>Inštrukcie pre študenta</h2>
                <ul>
                    <li><a href="path/to/instruction1.pdf" target="_blank" rel="noopener noreferrer">Usmernenie pre študenta - LETO 2024/2025</a></li>
                    <li><a href="path/to/instruction2.pdf" target="_blank" rel="noopener noreferrer">Smernica č. 103 o záverečných prácach</a></li>
                </ul>
            </section>
    
            <section className="general-instructions">
                <h2>Pokyny</h2>
                <ul>
                    <li><a href="path/to/general_instruction1.pdf" target="_blank" rel="noopener noreferrer">Techniky citovania</a></li>
                    <li><a href="path/to/general_instruction2.pdf" target="_blank" rel="noopener noreferrer">Metodické usmernenie MŠ</a></li>
                    <li><a href="path/to/general_instruction3.pdf" target="_blank" rel="noopener noreferrer">Výnos MŠ SR</a></li>
                    <li><a href="path/to/general_instruction3.pdf" target="_blank" rel="noopener noreferrer">Príloha 1 k výnosu MŠ SR</a></li>
                    <li><a href="path/to/general_instruction3.pdf" target="_blank" rel="noopener noreferrer">Príloha 2 k výnosu MŠ SR</a></li>
                </ul>
            </section>
        </div>
      );
}

// reprezentuje podstránku na nahrávanie súborov; TODO
export const FileExport = () => {
    return (
        <>
            This page will contain options for exporting files.
        </>
    );
}