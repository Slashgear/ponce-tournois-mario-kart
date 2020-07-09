import React from 'react';
import moment from 'moment';
import { Row, Col } from 'react-grid-system';

function TournamentInfos({ tournament }) {
    const formatDate = (date) => {
        return moment(date).format('DD/MM/YYYY à HH:mm');
    };

    return (
        <>
            <h1 className="tournament__title">{tournament.name}</h1>

            <Row>
                <Col xs={12}>
                    <div className="tournament__infos">
                        <Row justify="between">
                            <Col xs="content">
                                <div className="tournament__info">
                                    <label>Date de début</label>
                                    <h4>{formatDate(tournament.startDate)}</h4>
                                </div>
                            </Col>

                            <Col xs="content">
                                <div className="tournament__info">
                                    <label>Date de fin</label>
                                    <h4>{formatDate(tournament.endDate)}</h4>
                                </div>
                            </Col>

                            <Col xs="content">
                                <div className="tournament__info">
                                    <label>Nombre de fleurs</label>
                                    <h4>{tournament.nbParticipants || '-'}</h4>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default TournamentInfos;
