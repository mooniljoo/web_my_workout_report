//resv.aspx
var calendar = {
    month: document.querySelectorAll('[data-calendar-area="month"]')[0],
    next: document.querySelectorAll('[data-calendar-toggle="next"]')[0],
    previous: document.querySelectorAll('[data-calendar-toggle="previous"]')[0],
    label: document.querySelectorAll('[data-calendar-label="month"]')[0],
    activeDates: null,
    date: new Date,
    todaysDate: new Date,
    init: function (t) {
        this.options = t,
            this.date.setDate(1),
            this.createMonth(),
            this.createListeners();
    },
    createListeners: function () {
        var t = this;
        this.next.addEventListener("click", function () {
            t.clearCalendar();
            var e = t.date.getMonth() + 1;
            t.date.setMonth(e),
                t.createMonth()
        }),
            this.previous.addEventListener("click", function () {
                t.clearCalendar();
                var e = t.date.getMonth() - 1;
                t.date.setMonth(e),
                    t.createMonth()
            })
    },
    createDay: function (t, e, a) {
        var n = document.createElement("div")
            , s = document.createElement("span");
        s.innerHTML = t,
            n.className = "vcal-date",
            n.setAttribute("data-calendar-date", this.date),
            1 === t && (n.style.marginLeft = 0 === e ? 6 * 14.28 + "%" : 14.28 * (e - 0) + "%"),
            //요일을 당기고 싶으면 (e - 0)의 숫자를 늘린다.
            this.options.disablePastDays && this.date.getTime() <= this.todaysDate.getTime() - 1 ? n.classList.add("vcal-date--disabled") : (n.classList.add("vcal-date--active"),
                n.setAttribute("data-calendar-status", "active")),
            this.date.toString() === this.todaysDate.toString() && n.classList.add("vcal-date--today"),
            n.appendChild(s),
            this.month.appendChild(n);
    },
    dateClicked: function () {
        var t = this;
        this.activeDates = document.querySelectorAll('[data-calendar-status="active"]');
        for (var e = 0; e < this.activeDates.length; e++) {
            this.activeDates[e].addEventListener("click", function (e) {
                //    document.querySelectorAll('[data-calendar-label="picked"]')[0].innerHTML = this.dataset.calendarDate,
                t.removeActiveClass(),
                    this.classList.add("vcal-date--selected")

                // location.href = 'time.aspx';
                document.getElementById('date').value = this.dataset.calendarDate
                document.querySelector('.pop').style.display = 'none';


                //function korWeekend(el) {
                //    switch (el.dataset.calendarDate.split(' ')[0]) {
                //        case 'Sun':
                //            return '일';
                //            break;
                //        case 'Mon':
                //            return '월';
                //            break;
                //        case 'Tue':
                //            return '화';
                //            break;
                //        case 'Wed':
                //            return '수';
                //            break;
                //        case 'Thu':
                //            return '목';
                //            break;
                //        case 'Fri':
                //            return '금';
                //            break;
                //        case 'Sat':
                //            return '토';
                //            break;
                //    }
                //}
                //function korMonth(el) {
                //    switch (el.dataset.calendarDate.split(' ')[1]) {
                //        case 'Jan':
                //            return '1월';
                //            break;
                //        case 'Feb':
                //            return '2월';
                //            break;
                //        case 'Mar':
                //            return '3월';
                //            break;
                //        case 'Apr':
                //            return '4월';
                //            break;
                //        case 'May':
                //            return '5월';
                //            break;
                //        case 'Jun':
                //            return '6월';
                //            break;
                //        case 'Jul':
                //            return '7월';
                //            break;
                //        case 'Aug':
                //            return '8월';
                //            break;
                //        case 'Sep':
                //            return '9월';
                //            break;
                //        case 'Oct':
                //            return '10월';
                //            break;
                //        case 'Nov':
                //            return '11월';
                //            break;
                //        case 'Dec':
                //            return '12월';
                //            break;
                //    }
                //}
                //document.getElementById('info_title_wrapper_date').innerHTML =
                //    this.dataset.calendarDate.split(' ')[3] + '년 ' +
                //    korMonth(this) +
                //    this.dataset.calendarDate.split(' ')[2] + ' 일 ' +
                //    '(' + korWeekend(this) + ')';
            })
        }
    },
    createMonth: function () {
        for (var t = this.date.getMonth(); this.date.getMonth() === t;)
            this.createDay(this.date.getDate(), this.date.getDay(), this.date.getFullYear()),
                this.date.setDate(this.date.getDate() + 1);
        this.date.setDate(1),
            this.date.setMonth(this.date.getMonth() - 1),
            this.label.innerHTML = this.date.getFullYear() + "년 " + this.monthsAsString(this.date.getMonth()),
            this.dateClicked()
    },
    monthsAsString: function (t) {
        return ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"][t]
    },
    clearCalendar: function () {
        this.month.innerHTML = ""
    },
    removeActiveClass: function () {
        for (var t = 0; t < this.activeDates.length; t++)
            this.activeDates[t].classList.remove("vcal-date--selected")
    }
};
