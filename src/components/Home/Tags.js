import React from 'react';

const Tags = ({ tags }) => (
  tags ?
  (
    <div className="tag-list">
      {/* Write your code here */}
    </div>
  )
  : (
    <div>Loading Tags...</div>
  )
);

export default Tags;
