import { useState } from "react";

export default function Team() {
    const [Team, setTeam] = useState(11);

    const handleAdd = () => {
        setTeam(Team + 1);
    }

    const handleReduce = () => {
        setTeam(Team - 1);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players:{Team}</h3>
            <button onClick={handleAdd}>Player Add</button>
            <button onClick={handleReduce}>Player Reduce</button>
        </div>
    )


}