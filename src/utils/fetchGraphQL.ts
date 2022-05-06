async function fetchGraphQL(text: string, variables: string): Promise<any> {
    // const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
    //https://api.github.com/graphql
    try {
        const response = await fetch('https://localhost:4000/graphql', {
            method: 'POST',
            headers: {
                // 'Authorization': `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Don't forget to specify this if you need cookies
            body: JSON.stringify({
                query: text,
                variables,
            }),
        });
        return await response.json();
    } catch (e) {
        console.log(e);
        throw new Error('Service unavailable! Please check server.');
    }
}
export default fetchGraphQL;
