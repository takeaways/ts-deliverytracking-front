import * as React from "react";
import styled from "styled-components";
import {useToggleLayer, anchor} from "react-laag";
import Menubar from "./Menubar";

export interface DropdownProps {
    /** 메뉴 목록 */
    items: ItemsProps[];
    size?: "small" | "middle" | "large";
    width?: number;
}

export interface ItemsProps {
    /** 메뉴명 */
    name: string;
    /** 클릭시 */
    onClick: (props: any, name: string, index: number) => void;
}


/** 드롭다운 컨테이너 */
const Container = styled.span`
    display: inline-block;
`;

const Dropdown: React.FC<DropdownProps> = ({items, children, size, width}) => {
    const [element, toggleLayerProps] = useToggleLayer(
        (props) => props.isOpen && (
            <div {...props.layerProps}>
                <Menubar size={size ? size : "small"} width={width ? width : 168}>
                    {items.map((item: ItemsProps, key: number) => {
                        return (
                            <button
                                onClick={() => {
                                    props.close();
                                    item.onClick(props, item.name, key);
                                }}
                                key={key}
                            >
                                {item.name}
                            </button>
                        );
                    })}
                </Menubar>
            </div>
        ), {
            placement: {
                anchor: anchor.BOTTOM_RIGHT
                // ? anchor.BOTTOM_LEFT
                // : bottomRight
                // ? anchor.BOTTOM_RIGHT
                // : anchor.BOTTOM_CENTER,
            },
            closeOnOutsideClick: true
        });

    return (
        <Container>
            {element}
            < div onClick={toggleLayerProps.openFromMouseEvent}>
                <span className="icon" onClick={toggleLayerProps.close}>{children}</span>
            </div>
        </Container>
    );
};

export default Dropdown;