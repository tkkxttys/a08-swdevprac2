/*'use client'
import ProductCard from "./Card"
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

'use client';  // เพิ่มบรรทัดนี้เพื่อให้เป็น Client Component

import { useState, useEffect } from 'react'
import ProductCard from "./Card"
import Link from "next/link"

export default function VenueCatalog({venueJson}: {venueJson: Promise<VenueJson>}) {
    const [venueJsonReady, setVenueJsonReady] = useState<VenueJson | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await venueJson;
            setVenueJsonReady(data);
        };

        fetchData();
    }, [venueJson]);

    if (!venueJsonReady) return <div>Loading...</div>; // แสดง Loading ถ้ายังไม่ได้ข้อมูล

    return (
        <>
            Explore {venueJsonReady.count} models in our catalog
            <div style={{margin: "20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    venueJsonReady.data.map((venueItem) => (
                        <Link key={venueItem.id} href={`/venue/${venueItem.id}`} className="w-1/5">
                            <ProductCard venueName={venueItem.name} imgSrc={venueItem.picture} />
                        </Link>
                    ))
                }
            </div>
        </>
    );
}
