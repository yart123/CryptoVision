import { Message } from "./interfaces";

// filter out repeating values
export function unique(input: any[]) {
    return input.filter((value, index, array) => array.indexOf(value) === index)
}

// Loads json data from URL
export async function getJSON(url:string) {
    const response = await fetch(url);
    if(!response.ok) {
        if (response.status == 429) {
            console.log("Failed retrieving JSON from url " + url + " due to rate throttling. Retry later.")
            return "429"
        } else {
            console.log("Exception retrieving JSON from url " + url + ", returned status "+ response.status)
            throw new Error(response.statusText);
        }
    }
    return response.text();
}

// Converts a number into a dollar value
export function toCurrency(value: number) {
    return Number(value.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Gets all active tabs and sends a chrome message
export function sendMessageToAllTabs(message: Message) {
    chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id!!, message);
      });
    });
}

export async function getFromStorage(key: string): Promise<any> {
    let loadedData = await chrome.storage.local.get(key)
    return loadedData[key]
}

export async function setToStorage(key: string, value: any) {
    await chrome.storage.local.set({[key]: value})
}