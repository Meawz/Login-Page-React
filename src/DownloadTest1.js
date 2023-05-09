const Download1 = () => {
    const onButtonClick = () => {
        fetch('Test1.docx').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Test1.docx';
                alink.click();
            })
        }) 
    }
    return (  
        <>
        <center>
            <h1>Welcome!</h1>
            <h3>Click on the below button to download files</h3>
            <button type = "button1" onClick={onButtonClick}>
                Download F
            </button>
        </center>
        </>
    );
};
 
export default Download1;