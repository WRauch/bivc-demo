import React from "react"


const Calendar = () => {
    return(


  <div className="min-h-screen rounded-2xl bg-green-900 p-6 text-white md:p-10">
  <ul className="list-group list-group-mine">
                        <li className="list-group-item">
    <h3 className="text-3xl mb-6 font-semibold md:text-4xl">Event Schedule</h3>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showPrint=0&showTabs=1&showCalendars=0&src=ZjhiZGI2ZjU2ZThlNDU2MjkyYWQ4ZTI2ODhjZDNmOTE0Y2QxNmU2ZjUzNTE4Y2I5N2YyMmU0ZDJkZjcyYjQxNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26&color=%230B8043&mode=AGENDA"
      width="100%" height="400px" frameBorder="2"></iframe>
                              </li>
                    </ul>
        </div>
         );
};
export default Calendar;
