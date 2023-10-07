import { Component } from "react";
import "./Style.css";

export class Calculator extends Component {

    MonthDay = (year, month) => {
        month=month+1;
        if (month === 2) {
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                return 29;
            } else {
                return 28;
            }
        }
    
        if (month === 4 || month === 6 || month === 9 || month === 11) {
            return 30;
        }
    
        return 31;
    }
    

    CalculateAge = () => {
        const curDate = new Date();
        const dob = new Date(document.getElementById("dob").value);
        if (dob.getFullYear() > curDate.getFullYear()) {
            document.getElementById("display").innerText = "Invalid dob !";
        }
        else if (dob.getFullYear() == curDate.getFullYear()) {
            if (dob.getMonth() > curDate.getMonth()) {
                document.getElementById("display").innerText = "Invalid dob !";
            }
            else if (dob.getMonth() == curDate.getMonth() && dob.getDate() > curDate.getDate()) {
                document.getElementById("display").innerText = "Invalid dob !";
            }
            else {
                let ageInYears = curDate.getFullYear() - dob.getFullYear();
                let ageInMonths = curDate.getMonth() - dob.getMonth();
                if (ageInMonths < 0) {
                    ageInYears--;
                    ageInMonths = ageInMonths + 12;
                }
                let ageInDays = curDate.getDate() - dob.getDate();
                if (ageInDays < 0) {
                    ageInMonths--;
                    ageInDays =ageInDays+this.MonthDay(dob.getFullYear(),dob.getMonth());
                }
                document.getElementById("display").innerText = `${ageInYears} years ${ageInMonths} months ${ageInDays} days`;
            }
        }
        else {
            let ageInYears = curDate.getFullYear() - dob.getFullYear();
            let ageInMonths = curDate.getMonth() - dob.getMonth();
            if (ageInMonths < 0) {
                ageInYears--;
                ageInMonths = ageInMonths + 12;
            }
            let ageInDays = curDate.getDate() - dob.getDate();
            if (ageInDays < 0) {
                ageInMonths--;
                ageInDays = ageInDays + 30;
            }
            document.getElementById("display").innerText = `${ageInYears} years ${ageInMonths} months ${ageInDays} days`;
        }
    }

    render() {
        return (
            <div>
                <center>
                    <form className="form">
                        <h1 className="mt-5 heading">Age Calculator</h1>
                        <p className="mt-3 text-center"><b>Enter your date of birth</b></p>
                        <input id="dob" className="form-control" style={{ width: "300px" }} type="date" />
                        <button type="button" className="mt-3 btn btn-primary" onClick={this.CalculateAge}>Calculate Age</button>
                        <h2 id="display" className="mt-4 heading"></h2>
                    </form>
                </center>
            </div>
        )
    }
}
