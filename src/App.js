import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import TablesSaved from './TablesSaved';

function App() {
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // });
  return (
    <>
      <br />
      <br />
      <TablesSaved />
      <br />
      <br />
    </>
  );
}

export default App;
