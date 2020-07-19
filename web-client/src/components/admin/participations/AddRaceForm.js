import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useTracks } from '../../../utils/useTracks';
import { useSocket } from '../../../utils/useSocket';
import { getNbPointsFromPosition } from '../../../utils/utils';
import RaceForm from './RaceForm';

function AddRaceForm({ closeForm, participationId }) {
    const { tracks } = useTracks();
    const { socket } = useSocket();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        socket.on('closeAddRaceForm', () => closeForm());

        return () => socket.off('closeAddRaceForm');
    }, []);

    const onSubmit = ({ position, trackName }) => {
        const track = _.find(tracks, ['name', trackName]);

        if (track) {
            setLoading(true);

            socket.emit(
                'addRace',
                {
                    position: parseInt(position),
                    nbPoints: getNbPointsFromPosition(position),
                    trackId: track.id,
                    participationId,
                },
                (err) => {
                    setError(err);
                    setLoading(false);
                }
            );
        } else {
            setError("Ce circuit n'existe pas");
        }
    };

    return (
        <RaceForm
            onSubmit={onSubmit}
            error={error}
            loading={loading}
            closeForm={closeForm}
        />
    );
}

export default AddRaceForm;
