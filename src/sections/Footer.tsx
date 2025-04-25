import Logo from '../assets/logos/Logo.svg'

export const Footer = () => {
    return (
        <>
            <footer className='flex gap-10'>
                <img alt="Little lemon logo" src={Logo}></img>
                <ul className='flex-row gap-6 self-center'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </footer>
        </>
    )
}