import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  Row,
} from 'react-bootstrap';

import MessageInput from './MessageInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Grid>
        <Row>  
          <MessageInput xsHidden={true} sm={12} md={12} />
        </Row>
      </Grid>
    ),
    div,
  );
});
