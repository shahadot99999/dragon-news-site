import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {

    const cateGoryNews = useLoaderData();
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