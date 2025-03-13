/*  
The Virtual Pizza app, does not have intensive requirements for storage.
The only requirement is realtime updates for how many slices each pizza has remaining.
The solution is a front-end call to a serverless worker hosted via Cloudflare.
They offer 100,000 requests to the worker daily for $0. This is more than satisfactory.

The KV offerings by Cloudflare allow the serverless worker to call stored key-value
pairs stored in Cloudflare's server.  

During development, an issue was encountered with CORS due to the front-end call. 
On advice of another student, headers are required to be included with each of the
valid responses to bypass CORS.    

If you would like to host this project you may.
A cloudflare account is free. 
I had also manually-populated the KV cells from 1-24 to init.
There is an env for environment variables which can be setup under worker settings.
I named it pizza, which you may see in the reference env.pizza...
There is also a passkey in env.passkey. 
*/

const BYPASS_CORS = {
    headers: {
    "Access-Control-Allow-Origin": "*", 
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*", 
    }
};

const VALID = [
    '1', '2', '3', '4', '5', '6', 
    '7', '8', '9', '10', '11', '12', 
    '13', '14', '15', '16', '17', '18', 
    '19', '20', '21', '22', '23', '24'
];

const VALID_INIT_PARAM = [
    'get', 'decrement', 'reset_pizzas', 'users', 'new_user', 'reset_users', 'exists_user'
]

export default {
    async fetch(request, env, ctx) {
        const params = (new URL(request.url).pathname).split("/");
        const INVALID = new Response("Invalid parameters", BYPASS_CORS);

        if (params[1] === null || !(VALID_INIT_PARAM.includes(params[1]))) { return INVALID };
        switch(params[1]) {
            case "reset_pizzas":
                if (!(params[2] === null) && params[2] != env.passkey) { return INVALID; }
                for (const i of VALID) {
                    await env.pizza.put(i, 8);
                }
                return new Response("Successful reset pizzas", BYPASS_CORS);
            case "reset_users":
                if (!(params[2] === null) && params[2] != env.passkey) { return INVALID; }
                await env.pizza.put("users", `{"users":{"master":0}}`);
                return new Response("Successful reset users", BYPASS_CORS);
            case "users":
                const users = await env.pizza.get("users");
                return new Response(users, BYPASS_CORS);
        }

        if ((params[2] === null)) { return INVALID; };
        const value = params[2];
        switch(params[1]) {
            case "get":
                if (!VALID.includes(params[2])) { return INVALID; }
                const slices = await env.pizza.get(params[2]);
                return new Response(`{"value": "` + slices + `"}`, BYPASS_CORS);
            case "decrement":
                if (!VALID.includes(params[2])) { return INVALID; }
                // -1 slice from the specific pizza id.
                const prior = await env.pizza.get(params[2]);
                const decremented = function(prior) {
                    if (prior > 8) { return 7; }
                    else if (prior <= 1) { return 0; }
                    else { return prior - 1;}
                };
                await env.pizza.put(value, decremented(prior));
                // +1 slice eaten attributed to the given user if exists.
                if (!(params[3] === null)) { 
                    const users = JSON.parse(await env.pizza.get("users"));
                    if (users.users.hasOwnProperty(params[3])) {
                        users["users"][params[3]] += 1;
                    }
                    await env.pizza.put("users", JSON.stringify(users));
                    }
                return new Response("Successful write", BYPASS_CORS);
            case "new_user":
                const users = JSON.parse(await env.pizza.get("users"));
                if (users.users.hasOwnProperty(value)) { 
                    return new Response("User already exists!", BYPASS_CORS);
                    }
                users["users"][value] = 0;
                await env.pizza.put("users", JSON.stringify(users));
                return new Response("Successful user added", BYPASS_CORS);
            case "exists_user":
                const existing = JSON.parse(await env.pizza.get("users")).users;
                var exists = 0
                if (existing.hasOwnProperty(value)) { exists = 1; }
                return new Response(`{"exists":` + exists + "}", BYPASS_CORS);
        }
        return INVALID;
    },
};