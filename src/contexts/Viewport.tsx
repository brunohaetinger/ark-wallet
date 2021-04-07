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

const ViewportContext = createContext<WalletContextValue | undefined>(
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
		<ViewportContext.Provider value={{ width, height, isCompact, isXS }}>
			{children}
		</ViewportContext.Provider>
	);
};

export const useViewportSize = () => {
	const context = useContext(ViewportContext);
	if (context === undefined) {
		throw new Error("useViewport must be used within a ViewportContext");
	}
	return context;
};
