import React, { useState, useEffect } from 'react'
import { API } from '../App'
import Calendar from '../components/Calendar';
import { useSearchParams, useParams } from 'react-router-dom';


const ScheduleResponse = () => {
    const { pollId } = useParams();
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const [pollData, setPollData] = useState();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const nameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const getSubmissionData = () => {

        // create schedule boolean data

        let sunday = document.getElementsByClassName("Sunday");
        let monday = document.getElementsByClassName("Monday");
        let tuesday = document.getElementsByClassName("Tuesday");
        let wednesday = document.getElementsByClassName("Wednesday");
        let thursday = document.getElementsByClassName("Thursday");
        let friday = document.getElementsByClassName("Friday");
        let saturday = document.getElementsByClassName("Saturday");
        let sunData = [], monData = [], tuesData = [], wedData = [], thursData = [], friData = [], satData = [];
        let schedule = [];
        for (const t of sunday) {
            sunData.push(Boolean(t.id));
            schedule.push(Boolean(t.id));
        }
        for (const t of monday) {
            monData.push(Boolean(t.id));
            schedule.push(Boolean(t.id));
        }
        for (const t of tuesday) {
            tuesData.push(Boolean(t.id));
            schedule.push(Boolean(t.id));
        }
        for (const t of wednesday) {
            wedData.push(Boolean(t.id));
            schedule.push(Boolean(t.id));
        }
        for (const t of thursday) {
            thursData.push(Boolean(t.id));
            schedule.push(Boolean(t.id));
        }
        for (const t of friday) {
            friData.push(Boolean(t.id));
            schedule.push(Boolean(t.id));
        }
        for (const t of saturday) {
            satData.push(Boolean(t.id));
            schedule.push(Boolean(t.id));
        }
        const data = [sunData, monData, tuesData, wedData, thursData, friData, satData];
        return {"data":data, "schedule":schedule};
    };

    const ClickHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);
        let json_data = {
            poll_id: pollId,
            u_name: userName,
            u_pw: password,
            times: getSubmissionData()["data"],
            items: [],
            questions: [],
        };
        const PollLoad = async () => {
            // get schedule with specified id
            const response = await fetch(API + `/poll/${pollId}`);
            setPollData(await response.json());
            setIsLoading(false);
            console.log(pollData['data']);
        };
        fetch(API + "/update", 
        {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(json_data),
        });
        PollLoad();
    };

    return (
        <>
            <label htmlFor='name'>Name: </label>
            <input name="name" type="text" placeholder='Your Name' onChange={nameChangeHandler}/>
            <br/><br/>
            <label htmlFor='password'>Password (optional): </label>
            <input name="password" type="password" defaultValue=""  onChange={passwordChangeHandler}/>
            <Calendar name={searchParams.get("sN")} nE={searchParams.get("nE")} nL={searchParams.get("nL")}/>
            <input type="submit" onClick={ClickHandler} />
        </>
    );


}

export default ScheduleResponse