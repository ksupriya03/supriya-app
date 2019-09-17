import React from 'react';
import Api from 'path/to/api';

export class CommentsListComtainer extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }
  componentDidMount() {
    Api.getComments().then(comments => {
      this.setState({ comments });
    });
  }
  render() {
    return <CommentsList comments={this.state.comments} />;
  }
}
//presentational component
export const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => (
        <div>{comment}</div>
      ))}
    </div>
  );
};
