import Image from "next/image"

export default function VenueDetailPage({params}: {params: {vid: string}}) {

    /**
     * Mock Data for Demostration Only
     */
    const mockVenueRepo = new Map()
    mockVenueRepo.set("001", {name: "The Bloom Pavilion", image: "/img/bloom.jpg"})
    mockVenueRepo.set("002", {name: "Spark Space", image: "/img/sparkspace.jpg"})
    mockVenueRepo.set("003", {name: "The Grand Table", image: "/img/grandtable.jpg"})
    

    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Veunue ID {params.vid}</h1>
            <div className=" flex flex-row my-5">
                <Image src={(mockVenueRepo.get(params.vid)).image}
                    alt="Venue Image"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"
                />
                <div className="text-md mx-5">{(mockVenueRepo.get(params.vid)).name}</div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{vid: '001'}, {vid: '002'}, {vid: '003'}]
}

