import React, { memo } from "react";

type ListItemRowProps = {
	label: string;
} & React.HTMLProps<any>;

export const ListItemRow = memo(({ label, children }: ListItemRowProps) => (
	<div className="flex flex-row justify-between">
		<span className="text-gray-2 text-sm">{label}</span>
		{children}
	</div>
));

ListItemRow.displayName = "ListItemRow";
