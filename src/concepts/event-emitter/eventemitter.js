const EvEmitter = () => {
    class EventEmitter {
        subscriberList = {}
        subscribe(event, fn) {
            if (!this.subscriberList[event]) {
                this.subscriberList[event] = [];
            }
            let id = this.subscriberList[event].length ?
                this.subscriberList[event][this.subscriberList[event].length - 1].id + 1
                : 1;
            this.subscriberList[event].push({ fn, id });
            console.log(id);
            return id;
        }

        publish(event, data) {
            if (this.subscriberList[event]) {
                this.subscriberList[event].forEach(function (item) {
                    try {
                        item.fn(data);
                    }
                    catch { }
                });
            }
        }

        unsubscriber(event, id) {
            if (this.subscriberList[event]) {
                this.subscriberList[event] = this.subscriberList[event].filter((item) => {
                    return item.id !== id;
                })
            }
        }

    }

    const ev = new EventEmitter;

    ev.subscribe("food", function (data) {
        console.log("I got the food", "&", data);
    })

    ev.subscribe("Bread", function (data) {
        console.log("I got Bread", "&", data);
    })
    ev.subscribe("Gummies", function (data) {
        console.log("I got Gummies", "&", data);
    })
    ev.subscribe("Gummies", function (data) {
        console.log("I got Gummies", "&", data);
    })

    ev.publish("food", "Water");
    ev.publish("Bread", "Wine");
    ev.publish("Gummies", "Soda");


    ev.unsubscriber("food", 1);
    ev.publish("food", "Water");
    ev.unsubscriber("Gummies", 2);

    ev.unsubscriber("Bread", 1);
    ev.publish("Gummies", "Water");


}
export default EvEmitter;