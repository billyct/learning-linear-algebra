import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Router, useRouterHistory } from 'react-router'
import {createHashHistory} from 'history';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

// Our translated strings
import localeData from './locales/data.json';

import './index.css';

import AppRoutes from './AppRoutes';

addLocaleData([...en, ...zh]);
// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = (navigator.languages && navigator.languages[0]) ||
					 navigator.language ||
					 navigator.userLanguage;
// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;


injectTapEventPlugin();

ReactDOM.render(
	<IntlProvider locale={languageWithoutRegionCode} messages={messages}>
		<Router history={useRouterHistory(createHashHistory)({queryKey: false})}
						onUpdate={() => window.scrollTo(0, 0)}>
			{AppRoutes}
		</Router>
	</IntlProvider>,
	document.getElementById('root')
);
