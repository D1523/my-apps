
import BusinessList from "@/components/BusinessList";
import CategoryList from "@/components/CategoryList";
import SearchBar from "@/components/SearchBar";
import SideNavBar from "@/components/SideNavBar";
import GlobalApi from "@/services/GlobalApi";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [businessList,setBusinessList]=useState([]);

  useEffect(()=>{
  
      getNearByPlace('restaurant');
    
   
  },[])

  const getNearByPlace=()=>{
    GlobalApi.getNearByPlace('gas_station','35.5827712','-80.8484864')
    .then(resp=>{
    
      setBusinessList(resp.data.results)
    })
  }
  return (
    <div className="flex">
      
      <SideNavBar />

      <div className="grid grid-cols-1
       md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-9">
        <div>
          <SearchBar/>
          <CategoryList/>
          <BusinessList businessListData={businessList} />
          </div>
        <div>Google MAP</div>
        
      </div>
    </div>
  );
}
