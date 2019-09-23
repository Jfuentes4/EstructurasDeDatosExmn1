class Main {
  constructor () {
    document.getElementById('btnCalculateFriendNums').addEventListener('click', this._friendNums);
  }

  _friendNums = () => {
    let maxNum = Number(document.getElementById('inputMaxNum').value);

    let friendNums = this._getFriendNums(maxNum);

    let results = document.getElementById('results');

    friendNums.forEach((num) => {
      results.innerHTML += num + ', '
    })
  }

  _getFriendNums = (maxNum) => {
    let friendNums = [];
    for(let i = 1; i <= maxNum; i++) {
      if (this._ifExistElement(friendNums, i) === false) {
        let posibleFriend = this._getFriendProspect(i);

        let posibleFriendAlter = this._getFriendProspect(posibleFriend);

        if ( i === posibleFriendAlter && i !== posibleFriend) {
          friendNums.push(i);
          friendNums.push(posibleFriend);
        }
      }

    }

    return friendNums;
  }

  _ifExistElement = (array, element) => {
    let elementIndex = false;
    array.forEach((currentElement, index) => {
        if (currentElement === element ) {
        elementIndex = index;
      }
    });
    return elementIndex;
  }

  _getFriendProspect = (element) => {
    let friendProspect = 0;

    for(let j = 1; j <= (element / 2) + 1; j++){
      if (element % j === 0) {
        friendProspect+= j;
      }
    }

    return friendProspect;
  }
}

var main = new Main();
