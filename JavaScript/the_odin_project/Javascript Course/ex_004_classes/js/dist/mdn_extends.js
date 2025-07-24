class DateFormatter extends Date {
    get_formatted_date() {
        const months = [
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
        return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
}
function hello(my_string) {
    console.log(my_string);
}
// Printed on console
// console.log(new DateFormatter("August 28, 1986 12:37:02").get_formatted_date())
// 
