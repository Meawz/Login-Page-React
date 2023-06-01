const Download2 = () => {
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
            <button type = "button2" onClick={onButtonClick}>
                Download M
            </button>
        </center>
        </>
    );
};
 
export default Download2;