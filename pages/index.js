import Head from 'next/head'

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Inter } from 'next/font/google'
import SideNavBar from '@/components/SideNavBar'
import SearchBar from '@/components/SearchBar'
import CategoryList from '@/components/CategoryList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex">
    
       <SideNavBar/>

       <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-8">
      <div>
        <SearchBar/>
        <CategoryList/>
         </div>
      <div>Google Map </div>
      </div>

      </div>
  )
}
