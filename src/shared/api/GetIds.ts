import { handleError } from "./handleError";

export async function GetIds(password: string, fromIndex: number, numberOfItems: number) {
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
                        "action": "get_ids",
                        "params": { "offset": fromIndex, "limit": numberOfItems }
                    }
                    )
                });

            repeatFetch = handleError(res.status);
            const listIds = await res.json();

            return listIds.result;
        }
        catch (error) { console.log(''); }

    }
};


