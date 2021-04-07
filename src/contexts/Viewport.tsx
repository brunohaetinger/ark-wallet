import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

import { ViewSize } from "../enums/ViewSize";

interface WalletContextValue {
	width: number;
	height: number;
	isCompact: boolean;
	isXS: boolean;
}

const ViewportSizeContext = createContext<WalletContextValue | undefined>(
	undefined
);

type Props = { children: React.ReactNode };

export const ViewportSizeProvider = ({ children }: Props) => {
	const [width, setWidth] = useState(window.outerWidth);
	const [height, setHeight] = useState(window.outerHeight);

	const isCompact = useMemo((): boolean => width <= ViewSize.SM, [width]);
	const isXS = useMemo((): boolean => width <= ViewSize.XS, [width]);

	useEffect(() => {
		const handleWindowResize = () => {
			setWidth(window.outerWidth);
			setHeight(window.outerHeight);
		};
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	return (
		<ViewportSizeContext.Provider
			value={{ width, height, isCompact, isXS }}
		>
			{children}
		</ViewportSizeContext.Provider>
	);
};

export const useViewportSize = () => {
	const context = useContext(ViewportSizeContext);
	if (context === undefined) {
		throw new Error(
			"useViewportSize must be used within a ViewportSizeContext"
		);
	}
	return context;
};
