import React from 'react'
import Link from 'next/link'

const elements = [
    'products',
    'categories',
    'merchant',
    'config',
    'orders',
    'developer'
]

export const SidebarMenu = () => {
  return (
    <div>
        <ul>
            { elements.map(element=>(
                <Link href={`/dashboard/${element}`}>
                    <li>{element}</li>
                </Link>
            )) }
        </ul>
    </div>
  )
}
