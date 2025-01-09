export const Navbar = ({ isLoggedIn }) => {
    isLoggedIn = true;
    return (
        <>
            <nav className="navbar navbar-expand-lg my-navbar">
                <div className="container-fluid">
                    {isLoggedIn && <a className="nav-item btn btn-primary" href="/">Odhlasit sa</a>}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/documents">Dokumenty</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Temy
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/thesises">Vyhladaj temu</a></li>
                                    <li><a class="dropdown-item" href="/export_files">Odovzdanie suborov</a></li>
                                    <li><a class="dropdown-item" href="/">Informacie ku statnej skuske</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/users">Pouzivatelia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/finished_thesises">Vyhladaj pracu</a>
                            </li>
                            {isLoggedIn && <li className="nav-item">
                                <a className="nav-link active" href="/my_profile">Moj profil</a>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}