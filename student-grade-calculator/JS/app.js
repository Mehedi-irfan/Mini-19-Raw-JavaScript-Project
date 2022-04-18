const submitButton = (e) => {
    //get the all id form html form
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let computer = document.getElementById('comp').value;
    let physic = document.getElementById('phy').value;
    let data = document.getElementById('data').value;
    let english = document.getElementById('eng').value;
    let grade = ''

    //let's do the all subject total number
    let totalNumber = parseFloat(wd) + parseFloat(maths) + parseFloat(computer) + parseFloat(physic) + parseFloat(data) + parseFloat(english);

    //Let's do the all subject number parcentage
    let parce = (totalNumber / 600) * 100;

    //Let's do the get the total grade
    if (parce <= 100 && parce >= 80) {
        grade = 'A'
    }
    else if (parce <= 79 && parce >= 60) {
        grade = 'B'
    }
    else if (parce <= 59 && parce >= 40) {
        grade = 'C'
    }
    else {
        grade = " F"
    }

    //Show the all subject data on one element
    let textSection = document.getElementById('text-section');
    let h4 = document.createElement('h4');

    //to get pass or fail
    if (parce >= 40) {
        h4.innerHTML = `Out of 600 Your total is ${totalNumber} and parcetage is ${parce}%. <br> Your Grade is ${grade}. You are Pass`
    }
    else {
        h4.innerHTML = `Out of 600 Your total is ${totalNumber} and parcetage is ${parce}%. <br> Your Grade is ${grade} .  You are Fail`
    }
    //apend the child
    textSection.appendChild(h4);
}