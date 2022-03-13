import { BackTop, Menu } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useContext, useState } from 'react';
import { Context } from '../services/Context/Context';
import { useFetchObject } from '../services/Hooks/useFetch';
import Buttons from './Buttons';
import './Contents.css';
import Markdown from './Markdown';
import { SvgMenu } from './SvgIcon/SvgIcon';
import Title from './Title';

export default function Contents() {

    const { done, data } = useFetchObject(`notes/index.json`);
    const { setTitle, setMd } = useContext(Context);
    const onMenuClick = ({ keyPath }) => {
        setTitle(data[keyPath[1]][keyPath[0]]);
        setMd(`notes/files/${keyPath[0]}`);
    }

    const [siderCollapes, setSiderCollapes] = useState(true);

    return (
        <Layout className='content_container'>
            <Sider trigger={null}
                collapsible
                collapsed={siderCollapes}
                collapsedWidth={0}
                defaultCollapsed={true}>
                <Menu mode="inline"
                    className="content_sider"
                    onClick={onMenuClick}
                >
                    {done ?
                        Object.keys(data).map((gp) =>
                            <SubMenu key={gp} title={gp}>
                                {
                                    Object.keys(data[gp]).map((f) =>
                                        <Menu.Item key={f}>
                                            {data[gp][f]}
                                        </Menu.Item>)
                                }
                            </SubMenu>
                        )
                        :
                        <></>
                    }
                </Menu>
            </Sider>
            <Layout className='content_content'>
                <Header>
                    <div className='header'>
                        <Buttons onClick={() => setSiderCollapes(pre => !pre)} >
                            <SvgMenu />
                        </Buttons>
                        <div className='content_title_container'>
                            <Title />
                        </div>
                    </div>
                </Header>
                <Content>
                    <div id="content_block">
                        <Markdown />
                    </div>
                </Content>
            </Layout>

        </Layout>
    );
}