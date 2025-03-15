/*import ProductCard from "./Card"
import Link from "next/link"

export default async function VenueCatalog({venueJson}: {venueJson: Promise<VenueJson>}) {

    const venueJsonReady = await venueJson

    return(
        <>
        Explore {venueJsonReady.count} models in our catalog
        <div style={{margin: "20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    venueJsonReady.data.map((venueItem: Object) => (
                        <Link href={`/venue/${venueItem.id}`} className="w-1/5">
                            <ProductCard venueName={venueItem.name} imgSrc={venueItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}*/

'use client';  // ให้เป็น Client Component

import { useState, useEffect } from 'react';
import ProductCard from './Card';
import Link from 'next/link';

export default function VenueCatalog({ venueJson }: { venueJson: Promise<VenueJson> }) {
    // สร้าง state สำหรับเก็บข้อมูล venue
    const [venueJsonReady, setVenueJsonReady] = useState<VenueJson | null>(null);

    useEffect(() => {
        // ฟังก์ชัน async สำหรับการดึงข้อมูล
        const fetchData = async () => {
            const data = await venueJson; // ดึงข้อมูลจาก API
            setVenueJsonReady(data); // ตั้งค่า state เมื่อดึงข้อมูลเสร็จ
        };

        fetchData();
    }, [venueJson]); // รีเฟรชข้อมูลเมื่อ venueJson เปลี่ยน

    if (!venueJsonReady) return <div>Loading...</div>; // แสดง Loading ถ้ายังไม่ได้ข้อมูล

    return (
        <>
            Explore {venueJsonReady.count} models in our catalog
            <div
                style={{
                    margin: '20px',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    alignContent: 'space-around',
                }}
            >
                {venueJsonReady.data.map((venueItem) => (
                    <Link key={venueItem.id} href={`/venue/${venueItem.id}`} className="w-1/5">
                        <ProductCard venueName={venueItem.name} imgSrc={venueItem.picture} />
                    </Link>
                ))}
            </div>
        </>
    );
}
