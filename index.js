document.addEventListener('DOMContentLoaded', function()
{
    const buttons = [
        { id: 'discordButton', key: 'url.discord' },
        { id: 'minecraftButton', key: 'url.minecraft' },
        { id: 'storeButton', key: 'url.store' }
    ];
    
    function loadJSON(url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.error('Error loading JSON:', error));
    }

    function assignButtonListeners(buttons, data)
    {
        buttons.forEach(buttonInfo =>
            {
            const button = document.getElementById(buttonInfo.id);
            const url = data[buttonInfo.key];
            if(button && url)button.addEventListener('click', () => openURL(url));
            }
        );
    }

    function openURL(url){window.open(url, '_blank');}

    loadJSON('config.json', function(data){assignButtonListeners(buttons, data);});
});