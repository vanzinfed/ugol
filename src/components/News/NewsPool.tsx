import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

// ИМПОРТ НОВОЙ НОВОСТИ

import { newsMeta as news21Meta } from './news/21';
import { newsMeta as news20Meta } from './news/20';
import { newsMeta as news19Meta } from './news/19';
import { newsMeta as news18Meta } from './news/18';
import { newsMeta as news17Meta } from './news/17';
import { newsMeta as news16Meta } from './news/16';
import { newsMeta as news15Meta } from './news/15';
import { newsMeta as news14Meta } from './news/14';
import { newsMeta as news13Meta } from './news/13';
import { newsMeta as news12Meta } from './news/12';
import { newsMeta as news11Meta } from './news/11';
import { newsMeta as news10Meta } from './news/10';
import { newsMeta as news9Meta } from './news/9';
import { newsMeta as news8Meta } from './news/8';
import { newsMeta as news7Meta } from './news/7';
import { newsMeta as news6Meta } from './news/6';
import { newsMeta as news5Meta } from './news/5';
import { newsMeta as news4Meta } from './news/4';
import { newsMeta as news3Meta } from './news/3';
import { newsMeta as news2Meta } from './news/2';
import { newsMeta as news1Meta } from './news/1';

// ДОБАВЛЕНИЕ НОВОСТЕЙ В ПУЛ
const newsItems = [news21Meta, news20Meta, news19Meta, news18Meta, news17Meta, news16Meta, news15Meta, news14Meta, news13Meta, news12Meta, news11Meta, news10Meta, news9Meta, news8Meta, news7Meta, news6Meta, news5Meta, news4Meta, news3Meta, news2Meta, news1Meta].sort((a, b) => b.id - a.id);

const NewsPool: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-40 md:mt-40 mt-[120px] max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Новости</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <Link 
              to={`/news/${news.id}`} 
              key={news.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              onClick={scrollToTop}
            >
              <div className="relative w-full aspect-[16/9]">
                <img 
                  src={news.imagePool} 
                  alt={news.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h2>
                <div className="text-sm text-gray-500 mb-3">{news.date}</div>
                <p className="text-gray-600 line-clamp-3">{news.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsPool;