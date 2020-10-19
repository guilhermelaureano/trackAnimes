import {PageHeader} from 'antd';
import React from 'react';

const Head = props => {
  const {subTitle, title} = props;
  return (
    <PageHeader
      className="site-page-header"
      title={title}
      subTitle={subTitle}
    />
  );
};

export default Head;