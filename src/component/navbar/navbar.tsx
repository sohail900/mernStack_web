import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../assets'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const Navbar: React.FC = () => {
    return (
        <>
            <header className='flex items-center justify-between pt-[1rem] w-[80%] mx-auto md:w-[70%] '>
                <Link className='logo' to='/home'>
                    <img src={logo} className='w-[6rem]' />
                </Link>
                <div className='btn_linked'>
                    <Link
                        to='https://github.com/sohail900'
                        target='_blank'
                        className='btn_child'
                    >
                        <FaGithub />
                    </Link>
                    <div className='btn_divider'></div>
                    <Link
                        to='https://www.linkedin.com/in/sohailwebdev011/'
                        target='_blank'
                        className='btn_child'
                    >
                        <FaLinkedin />
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Navbar
