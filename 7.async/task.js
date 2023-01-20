class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time === null || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы')
        }

        if (this.alarmCollection.includes(time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true,
        })
    }

    removeClock(value) {
        this.alarmCollection.forEach(item => {
        let index = this.alarmCollection.findIndex(e => e.time === value);
        if (index !== -1) {
            this.alarmCollection.splice(index, 1);
        }
        })

    }

    getCurrentFormattedTime() {
        let date = new Date ();
        let currentTime = `${("0" + date.getHours()).substr(-2)}` + ":" + `${("0" + date.getMinutes()).substr(-2)}`;
        return currentTime;
    }

    start() {
        if (this.intervalId === null) {
            return;
        } else {
        return this.alarmCollection = this.alarmCollection.forEach(item => {
                if (this.alarmCollection[item].time === this.getCurrentFormattedTime()) {
                    this.alarmCollection[item].canCall = false;
                    this.alarmCollection.callback();
                
        }
        
    }

    )}

    /*this.intervalId = function() {
        setInterval(() => {
        this.alarmCollection.forEach(item => {
            if (this.alarmCollection.time === currentTime) {
                this.alarmCollection.canCall = false;
                this.alarmCollection.callback();
            }
        })
    }, 1000);*/
}
}



    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;

    }

    resetAllCalls() {
        this.alarmCollection.forEach(item => item.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}