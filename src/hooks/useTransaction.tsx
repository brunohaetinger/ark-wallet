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
			try {
				setIsLoading(true);
				const transactionRes = await new Wallets(
					connection
				).transactions(walletId, {
					page: 1,
					limit: 15,
				});
				setTransactions(transactionRes.body.data);
			} catch (error) {
				console.error(
					"Error while fetching wallet transactions",
					error
				);
			} finally {
				setIsLoading(false);
			}
		},
		[connection]
	);

	return { transactions, fetchWalletTransactions, isLoading };
};
