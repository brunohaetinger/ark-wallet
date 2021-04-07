import React from "react";

interface Props {
	bigInt: string;
	sufix: string;
}

export const HumanBigInt = ({ bigInt, sufix }: Props) => {
	if (Number.isNaN(Number.parseInt(bigInt))) {
		return null;
	}
	const parsedValue = Number.parseInt(bigInt) / 1e8;
	return (
		<span className="whitespace-nowrap">
			{parsedValue.toFixed(8)} {sufix || ""}
		</span>
	);
};
