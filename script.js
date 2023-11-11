const genBtn = document.getElementById('genBtn');
const nameList = document.getElementById('nameList');

async function generate() {
  await fetch('https://randommer.io/api/Name?nameType=fullname&quantity=5', {
    method: 'GET',
    headers: { 'X-Api-Key': '70154bc0089a4031aabcc4f39a45ecb3' },
  })
    .then((response) => response.json())
    .then((names) => {
      console.log(names);
      for (let i = 0; i < names.length; i++) {
        let allNames = names[i];
        console.log(allNames);

        let newDiv = document.createElement('div');

        let id = `name_${i + 1}`;
        console.log(id);

        let returnNames = `
        <p id="${id}">${allNames}</p>
        <img src="./assets/copy.png" height="15px" width="15px">
        `;
        newDiv.innerHTML = returnNames;
        nameList.appendChild(newDiv);
      }
    })
    .catch((err) => console.error(err));
}
