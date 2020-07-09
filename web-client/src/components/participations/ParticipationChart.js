import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

function ParticipationChart({ record, races, tournamentName, nbMaxRaces }) {
    let sum;
    let sum2;

    const data = {
        labels: [...Array(nbMaxRaces).keys()],
        datasets: [
            {
                label: tournamentName,
                fill: false,
                borderColor: '#ff56a9',
                datalabels: {
                    align: 'start',
                    color: '#ff56a9',
                    font: {
                        family: 'Nunito',
                    },
                },
                data: races.map((race) => (sum = (sum || 0) + race.nbPoints)),
            },
        ],
    };

    const options = {
        legend: {
            labels: {
                fontfamily: 'Nunito',
            },
        },
        scales: {
            xAxes: [
                {
                    display: false,
                },
            ],
            yAxes: [
                {
                    display: false,
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 15 * nbMaxRaces,
                    },
                },
            ],
        },
        elements: {
            point: {
                radius: 0,
            },
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
            },
        },
    };

    if (record) {
        data.datasets.push({
            label: 'Record',
            fill: false,
            borderColor: '#424242',
            datalabels: {
                align: 'end',
                color: '#424242',
                font: {
                    family: 'Nunito',
                },
            },
            data: record.Races.map(
                (race) => (sum2 = (sum2 || 0) + race.nbPoints)
            ),
        });
    }

    return (
        <div className="participation__chart">
            <Line data={data} options={options} redraw />
        </div>
    );
}

export default ParticipationChart;