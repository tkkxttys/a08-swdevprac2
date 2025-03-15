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

import { useEffect, useState } from 'react'
import ProductCard from "./Card"
import Link from "next/link"

export default function VenueCatalog({ venueJson }: { venueJson: Promise<VenueJson> }) {
    const [venueData, setVenueData] = useState<VenueJson | null>(null)

    useEffect(() => {
        // ดึงข้อมูลจาก venueJson
        venueJson.then((data) => setVenueData(data))
    }, [venueJson])

    if (!venueData) {
        return <div>Loading...</div> // ถ้ายังไม่สามารถดึงข้อมูลมาได้
    }

    return (
        <>
            Explore {venueData.count} models in our catalog
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around" }}>
                {
                    venueData.data.map((venueItem) => (
                        <Link href={`/venue/${venueItem.id}`} key={venueItem.id} className="w-1/5">
                            <ProductCard venueName={venueItem.name} imgSrc={venueItem.picture} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
