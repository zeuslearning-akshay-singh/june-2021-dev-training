
    function cardsy(content){
        return `
        <div class="card-syllabus-content">
            <div class="card-syllabus"><strong>${content.units}</strong> Units </div>
            <div class="card-syllabus"><strong>${content.lessons} </strong> Lessons </div>
            <div class="card-syllabus"><strong>${content.topics} </strong> Topics </div>
        </div>
        `
        
    }
    
    function cardTemplate(card){
        return `
        <div class = "card-container" >
        <label class="card-status">${card.status ? card.status : ""}</label>
            <div class="card-top">
                <div class="card-image">
                    <img  class="card-image-book" src="${card.image}" >
                </div>
    
                <div class="card-content">
                    <div class="card-content-head">
                        <h1 class="card-topic">${card.topic}</h1>
                        <img src="icon/favourite.svg" />
                    </div>
                    <div class="card-content-bottom">
                    <label class="card-subject">${card.subject}</label>
                    <label class="card-grade"> Grade ${card.grade} <label class="card-extragrade">${card.extragrade}</label></label>
                    ${card.syllabus ? cardsy(card.syllabus) : '<p></p>'}
                    ${card.classes ? ` <select class="card-select">
                                                <option class="card-option-classes" >${card.classes}</option>
                                        </select>` : `<select class="card-selected">
                                                    <option class="card-option-noclasses" >No Classes</option>
                                        </select>`}
                   
                        <div class="card-content-base">
                        <div class="card-students">${card.students ? card.students:''}  </div>
                        <div class="card-line"></div>
                        <div class="card-duration">${card.duration ? card.duration:''}  </div>
                        </div>
                    </div>
                </div>
    
            </div>
    
                <div class="card-footer">
                    <img class="card-base" src="icon/preview.svg" alt="preview"/>
                    <img class="card-base" src="icon/manage course.svg" alt="courses"/>
                    <img class="card-base" src="icon/grade submissions.svg" alt="submission"/>
                    <img class="card-base" src="icon/reports.svg" alt="reports"/>
                </div>
        </div>
        `
    }
    
    fetch('./card.json')
    .then(response => response.json())
    .then(cardData =>    document.getElementById("card-bucket").innerHTML = `
    ${cardData.map(cardTemplate).join("")}
    `)

 