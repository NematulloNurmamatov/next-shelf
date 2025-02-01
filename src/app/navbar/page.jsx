import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import img from "@/images/Logo.png"
import Search from 'antd/es/transfer/search'
import { Menu } from 'antd'

export default function Navbar() {

    const items = [
        {
            label: 'Shop All',
            key: 'shop_all', // Changed to unique key
            // icon: <MailOutlined />,
        },
        {
            label: 'Flower',
            key: 'flower', // Changed to unique key
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'flower_option_1', // Changed to unique key
                        },
                        {
                            label: 'Option 2',
                            key: 'flower_option_2', // Changed to unique key
                        },
                    ],
                },
            ],
        },
        {
            label: 'Edibles',
            key: 'edibles', // Changed to unique key
            // icon: <MailOutlined />,
        },
        {
            label: 'Concentrates',
            key: 'concentrates', // Changed to unique key
            children: [
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'concentrates_option_1', // Changed to unique key
                        },
                        {
                            label: 'Option 2',
                            key: 'concentrates_option_2', // Changed to unique key
                        },
                    ],
                },
            ],
        },
        {
            label: 'Mushrooms',
            key: 'mushrooms', // Changed to unique key
            // icon: <MailOutlined />,
        },
        {
            label: 'Bundles',
            key: 'bundles', // Changed to unique key
            children: [
                {
                    type: 'group',
                    label: 'Item 3',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'bundles_option_1', // Changed to unique key
                        },
                        {
                            label: 'Option 2',
                            key: 'bundles_option_2', // Changed to unique key
                        },
                    ],
                },
            ],
        },
        {
            label: 'Support',
            key: 'support', // Changed to unique key
            children: [
                {
                    type: 'group',
                    label: 'Item 4',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'support_option_1', // Changed to unique key
                        },
                        {
                            label: 'Option 2',
                            key: 'support_option_2', // Changed to unique key
                        },
                    ],
                },
            ],
        },
        {
            label: 'Rewards', // Fixed typo in 'Reverds' to 'Rewards'
            key: 'rewards', // Changed to unique key
            // icon: <MailOutlined />,
        },
        {
            label: 'Blog',
            key: 'blog', // Changed to unique key
            // icon: <MailOutlined />,
        },
    ];



    return (



        <div>
            <nav className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row  justify-between">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={img} alt="Logo" width={150} />
                    </Link>
                    <div className="flex items-center space-x-4">
                        <Search
                            addonBefore="https://"
                            placeholder="input search text"
                            allowClear
                            style={{
                                width: '300px',
                                borderRadius: '20px',
                                padding: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#f5f5f5',
                                fontSize: '16px',
                            }}
                        />
                        <p className='w-full'>Your akkaunt</p>
                        <button className=" bg-[#17AF26] text-white inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                            Button
                        </button>
                    </div>
                </div>
            </nav>
            <div className='container  flex justify-center'>
                <Menu mode="horizontal" className='w-full justify-around' items={items} />
            </div>

        </div>
    )
}
