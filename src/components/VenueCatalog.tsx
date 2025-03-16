import ProductCard from "./Card"
import Link from "next/link"

export default async function VenueCatalog({venuesJson}: {venuesJson: Promise<VenueJson>}) {

    const venueJsonReady = await venuesJson

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
}

/*import { useEffect, useState } from "react"
import ProductCard from "./Card"
import Link from "next/link"  // นำเข้า Link จาก next/link

export default function VenueCatalog({ venueJson }: { venueJson: any }) {
    const [venueData, setVenueData] = useState<any>(null)

    useEffect(() => {
        // ตรวจสอบว่า venueJson มีข้อมูลแล้วจึงตั้งค่า venueData
        if (venueJson) {
            setVenueData(venueJson)
        }
    }, [venueJson])

    if (!venueData) {
        return <p>Loading...</p>
    }

    return (
        <div style={{ margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around" }}>
            {venueData.data.map((venueItem: any) => (
                <Link key={venueItem.id} href={`/venue/${venueItem.id}`} passHref className="w-1/5">
                    <div className="w-full">
                        <ProductCard venueName={venueItem.name} imgSrc={venueItem.picture} />
                    </div>
                </Link>
            ))}
        </div>
    )
}*/
