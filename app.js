const updateData = () => {
    const category = document.getElementById('category');
    const localtionName = document.getElementById('location');
    const league = document.getElementById('league');
    const date = document.getElementById('date');

    const team1 = document.querySelectorAll('.team1');
    const team2 = document.querySelectorAll('.team2');

    const team1Rate = document.getElementById('team1-rate');
    const team2Rate = document.getElementById('team2-rate');
    const drawRate = document.getElementById('drawRate');

    // dots animation
    const dot1 = document.querySelector('.dot1');
    const dot2 = document.querySelector('.dot2');
    const dot3 = document.querySelector('.dot3');

    let i = 0;
    setInterval(() => {
        if (i >= 2) {
            i = 0;
        }
        else {
            i++;
        }
        // console.log(i);

        // dots animation
        if (i == 0) {
            dot1.classList.add('active');
            dot2.classList.remove('active');
            dot3.classList.remove('active');
        } else if (i == 1) {
            dot2.classList.add('active');
            dot1.classList.remove('active');
            dot3.classList.remove('active');
        } else {
            dot3.classList.add('active');
            dot1.classList.remove('active');
            dot2.classList.remove('active');
        }

        // get data from json file
        fetch("matches.json")
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                category.textContent = res[i].sportsGroups[0].name + ' /';
                localtionName.textContent = res[i].sportsGroups[1].name + ' /';;
                league.textContent = res[i].sportsGroups[2].name;

                // display date&time in a user friendly format
                const getDate = res[i].date;
                const newDate = new Date(getDate);

                let day = newDate.getDate();
                day = (day < 10) ? '0' + day : day;
                let month = newDate.getMonth() + 1;
                month = (month < 10) ? '0' + month : month;
                let year = newDate.getFullYear();
                let hour = newDate.getHours() - 1;
                hour = (hour < 10) ? '0' + hour : hour;
                let minutes = newDate.getMinutes();
                minutes = (minutes < 10) ? '0' + minutes : minutes;

                date.textContent = `${day}.${month}.${year}  ${hour}:${minutes}`;

                team1.forEach(team => {
                    team.textContent = res[i].participants.away;
                })

                team2.forEach(team => {
                    team.textContent = res[i].participants.home;
                })

                team1Rate.textContent = res[i].primaryMarkets[0].selections[2].rate.decimal;

                team2Rate.textContent = res[i].primaryMarkets[0].selections[0].rate.decimal;

                drawRate.textContent = res[i].primaryMarkets[0].selections[1].rate.decimal;

                // count the total courses
                const team1Away = res[0].primaryMarkets[0].selections[2].rate.decimal;
                const team2Away = res[1].primaryMarkets[0].selections[2].rate.decimal;
                const team3Away = res[2].primaryMarkets[0].selections[2].rate.decimal;

                const total1Away = (team1Away * team2Away * team3Away).toFixed(2);
                // console.log(total1Away)

            })
            .catch(error => console.log("Błąd: ", error));
    }, 3000)
}


const activeBtn = () => {
    const btn = document.querySelectorAll('.results-btn');

    btn.forEach(one => {
        one.addEventListener('click', function () {
            btn.forEach(el => el.classList.remove('active'));
            // tutaj nie bardzo rozumiem dlaczego toggle nie działa
            this.classList.toggle('active');

            // więc dodałam też takie rozwiązanie, żeby usunąć aktywną klasę po ponownym kliknięciu
            this.addEventListener('click', function () {
                this.classList.toggle('active');
            })
        })
    })
}

activeBtn();
updateData();
