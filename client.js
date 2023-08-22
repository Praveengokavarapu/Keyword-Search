//https://www.googleapis.com/youtube/v3/search
//AIzaSyCV4GTFBkTxduktP6vqjr5H2a6kzVz4yn8

const getresults=(event)=>{
    event.preventDefault()
    const keyword=document.getElementsByClassName("search")[0].value
    const API_KEY="AIzaSyCYnZgqkHzOs_AUarno_uW4g0nzsCR8o4Q"
    fetch(`https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(keyword)}&key=${API_KEY}publishedAfter=2022-08-23T00%3A00%3A00Z&publishedBefore=2023-08-23T00%3A00%3A00Z`)
    .then(response=>response.json())
    .then(data=>{
        
        console.log(data)
        let results=parseInt(data.pageInfo.totalResults/12);
        if (results===1000000){
            document.getElementById("search-output").innerHTML=`Woah !! "${keyword}" has appeared <span class="span">${results}+</span> times in YouTube`

        }
        else{
            document.getElementById("search-output").innerHTML=`Woah !! "${keyword}" has appeared <span class="span">${results}</span> times in YouTube`
        }

})

}
