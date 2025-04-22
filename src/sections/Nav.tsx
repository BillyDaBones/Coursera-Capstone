import Logo from '../assets/logos/Logo.svg'

export const Nav = () => {
    return (
        <>
            <nav>
                <img alt="Little lemon logo" src={Logo}></img>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>

                </ul>
            </nav>
        </>
    )
}