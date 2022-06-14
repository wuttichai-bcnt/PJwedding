function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbzgy9CoZ3fCArJD6A4K3zYpbxVJfBFNVhOeLQiB_db2lzOgnbY/exec"

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}

function addGS(){
    const url = "https://script.google.com/macros/s/AKfycbzgy9CoZ3fCArJD6A4K3zYpbxVJfBFNVhOeLQiB_db2lzOgnbY/exec"

    var wish = document.getElementById("wish").value;
    var name = document.getElementById("name").value;
    var phoneNo = document.getElementById("phoneNo").value;
    var address = document.getElementById("address").value;

    const d = new Date();



      fetch(url, {
          method: "POST",
          mode: 'no-cors',
          body: JSON.stringify({"col1": wish, "col2": name, "col3": phoneNo,"col4":address,"col5":d.toLocaleString('th-TH', {timeZone: 'Asia/Bangkok',}),}),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json))
        .catch(err => console.log(err));

        $(".myAlert-top").show();
        setTimeout(function(){
          $(".myAlert-top").hide(); 
        }, 4000);
      
}

// document.getElementById("btn2").addEventListener("click",testGS)
document.getElementById("btn").addEventListener("click",addGS)