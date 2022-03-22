async function fetchGraphQL(text, variables) {//https://api.github.com/graphql
    const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            // 'Authorization': `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`, 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        }),
    });  
    return await response.json();
}
export default fetchGraphQL;