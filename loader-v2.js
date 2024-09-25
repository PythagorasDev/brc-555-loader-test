function loadInscription() {

    const BLOCK_NUMBER = 825000; // YOU CAN CHANGE THIS VALUE

    let BLOCK_HASH = "";

    // Create a div element to serve as the container for the content
    const content = document.createElement("div");
    content.className = "content";
    content.id = "content-id";
    document.body.appendChild(content); // Append the container to the body of the document

    // Create an img element for the background image
    const backgroundImg = document.createElement("img");
    backgroundImg.className = "background-img";
    backgroundImg.id = "background-img-id";
    backgroundImg.src = "/content/463e054393f737219a4b0871b59f55f2f922c4a3772cd7c91a8057074543e110i0"; // CHANGE WITH YOUR IMAGE ID
    content.appendChild(backgroundImg); // Append the image to the container

    // Optional: Add error handling for image loading issues
    backgroundImg.onerror = function() {
        console.error('Failed to load the background image at:', backgroundImg.src);
    };

    
    // Optional: Set alt text for accessibility
    backgroundImg.alt = "The SatsBot";


    const hashText = document.createElement("div");
    hashText.className = "hash-text";
    hashText.id = "hash-text-id";

    hashText.style = `
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        color: orange;
        font-size: 16px;
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 5px;
        border-radius: 5px;
    `;
    
    fetch(`/r/blockhash/${BLOCK_NUMBER}`).then((hash) => {
        BLOCK_HASH = hash;
        hashText.textContent = `Block ${BLOCK_NUMBER} Hash: ${BLOCK_HASH}`;
        content.appendChild(hashText);
    }).catch(e => console.log("An error occured: ",e));

}