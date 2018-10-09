let victimDataSource = (name) => {
    let victimsByName = {
        'John': {
            name: 'John',
            surname: 'Doe',
            age: '99',
            jobTitle: 'Victim'
        },
        'Jennifer': {
            name: 'Jennifer',
            surname: 'Nicker',
            age: '21',
            jobTitle: 'Artist'
        }
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (victimsByName.hasOwnProperty(name)) {
                resolve(victimsByName[name]);
            } else {
                reject('unknown victim');
            }
        }, 1000);
    });
};

let crimeDataSource = (surname) => {

    return new Promise((resolve, reject) => {

        let crimeBySurname = {
            'Doe': {
                title: 'dank memes',
                place: '9gag'
            },
            'Nicker': {
                title: 'robbery',
                place: 'NYC'
            }
        };

        setTimeout(() => {
            if (crimeBySurname.hasOwnProperty(surname)) {
                resolve(crimeBySurname[surname]);
            } else {
                reject('unknown surname');
            }
        }, 500);
    });
}

let loadVictimData = name => {
    return new Promise((resolve, reject) => {
        victimDataSource(name).then(victim => {
            return crimeDataSource(victim.surname).then(crime => {
                if (victim && crime) {
                    resolve(`${victim.name} ${victim.surname}(${victim.jobTitle}, ${victim.age}) \
                        suffered from ${crime.title} in ${crime.place}`);
                } else {
                    reject('no data');
                }

            });
        }).catch(error => console.log(error));

    });
}

loadVictimData('John').then(msg => console.log(msg));
loadVictimData('Jennifer').then(msg => console.log(msg));
loadVictimData('Jss').then(msg => console.log(msg));