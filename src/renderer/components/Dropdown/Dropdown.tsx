import React from "react";

export interface DropdownProps {
	options: string[];
	onSelect: (value: string) => void;
	className?: string;
}

const Dropdown = ({ options, onSelect, className }: DropdownProps) => (
	<select
		className={`bg-black ${className}`}
		defaultValue={""}
		onChange={(event) => {
			console.log(event);
			onSelect(event?.target.value);
		}}
	>
		{options.map((option) => (
			<option key={option} value={option}>
				{option}
			</option>
		))}
	</select>
);

export default Dropdown;
