/*import getVenues from "@/libs/getVenues"
import VenueCatalog from "@/components/VenueCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CardPanel from "@/components/CardPanel"

export default function Venue() {

    const venues =  getVenues()

    return(
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Travel Partner</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <VenueCatalog venueJson={venues}/>
            </Suspense>

            <hr className="my-10"/>

            <h1 className="text-xl font-medium">TRY Client-side Car Panel</h1>
        </main>
    )
}*/

'use client'

import VenueCatalog from "@/components/VenueCatalog"
import { Suspense, useEffect, useState } from "react"
import { LinearProgress } from "@mui/material"

export default function Venue() {
    const [venues, setVenues] = useState<any>(null)

    useEffect(() => {
        async function fetchVenues() {
            const venuesData = await getVenues()
            setVenues(venuesData)
        }

        fetchVenues()
    }, [])

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Travel Partner</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress /></p>}>
                {venues ? <VenueCatalog venueJson={venues} /> : null}
            </Suspense>

            <hr className="my-10" />

            <h1 className="text-xl font-medium">TRY Client-side Car Panel</h1>
        </main>
    )
}
