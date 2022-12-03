import React, { useState, useEffect } from 'react'
import { API } from '../App'
import Calendar from '../components/Calendar';
import { useSearchParams } from 'react-router-dom';


const ScheduleResponse = ({match}) => {
    const {
        params: { pollId },
    } = match;
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
            sunData.push(Boolean(t.id()));
            schedule.push(Boolean(t.id()));
        }
        for (const t of monday) {
            monData.push(Boolean(t.id()));
            schedule.push(Boolean(t.id()));
        }
        for (const t of tuesday) {
            tuesData.push(Boolean(t.id()));
            schedule.push(Boolean(t.id()));
        }
        for (const t of wednesday) {
            wedData.push(Boolean(t.id()));
            schedule.push(Boolean(t.id()));
        }
        for (const t of thursday) {
            thursData.push(Boolean(t.id()));
            schedule.push(Boolean(t.id()));
        }
        for (const t of friday) {
            friData.push(Boolean(t.id()));
            schedule.push(Boolean(t.id()));
        }
        for (const t of saturday) {
            satData.push(Boolean(t.id()));
            schedule.push(Boolean(t.id()));
        }
        const data = [sunData, monData, tuesData, wedData, thursData, friData, satData];
        return {"data":data, "schedule":schedule};
    };

    useEffect(() => {
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
            const response = await fetch(API + `/poll/${pollId}`);
            setPollData(await response.json());
            setIsLoading(false);
            console.log(pollData);
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
    }, [pollId, userName, password, pollData]);

    return (
        <>
            <label htmlFor='name'>Name: </label>
            <input name="name" type="text" defaultValue="Your Name" onChange={nameChangeHandler}/>
            <label htmlFor='password'>Password (optional): </label>
            <input name="password" type="text" defaultValue="" onChange={passwordChangeHandler}/>
            <Calendar name={searchParams.get("sN")} nE={searchParams.get("nE")} nL={searchParams.get("nL")}/>
        </>
    );


}

export default ScheduleResponse