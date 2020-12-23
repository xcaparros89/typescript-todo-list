import {ThemeContext} from './Context';
import Dashboard from './Dashboard.js';

const Parent = () => (
  <ThemeContext.Provider value="dark-mode">
    <Dashboard />
  </ThemeContext.Provider>
);

export default Parent;