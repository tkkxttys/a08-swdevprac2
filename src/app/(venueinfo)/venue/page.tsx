import getVenues from "@/libs/getVenues"
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
                <VenueCatalog venuesJson={venues}/>
            </Suspense>

            <hr className="my-10"/>

            <h1 className="text-xl font-medium">TRY Client-side Car Panel</h1>
        </main>
    )
}

/*'use client'

import { useEffect, useState } from "react"
import { LinearProgress } from "@mui/material"
import VenueCatalog from "@/components/VenueCatalog"
import getVenues from "@/libs/getVenues"

export default function Venue() {
    const [venues, setVenues] = useState<any>(null)

    useEffect(() => {
        async function fetchVenues() {
            try {
                const venuesData = await getVenues()
                setVenues(venuesData)
            } catch (error) {
                console.error("Error fetching venues:", error)
            }
        }

        fetchVenues()
    }, [])

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Travel Partner</h1>
            {venues ? (
                <VenueCatalog venueJson={venues} />
            ) : (
                <LinearProgress />
            )}
        </main>
    )
}*/
