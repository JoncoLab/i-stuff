import React from "react"
import {Item} from "./Item";

export class Content extends React.Component {
    render() {
        return (
            <div className="section content">
                <Item
                    name={"Front-end developer"}
                    category={"Web-development"}
                    location={"Varosh, Ukraine"}
                    date={"06.06.2018"}
                    description={"Shrimpfish, beaked salmon anglerfish, walleye archerfish, \"pricklefish, sandroller snake eel yellowfin grouper.\" Lefteye flounder tang oldwife, rough sculpin priapumfish grunt sculpin, Blind goby frogfish flier. Deepwater cardinalfish; threadfin bream Raccoon butterfly fish pipefish limia. Sand tilefish, \"crocodile icefish king-of-the-salmon, slimy sculpin,\" white marlin streamer fish; barramundi?"}
                />
                <Item
                    name={"Back-end"}
                    category={"Web-development"}
                    location={"Texas"}
                    date={"06.66.6666"}
                    description={"Alexis Texas"}
                />
                <Item
                    name={"QA"}
                    category={"IT/Software Development"}
                    location={"Poland"}
                    date={"00.00.0001"}
                    description={"Слвавімо його!"}
                />
            </div>
        )
    }
}