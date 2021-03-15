
import React from 'react'
import html2canvas from 'html2canvas'

async function htmlToImage() {

    const htmlData = document.getElementById('screen')
    const canvas = await html2canvas(htmlData, {
        logging: true,
        profile: true,
        useCORS: true
    })

    const data = await canvas.toDataURL('image/jpeg', 0.9);
    const src = await encodeURI(data);
    setTimeout(() => {
        var myobj = document.getElementById("screen");
        myobj.remove();
    }, 100)
    return src

}

export default htmlToImage

