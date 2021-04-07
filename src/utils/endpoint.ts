const URL = "https://dexplorer.ark.io";
export class Endpoint {
	static transaction = (id: string) =>
		id ? `${URL}/transactions/${id}` : "";
	static wallet = (id: string) => (id ? `${URL}/wallets/${id}` : "");
}
