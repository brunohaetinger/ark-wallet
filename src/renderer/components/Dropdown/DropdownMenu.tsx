import React, { ForwardedRef, forwardRef } from "react";

export interface DropdownMenuProps {
	options: string[];
	selectedItem: string;
	onSelect: (item: string) => void;
}

const DropdownMenu = forwardRef(
	(
		{ options, selectedItem, onSelect }: DropdownMenuProps,
		ref: ForwardedRef<HTMLUListElement>
	) => (
		<ul ref={ref} className="py-4 bg-dark-1 rounded-lg sticky mt-0.5">
			{options.map((item) => (
				<li
					key={item}
					onClick={() => onSelect(item)}
					className={`h-13 px-5 py-4 ${
						item === selectedItem
							? "bg-dgreen-4"
							: "hover:bg-gray-3"
					}`}
				>
					{item}
				</li>
			))}
		</ul>
	)
);

DropdownMenu.displayName = "DropdownMenu";

export default DropdownMenu;
