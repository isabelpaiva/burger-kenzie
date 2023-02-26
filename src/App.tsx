import Router from './routes';
import { GlobalStyles } from './styles/global';
import { UserProvider } from './providers/UserContext';

const App = () => (
  <div>
  <UserProvider>
    <GlobalStyles />
    <Router />
  </UserProvider>
  </div>
);

export default App;