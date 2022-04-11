import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Paginator from 'react-hooks-paginator';
import { BASE_URL } from './utils/config';

const Paginate = () => {

    const pageLimit = 10;

    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        const getPopularBooks = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/catalogue/getBooks?limit=100`);
                setData(response.data.results)
            } catch (error) {
                return error.message
            }
        }
        getPopularBooks()
    }, []);

    useEffect(() => {
        setCurrentData(data.slice(offset, offset + pageLimit));
    }, [offset, data]);

    return (
        <div>
            <ul>
                {
                    currentData.map((data, index) => {
                        return (
                            <li key={index}>{data.title}</li>
                        )
                    })
                }
            </ul>
            <Paginator
                pagePrevText={<FontAwesomeIcon icon={faArrowLeft} />}
                pageNextText={<FontAwesomeIcon icon={faArrowRight} />}
                totalRecords={data.length}
                pageLimit={pageLimit}
                pageNeighbours={2}
                setOffset={setOffset}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default Paginate