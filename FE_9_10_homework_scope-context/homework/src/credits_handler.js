let userCard = function (id) {

    let optionObj = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: id
    };

    const TAX = 0.05;

    return {
        getCardOptions: function () {
            return optionObj;
        },

        putCredits: function (sum) {
            optionObj.balance = optionObj.balance + sum;

            optionObj.historyLogs.push({
                operationType: 'Received credits',
                credits: sum,
                operationTime: new Date().toLocaleString('en-GB')
            });

            return optionObj.balance;
        },

        takeCredits: function (sum) {
            optionObj.balance = optionObj.balance - sum;

            optionObj.historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: sum,
                operationTime: new Date().toLocaleString('en-GB')
            });

            return optionObj.balance;
        },

        setTransactionLimit: function (sum) {
            optionObj.transactionLimit = sum;

            optionObj.historyLogs.push({
                operationType: 'Transaction limit change',
                credits: sum,
                operationTime: new Date().toLocaleString('en-GB')
            });

        },

        transferCredits: function (sum, cardToTransfer) {

            const sumWithTaxes = sum * TAX + sum;

            if (sumWithTaxes > optionObj.balance) {
                console.log('Error! Balance was exceeded.');
            } else if (sumWithTaxes > optionObj.transactionLimit) {
                console.log('Error! Transaction limit was exceeded.');
            } else {
                this.takeCredits(sumWithTaxes);
                cardToTransfer.putCredits(sum);
            }
        }
    };

}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.CARDLIMIT = 3;
    }

    addCard() {
        if (this.cards.length < this.CARDLIMIT) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log("Error: You've reached out a maximun amount of cards");
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1];
    }
}
