import { createBrowserRouter } from 'react-router-dom';
import ChineseMedicine from '@/pages/chineseMedicine';

const routers = createBrowserRouter([
  {
    path: '/',
    element: ChineseMedicine(),
  },
]);

export default routers;
