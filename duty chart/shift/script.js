// List of officers
const officers = [];

// Days of the week
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Add Officer
document.getElementById("add-officer").addEventListener("click", () => {
    const officerName = document.getElementById("officer-name").value.trim();
    const weeklyOff = document.getElementById("weekly-off").value;

    if (!officerName) {
        alert("Please enter the officer's name!");
        return;
    }

    officers.push({ name: officerName, weeklyOff: weeklyOff });
    alert(`${officerName} added with a weekly off on ${weeklyOff}.`);
    document.getElementById("officer-name").value = "";
});

// Generate Schedule
document.getElementById("generate-schedule").addEventListener("click", () => {
    if (officers.length === 0) {
        alert("Please add at least one officer!");
        return;
    }

    const schedule = generateDutySchedule(officers, days);
    displaySchedule(schedule);
});

// Generate duty schedule using Round Robin
function generateDutySchedule(officers, days) {
    const schedule = {};

    // Initialize schedule for each day
    days.forEach(day => (schedule[day] = []));

    const queue = [...officers]; // Copy officers for Round Robin

    days.forEach(day => {
        const dailySchedule = [];
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const officer = queue.shift();

            // Skip the officer if it's their weekly off
            if (officer.weeklyOff !== day) {
                dailySchedule.push(officer.name);
                queue.push(officer); // Re-enqueue for next rotation
            } else {
                queue.push(officer); // Re-enqueue even if skipped
            }
        }

        schedule[day] = dailySchedule;
    });

    return schedule;
}

// Display schedule in the output section
function displaySchedule(schedule) {
    const outputDiv = document.getElementById("schedule-output");
    outputDiv.innerHTML = "<h2>Duty Schedule</h2>";

    for (const day in schedule) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day-schedule");

        const dayTitle = document.createElement("h3");
        dayTitle.textContent = day;
        dayDiv.appendChild(dayTitle);

        const officersList = document.createElement("p");
        officersList.textContent = schedule[day].join(", ");
        dayDiv.appendChild(officersList);

        outputDiv.appendChild(dayDiv);
    }
}