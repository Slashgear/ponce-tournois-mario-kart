import React from 'react';
import { Row, Col, Hidden } from 'react-grid-system';
import _ from 'lodash';
import AddRaceBtn from '../admin/participations/AddRaceBtn';
import ParticipationChart from './ParticipationChart';
import ParticipationRace from './ParticipationRace';
import ParticipationGoal from './ParticipationGoal';

function Participation({
    participation,
    record = null,
    worst = null,
    average = null,
    tournamentName,
    nbMaxRaces,
    canAdd = true,
}) {
    const nbRaces = participation.Races.length;
    const nbPoints = _.sumBy(participation.Races, 'nbPoints');
    const averagePoints = nbRaces ? (nbPoints / nbRaces).toFixed(1) : 0;

    return (
        <>
            <Row>
                <Col xs={12}>
                    <div className="tournament__infos">
                        <Row>
                            <Col xs={12} sm={6} md={4}>
                                <div className="tournament__info">
                                    <label>Nombre de points</label>
                                    <h4>{nbPoints}</h4>
                                </div>
                            </Col>

                            <Col xs={12} sm={6} md={4}>
                                <div className="tournament__info">
                                    <label>Nombre de courses</label>
                                    <h4>{nbRaces}</h4>
                                </div>
                            </Col>

                            <Col xs={12} sm={6} md={4}>
                                <div className="tournament__info">
                                    <label>Moyenne de points</label>
                                    <h4>{averagePoints}</h4>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <ParticipationGoal
                    participation={participation}
                    canAdd={canAdd}
                    nbMaxRaces={nbMaxRaces}
                    nbPoints={nbPoints}
                />
            </Row>

            <div className="participation">
                <Hidden xs sm>
                    <ParticipationChart
                        record={record}
                        worst={worst}
                        average={average}
                        races={participation.Races}
                        tournamentName={tournamentName}
                        nbMaxRaces={nbMaxRaces}
                        goal={participation.goal}
                    />
                </Hidden>

                {participation.Races.length > 0 && (
                    <>
                        <Row className="participation__title">
                            <Col xs={3}>Position</Col>
                            <Col xs={3}>Points</Col>
                            <Col xs={6}>Circuit</Col>
                        </Row>
                    </>
                )}

                {participation.Races.map((race) => (
                    <ParticipationRace
                        key={race.id}
                        race={race}
                        canAdd={canAdd}
                    />
                ))}

                {canAdd &&
                    [...Array(nbMaxRaces - nbRaces)].map((i, index) => (
                        <AddRaceBtn
                            key={index}
                            participationId={participation.id}
                        />
                    ))}
            </div>
        </>
    );
}

export default Participation;