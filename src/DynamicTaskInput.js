import { useState } from "react";

export default function DynamicTaskInput() {
    const [inputValues, setInputValues] = useState({});
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    const handleOnChange = (e) => {
        const abc = {};
        abc[e.target.className] = e.target.value;
        setInputValues({ ...inputValues, ...abc });
    };

    const handleOnTpeChange = (e) => {
        var task_tpes = document.querySelectorAll("#task_tpe");
        var banked_tpe = document.getElementById("tpe_banked").value;
        var used_tpe = document.getElementById("tpe_used").value;
        var total_tpe = parseInt(document.getElementById("tpe_total").value);
        var init_task_tpe = parseInt(document.getElementById("tpe_gained").value);

        let i = 0;
        let task_tpe = 0
        for(i=0; i < task_tpes.length; i++) {
            if(task_tpes[i].value == "") {
                task_tpe += 0
            } else {
                task_tpe += parseInt(task_tpes[i].value)
            }
        }

        document.getElementById("tpe_gained").value = task_tpe
        document.getElementById("tpe_available").value = task_tpe + parseInt(banked_tpe) - parseInt(used_tpe)
        document.getElementById("tpe_total").value = total_tpe + task_tpe - init_task_tpe
    }

    return (
        <div className="App">
            {Array.from(Array(counter)).map((c, index) => {
                return (
                    <div>
                        <input
                            onChange={handleOnTpeChange}
                            key={c}
                            className={index}
                            type="number"
                            placeholder="TPE"
                            id="task_tpe"
                            defaultValue={0}
                        />
                        <input
                            onChange={handleOnChange}
                            key={c}
                            className={index}
                            type="text"
                            placeholder="Task name..."
                            id="task_name"
                            style={{width: "150px"}}
                        />
                        <input
                            onChange={handleOnChange}
                            key={c}
                            className={index}
                            type="text"
                            placeholder="Task link..."
                            id="task_link"
                            style={{width: "150px"}}
                        /><br/>
                    </div>
                );
            })}
            <button onClick={handleClick}>Add Task</button>
        </div>
    );
}