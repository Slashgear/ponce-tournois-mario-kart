import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-grid-system';
import _ from 'lodash';
import AddPlayerBtn from './AddPlayerBtn';
import { useSocket } from '../../utils/useSocket';
import PodiumSkeleton from './PodiumSkeleton';
import PodiumListItem from './PodiumListItem';

function Podium({ tournamentId, canAdd = false }) {
    const { socket } = useSocket();
    const [podia, setPodia] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    socket.off('addPodium').on('addPodium', (podium) => {
        setPodia(_.sortBy([...podia, podium], ['position', 'player']));
    });

    socket.off('editPodium').on('editPodium', (podium) => {
        const index = _.findIndex(podia, { id: podium.id });
        const newPodia = _.cloneDeep(podia);

        newPodia.splice(index, 1, podium);
        setPodia(_.sortBy(newPodia, ['position', 'player']));
    });

    useEffect(() => {
        socket.on('getPodium', (podia) => {
            setPodia(podia);
            setLoading(false);
        });

        socket.emit('getPodium', tournamentId, () => {
            setError('Impossible de récupérer le podium');
            setLoading(false);
        });

        return () => {
            socket.off('getPodium');
            socket.off('addPodium');
            socket.off('editPodium');
        };
    }, []);

    return loading ? (
        <PodiumSkeleton />
    ) : error ? (
        <Row justify="center">
            <Col xs="content">
                <div className="formMessage formMessagge__error">{error}</div>
            </Col>
        </Row>
    ) : (
        <>
            <Row>
                {podia.map((podium) => (
                    <PodiumListItem
                        key={podium.id}
                        podium={podium}
                        canAdd={canAdd}
                    />
                ))}
            </Row>
            {canAdd && <AddPlayerBtn tournamentId={tournamentId} />}
        </>
    );
}

export default Podium;
