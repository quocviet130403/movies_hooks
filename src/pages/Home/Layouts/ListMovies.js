import React from 'react';
import { Rate } from 'antd';
import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { get_movies } from '../../../redux/Actions/Actions';
import { useEffect } from 'react';
import { compareAsc, format } from 'date-fns';

function ListMovies() {
    const axios = require('axios');
    let listMovies = useSelector(state => state.MovieReducer.listMovies);
    const dispatch = useDispatch();
    const renderMovies = () => {
        if(listMovies == ''){
            return listMovies = [];
        }
        return listMovies.map((movie,index)=>{
            return <div className="p-4 md:w-1/4" key={index}>
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <a href=''>
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={movie.hinhAnh} alt="blog" />
                </a>
                <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-center"><a href='' className='text-black'>{movie.tenPhim}</a></h1>
                    <div className="flex items-center flex-wrap ">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            <Rate allowHalf defaultValue={4.5} />
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx={12} cy={12} r={3} />
                            </svg>1.2K
                        </span>
                    </div>
                </div>
            </div>
        </div>
        })
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim',
        })
            .then(function (response) {
            dispatch(get_movies(response.data.content));
        });
    
      return () => {
        
      }
    }, [])
    



    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {renderMovies()}
                </div>
            </div>
        </section>

    )
}

export default connect()(ListMovies)
