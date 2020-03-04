import React, { useEffect } from 'react';

// Action imports
import { getTopStories, getStory } from './../actions/actions';

// Redux imports
import { connect } from 'react-redux';

const Cards = (props) => {
  useEffect(() => {
    // props.getTopStories();
    props.getStory(22479178);
  }, [])

  return (
    <div>
      <h1>The cards:</h1>
      {
        props.articleIds.ids.map(articleId => (
          <div>{articleId}</div>
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