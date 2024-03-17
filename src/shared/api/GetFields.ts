import { handleError } from "./handleError";

export async function GetFields(password: string) {
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
                        "action": "get_fields"
                    })
                });
            repeatFetch = handleError(res.status);
            const listFields = await res.json();

            return listFields.result;
        }
        catch (error) {
            console.log('');
        };

    }
}
