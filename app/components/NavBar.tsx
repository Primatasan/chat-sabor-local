import Link from 'next/link'
import Image from 'next/image'
import './NavBar.css'
import Logo from './logo_verde.png'

export function NavBar() {
    return (
        <div className="flex flex-row items-center justify-between w-full p-4 barrasabor" >
            <div className="flex flex-row items-center justify-center">
                <Link href="/">
                    <Image
                          src={Logo}
                          alt="Logo"
                          height={50}
                    
                    />
                </Link>
            </div>
            <div className="flex flex-row items-center justify-center">
                <Link href="/chat">
                    <p className="text-2xl mr-4 saborlocal">Usar o Chat</p>
                </Link>
            </div>
        </div>

    )
}

export default NavBar