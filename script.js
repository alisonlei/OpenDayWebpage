function showPrograms(programs,topic_info,topic_name){
    // "start_time": "2024-10-19T09:00:00",
    // "end_time": "2024-10-19T16:00:00",
    // "cover_image": null,
    // "title": "Advice from staff and students",
    // "description": "Throughout the day, you will be able to receive advice from both admissions staff and students. There will be opportunities for you to ask questions and discuss any queries that you may have.",
    // "description_short": "Admissions staff and students will be available to answer your questions.",
    // "floor": null,
    // "room": "Bute Foyer (Entrance)",
    // "location"        "title": "Bute Building",
    //         "description": "This Grade II listed neoclassical building was designed by architects Percy Thomas and Ivor Jones, who won a competition in 1911 to design a building for Cardiff Technical College. The foundations of the building were laid in 1913 and the building opened in 1916. There are six Roman Doric columns in the front of the building.\r\n\r\nWater refill locations:\r\n\r\nLower Floor \r\n- Room -1.12a male toilets \r\n\r\n1st Floor \r\n- Outside the library \r\n\r\nGround Floor\r\n- Refectory Area\r\n",
    //         "address": "King Edward VII Avenue",
    //         "postcode": "CF10 3NB",
    let menu=document.createElement("ul");
    menu.classList.add("programs-single-topic");
    //const targetInfo=["start_time","end_time","title","description","location"];

    for (let p of programs){

            let singleP=document.createElement("li");
            let singlePInfo=document.createElement("ul");
            singleP.classList.add("individual-program");
            singleP.id=topic_name;

            let title=document.createElement("li");
            title.classList.add("program-title");
            title.textContent=p.title;
            singlePInfo.appendChild(title);

            let description=document.createElement("li");
            description.textContent=p.description;
            singlePInfo.appendChild(description);

            let time=document.createElement("li");
            sdateAndTime=p.start_time.split("T");
            edateAndTime=p.end_time.split("T");

            time.textContent="date:"+sdateAndTime[0]+"   time:"+sdateAndTime[1]+" - "+edateAndTime[1];
            singlePInfo.appendChild(time);

            let location=document.createElement("li");
            location.textContent="room:"+p.room+"title:"+p.location.title+"postcode:"+p.location.postcode+"\t"+"address:"+p.location.postcode;
            singlePInfo.appendChild(location);
            
            singleP.appendChild(singlePInfo);
        
   

            menu.appendChild(singleP);

    }
    topic_info.appendChild(menu);
}
function showTopics(topics){
    // "id": 29,
    // "cover_image": "https://opendaydata.cardiff.ac.uk/images/topics/Architecture.png",
    // "name": "Architecture",
    // "description": "Study in one of the top-ranked schools of architecture in the UK, joining our global community of staff and students.",
    // "description_post": "",
    // "programs": [
    let allTopcisInfo=document.getElementById("topics");
    for (let topic of topics){
        
        let topicInfo=document.createElement("section");
        topicInfo.classList.add("topic")

        let topicTextInfo=document.createElement("p");
        topicTextInfo.textContent=`${topic.name}:
         ${topic.description}`;

        let topicCover=document.createElement("img");
        topicCover.src=topic.cover_image;

        topicInfo.appendChild(topicTextInfo);
        topicInfo.appendChild(topicCover);

        allTopcisInfo.appendChild(topicInfo);
        showPrograms(topic.programs,topicInfo,topic.name);

    }
}
function showInfo(data){
    let heading=document.createElement("h1");
    heading.textContent=data.description;
    let header=document.querySelector("header");
    header.appendChild(heading);

    let img=document.createElement("img");
    img.src=data.cover_image;
    header.append(img);

    
    showTopics(data.topics);
    //showProgramsInfo(data);
    
}
async function getOpenDayInfo(path) {
    fetch(path)
    .then((response)=>{return response.json()})
    .then((data)=>{showInfo(data)})
    .catch((err)=>console.error(err))
  }
  
  // Execute async function
getOpenDayInfo("OpenDay.json")
