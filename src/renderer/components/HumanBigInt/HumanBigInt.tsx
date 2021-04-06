import React from "react";

interface Props {
	bigInt: string;
}

export const HumanBigInt = ({ bigInt }: Props) => {
	if (Number.isNaN(Number.parseInt(bigInt))) {
		return null;
	}
	const parsedValue = Number.parseInt(bigInt) / 1e8;
	return <span>{parsedValue.toFixed(8)}</span>;
};
