import './App.css';
import { printProps } from './printProps';
import { UserInfo } from './UserInfo';

function App() {
  const UserInfoWrapped = withUser(printProps(UserInfo), '123');

  return <UserInfoWrapped />;
}

export default App;
