import { format } from "date-fns";
import React from "react";

interface Props {
	unixTimestamp: number;
	dateFormat: string;
}

export const HumanDate = ({ unixTimestamp, dateFormat }: Props) => (
	<span>{format(new Date(unixTimestamp * 1000), dateFormat)}</span>
);

HumanDate.defaultProps = {
	dateFormat: "dd.MM.yyyy",
};
