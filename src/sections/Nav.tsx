import Logo from '../assets/logos/Logo.svg'

export const Nav = () => {
    return (
        <>
            <nav className="flex gap-6 self-center align-top py-10 justify-center">
                <div className='flex place-content-between max-w-1/2 w-full '>
                    <img className="w-50" alt="Little lemon logo" src={Logo}></img>
                    <ul className="flex gap-6 self-center text-black">
                        <li className="top-nav"><a href="/">Home</a></li>
                        <li className="top-nav"><a href="/about">About</a></li>
                        <li className="top-nav"><a href="/menu">Menu</a></li>
                        <li className="top-nav"><a href="/reservations">Reservations</a></li>
                        <li className="top-nav"><a href="/order">Order Online</a></li>
                        <li className="top-nav"><a href="/login">Login</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}