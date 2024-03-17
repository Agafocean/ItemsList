import { handleError } from "./handleError";

export async function GetItems(password: string, ids: string[]) {
    let repeatFetch = true;
    while (repeatFetch) {
        repeatFetch = false;

        try {
            const res = await
                fetch("http://api.valantis.store:40000", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'X-Auth': password
                    },
                    body: JSON.stringify({
                        "action": "get_items",
                        "params": {
                            "ids": ids
                        }
                    })
                });

            repeatFetch = handleError(res.status);
            const listItems = await res.json();

            return listItems.result;
        }
        catch (error) {
            console.log('');
        };

    }
}
