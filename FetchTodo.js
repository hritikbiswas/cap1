let maincontainer=document.querySelector(".mainContainer");

    function getData(URL){
        fetch(URL)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            showData(res)
        })
    }

    function showData(arr){
        arr.forEach((ele)=>{
            let listItem = document.createElement("li");
            let checkboxContainer = document.createElement("div");
            checkboxContainer.classList.add("checkbox-container");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = ele.completed; 
            checkboxContainer.appendChild(checkbox);
            let title = document.createElement("span");
            title.innerText = ele.title;
            listItem.appendChild(title);
            listItem.appendChild(checkboxContainer);
            maincontainer.appendChild(listItem);
        })
    }

    getData("https://jsonplaceholder.typicode.com/todos");