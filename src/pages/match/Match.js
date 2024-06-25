import './match.css'
import CardBox from "../../components/card/CardBox";
import {useEffect, useState} from "react";
import axios from "axios";
import MatchModal from "../../components/modal/MatchModal";


function Match() {

    const [data, setData] = useState();

    const getMatch = async () => {
        try {
            const response = await axios.get('http://localhost:8080/match')
            setData(response.data)
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        getMatch()
    }, [])
    return (
        <div>
            <div className="page-header">
                <h1>Partidas</h1>
            </div>
            <div className="modal-button">
                <MatchModal
                    data={getMatch}
                    modalTitle="Adicionar"
                />
            </div>
            <div className="match-content">
                    <CardBox data={data}/>
            </div>
        </div>

    )
}

export default Match
