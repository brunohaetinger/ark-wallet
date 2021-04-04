import React, { useMemo, useState } from "react";

import DropdownHeader from "./DropdownHeader";
import DropdownMenu from "./DropdownMenu";

export interface DropdownProps {
	title: string;
	options: string[];
	onSelect: (value: string) => void;
	className?: string;
}

export const Dropdown = ({
	title,
	options,
	onSelect,
	className,
}: DropdownProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [currentSelected, setCurrentSelected] = useState<string>("");
	const listOptions = useMemo(() => options, [options]);

	const headerTitle = currentSelected === "" ? title : currentSelected;

	const toggleList = () => {
		setIsMenuOpen((isOpen: boolean) => !isOpen);
	};

	const handleSelectItem = (item: string) => {
		setCurrentSelected(item);
		setIsMenuOpen(false);
		onSelect(item);
	};

	return (
		// <select
		// 	className={`bg-black ${className}`}
		// 	defaultValue={""}
		// 	onChange={(event) => {
		// 		console.log(event);
		// 		onSelect(event?.target.value);
		// 	}}
		// >
		// 	<option value={""}>{title}</option>
		// 	{selectOptions.map((option) => (
		// 		<option key={option} value={option}>
		// 			{option}
		// 		</option>
		// 	))}
		// </select>

		<div className={`dd-wrapper flex flex-col ${className}`}>
			<DropdownHeader
				title={headerTitle}
				isListOpen={isMenuOpen}
				onClick={toggleList}
			/>
			{isMenuOpen ? (
				<DropdownMenu
					options={listOptions}
					selectedItem={currentSelected}
					onSelect={handleSelectItem}
				/>
			) : null}
		</div>
	);
};
