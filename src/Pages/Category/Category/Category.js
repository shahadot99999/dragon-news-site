import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {

    const cateGoryNews = useLoaderData();
    useTitle("category");

    return (
        <div>
            <h2>This is a Category: {cateGoryNews.length}</h2>
            {
                cateGoryNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;