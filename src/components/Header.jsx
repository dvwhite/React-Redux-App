import React from 'react';
import styled from 'styled-components';

// Moment.js for time formatting
import moment from 'moment';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid gray;
  width: 100%;
  height: 8rem;
  padding-bottom: 1.5%;

  h1 {
    font-size: 3.5rem;
    font-family: Didot, serif;
    font-weight: bold;
    text-align: center;
    color: black;
  }

  span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  
  .date {
    margin-left: 25px;
    flex: 1;
  }

  .temp {
    text-align: right;
    margin-right: 25px;
    flex: 1;
  }
`

const Header = () => {
  return (
    <Wrapper>
      <span className='date'>{moment().format('MM/DD/YYYY')}</span>
      <h1>Top 10 Hacker News Articles</h1>
      <span className='temp'>57°</span>
    </Wrapper>
  );
}

export default Header;
