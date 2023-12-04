/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import ErrorPage from '../../ui/ErrorPage';
import SearchResult from '../searchResult/SearchResult';

// Fetch food data
export const BASE_URL = 'http://localhost:9000';

const Main = ({ filteredData, setFilteredData, setData }) => {
  const [error, setError] = useState(null);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    const fetchFoodData = async () => {
      isLoading(true);
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setFilteredData(data);
        setData(data);
        isLoading(false);
      } catch (error) {
        isLoading(false);
        setError(true);
      }
    };

    fetchFoodData();
  }, [setData, setFilteredData]);

  if (loading) return <Spinner />;
  if (error)
    return (
      <ErrorPage>
        We are sorry, but it seems there was an error fetching our menu data
      </ErrorPage>
    );

  //   //console.log(data);

  return (
    <MainStyle>
      <SearchResult foodData={filteredData} />
    </MainStyle>
  );
};

const MainStyle = styled.main`
  background: url('/bg.png');
  background-size: cover;
  min-height: calc(100vh - 150px);
`;

export default Main;
