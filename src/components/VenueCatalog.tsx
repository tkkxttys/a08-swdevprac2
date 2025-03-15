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

'use client';  // เพิ่มบรรทัดนี้

import { useEffect, useState } from 'react';
import ProductCard from "./Card";
import Link from "next/link";

export default function VenueCatalog({ venueJson }: { venueJson: VenueJson }) {  
    const [venues, setVenues] = useState<VenueJson | null>(null);

    useEffect(() => {
        // เนื่องจาก venueJson ถูกส่งมาจาก props, เราจึงไม่ต้องใช้ async ที่นี่
        setVenues(venueJson);
    }, [venueJson]);

    if (!venues) return <div>Loading...</div>;  // แสดงข้อความ Loading ถ้ายังไม่โหลดข้อมูลเสร็จ

    return (
        <>
            Explore {venues.count} models in our catalog
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around" }}>
                {
                    venues.data.map((venueItem) => (
                        <Link key={venueItem.id} href={`/venue/${venueItem.id}`} className="w-1/5">
                            <ProductCard venueName={venueItem.name} imgSrc={venueItem.picture} />
                        </Link>
                    ))
                }
            </div>
        </>
    );
}

