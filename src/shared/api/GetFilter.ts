import { handleError } from "./handleError";

export async function GetFilter(password: string, filter: {}) {
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
                        "action": "filter",
                        "params": filter
                    }
                    )
                });

            repeatFetch = handleError(res.status);
            const listFilter = await res.json();

            return listFilter.result;
        }
        catch (error) {
            console.log('');
        };

    }
}
