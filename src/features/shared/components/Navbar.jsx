import { Menu, Dropdown } from 'antd';
import { BellOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import snaLogo from '../../../images/Logo.png'
import hamLogo from '../../../images/hamLogo.png'
import { Link } from 'react-router-dom';
import { primaryColor, webType } from '../../../config';


export default function Navbar() {
    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }

    const logo = webType === 'SNA' ? snaLogo : hamLogo

    const user = JSON.parse(localStorage.getItem('user'))

    const menu = (
        <Menu style={{ width: 200 }}>
            <Menu.Item>
                <Link to='/home'>
                    Beranda
                </Link>
            </Menu.Item>
            {/* <Menu.Item>
                <Link to='/invoice'>
                    Tagihan
                </Link>
            </Menu.Item> */}
            <Menu.Item>
                <Link to='/order'>
                    Pesanan
                </Link>
            </Menu.Item>
            {/* <Menu.Item>
                <Link to='/history'>
                    Riwayat
                </Link>
            </Menu.Item> */}
            <Menu.Item onClick={handleLogout}>
                <span className='text-danger'>
                    Keluar
                </span>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className='navbar mb-3 px-3'>
            <div className="d-flex justify-content-between align-items-center w-100">
                <Link to={'/home'}>
                    <div className="left d-flex align-items-center">
                        <img src={logo} alt="logo" className='logo me-2' />
                        {/* <h6 className='mb-0'></h6> */}
                    </div>
                </Link>
                <div className="right d-flex align-items-center">
                    <div className="icons">
                        {/* <SearchOutlined /> */}
                        <Link to='/cart' >
                            <ShoppingCartOutlined style={{ color: primaryColor }} />
                        </Link>
                        <BellOutlined style={{ color: primaryColor }} />
                    </div>

                    <div className="d-flex align-items-center">
                        <h6 className='mb-0'>{user.name}</h6>
                        <Dropdown overlay={menu}>
                            <div className="profilepic d-flex justify-content-center align-items-center" >
                                <UserOutlined style={{ fontSize: 23 }} />
                            </div>
                        </Dropdown>

                    </div>
                </div>
            </div>
        </div>
    )
}
