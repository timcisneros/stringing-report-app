import React from 'react';
import { Message } from 'semantic-ui-react';

export default function HelpMessage({ header, content }) {
  return (
    <>
      <Message info icon="exclamation" header={header} content={content} />
    </>
  );
}
