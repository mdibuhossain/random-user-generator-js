

const loadData = data => {
    const url = `https://randomuser.me/api/`;
    fetch(url)
        .then(data => data.json())
        .then(data => processData(data));
}

const processData = (usreInfo) => {
    console.log(usreInfo);
    const userImg = usreInfo.results[0].picture.large;
    const userName = usreInfo.results[0].name;
    const userGeneder = usreInfo.results[0].gender;
    const userEmailAddress = usreInfo.results[0].email;
    console.log(userEmailAddress, userGeneder, userImg, userName);

    const imgContainer = document.getElementById('user-img');
    imgContainer.src = userImg;

    const userNameContainer = document.getElementById('user-name');
    userNameContainer.innerText = userName.title + ' ' + userName.first + ' ' + userName.last;

    const userGenderContainer = document.getElementById('user-gender');
    userGenderContainer.innerText = userGeneder;

    const userEmailContainer = document.getElementById('user-email');
    userEmailContainer.innerText = userEmailAddress;
}