class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time === null || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        };

        if (this.alarmCollection.includes(time)) {
            console.warn('Уже присутствует звонок на это же время');
        };

        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true,
        });
    }

    removeClock(value) {
        this.alarmCollection.forEach(item => {
        let index = this.alarmCollection.findIndex(e => e.time === value);
        if (index !== -1) {
            this.alarmCollection.splice(index, 1);
        };
        });

    }

    getCurrentFormattedTime() {
        let date = new Date ();
        let currentTime = `${("0" + date.getHours()).substr(-2)}` + ":" + `${("0" + date.getMinutes()).substr(-2)}`;
        return currentTime;
    }

    start() {
        if (this.intervalId !== null) {
            return;
        } else {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((item,index) => {
                    if (this.alarmCollection[index].time === this.getCurrentFormattedTime()) {
                        this.alarmCollection[index].canCall = false;
                        this.alarmCollection[index].callback();
                    }
                })
            }, 1000);
        }
        return this.intervalId;
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