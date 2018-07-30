import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Content = ({ data }) => (
  <h3>
    <Typography align="center">Welcome to this bolierplate app</Typography>
    <Typography>{data}</Typography>
  </h3>
);

Content.PropType = {
  data: PropTypes.string,
};
Content.defaultProps = {
  data: 'Where is my data',
};

export default Content;
