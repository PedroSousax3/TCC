import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home(props){

    const [infos, setInfos] = useState(props.location.state);

    return(
        <div>Home</div>
    )
}