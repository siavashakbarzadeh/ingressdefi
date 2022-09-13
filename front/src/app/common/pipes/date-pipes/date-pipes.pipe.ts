import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "datePipes",
  pure: true
})
export class DatePipesPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value) {
      let dateObj = new Date(value );
      return this.timeConverter(dateObj);
    } else {
      return value;
    }
  }

  timeConverter(UNIX_timestamp) {
    let d = new Date(UNIX_timestamp);
    let day = d.getUTCDate();
    let month = d.getUTCMonth();
    let year = d.getUTCFullYear();
    let hour = d.getUTCHours();

    // console.log(hour , "_________hour")

    let minutes = d.getUTCMinutes().toString();

    let dateFormat = `${day} ${this.getMonth(
      month
    )} ${year} , ${this.roundNumber(hour)} : ${this.roundNumber(minutes)}`;

    return dateFormat;
  }

  getMonth(month) {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    return months[month];
  }

  roundNumber(number) {

    if(number.toString().length < 2) {
      return "0" + number
    } else {
      return number
    }

  }
}
