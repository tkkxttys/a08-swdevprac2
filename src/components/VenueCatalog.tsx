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

import ProductCard from "./Card";
import Link from "next/link";

export default async function VenueCatalog({ venueJson }: { venueJson: VenueJson }) {  
    return (
        <>
            Explore {venueJson.count} models in our catalog
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around" }}>
                {
                    venueJson.data.map((venueItem) => (
                        <Link key={venueItem.id} href={`/venue/${venueItem.id}`} className="w-1/5">
                            <ProductCard venueName={venueItem.name} imgSrc={venueItem.picture} />
                        </Link>
                    ))
                }
            </div>
        </>
    );
}
