import React from 'react';

class MortgageCalc extends React.Component {
   render() {
    return (
      <div>
        import React from 'react';
        const MortgageCalc = () =&gt; {'{'}
        const style1 = `
        @charset "UTF-8";
        @font-face {'{'}
        font-family: Calibre-Regular2;
        font-display: optional;
        src: url("https://www.bankrate.com/content/fonts/CalibreWeb-Regular.woff2") format("woff2"), url("https://www.bankrate.com/content/fonts/CalibreWeb-Regular.woff") format("woff")
        {'}'}
        @font-face {'{'}
        font-family: Calibre-Semibold2;
        font-display: optional;
        src: url("https://www.bankrate.com/content/fonts/CalibreWeb-Semibold.woff2") format("woff2"), url("https://www.bankrate.com/content/fonts/CalibreWeb-Semibold.woff") format("woff")
        {'}'}`
        const style2 = `
        .preampjs [data-preamp],
        .fusejs [data-fuse] {'{'}
        visibility: hidden !important
        {'}'}`
        return (
        <style dangerouslySetInnerHTML={{__html: "{style1}" }} />
        <meta name="livedate" content={20131017} />
        {/* <link rel="canonical" href="https://www.bankrate.com/calculators/mortgages/mortgage-calculator.aspx" /> */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin />
        <link rel="preconnect" href="https://p.typekit.com" crossOrigin />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin />
        <link rel="preconnect" href="https://sdk.amazonaws.com" crossOrigin />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "{style2}" }} />
        <style dangerouslySetInnerHTML={{__html: "\n        #mortgage-calculators-wrapper {\n            min-height: 1013px\n        }\n\n        h1 {\n            font-size: 1.9rem;\n            line-height: 1.5\n        }\n\n        .text-link {\n            font-size: 1rem !important;\n            line-height: 1.5 !important\n        }\n\n        p {\n            font-family: Calibre-Regular2, Arial, sans-serif !important;\n            line-height: 1.5 !important;\n            visibility: visible !important\n        }\n\n        h1 {\n            font-family: Calibre-Semibold2, Arial, sans-serif !important;\n            font-size: 1.9rem !important;\n            line-height: 1.5 !important;\n            visibility: visible !important\n        }\n\n        body {\n            margin: 0 !important\n        }\n\n        .br-header {\n            z-index: 20;\n            background-color: #fff;\n            margin: 0;\n            position: relative\n        }\n\n        .br-header__overlay {\n            z-index: 20;\n            background: rgba(21, 21, 21, .35);\n            bottom: 0;\n            display: none;\n            left: 0;\n            position: fixed;\n            right: 0;\n            top: 0\n        }\n\n        .br-header__top-bar {\n            padding: 0 .88888889rem;\n            height: 3.11111111rem;\n            background-color: #fff;\n            border-bottom: 1px solid #b1b7c5;\n            display: flex;\n            justify-content: space-between;\n            align-items: center\n        }\n\n        .br-header__hamburger {\n            margin-right: .88888889rem;\n            height: 1.55555556rem;\n            width: 1.55555556rem;\n            -webkit-appearance: none;\n            appearance: none;\n            background: none;\n            border: none;\n            padding: 0;\n            outline: none\n        }\n\n        .br-header__hamburger__bars {\n            width: 1.22222222rem\n        }\n\n        .br-header__hamburger__bars,\n        .br-header__hamburger__bars:after,\n        .br-header__hamburger__bars:before {\n            height: .11111111rem;\n            background-color: #151515;\n            position: relative\n        }\n\n        .br-header__hamburger__bars:after,\n        .br-header__hamburger__bars:before {\n            content: \"\";\n            display: block;\n            position: absolute\n        }\n\n        .br-header__hamburger__bars:before {\n            width: 1rem;\n            top: -.33333333rem\n        }\n\n        .br-header__hamburger__bars:after {\n            width: .66666667rem;\n            top: .33333333rem\n        }\n\n        .br-header__logo {\n            height: 1.11111111rem;\n            width: 5.55555556rem;\n            align-items: center;\n            align-self: center;\n            display: flex;\n            margin-right: auto\n        }\n\n        .br-header__logo svg {\n            height: 100%;\n            width: 100%\n        }\n\n        .br-header__right-nav-links {\n            display: flex;\n            height: 100%\n        }\n\n        .br-header__sign-in-button-container {\n            display: none;\n            flex-direction: row\n        }\n\n        .br-header__create-account-button {\n            font-size: .77777778rem;\n            letter-spacing: .02777778rem;\n            padding: .66666667rem .88888889rem;\n            margin-right: .44444444rem;\n            max-height: 2.77777778rem;\n            background-color: #fff;\n            border: 2px solid #006afe;\n            border-radius: 4px;\n            line-height: 1.5;\n            color: #006afe;\n            font-family: CircularStd-Bold, Arial, sans-serif;\n            font-weight: 600;\n            display: inline-block;\n            align-self: center;\n            text-decoration: none\n        }\n\n        .br-header__create-account-button:after,\n        .br-header__create-account-button:before {\n            content: \"\";\n            display: block;\n            height: 0;\n            width: 0\n        }\n\n        .br-header__create-account-button:before {\n            margin-bottom: -.28571em\n        }\n\n        .br-header__create-account-button:after {\n            margin-top: -.42857em\n        }\n\n        .br-header__sign-in-button {\n            display: none;\n            font-size: .77777778rem;\n            letter-spacing: .02777778rem;\n            padding: .66666667rem .88888889rem;\n            max-height: 2.77777778rem;\n            background-color: #fff;\n            border-radius: 4px;\n            line-height: 1.5;\n            color: #006afe;\n            font-family: CircularStd-Bold, Arial, sans-serif;\n            font-weight: 600;\n            align-self: center;\n            text-decoration: none\n        }\n\n        .br-header__sign-in-button {\n            display: inline-block\n        }\n\n        .br-header__sign-in-button:after,\n        .br-header__sign-in-button:before {\n            content: \"\";\n            display: block;\n            height: 0;\n            width: 0\n        }\n\n        .br-header__sign-in-button:before {\n            margin-bottom: -.28571em\n        }\n\n        .br-header__sign-in-button:after {\n            margin-top: -.42857em\n        }\n\n        .br-header__global-nav-toggle {\n            padding: .44444444rem 0 .44444444rem .44444444rem;\n            -webkit-appearance: none;\n            appearance: none;\n            background-color: transparent;\n            border: none;\n            color: #151515;\n            fill: #151515;\n            outline: none\n        }\n\n        .br-header__global-nav-toggle .icon.\\--icon-sm {\n            height: 1.33333333rem;\n            width: 1.33333333rem\n        }\n\n        .br-header__global-nav-toggle .icon.\\--magnifying-glass {\n            display: block\n        }\n\n        .br-header__global-nav-toggle .icon.\\--x-button {\n            display: none\n        }\n\n        .br-header__global-search-filter {\n            background-color: #f3f4f8;\n            height: 0;\n            opacity: 0;\n            overflow: hidden;\n            padding: 0;\n            position: absolute;\n            top: 100%;\n            width: 100%;\n            z-index: -1\n        }\n\n        .br-header__search-form {\n            max-width: 47.77777778rem;\n            margin: 0 auto\n        }\n\n        .br-header__search-input {\n            font-size: .88888889rem;\n            height: 2.66666667rem;\n            padding: .44444444rem .88888889rem;\n            background-color: #fff;\n            border: 1px;\n            border-color: #515260;\n            border-radius: 4px;\n            border-style: solid;\n            color: #151515;\n            display: block;\n            font-family: CircularStd-Book, Arial, sans-serif;\n            font-style: normal;\n            font-weight: 400;\n            width: 100%;\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0;\n            border-right: none\n        }\n\n        .br-header__search-submit {\n            padding: .44444444rem;\n            min-width: 3.33333333rem;\n            -webkit-appearance: none;\n            appearance: none;\n            background-color: #006afe;\n            color: #fff;\n            fill: #fff;\n            height: 100%;\n            width: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            border: none;\n            border-top-right-radius: 4px;\n            border-bottom-right-radius: 4px\n        }\n\n        .br-header__auth-dropdown-toggle {\n            padding: 0 .88888889rem;\n            border: 4px solid transparent;\n            border-right: none;\n            border-left: none;\n            background: none;\n            -webkit-appearance: none;\n            appearance: none;\n            display: none;\n            height: 100%\n        }\n\n        .br-header__auth-dropdown {\n            border-bottom-right-radius: .44444444rem;\n            border-bottom-left-radius: .44444444rem;\n            box-shadow: 0 0 1px 0 rgba(21, 21, 21, .1), 0 2px 8px -1px rgba(21, 21, 21, .2);\n            z-index: -5;\n            background-color: #fff;\n            position: absolute;\n            top: 100%;\n            width: 100%;\n            overflow: hidden;\n            display: none;\n            right: 0\n        }\n\n        .br-header-nav__categories,\n        .br-header-nav__category-flyout {\n            max-width: 22.22222222rem;\n            min-width: 13.33333333rem;\n            top: 2.5rem;\n            list-style: none;\n            background: #fff;\n            display: none;\n            left: 0;\n            margin: 0;\n            height: 100%;\n            min-height: calc(100vh - 45px);\n            overflow: auto;\n            position: absolute;\n            width: 85%;\n            top: 100%\n        }\n\n        .br-header-nav__category-flyout {\n            content-visibility: hidden\n        }\n\n        .\\+visually-hidden {\n            border: 0;\n            clip: rect(0 0 0 0);\n            height: 1px;\n            margin: -1px;\n            overflow: hidden;\n            padding: 0;\n            position: absolute;\n            width: 1px\n        }\n\n        .br-auth__nav-wrapper {\n            display: none\n        }\n\n        .br-auth__nav {\n            z-index: 16\n        }\n\n        .br-auth__nav-wrapper {\n            display: none\n        }\n\n        .br-auth__nav-wrapper {\n            display: block\n        }\n\n        .br-auth__nav {\n            position: fixed;\n            bottom: 0;\n            width: 100%;\n            box-shadow: 0 -4px 3px rgba(21, 21, 21, .1)\n        }\n\n        html {\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box\n        }\n\n        *,\n        :after,\n        :before {\n            -webkit-box-sizing: inherit;\n            box-sizing: inherit\n        }\n\n        html {\n            font-family: sans-serif;\n            line-height: 1.15;\n            -ms-text-size-adjust: 100%;\n            -webkit-text-size-adjust: 100%\n        }\n\n        body {\n            margin: 0\n        }\n\n        header,\n        main,\n        nav {\n            display: block\n        }\n\n        a {\n            background-color: transparent;\n            -webkit-text-decoration-skip: objects\n        }\n\n        strong {\n            font-weight: inherit;\n            font-weight: bolder\n        }\n\n        svg:not(:root) {\n            overflow: hidden\n        }\n\n        button,\n        input {\n            font: inherit;\n            margin: 0\n        }\n\n        button,\n        input {\n            overflow: visible\n        }\n\n        button {\n            text-transform: none\n        }\n\n        [type=submit],\n        button {\n            -webkit-appearance: button\n        }\n\n        ::-webkit-input-placeholder {\n            color: inherit;\n            opacity: .54\n        }\n\n        body,\n        h1,\n        h2,\n        h3,\n        ol,\n        p,\n        ul {\n            margin: 0;\n            padding: 0\n        }\n\n        h1,\n        h2,\n        h3,\n        ol,\n        p,\n        ul {\n            margin-bottom: 1.5rem\n        }\n\n        ol,\n        ul {\n            margin-left: 1.5rem\n        }\n\n        html {\n            font-size: 1.125em;\n            line-height: 1.5;\n            min-height: 100%;\n            overflow-y: scroll\n        }\n\n        h2 {\n            font-size: 2.88889rem;\n            line-height: 1.25\n        }\n\n        h3 {\n            font-size: 2rem\n        }\n\n        h3 {\n            line-height: 1.5\n        }\n\n        a {\n            color: #202020;\n            text-decoration: none\n        }\n\n        .list-bare {\n            list-style: none;\n            margin-left: 0\n        }\n\n        .box {\n            padding: 1.5rem;\n            display: block;\n            position: relative\n        }\n\n        .box.\\--sm {\n            padding: 1.11111rem\n        }\n\n        .box>:last-child {\n            margin-bottom: 0\n        }\n\n        .grid {\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n            margin: 0;\n            padding: 0\n        }\n\n        .grid-cell {\n            -webkit-box-sizing: inherit;\n            box-sizing: inherit;\n            -ms-flex-preferred-size: 100%;\n            flex-basis: 100%;\n            min-width: 0\n        }\n\n        .page-wrapper {\n            max-width: 66rem;\n            padding-left: .77778rem;\n            padding-right: .77778rem;\n            margin-left: auto;\n            margin-right: auto\n        }\n\n        .page-wrapper:after {\n            clear: both !important;\n            content: \"\" !important;\n            display: block !important\n        }\n\n        .button {\n            letter-spacing: .05556rem;\n            padding-top: .55556rem;\n            padding-right: .77778rem;\n            padding-bottom: .55556rem;\n            padding-left: .77778rem;\n            -webkit-appearance: none;\n            background-color: transparent;\n            border-color: transparent;\n            border-radius: 0;\n            border-style: solid;\n            border-width: 0;\n            color: inherit;\n            display: inline-block;\n            font: inherit;\n            line-height: normal;\n            margin: 0;\n            overflow: visible;\n            text-align: center;\n            text-decoration: none;\n            vertical-align: middle;\n            white-space: normal\n        }\n\n        .button.\\--primary {\n            font-size: .88889rem;\n            line-height: 1.6875;\n            background-color: #006afe;\n            color: #fff;\n            font-family: Calibre-Semibold2, Arial, sans-serif !important;\n            text-transform: uppercase\n        }\n\n        .icon {\n            width: 1.5rem;\n            height: 1.5rem;\n            color: inherit;\n            display: inline-block;\n            position: relative;\n            vertical-align: middle\n        }\n\n        .icon__glyph {\n            display: block;\n            fill: currentColor;\n            height: 100%;\n            vertical-align: middle;\n            width: 100%\n        }\n\n        .form-input {\n            font-size: 1rem;\n            line-height: 1.75;\n            min-height: 2.61111rem;\n            padding-top: .38889rem;\n            padding-right: .77778rem;\n            padding-bottom: .38889rem;\n            padding-left: .77778rem;\n            border: 1px;\n            border-color: #cfcfd4;\n            border-radius: 0;\n            border-style: solid;\n            display: block;\n            font-family: Calibre-Semibold2, Arial, sans-serif !important;\n            width: 100%\n        }\n\n        .breadcrumb {\n            margin-bottom: .38889rem;\n            list-style: none;\n            margin-left: 0\n        }\n\n        .breadcrumb__item-container {\n            display: inline-block;\n            position: relative\n        }\n\n        .breadcrumb__item-container+.breadcrumb__item-container:before {\n            background-size: .38889rem;\n            height: .38889rem;\n            width: .77778rem;\n            background-image: url(https://www.bankrate.com/content/svg/caret-small-right.svg);\n            background-position: 50%;\n            background-repeat: no-repeat;\n            background-size: contain;\n            content: \"\";\n            display: inline-block;\n            vertical-align: baseline\n        }\n\n        .breadcrumb__item {\n            font-size: .77778rem;\n            line-height: 1.92857;\n            color: #006afe;\n            font-family: Calibre-Regular2, Arial, sans-serif !important;\n            text-transform: none\n        }\n\n        .breadcrumb__item.\\--is-active {\n            color: #6f707b\n        }\n\n        .text-link {\n            font-size: 1rem;\n            line-height: 1.5;\n            color: #006afe;\n            text-decoration: underline\n        }\n\n        .heading-secondary {\n            color: #202020;\n            font-family: Calibre-Semibold2, Arial, sans-serif !important\n        }\n\n        .size-fit {\n            -ms-flex-preferred-size: auto !important;\n            flex-basis: auto !important\n        }\n\n        .size-fill {\n            -ms-flex: 1 1 0% !important;\n            flex: 1 1 0% !important;\n            -ms-flex-preferred-size: 0% !important;\n            flex-basis: 0% !important\n        }\n\n        .size-fill {\n            -webkit-box-flex: 1 !important\n        }\n\n        #csstyle .\\+heading-beta {\n            font-size: 2.88889rem;\n            line-height: 1.25\n        }\n\n        #csstyle .\\+pd-left-md {\n            padding-left: 1.88889rem\n        }\n\n        #csstyle .\\+mg-top-lg {\n            margin-top: 2.27778rem\n        }\n\n        #csstyle .\\+mg-top-sm {\n            margin-top: 1.11111rem\n        }\n\n        #csstyle .\\+mg-bottom-sm {\n            margin-bottom: 1.11111rem\n        }\n\n        #csstyle .\\+mg-bottom-xs {\n            margin-bottom: .77778rem\n        }\n\n        #csstyle .\\+mg-bottom-none {\n            margin-bottom: 0\n        }\n\n        #csstyle .\\+display-inline-block {\n            display: inline-block\n        }\n\n        #csstyle .\\+bg-white {\n            display: none;\n            visibility: hidden;\n            background-color: #fff\n        }\n\n        #csstyle .\\+bg-gray-lightest {\n            background-color: #f0f0f2\n        }\n\n        #csstyle .\\+visually-hidden {\n            border: 0;\n            clip: rect(0 0 0 0);\n            height: 1px;\n            margin: -1px;\n            overflow: hidden;\n            padding: 0;\n            position: absolute;\n            width: 1px\n        }\n    " }} />
        <link type="text/css" rel="stylesheet" href="app.a8973248.css" media="print" onload="this.media='all'; this.onload=null;" />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n        .elf__dialog[data-v-4400b218] {\n            position: fixed;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            z-index: 99999;\n            overflow-x: hidden;\n            overflow-y: auto;\n            min-width: 100%;\n            max-height: 100vh;\n            -webkit-overflow-scrolling: initial;\n            display: flex;\n            align-items: center\n        }\n    \n        .elf__dialog .elf__dialog-panel[data-v-4400b218] {\n            z-index: 3800;\n            position: relative;\n            padding: 0;\n            transition: margin-top .25s ease-in-out;\n            border: 3px solid hsla(0, 0%, 100%, .2);\n            border-radius: 8px;\n            height: 100%;\n            width: 100%;\n            display: flex;\n            overflow-y: scroll;\n            -webkit-overflow-scrolling: touch\n        }\n    \n        .elf__dialog .elf__dialog-panel[data-v-4400b218]::-webkit-scrollbar {\n            all: inherit\n        }\n    \n        .elf__dialog .elf__dialog-panel button.elf__close-dialog[data-v-4400b218] {\n            background-color: transparent;\n            box-shadow: 0 0 0 4px transparent;\n            border-radius: 0;\n            cursor: pointer;\n            color: inherit;\n            position: absolute;\n            top: 20px;\n            z-index: 1000;\n            right: 20px;\n            border: none;\n            -webkit-appearance: none;\n            -moz-appearance: none;\n            appearance: none;\n            width: 30px;\n            height: 30px;\n            display: flex;\n            align-items: center;\n            justify-content: center\n        }\n    \n        .elf__dialog .elf__dialog-panel .elf__dialog-body[data-v-4400b218] {\n            flex-grow: 1;\n            align-items: center;\n            justify-content: center;\n            display: flex;\n            position: relative;\n            z-index: 1;\n            background-color: #f5f6f8;\n            border-radius: 6px;\n            padding: 0\n        }\n    \n        .elf__dialog .elf__dialog-overlay[data-v-4400b218] {\n            display: block;\n            position: fixed;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            background-color: #4a4a4a;\n            z-index: 3500\n        }\n    \n        @media(min-width:640px) {\n            .elf__dialog .elf__dialog-panel[data-v-4400b218] {\n                margin-left: auto;\n                margin-right: auto;\n                max-width: 92%;\n                height: 92vh;\n                overflow: auto\n            }\n        }\n    " }} />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n        .elf__circular-loader {\n            height: 7.11111rem;\n            width: 7.11111rem;\n            position: relative;\n            display: inline-block\n        }\n    \n        .elf__circular-loader .elf__visually-hidden {\n            border: 0;\n            clip: rect(0 0 0 0);\n            height: 1px;\n            margin: -1px;\n            overflow: hidden;\n            padding: 0;\n            position: absolute;\n            width: 1px\n        }\n    \n        .elf__circular-loader__content {\n            margin: 0 auto;\n            position: relative;\n            z-index: 0\n        }\n    \n        .elf__circular-loader__content:before {\n            content: \"\";\n            display: block;\n            padding-top: 100%\n        }\n    \n        .elf__circular-loader__spinner {\n            -webkit-animation: rotate 2s linear infinite;\n            animation: rotate 2s linear infinite;\n            height: 100%;\n            transform-origin: center center;\n            width: 100%;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            margin: auto;\n            overflow: hidden\n        }\n    \n        .elf__circular-loader__spinner-track {\n            stroke: #e6eeff;\n            stroke-width: 3\n        }\n    \n        .elf__circular-loader__spinner-dash {\n            -webkit-animation: dash 1.5s ease-in-out infinite;\n            animation: dash 1.5s ease-in-out infinite;\n            stroke: #006afe;\n            stroke-dasharray: 1, 200;\n            stroke-dashoffset: 0;\n            stroke-linecap: round;\n            stroke-width: 3;\n            z-index: 0\n        }\n    \n        .elf__circular-loader__icon-container {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 50%;\n            transform: translate(-50%, -50%);\n            z-index: 0;\n            text-align: center\n        }\n    \n        .elf__circular-loader__icon {\n            width: 50%;\n            height: 50%;\n            display: block;\n            margin: auto;\n            position: relative;\n            color: inherit\n        }\n    \n        .elf__circular-loader .elf__icon__glyph {\n            overflow: hidden;\n            display: block;\n            fill: currentColor;\n            height: 100%;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            width: 100%\n        }\n    \n        @-webkit-keyframes rotate {\n            to {\n                transform: rotate(1turn)\n            }\n        }\n    \n        @keyframes rotate {\n            to {\n                transform: rotate(1turn)\n            }\n        }\n    \n        @-webkit-keyframes dash {\n            0% {\n                stroke-dasharray: 1, 200;\n                stroke-dashoffset: 0\n            }\n    \n            50% {\n                stroke-dasharray: 89, 200;\n                stroke-dashoffset: -35px\n            }\n    \n            to {\n                stroke-dasharray: 89, 200;\n                stroke-dashoffset: -124px\n            }\n        }\n    \n        @keyframes dash {\n            0% {\n                stroke-dasharray: 1, 200;\n                stroke-dashoffset: 0\n            }\n    \n            50% {\n                stroke-dasharray: 89, 200;\n                stroke-dashoffset: -35px\n            }\n    \n            to {\n                stroke-dasharray: 89, 200;\n                stroke-dashoffset: -124px\n            }\n        }\n    " }} />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n        iframe[data-v-291dd493] {\n            border-radius: 6px;\n            border: 0\n        }\n    " }} />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n        .elf__empty-area[data-v-a5ce5bb6] {\n            text-align: center;\n            font-family: Arial, Helvetica, sans-serif\n        }\n    \n        .elf__empty-area .elf__button[data-v-a5ce5bb6] {\n            line-height: 1.55556;\n            border-radius: .22222rem;\n            letter-spacing: .02778rem;\n            padding: .77778rem 1.33333rem;\n            font-size: 1rem;\n            background-color: #fff;\n            border: 2px solid #006afe;\n            color: #006afe;\n            font-weight: 600;\n            transition: background-color .25s cubic-bezier(.17, .67, .44, .89), border-color .25s cubic-bezier(.17, .67, .44, .89), color .25s cubic-bezier(.17, .67, .44, .89);\n            max-width: 21.33333rem;\n            -webkit-appearance: none;\n            cursor: pointer;\n            display: inline-block;\n            font-style: normal;\n            margin: 0;\n            overflow: visible;\n            text-align: center;\n            text-decoration: none;\n            vertical-align: middle;\n            white-space: normal\n        }\n    \n        .elf__empty-area .elf__button[data-v-a5ce5bb6]:hover {\n            background-color: #f2f7ff\n        }\n    " }} />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n        @-webkit-keyframes elf__fadeInDown {\n            0% {\n                opacity: 0;\n                transform: translate3d(0, -100%, 0)\n            }\n    \n            to {\n                opacity: 1;\n                transform: translateZ(0)\n            }\n        }\n    \n        @keyframes elf__fadeInDown {\n            0% {\n                opacity: 0;\n                transform: translate3d(0, -100%, 0)\n            }\n    \n            to {\n                opacity: 1;\n                transform: translateZ(0)\n            }\n        }\n    \n        @-webkit-keyframes elf__fadeInHalf {\n            0% {\n                opacity: 0\n            }\n    \n            to {\n                opacity: .6\n            }\n        }\n    \n        @keyframes elf__fadeInHalf {\n            0% {\n                opacity: 0\n            }\n    \n            to {\n                opacity: .6\n            }\n        }\n    \n        @-webkit-keyframes elf__fadeIn {\n            0% {\n                opacity: 0\n            }\n    \n            to {\n                opacity: 1\n            }\n        }\n    \n        @keyframes elf__fadeIn {\n            0% {\n                opacity: 0\n            }\n    \n            to {\n                opacity: 1\n            }\n        }\n    \n        .elf__animated {\n            -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n            -webkit-animation-fill-mode: both;\n            animation-fill-mode: both\n        }\n    \n        .elf__fadeInDown {\n            -webkit-animation-name: elf__fadeInDown;\n            animation-name: elf__fadeInDown;\n            -webkit-animation-duration: .35s;\n            animation-duration: .35s\n        }\n    \n        .elf__fadeInHalf {\n            -webkit-animation-name: elf__fadeInHalf;\n            animation-name: elf__fadeInHalf;\n            -webkit-animation-duration: .25s;\n            animation-duration: .25s\n        }\n    \n        .elf__fadeIn {\n            -webkit-animation-name: elf__fadeIn;\n            animation-name: elf__fadeIn;\n            -webkit-animation-duration: .5s;\n            animation-duration: .5s\n        }\n    \n        .elf__modal-open {\n            height: 100vh;\n            height: calc(var(--elf-page-vh, 1vh)*100);\n            overflow: hidden\n        }\n    " }} />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n        @-webkit-keyframes elf__fadeInDown {\n            0% {\n                opacity: 0;\n                transform: translate3d(0, -100%, 0)\n            }\n    \n            to {\n                opacity: 1;\n                transform: translateZ(0)\n            }\n        }\n    \n        @keyframes elf__fadeInDown {\n            0% {\n                opacity: 0;\n                transform: translate3d(0, -100%, 0)\n            }\n    \n            to {\n                opacity: 1;\n                transform: translateZ(0)\n            }\n        }\n    \n        @-webkit-keyframes elf__fadeInHalf {\n            0% {\n                opacity: 0\n            }\n    \n            to {\n                opacity: .6\n            }\n        }\n    \n        @keyframes elf__fadeInHalf {\n            0% {\n                opacity: 0\n            }\n    \n            to {\n                opacity: .6\n            }\n        }\n    \n        @-webkit-keyframes elf__fadeIn {\n            0% {\n                opacity: 0\n            }\n    \n            to {\n                opacity: 1\n            }\n        }\n    \n        @keyframes elf__fadeIn {\n            0% {\n                opacity: 0\n            }\n    \n            to {\n                opacity: 1\n            }\n        }\n    \n        .elf__animated {\n            -webkit-animation-timing-function: ease-in-out;\n            animation-timing-function: ease-in-out;\n            -webkit-animation-fill-mode: both;\n            animation-fill-mode: both\n        }\n    \n        .elf__fadeInDown {\n            -webkit-animation-name: elf__fadeInDown;\n            animation-name: elf__fadeInDown;\n            -webkit-animation-duration: .35s;\n            animation-duration: .35s\n        }\n    \n        .elf__fadeInHalf {\n            -webkit-animation-name: elf__fadeInHalf;\n            animation-name: elf__fadeInHalf;\n            -webkit-animation-duration: .25s;\n            animation-duration: .25s\n        }\n    \n        .elf__fadeIn {\n            -webkit-animation-name: elf__fadeIn;\n            animation-name: elf__fadeIn;\n            -webkit-animation-duration: .5s;\n            animation-duration: .5s\n        }\n    \n        .elf__modal-open {\n            height: 100vh;\n            height: calc(var(--elf-page-vh, 1vh)*100);\n            overflow: hidden\n        }\n    " }} />
        <link rel="stylesheet" type="text/css" href="mortgage.92756d13.css" />
        <link type="text/css" rel="stylesheet" href="https://www.bankrate.com/v2.531.2/css/brcom/rebrand-nav.css" media="all" />
        <div className="br-header__overlay" data-js-selector="nav-overlay" />
        <header className="br-header" role="banner">
          <div className="br-header__global-search-filter" data-js-selector="global-search-filter">
            <form className="br-header__search-form" action="https://www.bankrate.com/search/" data-navigation-search="true" data-js-selector="nav-search-form">
              <div className="grid">
                <div className="grid-cell size-fit">
                  <button className="br-header__search-submit" data-js-selector="nav-search-submit-btn" type="submit">
                    <span className="icon --icon-sm">
                      <svg className="icon_glyph" viewBox="0 0 24 24">
                        <path d="M22,20.59,16.31,14.9A7.9,7.9,0,0,0,18,10a8,8,0,1,0-8,8,7.9,7.9,0,0,0,4.9-1.69L20.59,22ZM10,16a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </header>
        <link type="text/css" rel="stylesheet" href="https://www.bankrate.com/v2.531.2/css/brcom/auth-sidebar.css" />
        <div id="br-auth__nav-wrapper" className="br-auth__nav-wrapper">
          <nav className="br-auth__nav +bg-white" data-nav-check-authentication="br-auth__nav" style={{display: 'none'}}>
            <ul className="list-bare +mg-bottom-none">
              <li tab-name="Dashboard" className="br-auth__nav-list-item">
                <a className="br-auth__nav-sidebar-link" href="/app/dashboard" data-label="Dashboard" data-js-selector="br-auth__nav-sidebar-link" data-tagular-enabled data-tagular-text="dashboard" data-tagular-position="left rail">
                  <span className="br-auth__nav-sidebar-icon icon --icon-sm">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" view-box="0 0 24 24" focusable="false">
                      <title>Dashboard</title>
                      <path d="M6 6H0V0h6zM2 4h2V2H2zM15 6H9V0h6zm-4-2h2V2h-2zM24 6h-6V0h6zm-4-2h2V2h-2zM6 15H0V9h6zm-4-2h2v-2H2zM15 15H9V9h6zm-4-2h2v-2h-2zM24 15h-6V9h6zm-4-2h2v-2h-2zM6 24H0v-6h6zm-4-2h2v-2H2zM15 24H9v-6h6zm-4-2h2v-2h-2zM24 24h-6v-6h6zm-4-2h2v-2h-2z" />
                    </svg>
                  </span>
                  <span className="br-auth__nav-sidebar-label">Dashboard</span>
                </a>
              </li>
              <li tab-name="Profile" className="br-auth__nav-list-item">
                <a className="br-auth__nav-sidebar-link" href="/app/profile" data-label="Profile" data-js-selector="br-auth__nav-sidebar-link" data-tagular-enabled data-tagular-text="profile" data-tagular-position="left rail">
                  <span className="br-auth__nav-sidebar-icon icon --icon-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" view-box="0 0 24 24" focusable="false">
                      <title>Profile</title>
                      <path d="M24,22a12,12,0,0,0-8.19-11.37,6,6,0,1,0-7.62,0A12,12,0,0,0,0,22v2H15V22H2a10,10,0,0,1,20,0H19v2h5ZM12,10a4,4,0,1,1,4-4A4,4,0,0,1,12,10Z" />
                    </svg>
                  </span>
                  <span className="br-auth__nav-sidebar-label">Profile</span>
                </a>
              </li>
              <li tab-name="Support" className="br-auth__nav-list-item">
                <a className="br-auth__nav-sidebar-link" href="/app/support" data-label="Support" data-js-selector="br-auth__nav-sidebar-link" data-tagular-enabled data-tagular-text="support" data-tagular-position="left rail">
                  <span className="br-auth__nav-sidebar-icon icon --icon-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" view-box="0 0 24 24">
                      <title>Support</title>
                      <rect x={11} y={10} width={2} height={8} />
                      <rect x={11} y={6} width={2} height={2} />
                      <path d="M12,0a12,12,0,1,0,6.94,21.77l-1.43-1.43A9.91,9.91,0,0,1,12,22,10,10,0,1,1,22,12a9.91,9.91,0,0,1-1.66,5.51l1.43,1.43A12,12,0,0,0,12,0Z" />
                    </svg>
                  </span>
                  <span className="br-auth__nav-sidebar-label">Support</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-banner-placement" />
        <main>
          <div id="mortgage-calculators-wrapper">
            <div id="mortgage-calculators-app" v-cloak />
          </div>
        </main>
        <link type="text/css" rel="stylesheet" href="chunk-vendors.aae43966.css" media="print" onload="this.media='all'; this.onload=null;" />
        <noscript>
          &lt;iframe location="coinfo master" src="//www.googletagmanager.com/ns.html?id=GTM-N74D8C" height="0" width="0"
          style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
        </noscript>
        {/*  */}
        {/* <link rel="stylesheet" href="https://www.bankrate.com/v2.531.2/css/brcom/footer.css"> */}
        {/* <div class="preamp-footer-placement"></div> */}
        {/* <div class="ict-slider-placement"></div> */}
        {/* <div class="ict-modal-placement"></div> */}
        {/* <div class="ict-banner-placement"></div> */}
        )
        {'}'}
      </div>
    );
  }
};

export default MortgageCalc