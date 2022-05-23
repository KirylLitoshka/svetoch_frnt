import React from 'react';
import { useMatch, useParams } from 'react-router-dom';

const Test = () => {
  const params = useParams()
  const temp = useMatch("")

  return (
      <div>
        Some test value
      </div>
  );
};

export default Test;