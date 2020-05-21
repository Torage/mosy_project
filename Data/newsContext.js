import { createContext } from 'react';
import { Topnews } from '../Models/TopnewsModel';

export const NewsContext = createContext({dummyTopnews:Topnews,dummyTopews2:Topnews});
