/**
 * 메인 네비바 컨테이너
 */

import * as React from 'react';
import * as RouterDom from 'react-router-dom';
import * as Styles from './styles';

interface MyLinksTypes {
    id: number;
    path: string;
    label: string;
}

const HomeNavbar: React.FC<RouterDom.RouteComponentProps> = ({ location: { pathname } }) => {

    const myLinks = React.useRef<MyLinksTypes[]>([
        { id: 0, path: "/profile", label: "프로필" },
        { id: 1, path: "/account", label: "계정" },
        { id: 2, path: "/paymethod", label: "결제수단" },
        { id: 3, path: "/address", label: "배송지" },
        { id: 4, path: "/notification", label: "알림" },
    ]);

    return (
        <Styles.Container>
            <Styles.Navbar>
                {myLinks.current.map(link => (
                    <Styles.Item>
                        <Styles.Link to={link.path} className={(link.path === pathname ? "select" : "")}>{link.label}</Styles.Link>
                    </Styles.Item>
                ))}
            </Styles.Navbar>
        </Styles.Container>
    );
};

export default RouterDom.withRouter(HomeNavbar);
