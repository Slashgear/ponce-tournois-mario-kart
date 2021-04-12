import { Row, Col } from 'react-grid-system';
import Skeleton from 'react-loading-skeleton';

function TournamentFormSkeleton() {
    return (
        <Row justify="center">
            <Col xs={12} md={10} lg={6}>
                <h1>
                    <Skeleton width="18rem" />
                </h1>

                {[...Array(5)].map((i, index) => (
                    <div className="inputWrapper" key={index}>
                        <Skeleton width="5rem" />
                        <Skeleton className="inputSkeleton" width="80%" />
                    </div>
                ))}

                <Row justify="end">
                    <Col xs="content">
                        <Skeleton className="btnSkeleton" width="5rem" />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default TournamentFormSkeleton;
