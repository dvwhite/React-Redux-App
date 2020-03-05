import React, { useEffect } from 'react';
import styled from 'styled-components';

// Action imports
import { getTopStories, getStory } from '../actions/actions';

// Redux imports
import { connect } from 'react-redux';

// Components
import Story from './Story';

// Styled components
const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

const Stories = (props) => {
  // Fetch all 500 top articleIds and store them in state
  useEffect(() => {
    props.getTopStories();
  }, [])

  // Send an API call for each article in the articleIds array in state
  // Push the results to the articles array
  useEffect(() => {
    const stories = props.articleIds.ids;
    const cursor = props.articleIds.cursor;
    const size = props.articleIds.size;
    const nthStories = stories.slice(cursor, cursor + size);
    nthStories.map(storyId => {
      props.getStory(storyId);
    })
  }, [props.articleIds.ids])

  return (
    <div>
      <h1>Top 10 Hacker News Articles</h1>
      <Cards>
        {
          props.articles
            .sort((article1, article2) => article1.id > article2.id ? -1: 1)
            .map(article => (
              <Story data={article} key={article.id} />
            ))
        }
      </Cards>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articleIds: state.articleIds,
    articles: state.articles
  }
}

export default connect(mapStateToProps, { getTopStories, getStory })(Stories);