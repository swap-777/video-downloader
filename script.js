async function processDownload(format) {
    const inputElement = document.getElementById('mediaUrl');
    const statusElement = document.getElementById('statusMessage');
    const API_URL = "https://canpolat-media-api.hf.space/download";

    if (!url) {
        statusElement.style.color = "#ff4c4c"; 
        statusElement.innerHTML = "⚠️ Please paste a valid media link.";
        inputElement.style.borderColor = "#ff4c4c";
        
        setTimeout(() => {
            inputElement.style.borderColor = "rgba(255, 255, 255, 0.15)";
        }, 2000);
        return;
    }

    statusElement.style.color = "#ffffff";
    statusElement.innerHTML = ⏳ Analyzing link for high-quality <b>${format.toUpperCase()}</b>...;
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.style.opacity = '0.5');
    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    try {
        // Hələlik server hazır olmadığına görə 2 saniyə gözlədib test edirik
        await new Promise(resolve => setTimeout(resolve, 2000));
        throw new Error("Backend server is not connected yet.");

    } catch (error) {
        statusElement.style.color = "#00ff88"; 
        statusElement.innerHTML = "✅ UI is fully operational! Ready to connect Backend.";
    } finally {
        buttons.forEach(btn => btn.style.opacity = '1');
        buttons.forEach(btn => btn.style.pointerEvents = 'auto');
    }
}
