import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import useTitle from '../../../hooks/useTitle';



const News = () => {
    const news = useLoaderData();
    useTitle('News Details')

    console.log(news);
    const { title, details, image_url, category_id } = news;
    return (

        <Card >
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All news in this category.</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;  