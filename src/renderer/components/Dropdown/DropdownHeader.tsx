import React from "react";

import Address from "../../../assets/address.svg";
import ArrowDown from "../../../assets/arrow-down.svg";
import ArrowUp from "../../../assets/arrow-up.svg";

export interface DropdownHeaderProps {
	title: string;
	isListOpen: boolean;
	onClick: () => void;
}
const DropdownHeader = ({
	title,
	isListOpen,
	onClick,
}: DropdownHeaderProps) => {
	const arrow = isListOpen ? (
		<img src={ArrowUp} className="h-2.5 w-5" />
	) : (
		<img src={ArrowDown} className="h-2.5 w-5" />
	);

	return (
		<div
			className="w-full h-full min-h-full flex flex-row"
			onClick={onClick}
		>
			<div className="bg-dark-1 w-12.5 flex justify-center rounded-l-full">
				<img src={Address} className="h-3.5 w-3.5 self-center" />
			</div>

			<div className="w-full px-5 flex flex-row border-2 border-dark-1 rounded-r-full items-center justify-between">
				<span>{title}</span>
				{arrow}
			</div>
		</div>
	);
};

export default DropdownHeader;
