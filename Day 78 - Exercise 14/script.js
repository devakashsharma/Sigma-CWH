const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement('div');
    div.innerHTML = item;
    document.body.append(div);
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6*Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000)
    })
}

async function main() {
    
    let time = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1];
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
        } else {
            last.innerHTML = last.innerHTML + ".";
        }
    }, 300);

    let text = [
        "Initializing Hacking",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ]
    
    for (const item of text) {
        await addItem(item);
    }    
    
    await randomDelay();
    clearInterval(time);
    
}

main();