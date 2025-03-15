import LocationDateReserve from "@/components/DateReserve";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from "@mui/material";

export default function Reservations () {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Reservation</div>

            <TextField id="Name-Lastname" name="Name-Lastname" label="Name-Lastname" variant="standard" />
            <TextField id="Contact-Number" name="Contact-Number" label="Contact-Number" variant="standard" />

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Date and Location</div>
                <LocationDateReserve/>
            </div>

            <Button name="Book Venue" variant="contained" color="primary">
                Book Venue
            </Button>


        </main>
    );
}