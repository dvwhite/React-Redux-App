import React, { useEffect } from 'react';

// Action imports
import { getTopStories, getStory } from './../actions/actions';

// Redux imports
import { connect } from 'react-redux';

const Cards = (props) => {
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
      <h1>The cards:</h1>
      {
        props.articles.map(article => (
          <div>
            <a href={article.url}>{article.title}</a>
            <h3>By: {article.by}</h3>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articleIds: state.articleIds,
    articles: state.articles
  }
}

export default connect(mapStateToProps, { getTopStories, getStory })(Cards);