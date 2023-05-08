const Download = () => {
    const onButtonClick = () => {
        fetch('Test2.docx').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Test2.docx';
                alink.click();
            })
        }) 
    }
    return (  
        <>
        <center>
            <h1>Welcome!</h1>
            <h3>Click on the below button to download files</h3>
            <button onClick={onButtonClick}>
                Download
            </button>
        </center>
        </>
    );
};
 
export default Download;