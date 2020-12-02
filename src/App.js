import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Main from './pages/Main';
import About from './pages/About';
import Contacts from './pages/Contacts';
import { Menu, Layout } from 'antd';
import { HomeOutlined, ContactsOutlined, WechatOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/">Main</Link>
              </Menu.Item>
              <Menu.Item key="mail" icon={<ContactsOutlined />}>
              <Link to="/Contacts">Contacts</Link>
              </Menu.Item>
              <Menu.Item key="about" icon={<WechatOutlined />}>
              <Link to="/about">About</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/Contacts">
                <Contacts />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </Content>
      </Layout>
    </Router>
    </div>
  );
}

export default App;
