import * as React from 'react';
import * as Styles from './styles';

interface LoadingProps {
}

const Loading: React.FC<LoadingProps> = () => {
    return (
        <>
            <Styles.Container>
                {/* 페이크 상단바 */}
                {window.location.pathname !== '/' && <div className="topbar"/>}

                {/* 깜밖임 방지 30ms 초 후 로딩중 표시함 */}
                {setTimeout(() => {
                    return <div className="loading-text">LOADING...</div>;
                }, 30)}
            </Styles.Container>
        </>
    );
};

export default Loading;
