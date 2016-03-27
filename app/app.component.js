System.register(['angular2/core', 'angular2/common', "rxjs/Rx", 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    var search = this.form.find('search');
                    search.valueChanges
                        .debounceTime(400)
                        .map(function (str) { return str.replace(' ', '-'); })
                        .subscribe(function (x) { return console.log(x); });
                    // var startDates = [];
                    // var startDate = new Date();
                    //
                    // for (var day = -2; day <= 2; day++){
                    //     var date = new Date(
                    //       startDate.getFullYear(),
                    //       startDate.getMonth(),
                    //       startDate.getDate() + day);
                    //     startDates.push(date);
                    //
                    //     Observable
                    //         .fromArray(startDates)
                    //         // .map(date => console.log(`Getting deals for date  ${date}`))
                    //         .map(date => {
                    //
                    //             console.log(`Getting deals for date ${date}`);
                    //             return [1, 2, 3];
                    //
                    //         })
                    //         .subscribe(x => console.log(x));
                    // }
                    var b = 0;
                    function obsTest(x) {
                        x
                            .flatMap(function (x) {
                            b++;
                            console.log('calling the server for the latest news');
                            return Rx_1.Observable.of([1, b, 3]);
                        })
                            .subscribe(function (x) { return console.log(x); });
                    }
                    // obsTest(Observable.of(12));
                    // obsTest(Observable.empty());
                    // obsTest(Observable.range(1, 80));
                    obsTest(Rx_1.Observable.interval(1000));
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <form [ngFormModel]=\"form\">\n        <input type=\"text\" ngControl=\"search\">\n      </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map