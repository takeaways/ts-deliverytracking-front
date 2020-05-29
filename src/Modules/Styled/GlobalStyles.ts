import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const font =
	"'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', Dotum, '돋움', Helvetica, sans-serif";

// prettier-ignore
export const GlobalStyle = createGlobalStyle`
    ${reset}

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, 
    acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, 
    sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, 
    caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, 
    footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 13px;
        font-family: ${font};
        vertical-align: baseline;
        box-sizing: border-box;
    }

    html {
        overscroll-behavior-x: none;
        @media screen and (max-width: 768px) {
            width:768px;
	    }

        @media screen and (max-width: 360px) {
            width:360px;
        }
    }
    

    body {
        line-height: 1;
        -ms-user-select: none;
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        overscroll-behavior-x: none;
    }

    html,
    button,
    input,
    select,
    textarea {
        box-sizing: border-box;
        outline: none;
        font-size: 13px;
    }

    button {
        cursor: pointer;
    }

    .styling-scrollbar {
        // IE
        -ms-overflow-style: none;

        // Webkit
        scrollbar-width: auto;
        -webkit-overflow-scrolling: touch;

        scroll-behavior: smooth;
    }
`
