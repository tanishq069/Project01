  // Selecting the sidebar and buttons
  const sidebar = document.querySelector(".sidebar");
  const sidebarOpenBtn = document.querySelector("#sidebar-open");
  const sidebarCloseBtn = document.querySelector("#sidebar-close");
  const sidebarLockBtn = document.querySelector("#lock-icon");

  // Function to toggle the lock state of the sidebar
  const toggleLock = () => {
    sidebar.classList.toggle("locked");
    // If the sidebar is not locked
    if (!sidebar.classList.contains("locked")) {
      sidebar.classList.add("hoverable");
      sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
    } else {
      sidebar.classList.remove("hoverable");
      sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
    }
  };

  // Function to hide the sidebar when the mouse leaves
  const hideSidebar = () => {
    if (sidebar.classList.contains("hoverable")) {
      sidebar.classList.add("close");
    }
  };

  // Function to show the sidebar when the mouse enter
  const showSidebar = () => {
    if (sidebar.classList.contains("hoverable")) {
      sidebar.classList.remove("close");
    }
  };

  // Function to show and hide the sidebar
  const toggleSidebar = () => {
    sidebar.classList.toggle("close");
  };

  // If the window width is less than 800px, close the sidebar and remove hoverability and lock
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }

  // Adding event listeners to buttons and sidebar for the corresponding actions
  sidebarLockBtn.addEventListener("click", toggleLock);
  sidebar.addEventListener("mouseleave", hideSidebar);
  sidebar.addEventListener("mouseenter", showSidebar);
  sidebarOpenBtn.addEventListener("click", toggleSidebar);
  sidebarCloseBtn.addEventListener("click", toggleSidebar);

  // Get the "Me" menu item and the corresponding sub-menu
  const meMenuItem = document.querySelector('.iocn-link');
  const subMenu = document.querySelector('.sub-menu');

  // Add an event listener to the "Me" menu item
  meMenuItem.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Toggle the visibility of the sub-menu
    subMenu.classList.toggle('visible');
  });

  document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const subMenu = document.querySelector(".sub-menu");

    sidebar.addEventListener("mouseleave", () => {
      // Close or shrink the sub-menu when the cursor leaves the sidebar
      subMenu.classList.remove("visible");
    });
  });

  /* ---- BAR CHART ---*/

  document.addEventListener("DOMContentLoaded", () => {
    // Sample data for the bar graph (replace with your actual data)
    const leaveStatsData = {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [{
        label: "Leave",
        data: [0, 1, 0, 0, 0, 1, 0], // Sample leave hours for each day of the week
        backgroundColor: "rgba(64, 112, 244, 0.8)", // Bar color
        borderColor: "rgba(64, 112, 244, 1)", // Border color
        borderWidth: 1,
      }]
    };

    // Bar graph configuration options
    const barGraphOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Get the canvas element and create the bar graph
    const barGraphCanvas = document.getElementById("barGraph");
    new Chart(barGraphCanvas, {
      type: "bar",
      data: leaveStatsData,
      options: barGraphOptions,
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    // Sample data for the monthly bar graph (replace with your actual data)
    const monthlyLeaveStatsData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Leave",
          data: [2, 1, 3, 4, 1, 2, 3, 2, 4, 3, 1, 2], // Sample leave hours for each month
          backgroundColor: "rgba(64, 112, 244, 0.8)", // Bar color
          borderColor: "rgba(64, 112, 244, 1)", // Border color
          borderWidth: 1,
        },
      ],
    };

    // Monthly bar graph configuration options
    const monthlyBarGraphOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Get the canvas element and create the monthly bar graph
    const monthlyBarGraphCanvas = document.getElementById("monthlyBarGraph");
    new Chart(monthlyBarGraphCanvas, {
      type: "bar",
      data: monthlyLeaveStatsData,
      options: monthlyBarGraphOptions,
    });
  });



  /* --- DOUGHNUT CHART --- */

  document.addEventListener("DOMContentLoaded", () => {


    // Create the doughnut chart
    const doughnutChartCtx = document.getElementById("doughnutChart").getContext("2d");
    const doughnutChart = new Chart(doughnutChartCtx, {
      type: "doughnut",
      data: {
        labels: ["Casual Leave", "Critical Illness", "Earned Leave"],
        datasets: [
          {
            data: [33.33, 33.33, 33.33], // The values for each entry
            backgroundColor: ["#ED8C66", "#2E8B57", "#FFB90F"], // Colors for each entry
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        cutoutPercentage: 70, // Adjust the cutoutPercentage to control the size of the doughnut chart
        legend: {
          display: true,
          position: "bottom", // Display the legend at the bottom of the chart
        },
      },
    });
  });


  // JavaScript for Casual Leave Pie Chart
  const casualLeavePieChartData = {
    labels: ["Available", "Consumed", "Accrued"],
    datasets: [
      {
        data: [5, 10, 3], // Replace with actual data for Casual Leave
        backgroundColor: ["#ED8C66", "#FEE0C6", "#FEF6E4"],
        borderWidth: 1,
      },
    ],
  };

  const casualLeavePieChartCtx = document.getElementById("casualLeavePieChart").getContext("2d");
  new Chart(casualLeavePieChartCtx, {
    type: "doughnut",
    data: casualLeavePieChartData,
    options: {
      responsive: true,
      cutoutPercentage: 70,
      legend: {
        display: true,
        position: "bottom",
      },
    },
  });


  // JavaScript for Critical Illness Pie Chart
  const criticalIllnessPieChartData = {
    labels: ["Available", "Consumed", "Accrued"],
    datasets: [
      {
        data: [3, 5, 2], // Replace with actual data for Critical Illness
        backgroundColor: ["#2E8B57", "#c5e1a5", "#dcedc8"],
        borderWidth: 1,
      },
    ],
  };

  const criticalIllnessPieChartCtx = document.getElementById("criticalIllnessPieChart").getContext("2d");
  new Chart(criticalIllnessPieChartCtx, {
    type: "doughnut",
    data: criticalIllnessPieChartData,
    options: {
      responsive: true,
      cutoutPercentage: 70,
      legend: {
        display: true,
        position: "bottom",
      },
    },
  });


  // JavaScript for Earned Leave Pie Chart
  const earnedLeavePieChartData = {
    labels: ["Available", "Consumed", "Accrued"],
    datasets: [
      {
        data: [8, 12, 5], // Replace with actual data for Earned Leave
        backgroundColor: ["#FFB90F", "#FFEC8B", "#ffffe0"],
        borderWidth: 1,
      },
    ],
  };

  const earnedLeavePieChartCtx = document.getElementById("earnedLeavePieChart").getContext("2d");
  new Chart(earnedLeavePieChartCtx, {
    type: "doughnut",
    data: earnedLeavePieChartData,
    options: {
      responsive: true,
      cutoutPercentage: 70,
      legend: {
        display: true,
        position: "bottom",
      },
    },
  });



  /* SELECT YEAR FUNCTIONALIT */
