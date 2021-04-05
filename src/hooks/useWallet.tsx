import { Transaction } from "@arkecosystem/client";
import { Wallets } from "@arkecosystem/client/dist/resources/wallets";
import { useCallback, useState } from "react";

import { useConnection } from "../contexts/Connection";

export const useTransaction = () => {
	const connection = useConnection();
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchWalletTransactions = useCallback(
		async (walletId: string) => {
			setIsLoading(true);
			const transactionRes = await new Wallets(connection).transactions(
				walletId,
				{
					page: 1,
					limit: 15,
				}
			);
			setTransactions(transactionRes.body.data);
			setIsLoading(false);
		},
		[connection]
	);

	return { transactions, fetchWalletTransactions, isLoading };
};
