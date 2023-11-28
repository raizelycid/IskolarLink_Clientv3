import React, { useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import './general.css';

const Stat_Card = ({ imgSrc, subtitle, numcount }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (numcount) {
            const end = parseInt(numcount.toString().replace(/[^\d]/g, ''), 10);
            if (count >= end || isNaN(end)) return;

            // Calculate the increment value as a tenth of the difference
            // between the current count and the end value
            const increment = Math.max(Math.ceil((end - count) / 10), 1);

            // Use requestAnimationFrame for a smoother and more optimized animation
            const frame = () => {
                setCount(previousCount => {
                    // Determine the next count
                    const nextCount = previousCount + increment;
                    // If the next count is less than the end, continue counting, else stop at the end number
                    return nextCount < end ? nextCount : end;
                });
            };

            const animationFrameId = window.requestAnimationFrame(frame);
            return () => window.cancelAnimationFrame(animationFrameId);
        }
    }, [count, numcount]); // Depend on count and numcount to trigger the effect

    return (
        <Col fluid="true">
            <Card className="align-items-center text-center rounded-0 shadow py-5" style={{ maxHeight: '40vh', maxWidth: '50vh' }}>
                <Card.Img variant="top" src={imgSrc} className="s1-icon" />
                <Card.Body className="pt-2">
                    <Card.Title className="Inter s1-title mb-1">{count}</Card.Title>
                    <Card.Subtitle className="Inter-normal s1-st">{subtitle}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Stat_Card;
