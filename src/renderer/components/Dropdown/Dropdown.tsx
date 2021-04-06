import React, { useEffect, useMemo, useRef, useState } from "react";

import { clickOutsideHandler } from "../../../hooks/useClickOutside";
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
	const menuRef = useRef(null);

	const headerTitle = currentSelected === "" ? title : currentSelected;

	useEffect(() => {
		clickOutsideHandler(menuRef, () => setIsMenuOpen(false));
	}, [menuRef]);

	const toggleList = () => {
		setIsMenuOpen((isOpen: boolean) => !isOpen);
	};

	const handleSelectItem = (item: string) => {
		setCurrentSelected(item);
		setIsMenuOpen(false);
		onSelect(item);
	};

	return (
		<div className={`flex flex-col ${className}`}>
			<DropdownHeader
				title={headerTitle}
				isListOpen={isMenuOpen}
				onClick={toggleList}
			/>
			{isMenuOpen ? (
				<DropdownMenu
					ref={menuRef}
					options={listOptions}
					selectedItem={currentSelected}
					onSelect={handleSelectItem}
				/>
			) : null}
		</div>
	);
};
