import API_KEY from './env.js';
async function fetchData(url, inputText) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                "model": "ministral-14b-2512",
                "messages": [
                    {
                        "role": "user",
                        "content": inputText
                    }
                ]
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }  
        const data = await response.json();
        const responseText = data.choices[0].message.content;
        const RepsonseTEXT = document.getElementById("responseText");
        RepsonseTEXT.textContent = responseText;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    } 
}

const input = document.getElementById("inputText");

document.getElementById('sendButton').addEventListener("click", () => {
    fetchData('https://api.mistral.ai/v1/chat/completions', input.value);
});