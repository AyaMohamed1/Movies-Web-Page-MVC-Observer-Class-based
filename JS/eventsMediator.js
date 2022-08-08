export class eventsMediator{
    static events = {};

    static on(eventName, callBackFun){
        this.events[eventName] = this.events[eventName] ? this.events[eventName]: [];
        this.events[eventName].push(callBackFun);
    }

    static emit(eventName, data){
        if(this.events[eventName]){
            this.events[eventName].forEach(function (callBackFun){
                callBackFun(data);
            })
        }
    }

};