import React, { createContext, useEffect, useReducer } from "react";
import { LOG_ACTION } from "../utilities/app-utilities";

export const LogContext = createContext();

const logReducer = (value, actions) => {
	switch (actions.type) {
		case LOG_ACTION.LOG_IN:
			return true;
		case LOG_ACTION.LOG_OUT:
			return false;
		default:
			return value;
	}
};

export const LoggedInProvider = ({ children }) => {
	const [loggedIn, logDispatch] = useReducer(logReducer, false);

	useEffect(() => {
		if (localStorage.getItem(LOG_ACTION.LOG_VALUE))
			logDispatch({ type: LOG_ACTION.LOG_IN });
	}, []);

	return (
		<LogContext.Provider
			value={{ value: { loggedIn }, action: { logDispatch } }}>
			{children}
		</LogContext.Provider>
	);
};
