/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { ButtonPrimary } from '../../ui/Button';
import { BASE_URL } from '../main/Main';

const SearchResult = ({ foodData }) => {
  return (
    <FoodContainer>
      {foodData?.map(({ name, image, price, text }) => {
        return (
          <Card key={name}>
            <div>
              <img src={BASE_URL + image} />
            </div>

            <Content>
              <h3 className='title'>{name}</h3>
              <p>{text}</p>
              <ButtonPrimary>${price.toFixed(2)}</ButtonPrimary>
            </Content>
          </Card>
        );
      })}
    </FoodContainer>
  );
};

const FoodContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 32px 20px;

  padding-top: 80px;
`;
const Card = styled.div`
  width: 400px;
  height: 200px;

  border-radius: 15px;

  display: flex;

  padding: 1rem;

  background-color: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    align-self: flex-end;
  }
`;

export default SearchResult;
