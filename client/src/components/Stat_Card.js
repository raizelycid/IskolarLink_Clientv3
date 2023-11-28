import React, { useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import './general.css';

const Stat_Card = ({ imgSrc, subtitle, numcount }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Only start the animation if numcount is defined
        if (numcount) {
            // Remove any non-numerical characters (e.g., commas)
            const end = parseInt(numcount.toString().replace(/[^\d]/g, ''), 10);
            // If count has reached the final number or if end is NaN, do nothing
            if (count >= end || isNaN(end)) return;

            // Set up a timeout to increment the count
            const timer = setTimeout(() => {
                setCount(previousCount => {
                    // Determine the next count
                    const nextCount = previousCount + 1;
                    // If the next count is less than the end, continue counting, else stop at the end number
                    return nextCount < end ? nextCount : end;
                });
            }, 20); // Determines the speed of the count

            // Clean up the timeout when the component unmounts or when the count is updated
            return () => clearTimeout(timer);
        }
    }, [count, numcount]); // Depend on count and numcount to trigger the effect

    return (
        <Col>
            <Card className="align-items-center text-center rounded-0 shadow py-5" style={{ maxHeight: '40vh', maxWidth: '50vh' }}>
                <Card.Img variant="top" src={imgSrc} className="s1-icon" />
                <Card.Body className="pt-2">
                    <Card.Title className="Inter s1-title mb-1">{count.toLocaleString()}</Card.Title>
                    <Card.Subtitle className="Inter-normal s1-st">{subtitle}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Stat_Card;
