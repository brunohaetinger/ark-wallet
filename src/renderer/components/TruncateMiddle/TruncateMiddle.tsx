import React from "react";

type Props = {
	text: string;
	maxChars?: number;
} & React.HTMLProps<any>;

export const TruncateMiddle = ({ text, maxChars, ...props }: Props) => {
	const result = React.useMemo(() => {
		if (!maxChars || text.length <= maxChars) {
			return text;
		}

		const midPos = Math.floor(maxChars / 2) - 1;
		const start = text.substr(0, midPos);
		const end = text.substr(text.length - midPos, text.length);

		return `${start}…${end}`;
	}, [maxChars, text]);

	return <a {...props}>{result}</a>;
};

TruncateMiddle.defaultProps = {
	maxChars: 13,
};
