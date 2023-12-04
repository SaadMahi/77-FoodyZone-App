/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { ButtonPrimary } from '../../ui/Button';
import { useState } from 'react';

const Header = ({ setFilteredData, data }) => {
  const [selectedBtn, isSelectedBtn] = useState('all');

  const searchFood = (e) => {
    const searchedFood = e.target.value;

    if (searchedFood === '') {
      setFilteredData(null);
    }

    const filter = data?.filter((item) =>
      item.name.toLowerCase().includes(searchedFood.toLowerCase())
    );

    setFilteredData(filter);
  };

  // filter menu by heading buttons
  const filterMenuByBtn = (type) => {
    if (type === 'all') {
      setFilteredData(data);
      isSelectedBtn('all');
      return;
    }

    const filteredMenu = data?.filter((item) =>
      item.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilteredData(filteredMenu);
    isSelectedBtn(type);
  };

  // 4 buttons
  const filterBtns = [
    {
      name: 'All',
      type: 'all',
    },
    {
      name: 'Breakfast',
      type: 'breakfast',
    },
    {
      name: 'Lunch',
      type: 'lunch',
    },
    {
      name: 'Dinner',
      type: 'dinner',
    },
  ];

  return (
    <HeaderContainer>
      <div>
        <img src='/logo.svg' alt='logo' />
      </div>

      <Nav>
        {filterBtns.map((btn) => (
          <ButtonPrimary
            isSelected={selectedBtn === btn.type}
            onClick={() => filterMenuByBtn(btn.type)}
            key={btn.name}
          >
            {btn.name}
          </ButtonPrimary>
        ))}
      </Nav>

      <SearchInput>
        <input onChange={searchFood} placeholder='Search Food...' />
      </SearchInput>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: #323334;

  display: flex;
  justify-content: space-between;

  height: 150px;
  padding: 55px 120px 31px 120px;

  @media (0 < width < 800px) {
    flex-direction: column;

    padding: 20px 0px;

    div {
      align-self: center;
      order: -2;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: flex-end;
  gap: 10px;

  @media (0 < width < 800px) {
    align-self: center;
  }
`;

const SearchInput = styled.div`
  input {
    padding: 0.4rem;
    outline: none;
    background: transparent;
    color: white;
    border-radius: 5px;

    border: #f22f2f 1px solid;
  }

  @media (0 < width < 800px) {
    align-self: center;
    order: -1;
  }
`;
