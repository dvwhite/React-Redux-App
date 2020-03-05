import React from 'react';
import styled from 'styled-components';

// Styled components
const Card = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  width: 380px;
  margin: 2%;
  padding: 2%;
`

const Headline = styled.a`
  font-size: 25px;
  font-family: Didot, serif;
  text-decoration: none;
  color: inherit;
`

const Author = styled.div`
  margin-top: 1%;
  display: flex;
`

const AvatarCircular = styled.div`
  width: 40px;
  height: 40px;
  background-color: green;
  text-align: center;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;

  .initials {
    position: relative;
    text-align: center;
    line-height: 40px;
    width: 40px;
    height: 40px;
    font-size: 30px;
    color: #fff;
    font-family: "Courier New", monospace;
    font-weight: bold;
  }
`

const Story = ({data}) => {
  return (
    <Card>
      <Headline href={data.url}>{data.title}</Headline>
      <Author>
        <div className='img-container'>
          <AvatarCircular>
            <span className='initials'>{data.by?.charAt(0).toUpperCase()}</span>
          </AvatarCircular>
        </div>
        <span>{data.by}</span>
      </Author>
    </Card>
  )
}

export default Story;