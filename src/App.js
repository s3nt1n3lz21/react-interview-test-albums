import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AlbumSearchPage from './pages/AlbumSearchPage';
import AlbumDetailsPage from './pages/AlbumDetailsPage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AlbumSearchPage />
        </Route>
        <Route path='/details'>
          <AlbumDetailsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;